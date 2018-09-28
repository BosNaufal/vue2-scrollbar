
<template>
  <div
    v-if="width < 100"
    class="vue-scrollbar__scrollbar-horizontal"
    :style="reducedWidth"
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
        width: width+'%',
        left: scrolling + '%'
      }" >
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
        width: 0,
        height: 0,
        dragging: false,
        start: 0
      }
    },

    computed: {
      reducedWidth() {
        // vue-scrollbar.vue CSS specifies 18px for the vertical bar width and 1px for the borders
        // we shrink the width of the horizontal bar so that it does not overlap with the
        // vertical bar and remove the right border of the horizontal bar - but only if
        // the vertical bar is currently visible
        return this.height < 100
          ? { width: `calc(100% - ${18}px)`, borderRightWidth: 0 }
          : { width: '100%' };
      },
    },
  
    watch: {
      'wrapper.width' (val, old) {
        this.calculateSize()
        if(this.scrolling + this.width > 100) this.onChangePosition(100, 'horizontal')
      },

      'area.width' (val, old) {
        this.calculateSize()
        if(this.scrolling + this.width > 100) this.onChangePosition(100, 'horizontal')
      }
    },


    methods: {

      startDrag (e) {

        e.preventDefault()
        e.stopPropagation()

        e = e.changedTouches ? e.changedTouches[0] : e

        // Prepare To Drag
        this.dragging = true
        this.start = e.clientX

      },

      onDrag(e){

        if(this.dragging){

          // Make The Parent being in the Dragging State
          this.onDragging()

          e.preventDefault()
          e.stopPropagation()

          e = e.changedTouches ? e.changedTouches[0] : e

          const xMovement = e.clientX - this.start
          const xMovementPercentage = xMovement / this.wrapper.width * 100;

          // Update the last e.clientX
          this.start = e.clientX

          // The next Horizontal Value will be
          const next = this.scrolling + xMovementPercentage

          // Tell the parent to change the position
          this.onChangePosition(next, 'horizontal')

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

          // Calculate the horizontal Movement
          const xMovement = e.clientX - position.left
          const centerize = (this.width / 2)
          const xMovementPercentage = xMovement / this.wrapper.width * 100 - centerize

          // Update the last e.clientX
          this.start = e.clientX

          // The next Horizontal Value will be
          const next = this.scrolling + xMovementPercentage

          // Tell the parent to change the position
          this.onChangePosition(next, 'horizontal')

        }
      },

      calculateSize(){
        // Scrollbar Width
        this.width = this.wrapper.width / this.area.width * 100
        this.height = (this.wrapper.height / this.area.height) * 100;
      },

    },

    mounted () {
      this.calculateSize()
    },

  }

</script>
