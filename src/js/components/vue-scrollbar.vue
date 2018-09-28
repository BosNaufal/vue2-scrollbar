
<template>
  <div
    @click="calculateSize"
    :class="'vue-scrollbar__wrapper' + ( classes ? ' ' + classes : '' )"
    ref="scrollWrapper"
    :style="styles">

    <div
      :class="'vue-scrollbar__area' + ( dragging ? ' ' : ' vue-scrollbar-transition')"
      ref="scrollArea"
      @wheel="scroll"
      @touchstart="startDrag"
      @touchmove="onDrag"
      @touchend="stopDrag"
      :style="{
        marginTop: top * -1 +'px',
        marginLeft: left * -1 +'px',
        marginBottom: hasHorizontal ? '18px' : '0', // MUST be kept in sync with $bar-size in the SASS
        marginRight: hasVertical ? '18px' : '0', // these margins ensure that no content is left hidden behind the scroll-bar(s)
      }">

        <slot></slot>
    </div>

    <vertical-scrollbar
      v-if="ready"
      :area="{ width: scrollAreaWidth, height: scrollAreaHeight }"
      :wrapper="{ width: scrollWrapperWidth, height: scrollWrapperHeight }"
      :scrolling="vMovement"
      :offset="top"
      :dragging-from-parent="dragging"
      :on-change-position="handleChangePosition"
      :on-dragging="handleScrollbarDragging"
      :on-stop-drag="handleScrollbarStopDrag" >
    </vertical-scrollbar>

    <horizontal-scrollbar
      v-if="ready"
      :area="{ width: scrollAreaWidth, height: scrollAreaHeight }"
      :wrapper="{ width: scrollWrapperWidth, height: scrollWrapperHeight }"
      :scrolling="hMovement"
      :offset="left"
      :dragging-from-parent="dragging"
      :on-change-position="handleChangePosition"
      :on-dragging="handleScrollbarDragging"
      :on-stop-drag="handleScrollbarStopDrag">
    </horizontal-scrollbar>

  </div>

</template>


<script>

  import VerticalScrollbar from './vertical-scrollbar.vue';
  import HorizontalScrollbar from './horizontal-scrollbar.vue';

  const margin = 20;

  export default {

    props: {
      classes: {
        type: String,
        default: null,
      },
      styles: {
        type: Object,
        default: () => ({}),
      },
      speed: {
        type: Number,
        default: 53,
      },
      onMaxScroll: {
        type: Function,
        default: () => false,
      },
      autoScroll:
        {
          type: Boolean,
          default: false
        },
      hold:
        {
          type: Boolean,
          default: false
        }
    },

    components: {
      VerticalScrollbar,
      HorizontalScrollbar
    },

    data () {
      return  {
        ready: false,
        top: 0,
        left: 0,
        scrollAreaHeight: null,
        scrollAreaWidth: null,
        scrollWrapperHeight: null,
        scrollWrapperWidth: null,
        vMovement: 0,
        hMovement: 0,
        dragging: false,
        start: { y: 0, x: 0},
        allowBodyScroll: false,
        autoX: 0,
        autoY: 0,
        wrapRect: {},
        supportsPassive: false
      }
    },

    watch:
      {
        autoScroll: 'setAutoScroll',
      },
    computed:
    {
      hasHorizontal()
      {
        return this.scrollAreaWidth > this.scrollWrapperWidth;
      },
      hasVertical()
      {
        return this.scrollAreaHeight > this.scrollWrapperHeight;
      }
    },
    methods: {
      setAutoScroll(newValue)
      {
        if(newValue) requestAnimationFrame(this.doAutoScroll);
      },
      doAutoScroll()
      {
        if(this.scrollAreaWidth > this.scrollWrapperWidth && this.autoX != 0) this.normalizeHorizontal(this.left + this.autoX);
        if(this.scrollAreaHeight > this.scrollWrapperHeight && this.autoY != 0) this.normalizeVertical(this.top + this.autoY);
        if(this.autoScroll) requestAnimationFrame(this.doAutoScroll);
      },
      checkAutoScroll(e)
      {
        const rect = this.wrapRect;
        const evt = e.changedTouches ? e.changedTouches[0] : e;
        
        // compute autoX and autoY according to mouse proximity to the container edges
        if(evt.clientX < rect.left + margin) this.autoX = evt.clientX - (rect.left + margin);
        else if(evt.clientX > rect.right - margin) this.autoX = evt.clientX - (rect.right - margin);
        else this.autoX = 0;
        if(evt.clientY < rect.top + margin) this.autoY = evt.clientY - (rect.top + margin);
        else if(evt.clientY > rect.bottom - margin) this.autoY = evt.clientY - (rect.bottom - margin);
        else this.autoY = 0;
      },
      scroll(e){
        // Make sure the content height is not changed
        this.calculateSize(() => {
          // Set the wheel step
          const num = this.speed

          // DOM events
          const shifted = e.shiftKey,
            scrollY = e.deltaY > 0 ? num : -(num),
            scrollX = e.deltaX > 0 ? num : -(num);

          // Fix Mozilla Shifted Wheel~
          if(shifted && e.deltaX === 0) scrollX = e.deltaY > 0 ? num : -(num)

          // Next Value
          const nextY = this.top + scrollY
          const nextX = this.left + scrollX

          // Is it Scrollable?
          const canScrollY = this.scrollAreaHeight > this.scrollWrapperHeight
          const canScrollX = this.scrollAreaWidth > this.scrollWrapperWidth

          // Vertical Scrolling
          if(canScrollY && !shifted) this.normalizeVertical(nextY)

          // Horizontal Scrolling
          if(shifted && canScrollX) this.normalizeHorizontal(nextX)
        })

        // prevent Default only if scrolled content is not at the top/bottom
        if (!this.allowBodyScroll) {
          e.preventDefault()
          e.stopPropagation()
        }

      },

      // DRAG EVENT JUST FOR TOUCH DEVICE~
      startDrag(e){
        this.touchEvent = e

        const evt = e.changedTouches ? e.changedTouches[0] : e

        // Make sure the content height is not changed
        this.calculateSize(() => {
          // Prepare to drag
          this.dragging = true,
          this.start = { y: evt.pageY, x: evt.pageX }
        })
      },

      onDrag(e){
        if(this.dragging && !this.hold){
          e.preventDefault()
          e.stopPropagation()

          // Prevent Click Event When it is dragging
          if (this.touchEvent) {
            this.touchEvent.preventDefault()
            this.touchEvent.stopPropagation()
          }

          const evt = e.changedTouches ? e.changedTouches[0] : e

          // Invers the Movement
          const yMovement = this.start.y - evt.clientY
          const xMovement = this.start.x - evt.clientX

          // Update the last e.client
          this.start = { y: evt.clientY, x: evt.clientX }

          // The next Vertical Value will be
          const nextY = this.top + yMovement
          const nextX = this.left + xMovement

          this.normalizeVertical(nextY)
          this.normalizeHorizontal(nextX)

        }
      },

      stopDrag(e){
        this.dragging = false
        this.touchEvent = false
      },

      scrollToY(y) {
        this.normalizeVertical(y)
      },

      scrollToX(x) {
        this.normalizeHorizontal(x)
      },

      normalizeVertical(next){
        const elementSize = this.getSize()

        // Vertical Scrolling
        const lowerEnd = elementSize.scrollAreaHeight - elementSize.scrollWrapperHeight

        // Max Scroll Down
        const maxBottom = next > lowerEnd
        if(maxBottom) next = lowerEnd

        // Max Scroll Up
        const maxTop = next < 0
        if(maxTop) next = 0


        // Update the Vertical Value if it's needed
        const shouldScroll = this.top !== next
        this.allowBodyScroll = !shouldScroll
        if (shouldScroll) {
          this.top = next,
          this.vMovement = next / elementSize.scrollAreaHeight * 100

          this.$emit('scrolly', next);
          this.$emit('scroll', { top: this.top, left: this.left });
          
          if (this.onMaxScroll && (maxTop || maxBottom)) {
            this.onMaxScroll({ top: maxTop, bottom: maxBottom, right: false, left: false })
          }
        }
      },

      normalizeHorizontal(next){
        const elementSize = this.getSize()

        // Horizontal Scrolling
        const rightEnd = elementSize.scrollAreaWidth - this.scrollWrapperWidth

        // Max Scroll Right
        const maxRight = next > rightEnd
        if(maxRight) next = rightEnd;

        // Max Scroll Left
        const maxLeft = next < 0
        if(next < 0) next = 0

        // Update the Horizontal Value
        const shouldScroll = this.left !== next
        this.allowBodyScroll = !shouldScroll
        if (shouldScroll) {
          this.left = next,
          this.hMovement = next / elementSize.scrollAreaWidth * 100

          this.$emit('scrollx', next);
          this.$emit('scroll', { top: this.top, left: this.left });
          
          if (this.onMaxScroll && (maxRight || maxLeft)) {
            this.onMaxScroll({ right: maxRight, left: maxLeft, top: false, bottom: false })
          }
        }
      },

      handleChangePosition(movement, orientation){
        // Make sure the content height is not changed
        this.calculateSize(() => {
          // Convert Percentage to Pixel
          const next = movement / 100
          if( orientation == 'vertical' ) this.normalizeVertical( next * this.scrollAreaHeight )
          if( orientation == 'horizontal' ) this.normalizeHorizontal( next * this.scrollAreaWidth )
        })
      },

      handleScrollbarDragging(){
        this.dragging = true
      },

      handleScrollbarStopDrag(){
        this.dragging = false
      },

      getSize(){
        // The Elements
        const $scrollArea = this.$refs.scrollArea
        const $scrollWrapper = this.$refs.scrollWrapper
        if(!$scrollArea || !$scrollWrapper) return {}
        // Get new Elements Size
        this.wrapRect = $scrollWrapper.getBoundingClientRect();
        return {
          // Scroll Area Height and Width
          scrollAreaHeight: $scrollArea.clientHeight,
          scrollAreaWidth: $scrollArea.clientWidth,

          // Scroll Wrapper Height and Width
          scrollWrapperHeight: $scrollWrapper.clientHeight - 18, // MUST be kept in sync with $bar-size in the SASS
          scrollWrapperWidth: $scrollWrapper.clientWidth - 18, // MUST be kept in sync with $bar-size in the SASS
        }
      },

      calculateSize(cb){
        if(typeof cb !== 'function') cb = null;

        const elementSize = this.getSize()
        if(elementSize == {}) return cb ? cb() : false

        if( elementSize.scrollWrapperHeight !== this.scrollWrapperHeight ||
            elementSize.scrollWrapperWidth !== this.scrollWrapperWidth ||
            elementSize.scrollAreaHeight !== this.scrollAreaHeight ||
            elementSize.scrollAreaWidth !== this.scrollAreaWidth )
        {

          // Scroll Area Height and Width
          this.scrollAreaHeight = elementSize.scrollAreaHeight,
          this.scrollAreaWidth = elementSize.scrollAreaWidth,

          // Scroll Wrapper Height and Width
          this.scrollWrapperHeight = elementSize.scrollWrapperHeight,
          this.scrollWrapperWidth = elementSize.scrollWrapperWidth,

          // Make sure The wrapper is Ready, then render the scrollbar
          this.ready = true

        }
        return cb ? cb() : false
      }

    },

    created ()
    {
      this.supportsPassive = false;
      let self = this;
      try {
        var opts = {};
        Object.defineProperty(opts, 'passive', ({
          get: function get () {
            /* istanbul ignore next */
            self.supportsPassive = true;
          }
        })); // https://github.com/facebook/flow/issues/285
        window.addEventListener('test-passive', null, opts);
      } catch (e) {}
    },
    mounted () {
      this.calculateSize()

      // Attach The Event for Responsive View
      window.addEventListener('resize', this.calculateSize)
      document.addEventListener('mousemove', this.checkAutoScroll, false)
      document.addEventListener('touchmove', this.checkAutoScroll, this.supportsPassive ? {passive: false} : false)
    },

    updated ()
    {
      const self = this;
      this.$nextTick(function()
      {
        setTimeout(function()
        {
          self.calculateSize()
        },50)
      })
    },

    beforeDestroy (){
      // Remove Event
      window.removeEventListener('resize', this.calculateSize)
      document.removeEventListener('mousemove', this.checkAutoScroll)
      document.removeEventListener('touchmove', this.checkAutoScroll)
    }

  }

</script>

<style lang="scss">
$bar-size: 18px; /* MUST be kept in sync with the "getSize()" method above !!!!!! */
$bar-padding: 3px;
$bar-rounding: 8px;
$bar-border: 1px;

.vue-scrollbar-transition,
.vue-scrollbar__scrollbar-vertical,
.vue-scrollbar__scrollbar-horizontal {
  transition: all 0.5s ease;
}

.vue-scrollbar-transition--scrollbar {
  transition: opacity 0.5s linear;
}

.vue-scrollbar__wrapper {
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}

.vue-scrollbar__scrollbar-vertical,
.vue-scrollbar__scrollbar-horizontal {
  position: absolute;
  background-color: #fff;
  border: $bar-border solid $stroke;
}

.vue-scrollbar__scrollbar-vertical:hover,
.vue-scrollbar__scrollbar-horizontal:hover {
  /*  background: rgba(0, 0, 0, 0.3);*/
}

.vue-scrollbar__scrollbar-vertical .scrollbar,
.vue-scrollbar__scrollbar-horizontal .scrollbar {
  position: relative;
  border-radius: $bar-rounding;
  background: rgba($medium-text, 0.35);
  cursor: default;
}

.vue-scrollbar__scrollbar-vertical {
  width: $bar-size;
  height: 100%;
  top: 0;
  right: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent; 
}

.vue-scrollbar__scrollbar-vertical .scrollbar {
  width: $bar-size - 2 * ($bar-padding + $bar-border);
  margin: 0 $bar-padding;
}

.vue-scrollbar__scrollbar-horizontal {
  height: $bar-size;
  width: 100%;
  bottom: 0;
  left: 0;
}

.vue-scrollbar__scrollbar-horizontal .scrollbar {
  height: $bar-size - 2 * ($bar-padding + $bar-border);
  margin: $bar-padding 0;
}
</style>
