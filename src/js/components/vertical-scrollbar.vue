
<template>
  <div
    v-if="height < 100"
    class="vue-scrollbar__scrollbar-vertical"
    :style="reducedHeight"
    ref="container"
    @click="jump">

    <div
      :class="'scrollbar' + ( dragging || draggingFromParent ? '' : ' vue-scrollbar-transition')"
      ref="scrollbar"
      @touchstart="startDrag"
      @mousedown="startDrag"
      @mousemove="onDrag"
      @touchmove="onDrag"
      @mouseup="stopDrag"
      @touchend="stopDrag"
      :style="{
        height: height+'%',
        top: scrolling + '%'
      }">
    </div>

  </div>
</template>

<script>

  export default {

    props: {
      draggingFromParent: {
        type: Boolean,
        default: false,
      },
      scrolling: {
        type: Number,
        default: 0,
      },
      wrapper: {
        type: Object,
        default: () => ({}),
      },
      area: {
        type: Object,
        default: () => ({}),
      },
      offset:
      {
        type: Number,
        default: 0
      },
      onChangePosition: {
        type: Function,
        default: () => false,
      },
      onDragging: {
        type: Function,
        default: () => false,
      },
      onStopDrag: {
        type: Function,
        default: () => false,
      },
    },

    data () {
      return  {
        height: 0,
        width: 0,
        dragging: false,
        start: 0
      }
    },

    computed: {
      // only used for the horizontal bar, otherwise we get a square in the bottom-right corner
      // where the underneath scrollArea content is visible
      reducedHeight() {
        // vue-scrollbar.vue CSS specifies 18px for the horizontal bar height
        return { height: this.width < 100 ? `calc(100% - ${18}px)` : '100%' };
      },
    },

    watch: {
      'wrapper.height' (val, old) {
        this.calculateSize()
        if(this.scrolling + this.height > 100) this.onChangePosition(100, 'vertical')
      },

      'area.height' (val, old) {
        this.calculateSize()
        if(this.scrolling + this.height > 100) this.onChangePosition(100, 'vertical')
      }
    },

    methods: {

      startDrag(e){

        e.preventDefault()
        e.stopPropagation()

        e = e.changedTouches ? e.changedTouches[0] : e

        // Prepare to drag
        this.dragging = true,
        this.start = e.clientY
      },

      onDrag(e){

        if(this.dragging){

          // Make The Parent being in the Dragging State
          this.onDragging()

          e.preventDefault()
          e.stopPropagation()

          e = e.changedTouches ? e.changedTouches[0] : e

          const yMovement = e.clientY - this.start
          const yMovementPercentage = yMovement / this.wrapper.height * 100

          // Update the last e.clientY
          this.start = e.clientY

          // The next Vertical Value will be
          const next = this.scrolling + yMovementPercentage

          // Tell the parent to change the position
          this.onChangePosition(next, 'vertical')

        }

      },

      stopDrag(e){
        if(this.dragging){
          // Parent Should Change the Dragging State
          this.onStopDrag()
          this.dragging = false
        }
      },

      jump(e){

        const isContainer = e.target === this.$refs.container

        if(isContainer){

          // Get the Element Position
          const position = this.$refs.scrollbar.getBoundingClientRect()

          // Calculate the vertical Movement
          const yMovement = e.clientY - position.top
          const centerize = (this.height / 2)
          const yMovementPercentage = yMovement / this.wrapper.height * 100 - centerize

          // Update the last e.clientY
          this.start = e.clientY

          // The next Vertical Value will be
          const next = this.scrolling + yMovementPercentage

          // Tell the parent to change the position
          this.onChangePosition(next, 'vertical')

        }
      },

      calculateSize(){
        // Scrollbar Height
        this.height = this.wrapper.height / this.area.height * 100;
        this.width = (this.wrapper.width / this.area.width) * 100;
      },

    },

    mounted() {
      this.calculateSize(this)
    },

  }

</script>
