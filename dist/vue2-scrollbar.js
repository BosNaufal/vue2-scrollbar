/*!
 * Copyright (c) 2016 Naufal Rabbani (http://github.com/BosNaufal),
 * ,Licensed Under MIT (http://opensource.org/licenses/MIT),
 * ,
 * ,Vue 2 Scrollbar @ Version 0.0.1,
 * 
 */
<<<<<<< HEAD
<<<<<<< HEAD
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Vue2Scrollbar"] = factory();
	else
		root["Vue2Scrollbar"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vue_scrollbar_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vue_scrollbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vue_scrollbar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ec59f76_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vue_scrollbar_vue__ = __webpack_require__(9);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vue_scrollbar_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ec59f76_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vue_scrollbar_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/js/components/vue-scrollbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vue-scrollbar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ec59f76", Component.options)
  } else {
    hotAPI.reload("data-v-7ec59f76", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


exports.default = {

  props: {
    draggingFromParent: Boolean,
    scrolling: Number,
    wrapper: Object,
    area: Object,
    onChangePosition: Function,
    onDragging: Function,
    onStopDrag: Function
  },

  data: function data() {
    return {
      width: 0,
      dragging: false,
      start: 0
    };
  },


  watch: {
    'wrapper.width': function wrapperWidth(val, old) {
      this.calculateSize(this);
    },
    'area.width': function areaWidth(val, old) {
      this.calculateSize(this);
    }
  },

  methods: {
    startDrag: function startDrag(e) {

      e.preventDefault();
      e.stopPropagation();

      e = e.changedTouches ? e.changedTouches[0] : e;

      // Prepare To Drag
      this.dragging = true;
      this.start = e.clientX;
    },
    onDrag: function onDrag(e) {

      if (this.dragging) {

        // Make The Parent being in the Dragging State
        this.onDragging();

        e.preventDefault();
        e.stopPropagation();

        e = e.changedTouches ? e.changedTouches[0] : e;

        var xMovement = e.clientX - this.start;
        var xMovementPercentage = xMovement / this.wrapper.width * 100;

        // Update the last e.clientX
        this.start = e.clientX;

        // The next Horizontal Value will be
        var next = this.scrolling + xMovementPercentage;

        // Tell the parent to change the position
        this.onChangePosition(next, 'horizontal');
      }
    },
    stopDrag: function stopDrag(e) {
      if (this.dragging) {
        // Parent Should Change the Dragging State
        this.onStopDrag();
        this.dragging = false;
      }
    },
    jump: function jump(e) {

      var isContainer = e.target === this.$refs.container;

      if (isContainer) {

        // Get the Element Position
        var position = this.$refs.scrollbar.getBoundingClientRect();

        // Calculate the horizontal Movement
        var xMovement = e.clientX - position.left;
        var centerize = this.width / 2;
        var xMovementPercentage = xMovement / this.wrapper.width * 100 - centerize;

        // Update the last e.clientX
        this.start = e.clientX;

        // The next Horizontal Value will be
        var next = this.scrolling + xMovementPercentage;

        // Tell the parent to change the position
        this.onChangePosition(next, 'horizontal');
      }
    },
    calculateSize: function calculateSize(source) {
      // Scrollbar Width
      this.width = source.wrapper.width / source.area.width * 100;
    }
  },

  mounted: function mounted() {
    this.calculateSize(this);

    // Put the Listener
    document.addEventListener("mousemove", this.onDrag);
    document.addEventListener("touchmove", this.onDrag);
    document.addEventListener("mouseup", this.stopDrag);
    document.addEventListener("touchend", this.stopDrag);
  },
  beforeDestroy: function beforeDestroy() {
    // Remove the Listener
    document.removeEventListener("mousemove", this.onDrag);
    document.removeEventListener("touchmove", this.onDrag);
    document.removeEventListener("mouseup", this.stopDrag);
    document.removeEventListener("touchend", this.stopDrag);
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


exports.default = {

  props: {
    draggingFromParent: Boolean,
    scrolling: Number,
    wrapper: Object,
    area: Object,
    onChangePosition: Function,
    onDragging: Function,
    onStopDrag: Function
  },

  data: function data() {
    return {
      height: 0,
      dragging: false,
      start: 0
    };
  },


  watch: {
    'wrapper.height': function wrapperHeight(val, old) {
      this.calculateSize(this);
    },
    'area.height': function areaHeight(val, old) {
      this.calculateSize(this);
    }
  },

  methods: {
    startDrag: function startDrag(e) {

      e.preventDefault();
      e.stopPropagation();

      e = e.changedTouches ? e.changedTouches[0] : e;

      // Prepare to drag
      this.dragging = true, this.start = e.clientY;
    },
    onDrag: function onDrag(e) {

      if (this.dragging) {

        // Make The Parent being in the Dragging State
        this.onDragging();

        e.preventDefault();
        e.stopPropagation();

        e = e.changedTouches ? e.changedTouches[0] : e;

        var yMovement = e.clientY - this.start;
        var yMovementPercentage = yMovement / this.wrapper.height * 100;

        // Update the last e.clientY
        this.start = e.clientY;

        // The next Vertical Value will be
        var next = this.scrolling + yMovementPercentage;

        // Tell the parent to change the position
        this.onChangePosition(next, 'vertical');
      }
    },
    stopDrag: function stopDrag(e) {
      if (this.dragging) {
        // Parent Should Change the Dragging State
        this.onStopDrag();
        this.dragging = false;
      }
    },
    jump: function jump(e) {

      var isContainer = e.target === this.$refs.container;

      if (isContainer) {

        // Get the Element Position
        var position = this.$refs.scrollbar.getBoundingClientRect();

        // Calculate the vertical Movement
        var yMovement = e.clientY - position.top;
        var centerize = this.height / 2;
        var yMovementPercentage = yMovement / this.wrapper.height * 100 - centerize;

        // Update the last e.clientY
        this.start = e.clientY;

        // The next Vertical Value will be
        var next = this.scrolling + yMovementPercentage;

        // Tell the parent to change the position
        this.onChangePosition(next, 'vertical');
      }
    },
    calculateSize: function calculateSize(source) {
      // Scrollbar Height
      this.height = source.wrapper.height / source.area.height * 100;
    },
    getSize: function getSize() {
      // The Elements
      var $scrollArea = this.$refs.container.parentElement;
      var $scrollWrapper = $scrollArea.parentElement;

      // Get new Elements Size
      var elementSize = {
        // Scroll Area Height and Width
        scrollAreaHeight: $scrollArea.children[0].clientHeight,
        scrollAreaWidth: $scrollArea.children[0].clientWidth,

        // Scroll Wrapper Height and Width
        scrollWrapperHeight: $scrollWrapper.clientHeight,
        scrollWrapperWidth: $scrollWrapper.clientWidth
      };
      return elementSize;
    }
  },

  mounted: function mounted() {
    this.calculateSize(this);

    // Put the Listener
    document.addEventListener("mousemove", this.onDrag);
    document.addEventListener("touchmove", this.onDrag);
    document.addEventListener("mouseup", this.stopDrag);
    document.addEventListener("touchend", this.stopDrag);
  },
  beforeDestroy: function beforeDestroy() {
    // Remove the Listener
    document.removeEventListener("mousemove", this.onDrag);
    document.removeEventListener("touchmove", this.onDrag);
    document.removeEventListener("mouseup", this.stopDrag);
    document.removeEventListener("touchend", this.stopDrag);
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _verticalScrollbar = __webpack_require__(7);

var _verticalScrollbar2 = _interopRequireDefault(_verticalScrollbar);

var _horizontalScrollbar = __webpack_require__(6);

var _horizontalScrollbar2 = _interopRequireDefault(_horizontalScrollbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


exports.default = {

  props: {
    classes: String,
    styles: Object,
    speed: {
      type: Number,
      default: 53
    },
    onMaxScroll: Function
  },

  components: {
    VerticalScrollbar: _verticalScrollbar2.default,
    HorizontalScrollbar: _horizontalScrollbar2.default
  },

  data: function data() {
    return {
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
      start: { y: 0, x: 0 }
    };
  },


  methods: {
    scroll: function scroll(e) {
      var _this = this;

      e.preventDefault();

      // Make sure the content height is not changed
      this.calculateSize(function () {
        // Set the wheel step
        var num = _this.speed;

        // DOM events
        var shifted = e.shiftKey;
        var scrollY = e.deltaY > 0 ? num : -num;
        var scrollX = e.deltaX > 0 ? num : -num;

        // Fix Mozilla Shifted Wheel~
        if (shifted && e.deltaX == 0) scrollX = e.deltaY > 0 ? num : -num;

        // Next Value
        var nextY = _this.top + scrollY;
        var nextX = _this.left + scrollX;

        // Is it Scrollable?
        var canScrollY = _this.scrollAreaHeight > _this.scrollWrapperHeight;
        var canScrollX = _this.scrollAreaWidth > _this.scrollWrapperWidth;

        // Vertical Scrolling
        if (canScrollY && !shifted) _this.normalizeVertical(nextY);

        // Horizontal Scrolling
        if (shifted && canScrollX) _this.normalizeHorizontal(nextX);
      });
    },


    // DRAG EVENT JUST FOR TOUCH DEVICE~
    startDrag: function startDrag(e) {
      var _this2 = this;

      // e.preventDefault()
      // e.stopPropagation()

      e = e.changedTouches ? e.changedTouches[0] : e;

      // Make sure the content height is not changed
      this.calculateSize(function () {
        // Prepare to drag
        _this2.dragging = true, _this2.start = { y: e.pageY, x: e.pageX };
      });
    },
    onDrag: function onDrag(e) {
      if (this.dragging) {

        e.preventDefault();
        e = e.changedTouches ? e.changedTouches[0] : e;

        // Invers the Movement
        var yMovement = this.start.y - e.clientY;
        var xMovement = this.start.x - e.clientX;

        // Update the last e.client
        this.start = { y: e.clientY, x: e.clientX

          // The next Vertical Value will be
        };var nextY = this.top + yMovement;
        var nextX = this.left + xMovement;

        this.normalizeVertical(nextY);
        this.normalizeHorizontal(nextX);
      }
    },
    stopDrag: function stopDrag(e) {
      this.dragging = false;
    },
    scrollToY: function scrollToY(y) {
      this.normalizeVertical(y);
    },
    scrollToX: function scrollToX(x) {
      this.normalizeHorizontal(x);
    },
    normalizeVertical: function normalizeVertical(next) {
      var elementSize = this.getSize();

      // Vertical Scrolling
      var lowerEnd = elementSize.scrollAreaHeight - elementSize.scrollWrapperHeight;

      // Max Scroll Down
      var maxBottom = next > lowerEnd;
      if (maxBottom) next = lowerEnd;

      // Max Scroll Up
      var maxTop = next < 0;
      if (maxTop) next = 0;

      // Update the Vertical Value if it's needed
      var shouldScroll = this.top !== next;
      if (shouldScroll) {
        this.top = next, this.vMovement = next / elementSize.scrollAreaHeight * 100;

        if (this.onMaxScroll && (maxTop || maxBottom)) {
          this.onMaxScroll({ top: maxTop, bottom: maxBottom, right: false, left: false });
        }
      }
    },
    normalizeHorizontal: function normalizeHorizontal(next) {
      var elementSize = this.getSize();

      // Horizontal Scrolling
      var rightEnd = elementSize.scrollAreaWidth - this.scrollWrapperWidth;

      // Max Scroll Right
      var maxRight = next > rightEnd;
      if (maxRight) next = rightEnd;

      // Max Scroll Left
      var maxLeft = next < 0;
      if (next < 0) next = 0;

      // Update the Horizontal Value
      var shouldScroll = this.left !== next;
      if (shouldScroll) {
        this.left = next, this.hMovement = next / elementSize.scrollAreaWidth * 100;

        if (this.onMaxScroll && (maxRight || maxLeft)) {
          this.onMaxScroll({ right: maxRight, left: maxLeft, top: false, bottom: false });
        }
      }
    },
    handleChangePosition: function handleChangePosition(movement, orientation) {
      var _this3 = this;

      // Make sure the content height is not changed
      this.calculateSize(function () {
        // Convert Percentage to Pixel
        var next = movement / 100;
        if (orientation == 'vertical') _this3.normalizeVertical(next * _this3.scrollAreaHeight);
        if (orientation == 'horizontal') _this3.normalizeHorizontal(next * _this3.scrollAreaWidth);
      });
    },
    handleScrollbarDragging: function handleScrollbarDragging() {
      this.dragging = true;
    },
    handleScrollbarStopDrag: function handleScrollbarStopDrag() {
      this.dragging = false;
    },
    getSize: function getSize() {
      // The Elements
      var $scrollArea = this.$refs.scrollArea;
      var $scrollWrapper = this.$refs.scrollWrapper;

      // Get new Elements Size
      var elementSize = {
        // Scroll Area Height and Width
        scrollAreaHeight: $scrollArea.children[0].clientHeight,
        scrollAreaWidth: $scrollArea.children[0].clientWidth,

        // Scroll Wrapper Height and Width
        scrollWrapperHeight: $scrollWrapper.clientHeight,
        scrollWrapperWidth: $scrollWrapper.clientWidth
      };
      return elementSize;
    },
    calculateSize: function calculateSize(cb) {
      if (typeof cb !== 'function') cb = null;

      var elementSize = this.getSize();

      if (elementSize.scrollWrapperHeight !== this.scrollWrapperHeight || elementSize.scrollWrapperWidth !== this.scrollWrapperWidth || elementSize.scrollAreaHeight !== this.scrollAreaHeight || elementSize.scrollAreaWidth !== this.scrollAreaWidth) {

        // Scroll Area Height and Width
        this.scrollAreaHeight = elementSize.scrollAreaHeight, this.scrollAreaWidth = elementSize.scrollAreaWidth,

        // Scroll Wrapper Height and Width
        this.scrollWrapperHeight = elementSize.scrollWrapperHeight, this.scrollWrapperWidth = elementSize.scrollWrapperWidth,

        // Make sure The wrapper is Ready, then render the scrollbar
        this.ready = true;

        return cb ? cb() : false;
      } else return cb ? cb() : false;
    }
  },

  mounted: function mounted() {
    this.calculateSize();

    // Attach The Event for Responsive View~
    window.addEventListener('resize', this.calculateSize);
  },
  beforeDestroy: function beforeDestroy() {
    // Remove Event
    window.removeEventListener('resize', this.calculateSize);
  }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vueScrollbar = __webpack_require__(1);

var _vueScrollbar2 = _interopRequireDefault(_vueScrollbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _vueScrollbar2.default;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_horizontal_scrollbar_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_horizontal_scrollbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_horizontal_scrollbar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_03d7e587_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_horizontal_scrollbar_vue__ = __webpack_require__(8);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_horizontal_scrollbar_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_03d7e587_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_horizontal_scrollbar_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/js/components/horizontal-scrollbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] horizontal-scrollbar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-03d7e587", Component.options)
  } else {
    hotAPI.reload("data-v-03d7e587", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vertical_scrollbar_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vertical_scrollbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vertical_scrollbar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9fd7644e_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vertical_scrollbar_vue__ = __webpack_require__(10);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vertical_scrollbar_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9fd7644e_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vertical_scrollbar_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/js/components/vertical-scrollbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vertical-scrollbar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9fd7644e", Component.options)
  } else {
    hotAPI.reload("data-v-9fd7644e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.width < 100) ? _c('div', {
    ref: "container",
    staticClass: "vue-scrollbar__scrollbar-horizontal",
    on: {
      "click": _vm.jump
    }
  }, [_c('div', {
    ref: "scrollbar",
    class: 'scrollbar' + (_vm.dragging || _vm.draggingFromParent ? '' : ' vue-scrollbar-transition'),
    style: ({
      width: this.width + '%',
      left: this.scrolling + '%'
    }),
    on: {
      "touchstart": _vm.startDrag,
      "mousedown": _vm.startDrag
    }
  })]) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-03d7e587", esExports)
  }
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "scrollWrapper",
    class: 'vue-scrollbar__wrapper' + (this.classes ? ' ' + this.classes : ''),
    style: (this.styles),
    on: {
      "click": _vm.calculateSize
    }
  }, [_c('div', {
    ref: "scrollArea",
    class: 'vue-scrollbar__area' + (this.dragging ? ' ' : ' vue-scrollbar-transition'),
    style: ({
      marginTop: this.top * -1 + 'px',
      marginLeft: this.left * -1 + 'px'
    }),
    on: {
      "wheel": _vm.scroll,
      "touchstart": _vm.startDrag,
      "touchmove": _vm.onDrag,
      "touchend": _vm.stopDrag
    }
  }, [_vm._t("default"), _vm._v(" "), (_vm.ready) ? _c('vertical-scrollbar', {
    attrs: {
      "area": {
        height: _vm.scrollAreaHeight
      },
      "wrapper": {
        height: _vm.scrollWrapperHeight
      },
      "scrolling": _vm.vMovement,
      "dragging-from-parent": _vm.dragging,
      "on-change-position": _vm.handleChangePosition,
      "on-dragging": _vm.handleScrollbarDragging,
      "on-stop-drag": _vm.handleScrollbarStopDrag
    }
  }) : _vm._e(), _vm._v(" "), (_vm.ready) ? _c('horizontal-scrollbar', {
    attrs: {
      "area": {
        width: _vm.scrollAreaWidth
      },
      "wrapper": {
        width: _vm.scrollWrapperWidth
      },
      "scrolling": _vm.hMovement,
      "dragging-from-parent": _vm.dragging,
      "on-change-position": _vm.handleChangePosition,
      "on-dragging": _vm.handleScrollbarDragging,
      "on-stop-drag": _vm.handleScrollbarStopDrag
    }
  }) : _vm._e()], 2)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7ec59f76", esExports)
  }
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.height < 100) ? _c('div', {
    ref: "container",
    staticClass: "vue-scrollbar__scrollbar-vertical",
    on: {
      "click": _vm.jump
    }
  }, [_c('div', {
    ref: "scrollbar",
    class: 'scrollbar' + (_vm.dragging || _vm.draggingFromParent ? '' : ' vue-scrollbar-transition'),
    style: ({
      height: _vm.height + '%',
      top: _vm.scrolling + '%'
    }),
    on: {
      "touchstart": _vm.startDrag,
      "mousedown": _vm.startDrag
    }
  })]) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9fd7644e", esExports)
  }
}

/***/ })
/******/ ]);
});
=======
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Vue2Scrollbar=e():t.Vue2Scrollbar=e()}(this,function(){return function(t){function e(i){if(r[i])return r[i].exports;var n=r[i]={exports:{},id:i,loaded:!1};return t[i].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var r={};return e.m=t,e.c=r,e.p="../dist/",e(0)}([function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var n=r(6),o=i(n);t.exports=o.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{draggingFromParent:Boolean,scrolling:Number,wrapper:Object,area:Object,onChangePosition:Function,onDragging:Function,onStopDrag:Function},data:function(){return{width:0,dragging:!1,start:0}},watch:{"wrapper.width":function(t,e){this.calculateSize(this)},"area.width":function(t,e){this.calculateSize(this)}},methods:{startDrag:function(t){t.preventDefault(),t.stopPropagation(),t=t.changedTouches?t.changedTouches[0]:t,this.dragging=!0,this.start=t.clientX},onDrag:function(t){if(this.dragging){this.onDragging(),t.preventDefault(),t.stopPropagation(),t=t.changedTouches?t.changedTouches[0]:t;var e=t.clientX-this.start,r=e/this.wrapper.width*100;this.start=t.clientX;var i=this.scrolling+r;this.onChangePosition(i,"horizontal")}},stopDrag:function(t){this.dragging&&(this.onStopDrag(),this.dragging=!1)},jump:function(t){var e=t.target===this.$refs.container;if(e){var r=this.$refs.scrollbar.getBoundingClientRect(),i=t.clientX-r.left,n=this.width/2,o=i/this.wrapper.width*100-n;this.start=t.clientX;var a=this.scrolling+o;this.onChangePosition(a,"horizontal")}},calculateSize:function(t){this.width=t.wrapper.width/t.area.width*100}},mounted:function(){this.calculateSize(this),document.addEventListener("mousemove",this.onDrag),document.addEventListener("touchmove",this.onDrag),document.addEventListener("mouseup",this.stopDrag),document.addEventListener("touchend",this.stopDrag)},beforeDestroy:function(){document.removeEventListener("mousemove",this.onDrag),document.removeEventListener("touchmove",this.onDrag),document.removeEventListener("mouseup",this.stopDrag),document.removeEventListener("touchend",this.stopDrag)}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{draggingFromParent:Boolean,scrolling:Number,wrapper:Object,area:Object,onChangePosition:Function,onDragging:Function,onStopDrag:Function},data:function(){return{height:0,dragging:!1,start:0}},watch:{"wrapper.height":function(t,e){this.calculateSize(this)},"area.height":function(t,e){this.calculateSize(this)}},methods:{startDrag:function(t){t.preventDefault(),t.stopPropagation(),t=t.changedTouches?t.changedTouches[0]:t,this.dragging=!0,this.start=t.clientY},onDrag:function(t){if(this.dragging){this.onDragging(),t.preventDefault(),t.stopPropagation(),t=t.changedTouches?t.changedTouches[0]:t;var e=t.clientY-this.start,r=e/this.wrapper.height*100;this.start=t.clientY;var i=this.scrolling+r;this.onChangePosition(i,"vertical")}},stopDrag:function(t){this.dragging&&(this.onStopDrag(),this.dragging=!1)},jump:function(t){var e=t.target===this.$refs.container;if(e){var r=this.$refs.scrollbar.getBoundingClientRect(),i=t.clientY-r.top,n=this.height/2,o=i/this.wrapper.height*100-n;this.start=t.clientY;var a=this.scrolling+o;this.onChangePosition(a,"vertical")}},calculateSize:function(t){this.height=t.wrapper.height/t.area.height*100},getSize:function(){var t=this.$refs.container.parentElement,e=t.parentElement,r={scrollAreaHeight:t.children[0].clientHeight,scrollAreaWidth:t.children[0].clientWidth,scrollWrapperHeight:e.clientHeight,scrollWrapperWidth:e.clientWidth};return r}},mounted:function(){this.calculateSize(this),document.addEventListener("mousemove",this.onDrag),document.addEventListener("touchmove",this.onDrag),document.addEventListener("mouseup",this.stopDrag),document.addEventListener("touchend",this.stopDrag)},beforeDestroy:function(){document.removeEventListener("mousemove",this.onDrag),document.removeEventListener("touchmove",this.onDrag),document.removeEventListener("mouseup",this.stopDrag),document.removeEventListener("touchend",this.stopDrag)}}},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=r(5),o=i(n),a=r(4),s=i(a);e.default={props:{classes:String,style:Object,speed:{type:Number,default:53}},components:{VerticalScrollbar:o.default,HorizontalScrollbar:s.default},data:function(){return{ready:!1,top:0,left:0,scrollAreaHeight:null,scrollAreaWidth:null,scrollWrapperHeight:null,scrollWrapperWidth:null,vMovement:0,hMovement:0,cachedvMovement:0,dragging:!1,start:{y:0,x:0}}},computed:{allowBodyScrollVertical:function(){return this.vMovement===this.cachedvMovement}},methods:{scroll:function(t){var e=this;this.calculateSize(function(){var r=e.speed,i=t.shiftKey,n=t.deltaY>0?r:-r,o=t.deltaX>0?r:-r;i&&0==t.deltaX&&(o=t.deltaY>0?r:-r);var a=e.top+n,s=e.left+o,l=e.scrollAreaHeight>e.scrollWrapperHeight,c=e.scrollAreaWidth>e.scrollWrapperWidth;l&&!i&&e.normalizeVertical(a),i&&c&&e.normalizeHorizontal(s)}),this.allowBodyScrollVertical||t.preventDefault()},startDrag:function(t){var e=this,r=t.changedTouches?t.changedTouches[0]:t;this.calculateSize(function(){e.dragging=!0,e.start={y:r.pageY,x:r.pageX}}),this.allowBodyScrollVertical||(t.preventDefault(),t.stopPropagation())},onDrag:function(t){if(this.dragging){var e=t.changedTouches?t.changedTouches[0]:t,r=this.start.y-e.clientY,i=this.start.x-e.clientX;this.start={y:e.clientY,x:e.clientX};var n=this.top+r,o=this.left+i;this.normalizeVertical(n),this.normalizeHorizontal(o),this.allowBodyScrollVertical||t.preventDefault()}},stopDrag:function(t){this.dragging=!1},scrollToY:function(t){this.normalizeVertical(t)},scrollToX:function(t){this.normalizeVertical(t)},normalizeVertical:function(t){var e=this.getSize(),r=e.scrollAreaHeight-e.scrollWrapperHeight;t>r?t=r:t<0&&(t=0),this.top=t,this.cachedvMovement=this.vMovement,this.vMovement=t/e.scrollAreaHeight*100},normalizeHorizontal:function(t){var e=this.getSize(),r=e.scrollAreaWidth-this.scrollWrapperWidth;t>r?t=r:t<0&&(t=0),this.left=t,this.hMovement=t/e.scrollAreaWidth*100},handleChangePosition:function(t,e){var r=this;this.calculateSize(function(){var i=t/100;"vertical"==e&&r.normalizeVertical(i*r.scrollAreaHeight),"horizontal"==e&&r.normalizeHorizontal(i*r.scrollAreaWidth)})},handleScrollbarDragging:function(){this.dragging=!0},handleScrollbarStopDrag:function(){this.dragging=!1},getSize:function(){var t=this.$refs.scrollArea,e=this.$refs.scrollWrapper,r={scrollAreaHeight:t.children[0].clientHeight,scrollAreaWidth:t.children[0].clientWidth,scrollWrapperHeight:e.clientHeight,scrollWrapperWidth:e.clientWidth};return r},calculateSize:function(t){"function"!=typeof t&&(t=null);var e=this.getSize();return e.scrollWrapperHeight!==this.scrollWrapperHeight||e.scrollWrapperWidth!==this.scrollWrapperWidth||e.scrollAreaHeight!==this.scrollAreaHeight||e.scrollAreaWidth!==this.scrollAreaWidth?(this.scrollAreaHeight=e.scrollAreaHeight,this.scrollAreaWidth=e.scrollAreaWidth,this.scrollWrapperHeight=e.scrollWrapperHeight,this.scrollWrapperWidth=e.scrollWrapperWidth,this.ready=!0,!!t&&t()):!!t&&t()}},mounted:function(){this.calculateSize(),window.addEventListener("resize",this.calculateSize)},beforeDestroy:function(){window.removeEventListener("resize",this.calculateSize)}}},function(t,e,r){var i,n;i=r(1);var o=r(8);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=o.render,n.staticRenderFns=o.staticRenderFns,t.exports=i},function(t,e,r){var i,n;i=r(2);var o=r(9);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=o.render,n.staticRenderFns=o.staticRenderFns,t.exports=i},function(t,e,r){var i,n;i=r(3);var o=r(7);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=o.render,n.staticRenderFns=o.staticRenderFns,t.exports=i},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"scrollWrapper",class:"vue-scrollbar__wrapper"+(this.classes?" "+this.classes:""),style:this.style,on:{click:t.calculateSize}},[r("div",{ref:"scrollArea",class:"vue-scrollbar__area"+(this.dragging?" ":" vue-scrollbar-transition"),style:{marginTop:this.top*-1+"px",marginLeft:this.left*-1+"px"},on:{wheel:t.scroll,touchstart:t.startDrag,touchmove:t.onDrag,touchend:t.stopDrag}},[t._t("default"),t._v(" "),t.ready?r("vertical-scrollbar",{attrs:{area:{height:t.scrollAreaHeight},wrapper:{height:t.scrollWrapperHeight},scrolling:t.vMovement,"dragging-from-parent":t.dragging,"on-change-position":t.handleChangePosition,"on-dragging":t.handleScrollbarDragging,"on-stop-drag":t.handleScrollbarStopDrag}}):t._e(),t._v(" "),t.ready?r("horizontal-scrollbar",{attrs:{area:{width:t.scrollAreaWidth},wrapper:{width:t.scrollWrapperWidth},scrolling:t.hMovement,"dragging-from-parent":t.dragging,"on-change-position":t.handleChangePosition,"on-dragging":t.handleScrollbarDragging,"on-stop-drag":t.handleScrollbarStopDrag}}):t._e()],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.width<100?r("div",{ref:"container",staticClass:"vue-scrollbar__scrollbar-horizontal",on:{click:t.jump}},[r("div",{ref:"scrollbar",class:"scrollbar"+(t.dragging||t.draggingFromParent?"":" vue-scrollbar-transition"),style:{width:this.width+"%",left:this.scrolling+"%"},on:{touchstart:t.startDrag,mousedown:t.startDrag}})]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.height<100?r("div",{ref:"container",staticClass:"vue-scrollbar__scrollbar-vertical",on:{click:t.jump}},[r("div",{ref:"scrollbar",class:"scrollbar"+(t.dragging||t.draggingFromParent?"":" vue-scrollbar-transition"),style:{height:t.height+"%",top:t.scrolling+"%"},on:{touchstart:t.startDrag,mousedown:t.startDrag}})]):t._e()])},staticRenderFns:[]}}])});
>>>>>>> 3929efb980eb539b933635d85350b085a6df732c
=======
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Vue2Scrollbar=e():t.Vue2Scrollbar=e()}(this,function(){return function(t){function e(i){if(r[i])return r[i].exports;var n=r[i]={exports:{},id:i,loaded:!1};return t[i].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var r={};return e.m=t,e.c=r,e.p="../dist/",e(0)}([function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var n=r(7),o=i(n);t.exports=o.default},function(t,e){t.exports=function(t,e,r,i,n){var o,a=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(o=t,a=t.default);var l="function"==typeof a?a.options:a;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns),i&&(l._scopeId=i);var c;if(n?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},l._ssrRegister=c):r&&(c=r),c){var h=l.functional,g=h?l.render:l.beforeCreate;h?l.render=function(t,e){return c.call(e),g(t,e)}:l.beforeCreate=g?[].concat(g,c):[c]}return{esModule:o,exports:a,options:l}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{draggingFromParent:Boolean,scrolling:Number,wrapper:Object,area:Object,onChangePosition:Function,onDragging:Function,onStopDrag:Function},data:function(){return{width:0,dragging:!1,start:0}},watch:{"wrapper.width":function(t,e){this.calculateSize(this)},"area.width":function(t,e){this.calculateSize(this)}},methods:{startDrag:function(t){t.preventDefault(),t.stopPropagation(),t=t.changedTouches?t.changedTouches[0]:t,this.dragging=!0,this.start=t.clientX},onDrag:function(t){if(this.dragging){this.onDragging(),t.preventDefault(),t.stopPropagation(),t=t.changedTouches?t.changedTouches[0]:t;var e=t.clientX-this.start,r=e/this.wrapper.width*100;this.start=t.clientX;var i=this.scrolling+r;this.onChangePosition(i,"horizontal")}},stopDrag:function(t){this.dragging&&(this.onStopDrag(),this.dragging=!1)},jump:function(t){var e=t.target===this.$refs.container;if(e){var r=this.$refs.scrollbar.getBoundingClientRect(),i=t.clientX-r.left,n=this.width/2,o=i/this.wrapper.width*100-n;this.start=t.clientX;var a=this.scrolling+o;this.onChangePosition(a,"horizontal")}},calculateSize:function(t){this.width=t.wrapper.width/t.area.width*100}},mounted:function(){this.calculateSize(this),document.addEventListener("mousemove",this.onDrag),document.addEventListener("touchmove",this.onDrag),document.addEventListener("mouseup",this.stopDrag),document.addEventListener("touchend",this.stopDrag)},beforeDestroy:function(){document.removeEventListener("mousemove",this.onDrag),document.removeEventListener("touchmove",this.onDrag),document.removeEventListener("mouseup",this.stopDrag),document.removeEventListener("touchend",this.stopDrag)}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{draggingFromParent:Boolean,scrolling:Number,wrapper:Object,area:Object,onChangePosition:Function,onDragging:Function,onStopDrag:Function},data:function(){return{height:0,dragging:!1,start:0}},watch:{"wrapper.height":function(t,e){this.calculateSize(this)},"area.height":function(t,e){this.calculateSize(this)}},methods:{startDrag:function(t){t.preventDefault(),t.stopPropagation(),t=t.changedTouches?t.changedTouches[0]:t,this.dragging=!0,this.start=t.clientY},onDrag:function(t){if(this.dragging){this.onDragging(),t.preventDefault(),t.stopPropagation(),t=t.changedTouches?t.changedTouches[0]:t;var e=t.clientY-this.start,r=e/this.wrapper.height*100;this.start=t.clientY;var i=this.scrolling+r;this.onChangePosition(i,"vertical")}},stopDrag:function(t){this.dragging&&(this.onStopDrag(),this.dragging=!1)},jump:function(t){var e=t.target===this.$refs.container;if(e){var r=this.$refs.scrollbar.getBoundingClientRect(),i=t.clientY-r.top,n=this.height/2,o=i/this.wrapper.height*100-n;this.start=t.clientY;var a=this.scrolling+o;this.onChangePosition(a,"vertical")}},calculateSize:function(t){this.height=t.wrapper.height/t.area.height*100},getSize:function(){var t=this.$refs.container.parentElement,e=t.parentElement,r={scrollAreaHeight:t.children[0].clientHeight,scrollAreaWidth:t.children[0].clientWidth,scrollWrapperHeight:e.clientHeight,scrollWrapperWidth:e.clientWidth};return r}},mounted:function(){this.calculateSize(this),document.addEventListener("mousemove",this.onDrag),document.addEventListener("touchmove",this.onDrag),document.addEventListener("mouseup",this.stopDrag),document.addEventListener("touchend",this.stopDrag)},beforeDestroy:function(){document.removeEventListener("mousemove",this.onDrag),document.removeEventListener("touchmove",this.onDrag),document.removeEventListener("mouseup",this.stopDrag),document.removeEventListener("touchend",this.stopDrag)}}},function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=r(6),o=i(n),a=r(5),s=i(a);e.default={props:{classes:String,styles:Object,speed:{type:Number,default:53}},components:{VerticalScrollbar:o.default,HorizontalScrollbar:s.default},data:function(){return{ready:!1,top:0,left:0,scrollAreaHeight:null,scrollAreaWidth:null,scrollWrapperHeight:null,scrollWrapperWidth:null,vMovement:0,hMovement:0,dragging:!1,start:{y:0,x:0}}},methods:{scroll:function(t){var e=this;t.preventDefault(),this.calculateSize(function(){var r=e.speed,i=t.shiftKey,n=t.deltaY>0?r:-r,o=t.deltaX>0?r:-r;i&&0==t.deltaX&&(o=t.deltaY>0?r:-r);var a=e.top+n,s=e.left+o,l=e.scrollAreaHeight>e.scrollWrapperHeight,c=e.scrollAreaWidth>e.scrollWrapperWidth;l&&!i&&e.normalizeVertical(a),i&&c&&e.normalizeHorizontal(s)})},startDrag:function(t){var e=this;t.preventDefault(),t.stopPropagation(),t=t.changedTouches?t.changedTouches[0]:t,this.calculateSize(function(){e.dragging=!0,e.start={y:t.pageY,x:t.pageX}})},onDrag:function(t){if(this.dragging){t.preventDefault(),t=t.changedTouches?t.changedTouches[0]:t;var e=this.start.y-t.clientY,r=this.start.x-t.clientX;this.start={y:t.clientY,x:t.clientX};var i=this.top+e,n=this.left+r;this.normalizeVertical(i),this.normalizeHorizontal(n)}},stopDrag:function(t){this.dragging=!1},scrollToY:function(t){this.normalizeVertical(t)},scrollToX:function(t){this.normalizeVertical(t)},normalizeVertical:function(t){var e=this.getSize(),r=e.scrollAreaHeight-e.scrollWrapperHeight;t>r?t=r:t<0&&(t=0),this.top=t,this.vMovement=t/e.scrollAreaHeight*100},normalizeHorizontal:function(t){var e=this.getSize(),r=e.scrollAreaWidth-this.scrollWrapperWidth;t>r?t=r:t<0&&(t=0),this.left=t,this.hMovement=t/e.scrollAreaWidth*100},handleChangePosition:function(t,e){var r=this;this.calculateSize(function(){var i=t/100;"vertical"==e&&r.normalizeVertical(i*r.scrollAreaHeight),"horizontal"==e&&r.normalizeHorizontal(i*r.scrollAreaWidth)})},handleScrollbarDragging:function(){this.dragging=!0},handleScrollbarStopDrag:function(){this.dragging=!1},getSize:function(){var t=this.$refs.scrollArea,e=this.$refs.scrollWrapper,r={scrollAreaHeight:t.children[0].clientHeight,scrollAreaWidth:t.children[0].clientWidth,scrollWrapperHeight:e.clientHeight,scrollWrapperWidth:e.clientWidth};return r},calculateSize:function(t){"function"!=typeof t&&(t=null);var e=this.getSize();return e.scrollWrapperHeight!==this.scrollWrapperHeight||e.scrollWrapperWidth!==this.scrollWrapperWidth||e.scrollAreaHeight!==this.scrollAreaHeight||e.scrollAreaWidth!==this.scrollAreaWidth?(this.scrollAreaHeight=e.scrollAreaHeight,this.scrollAreaWidth=e.scrollAreaWidth,this.scrollWrapperHeight=e.scrollWrapperHeight,this.scrollWrapperWidth=e.scrollWrapperWidth,this.ready=!0,!!t&&t()):!!t&&t()}},mounted:function(){this.calculateSize(),window.addEventListener("resize",this.calculateSize)},beforeDestroy:function(){window.removeEventListener("resize",this.calculateSize)}}},function(t,e,r){var i=r(1)(r(2),r(8),null,null,null);t.exports=i.exports},function(t,e,r){var i=r(1)(r(3),r(10),null,null,null);t.exports=i.exports},function(t,e,r){var i=r(1)(r(4),r(9),null,null,null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.width<100?r("div",{ref:"container",staticClass:"vue-scrollbar__scrollbar-horizontal",on:{click:t.jump}},[r("div",{ref:"scrollbar",class:"scrollbar"+(t.dragging||t.draggingFromParent?"":" vue-scrollbar-transition"),style:{width:this.width+"%",left:this.scrolling+"%"},on:{touchstart:t.startDrag,mousedown:t.startDrag}})]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"scrollWrapper",class:"vue-scrollbar__wrapper"+(this.classes?" "+this.classes:""),style:this.styles,on:{click:t.calculateSize}},[r("div",{ref:"scrollArea",class:"vue-scrollbar__area"+(this.dragging?" ":" vue-scrollbar-transition"),style:{marginTop:this.top*-1+"px",marginLeft:this.left*-1+"px"},on:{wheel:t.scroll,touchstart:t.startDrag,touchmove:t.onDrag,touchend:t.stopDrag}},[t._t("default"),t._v(" "),t.ready?r("vertical-scrollbar",{attrs:{area:{height:t.scrollAreaHeight},wrapper:{height:t.scrollWrapperHeight},scrolling:t.vMovement,"dragging-from-parent":t.dragging,"on-change-position":t.handleChangePosition,"on-dragging":t.handleScrollbarDragging,"on-stop-drag":t.handleScrollbarStopDrag}}):t._e(),t._v(" "),t.ready?r("horizontal-scrollbar",{attrs:{area:{width:t.scrollAreaWidth},wrapper:{width:t.scrollWrapperWidth},scrolling:t.hMovement,"dragging-from-parent":t.dragging,"on-change-position":t.handleChangePosition,"on-dragging":t.handleScrollbarDragging,"on-stop-drag":t.handleScrollbarStopDrag}}):t._e()],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.height<100?r("div",{ref:"container",staticClass:"vue-scrollbar__scrollbar-vertical",on:{click:t.jump}},[r("div",{ref:"scrollbar",class:"scrollbar"+(t.dragging||t.draggingFromParent?"":" vue-scrollbar-transition"),style:{height:t.height+"%",top:t.scrolling+"%"},on:{touchstart:t.startDrag,mousedown:t.startDrag}})]):t._e()])},staticRenderFns:[]}}])});
>>>>>>> f29c75517014660a0182f18ce3141c2ae1ce7eca
