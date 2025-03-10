"use strict";
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var _loop = function(key) {
    featureDefinitions[key] = {
        isEnabled: function(props) {
            return featureProps[key].some(function(name) {
                return !!props[name];
            });
        }
    };
};
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && (typeof from === "undefined" ? "undefined" : _type_of(from)) === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/index.tsx
var src_exports = {};
__export(src_exports, {
    Button: function() {
        return Button;
    },
    cn: function() {
        return cn;
    }
});
module.exports = __toCommonJS(src_exports);
// src/components/Button.tsx
var React = __toESM(require("react"));
var import_class_variance_authority = require("class-variance-authority");
// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}
// ../../node_modules/framer-motion/dist/es/utils/warn-once.mjs
var warned = /* @__PURE__ */ new Set();
function warnOnce(condition, message, element) {
    if (condition || warned.has(message)) return;
    console.warn(message);
    if (element) console.warn(element);
    warned.add(message);
}
// ../../node_modules/framer-motion/dist/es/render/components/create-proxy.mjs
function createDOMMotionComponentProxy(componentFactory) {
    if (typeof Proxy === "undefined") {
        return componentFactory;
    }
    var componentCache = /* @__PURE__ */ new Map();
    var deprecatedFactoryFunction = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (process.env.NODE_ENV !== "production") {
            warnOnce(false, "motion() is deprecated. Use motion.create() instead.");
        }
        return componentFactory.apply(void 0, _to_consumable_array(args));
    };
    return new Proxy(deprecatedFactoryFunction, {
        /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */ get: function(_target, key) {
            if (key === "create") return componentFactory;
            if (!componentCache.has(key)) {
                componentCache.set(key, componentFactory(key));
            }
            return componentCache.get(key);
        }
    });
}
// ../../node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs
function isAnimationControls(v) {
    return v !== null && (typeof v === "undefined" ? "undefined" : _type_of(v)) === "object" && typeof v.start === "function";
}
// ../../node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs
var isKeyframesTarget = function(v) {
    return Array.isArray(v);
};
// ../../node_modules/framer-motion/dist/es/utils/shallow-compare.mjs
function shallowCompare(next, prev) {
    if (!Array.isArray(prev)) return false;
    var prevLength = prev.length;
    if (prevLength !== next.length) return false;
    for(var i = 0; i < prevLength; i++){
        if (prev[i] !== next[i]) return false;
    }
    return true;
}
// ../../node_modules/framer-motion/dist/es/render/utils/is-variant-label.mjs
function isVariantLabel(v) {
    return typeof v === "string" || Array.isArray(v);
}
// ../../node_modules/framer-motion/dist/es/render/utils/resolve-variants.mjs
function getValueState(visualElement) {
    var state = [
        {},
        {}
    ];
    visualElement === null || visualElement === void 0 ? void 0 : visualElement.values.forEach(function(value, key) {
        state[0][key] = value.get();
        state[1][key] = value.getVelocity();
    });
    return state;
}
function resolveVariantFromProps(props, definition, custom, visualElement) {
    if (typeof definition === "function") {
        var _getValueState = _sliced_to_array(getValueState(visualElement), 2), current = _getValueState[0], velocity = _getValueState[1];
        definition = definition(custom !== void 0 ? custom : props.custom, current, velocity);
    }
    if (typeof definition === "string") {
        definition = props.variants && props.variants[definition];
    }
    if (typeof definition === "function") {
        var _getValueState1 = _sliced_to_array(getValueState(visualElement), 2), current1 = _getValueState1[0], velocity1 = _getValueState1[1];
        definition = definition(custom !== void 0 ? custom : props.custom, current1, velocity1);
    }
    return definition;
}
// ../../node_modules/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs
function resolveVariant(visualElement, definition, custom) {
    var props = visualElement.getProps();
    return resolveVariantFromProps(props, definition, custom !== void 0 ? custom : props.custom, visualElement);
}
// ../../node_modules/framer-motion/dist/es/render/utils/variant-props.mjs
var variantPriorityOrder = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit"
];
var variantProps = [
    "initial"
].concat(_to_consumable_array(variantPriorityOrder));
// ../../node_modules/framer-motion/dist/es/render/html/utils/transform.mjs
var transformPropOrder = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY"
];
var transformProps = new Set(transformPropOrder);
// ../../node_modules/framer-motion/dist/es/utils/time-conversion.mjs
var secondsToMilliseconds = function(seconds) {
    return seconds * 1e3;
};
var millisecondsToSeconds = function(milliseconds) {
    return milliseconds / 1e3;
};
// ../../node_modules/framer-motion/dist/es/animation/utils/default-transitions.mjs
var underDampedSpring = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
};
var criticallyDampedSpring = function(target) {
    return {
        type: "spring",
        stiffness: 550,
        damping: target === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    };
};
var keyframesTransition = {
    type: "keyframes",
    duration: 0.8
};
var ease = {
    type: "keyframes",
    ease: [
        0.25,
        0.1,
        0.35,
        1
    ],
    duration: 0.3
};
var getDefaultTransition = function(valueKey, param) {
    var keyframes2 = param.keyframes;
    if (keyframes2.length > 2) {
        return keyframesTransition;
    } else if (transformProps.has(valueKey)) {
        return valueKey.startsWith("scale") ? criticallyDampedSpring(keyframes2[1]) : underDampedSpring;
    }
    return ease;
};
// ../../node_modules/framer-motion/dist/es/animation/utils/get-value-transition.mjs
function getValueTransition(transition, key) {
    return transition ? transition[key] || transition["default"] || transition : void 0;
}
// ../../node_modules/framer-motion/dist/es/utils/GlobalConfig.mjs
var MotionGlobalConfig = {
    skipAnimations: false,
    useManualTiming: false
};
// ../../node_modules/framer-motion/dist/es/utils/use-instant-transition-state.mjs
var instantAnimationState = {
    current: false
};
// ../../node_modules/framer-motion/dist/es/animation/animators/waapi/utils/get-final-keyframe.mjs
var isNotNull = function(value) {
    return value !== null;
};
function getFinalKeyframe(keyframes2, param, finalKeyframe) {
    var repeat = param.repeat, _param_repeatType = param.repeatType, repeatType = _param_repeatType === void 0 ? "loop" : _param_repeatType;
    var resolvedKeyframes = keyframes2.filter(isNotNull);
    var index = repeat && repeatType !== "loop" && repeat % 2 === 1 ? 0 : resolvedKeyframes.length - 1;
    return !index || finalKeyframe === void 0 ? resolvedKeyframes[index] : finalKeyframe;
}
// ../../node_modules/framer-motion/dist/es/utils/noop.mjs
var noop = function(any) {
    return any;
};
// ../../node_modules/framer-motion/dist/es/frameloop/render-step.mjs
function createRenderStep(runNextFrame) {
    var thisFrame = /* @__PURE__ */ new Set();
    var nextFrame = /* @__PURE__ */ new Set();
    var isProcessing = false;
    var flushNextFrame = false;
    var toKeepAlive = /* @__PURE__ */ new WeakSet();
    var latestFrameData = {
        delta: 0,
        timestamp: 0,
        isProcessing: false
    };
    function triggerCallback(callback) {
        if (toKeepAlive.has(callback)) {
            step.schedule(callback);
            runNextFrame();
        }
        callback(latestFrameData);
    }
    var step = {
        /**
     * Schedule a process to run on the next frame.
     */ schedule: function(callback) {
            var keepAlive = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, immediate = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
            var addToCurrentFrame = immediate && isProcessing;
            var queue = addToCurrentFrame ? thisFrame : nextFrame;
            if (keepAlive) toKeepAlive.add(callback);
            if (!queue.has(callback)) queue.add(callback);
            return callback;
        },
        /**
     * Cancel the provided callback from running on the next frame.
     */ cancel: function(callback) {
            nextFrame.delete(callback);
            toKeepAlive.delete(callback);
        },
        /**
     * Execute all schedule callbacks.
     */ process: function(frameData2) {
            latestFrameData = frameData2;
            if (isProcessing) {
                flushNextFrame = true;
                return;
            }
            isProcessing = true;
            var ref;
            ref = [
                nextFrame,
                thisFrame
            ], thisFrame = ref[0], nextFrame = ref[1], ref;
            nextFrame.clear();
            thisFrame.forEach(triggerCallback);
            isProcessing = false;
            if (flushNextFrame) {
                flushNextFrame = false;
                step.process(frameData2);
            }
        }
    };
    return step;
}
// ../../node_modules/framer-motion/dist/es/frameloop/batcher.mjs
var stepsOrder = [
    "read",
    // Read
    "resolveKeyframes",
    // Write/Read/Write/Read
    "update",
    // Compute
    "preRender",
    // Compute
    "render",
    // Write
    "postRender"
];
var maxElapsed = 40;
function createRenderBatcher(scheduleNextBatch, allowKeepAlive) {
    var runNextFrame = false;
    var useDefaultElapsed = true;
    var state = {
        delta: 0,
        timestamp: 0,
        isProcessing: false
    };
    var flagRunNextFrame = function() {
        return runNextFrame = true;
    };
    var steps = stepsOrder.reduce(function(acc, key) {
        acc[key] = createRenderStep(flagRunNextFrame);
        return acc;
    }, {});
    var read = steps.read, resolveKeyframes = steps.resolveKeyframes, update = steps.update, preRender = steps.preRender, render = steps.render, postRender = steps.postRender;
    var processBatch = function() {
        var timestamp = MotionGlobalConfig.useManualTiming ? state.timestamp : performance.now();
        runNextFrame = false;
        state.delta = useDefaultElapsed ? 1e3 / 60 : Math.max(Math.min(timestamp - state.timestamp, maxElapsed), 1);
        state.timestamp = timestamp;
        state.isProcessing = true;
        read.process(state);
        resolveKeyframes.process(state);
        update.process(state);
        preRender.process(state);
        render.process(state);
        postRender.process(state);
        state.isProcessing = false;
        if (runNextFrame && allowKeepAlive) {
            useDefaultElapsed = false;
            scheduleNextBatch(processBatch);
        }
    };
    var wake = function() {
        runNextFrame = true;
        useDefaultElapsed = true;
        if (!state.isProcessing) {
            scheduleNextBatch(processBatch);
        }
    };
    var schedule = stepsOrder.reduce(function(acc, key) {
        var step = steps[key];
        acc[key] = function(process2) {
            var keepAlive = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, immediate = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
            if (!runNextFrame) wake();
            return step.schedule(process2, keepAlive, immediate);
        };
        return acc;
    }, {});
    var cancel = function(process2) {
        for(var i = 0; i < stepsOrder.length; i++){
            steps[stepsOrder[i]].cancel(process2);
        }
    };
    return {
        schedule: schedule,
        cancel: cancel,
        state: state,
        steps: steps
    };
}
// ../../node_modules/framer-motion/dist/es/frameloop/frame.mjs
var _createRenderBatcher = createRenderBatcher(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : noop, true), frame = _createRenderBatcher.schedule, cancelFrame = _createRenderBatcher.cancel, frameData = _createRenderBatcher.state, frameSteps = _createRenderBatcher.steps;
// ../../node_modules/framer-motion/dist/es/easing/cubic-bezier.mjs
var calcBezier = function(t, a1, a2) {
    return (((1 - 3 * a2 + 3 * a1) * t + (3 * a2 - 6 * a1)) * t + 3 * a1) * t;
};
var subdivisionPrecision = 1e-7;
var subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    var currentX;
    var currentT;
    var i = 0;
    do {
        currentT = lowerBound + (upperBound - lowerBound) / 2;
        currentX = calcBezier(currentT, mX1, mX2) - x;
        if (currentX > 0) {
            upperBound = currentT;
        } else {
            lowerBound = currentT;
        }
    }while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
    return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
    if (mX1 === mY1 && mX2 === mY2) return noop;
    var getTForX = function(aX) {
        return binarySubdivide(aX, 0, 1, mX1, mX2);
    };
    return function(t) {
        return t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
    };
}
// ../../node_modules/framer-motion/dist/es/easing/modifiers/mirror.mjs
var mirrorEasing = function(easing) {
    return function(p) {
        return p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
    };
};
// ../../node_modules/framer-motion/dist/es/easing/modifiers/reverse.mjs
var reverseEasing = function(easing) {
    return function(p) {
        return 1 - easing(1 - p);
    };
};
// ../../node_modules/framer-motion/dist/es/easing/back.mjs
var backOut = /* @__PURE__ */ cubicBezier(0.33, 1.53, 0.69, 0.99);
var backIn = /* @__PURE__ */ reverseEasing(backOut);
var backInOut = /* @__PURE__ */ mirrorEasing(backIn);
// ../../node_modules/framer-motion/dist/es/easing/anticipate.mjs
var anticipate = function(p) {
    return (p *= 2) < 1 ? 0.5 * backIn(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
};
// ../../node_modules/framer-motion/dist/es/easing/circ.mjs
var circIn = function(p) {
    return 1 - Math.sin(Math.acos(p));
};
var circOut = reverseEasing(circIn);
var circInOut = mirrorEasing(circIn);
// ../../node_modules/framer-motion/dist/es/utils/is-zero-value-string.mjs
var isZeroValueString = function(v) {
    return RegExp("^0[^.\\s]+$", "u").test(v);
};
// ../../node_modules/framer-motion/dist/es/animation/utils/is-none.mjs
function isNone(value) {
    if (typeof value === "number") {
        return value === 0;
    } else if (value !== null) {
        return value === "none" || value === "0" || isZeroValueString(value);
    } else {
        return true;
    }
}
// ../../node_modules/framer-motion/dist/es/utils/errors.mjs
var warning = noop;
var invariant = noop;
if (process.env.NODE_ENV !== "production") {
    warning = function(check, message) {
        if (!check && typeof console !== "undefined") {
            console.warn(message);
        }
    };
    invariant = function(check, message) {
        if (!check) {
            throw new Error(message);
        }
    };
}
// ../../node_modules/framer-motion/dist/es/utils/is-numerical-string.mjs
var isNumericalString = function(v) {
    return RegExp("^-?(?:\\d+(?:\\.\\d+)?|\\.\\d+)$", "u").test(v);
};
// ../../node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs
var checkStringStartsWith = function(token) {
    return function(key) {
        return typeof key === "string" && key.startsWith(token);
    };
};
var isCSSVariableName = /* @__PURE__ */ checkStringStartsWith("--");
var startsAsVariableToken = /* @__PURE__ */ checkStringStartsWith("var(--");
var isCSSVariableToken = function(value) {
    var startsWithToken = startsAsVariableToken(value);
    if (!startsWithToken) return false;
    return singleCssVariableRegex.test(value.split("/*")[0].trim());
};
var singleCssVariableRegex = RegExp("var\\(--(?:[\\w-]+\\s*|[\\w-]+\\s*,(?:\\s*[^)(\\s]|\\s*\\((?:[^)(]|\\([^)(]*\\))*\\))+\\s*)\\)$", "iu");
// ../../node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.mjs
var splitCSSVariableRegex = // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
RegExp("^var\\(--(?:([\\w-]+)|([\\w-]+), ?([a-zA-Z\\d ()%#.,-]+))\\)", "u");
function parseCSSVariable(current) {
    var match = splitCSSVariableRegex.exec(current);
    if (!match) return [
        , 
    ];
    var _match = _sliced_to_array(match, 4), token1 = _match[1], token2 = _match[2], fallback = _match[3];
    return [
        "--".concat(token1 !== null && token1 !== void 0 ? token1 : token2),
        fallback
    ];
}
var maxDepth = 4;
function getVariableValue(current, element) {
    var depth = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
    invariant(depth <= maxDepth, 'Max CSS variable fallback depth detected in property "'.concat(current, '". This may indicate a circular fallback dependency.'));
    var _parseCSSVariable = _sliced_to_array(parseCSSVariable(current), 2), token = _parseCSSVariable[0], fallback = _parseCSSVariable[1];
    if (!token) return;
    var resolved = window.getComputedStyle(element).getPropertyValue(token);
    if (resolved) {
        var trimmed = resolved.trim();
        return isNumericalString(trimmed) ? parseFloat(trimmed) : trimmed;
    }
    return isCSSVariableToken(fallback) ? getVariableValue(fallback, element, depth + 1) : fallback;
}
// ../../node_modules/framer-motion/dist/es/utils/clamp.mjs
var clamp = function(min, max, v) {
    if (v > max) return max;
    if (v < min) return min;
    return v;
};
// ../../node_modules/framer-motion/dist/es/value/types/numbers/index.mjs
var number = {
    test: function(v) {
        return typeof v === "number";
    },
    parse: parseFloat,
    transform: function(v) {
        return v;
    }
};
var alpha = _object_spread_props(_object_spread({}, number), {
    transform: function(v) {
        return clamp(0, 1, v);
    }
});
var scale = _object_spread_props(_object_spread({}, number), {
    default: 1
});
// ../../node_modules/framer-motion/dist/es/value/types/numbers/units.mjs
var createUnitType = function(unit) {
    return {
        test: function(v) {
            return typeof v === "string" && v.endsWith(unit) && v.split(" ").length === 1;
        },
        parse: parseFloat,
        transform: function(v) {
            return "".concat(v).concat(unit);
        }
    };
};
var degrees = /* @__PURE__ */ createUnitType("deg");
var percent = /* @__PURE__ */ createUnitType("%");
var px = /* @__PURE__ */ createUnitType("px");
var vh = /* @__PURE__ */ createUnitType("vh");
var vw = /* @__PURE__ */ createUnitType("vw");
var progressPercentage = _object_spread_props(_object_spread({}, percent), {
    parse: function(v) {
        return percent.parse(v) / 100;
    },
    transform: function(v) {
        return percent.transform(v * 100);
    }
});
// ../../node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.mjs
var positionalKeys = /* @__PURE__ */ new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY"
]);
var isNumOrPxType = function(v) {
    return v === number || v === px;
};
var getPosFromMatrix = function(matrix, pos) {
    return parseFloat(matrix.split(", ")[pos]);
};
var getTranslateFromMatrix = function(pos2, pos3) {
    return function(_bbox, param) {
        var transform = param.transform;
        if (transform === "none" || !transform) return 0;
        var matrix3d = transform.match(RegExp("^matrix3d\\((.+)\\)$", "u"));
        if (matrix3d) {
            return getPosFromMatrix(matrix3d[1], pos3);
        } else {
            var matrix = transform.match(RegExp("^matrix\\((.+)\\)$", "u"));
            if (matrix) {
                return getPosFromMatrix(matrix[1], pos2);
            } else {
                return 0;
            }
        }
    };
};
var transformKeys = /* @__PURE__ */ new Set([
    "x",
    "y",
    "z"
]);
var nonTranslationalTransformKeys = transformPropOrder.filter(function(key) {
    return !transformKeys.has(key);
});
function removeNonTranslationalTransform(visualElement) {
    var removedTransforms = [];
    nonTranslationalTransformKeys.forEach(function(key) {
        var value = visualElement.getValue(key);
        if (value !== void 0) {
            removedTransforms.push([
                key,
                value.get()
            ]);
            value.set(key.startsWith("scale") ? 1 : 0);
        }
    });
    return removedTransforms;
}
var positionalValues = {
    // Dimensions
    width: function(param, param1) {
        var x = param.x, _param_paddingLeft = param1.paddingLeft, paddingLeft = _param_paddingLeft === void 0 ? "0" : _param_paddingLeft, _param_paddingRight = param1.paddingRight, paddingRight = _param_paddingRight === void 0 ? "0" : _param_paddingRight;
        return x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight);
    },
    height: function(param, param1) {
        var y = param.y, _param_paddingTop = param1.paddingTop, paddingTop = _param_paddingTop === void 0 ? "0" : _param_paddingTop, _param_paddingBottom = param1.paddingBottom, paddingBottom = _param_paddingBottom === void 0 ? "0" : _param_paddingBottom;
        return y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom);
    },
    top: function(_bbox, param) {
        var top = param.top;
        return parseFloat(top);
    },
    left: function(_bbox, param) {
        var left = param.left;
        return parseFloat(left);
    },
    bottom: function(param, param1) {
        var y = param.y, top = param1.top;
        return parseFloat(top) + (y.max - y.min);
    },
    right: function(param, param1) {
        var x = param.x, left = param1.left;
        return parseFloat(left) + (x.max - x.min);
    },
    // Transform
    x: getTranslateFromMatrix(4, 13),
    y: getTranslateFromMatrix(5, 14)
};
positionalValues.translateX = positionalValues.x;
positionalValues.translateY = positionalValues.y;
// ../../node_modules/framer-motion/dist/es/render/dom/value-types/test.mjs
var testValueType = function(v) {
    return function(type) {
        return type.test(v);
    };
};
// ../../node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.mjs
var auto = {
    test: function(v) {
        return v === "auto";
    },
    parse: function(v) {
        return v;
    }
};
// ../../node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.mjs
var dimensionValueTypes = [
    number,
    px,
    percent,
    degrees,
    vw,
    vh,
    auto
];
var findDimensionValueType = function(v) {
    return dimensionValueTypes.find(testValueType(v));
};
// ../../node_modules/framer-motion/dist/es/render/utils/KeyframesResolver.mjs
var toResolve = /* @__PURE__ */ new Set();
var isScheduled = false;
var anyNeedsMeasurement = false;
function measureAllKeyframes() {
    if (anyNeedsMeasurement) {
        var resolversToMeasure = Array.from(toResolve).filter(function(resolver) {
            return resolver.needsMeasurement;
        });
        var elementsToMeasure = new Set(resolversToMeasure.map(function(resolver) {
            return resolver.element;
        }));
        var transformsToRestore = /* @__PURE__ */ new Map();
        elementsToMeasure.forEach(function(element) {
            var removedTransforms = removeNonTranslationalTransform(element);
            if (!removedTransforms.length) return;
            transformsToRestore.set(element, removedTransforms);
            element.render();
        });
        resolversToMeasure.forEach(function(resolver) {
            return resolver.measureInitialState();
        });
        elementsToMeasure.forEach(function(element) {
            element.render();
            var restore = transformsToRestore.get(element);
            if (restore) {
                restore.forEach(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    var _a;
                    (_a = element.getValue(key)) === null || _a === void 0 ? void 0 : _a.set(value);
                });
            }
        });
        resolversToMeasure.forEach(function(resolver) {
            return resolver.measureEndState();
        });
        resolversToMeasure.forEach(function(resolver) {
            if (resolver.suspendedScrollY !== void 0) {
                window.scrollTo(0, resolver.suspendedScrollY);
            }
        });
    }
    anyNeedsMeasurement = false;
    isScheduled = false;
    toResolve.forEach(function(resolver) {
        return resolver.complete();
    });
    toResolve.clear();
}
function readAllKeyframes() {
    toResolve.forEach(function(resolver) {
        resolver.readKeyframes();
        if (resolver.needsMeasurement) {
            anyNeedsMeasurement = true;
        }
    });
}
function flushKeyframeResolvers() {
    readAllKeyframes();
    measureAllKeyframes();
}
var KeyframeResolver = /*#__PURE__*/ function() {
    function KeyframeResolver(unresolvedKeyframes, onComplete, name, motionValue2, element) {
        var isAsync = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : false;
        _class_call_check(this, KeyframeResolver);
        this.isComplete = false;
        this.isAsync = false;
        this.needsMeasurement = false;
        this.isScheduled = false;
        this.unresolvedKeyframes = _to_consumable_array(unresolvedKeyframes);
        this.onComplete = onComplete;
        this.name = name;
        this.motionValue = motionValue2;
        this.element = element;
        this.isAsync = isAsync;
    }
    _create_class(KeyframeResolver, [
        {
            key: "scheduleResolve",
            value: function scheduleResolve() {
                this.isScheduled = true;
                if (this.isAsync) {
                    toResolve.add(this);
                    if (!isScheduled) {
                        isScheduled = true;
                        frame.read(readAllKeyframes);
                        frame.resolveKeyframes(measureAllKeyframes);
                    }
                } else {
                    this.readKeyframes();
                    this.complete();
                }
            }
        },
        {
            key: "readKeyframes",
            value: function readKeyframes() {
                var _this = this, unresolvedKeyframes = _this.unresolvedKeyframes, name = _this.name, element = _this.element, motionValue2 = _this.motionValue;
                for(var i = 0; i < unresolvedKeyframes.length; i++){
                    if (unresolvedKeyframes[i] === null) {
                        if (i === 0) {
                            var currentValue = motionValue2 === null || motionValue2 === void 0 ? void 0 : motionValue2.get();
                            var finalKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
                            if (currentValue !== void 0) {
                                unresolvedKeyframes[0] = currentValue;
                            } else if (element && name) {
                                var valueAsRead = element.readValue(name, finalKeyframe);
                                if (valueAsRead !== void 0 && valueAsRead !== null) {
                                    unresolvedKeyframes[0] = valueAsRead;
                                }
                            }
                            if (unresolvedKeyframes[0] === void 0) {
                                unresolvedKeyframes[0] = finalKeyframe;
                            }
                            if (motionValue2 && currentValue === void 0) {
                                motionValue2.set(unresolvedKeyframes[0]);
                            }
                        } else {
                            unresolvedKeyframes[i] = unresolvedKeyframes[i - 1];
                        }
                    }
                }
            }
        },
        {
            key: "setFinalKeyframe",
            value: function setFinalKeyframe() {}
        },
        {
            key: "measureInitialState",
            value: function measureInitialState() {}
        },
        {
            key: "renderEndStyles",
            value: function renderEndStyles() {}
        },
        {
            key: "measureEndState",
            value: function measureEndState() {}
        },
        {
            key: "complete",
            value: function complete() {
                this.isComplete = true;
                this.onComplete(this.unresolvedKeyframes, this.finalKeyframe);
                toResolve.delete(this);
            }
        },
        {
            key: "cancel",
            value: function cancel() {
                if (!this.isComplete) {
                    this.isScheduled = false;
                    toResolve.delete(this);
                }
            }
        },
        {
            key: "resume",
            value: function resume() {
                if (!this.isComplete) this.scheduleResolve();
            }
        }
    ]);
    return KeyframeResolver;
}();
// ../../node_modules/framer-motion/dist/es/value/types/utils/sanitize.mjs
var sanitize = function(v) {
    return Math.round(v * 1e5) / 1e5;
};
// ../../node_modules/framer-motion/dist/es/value/types/utils/float-regex.mjs
var floatRegex = RegExp("-?(?:\\d+(?:\\.\\d+)?|\\.\\d+)", "gu");
// ../../node_modules/framer-motion/dist/es/value/types/utils/is-nullish.mjs
function isNullish(v) {
    return v == null;
}
// ../../node_modules/framer-motion/dist/es/value/types/utils/single-color-regex.mjs
var singleColorRegex = RegExp("^(?:#[\\da-f]{3,8}|(?:rgb|hsl)a?\\((?:-?[\\d.]+%?[,\\s]+){2}-?[\\d.]+%?\\s*(?:[,/]\\s*)?(?:\\b\\d+(?:\\.\\d+)?|\\.\\d+)?%?\\))$", "iu");
// ../../node_modules/framer-motion/dist/es/value/types/color/utils.mjs
var isColorString = function(type, testProp) {
    return function(v) {
        return Boolean(typeof v === "string" && singleColorRegex.test(v) && v.startsWith(type) || testProp && !isNullish(v) && Object.prototype.hasOwnProperty.call(v, testProp));
    };
};
var splitColor = function(aName, bName, cName) {
    return function(v) {
        if (typeof v !== "string") return v;
        var _v_match = _sliced_to_array(v.match(floatRegex), 4), a = _v_match[0], b = _v_match[1], c = _v_match[2], alpha2 = _v_match[3];
        var _obj;
        return _obj = {}, _define_property(_obj, aName, parseFloat(a)), _define_property(_obj, bName, parseFloat(b)), _define_property(_obj, cName, parseFloat(c)), _define_property(_obj, "alpha", alpha2 !== void 0 ? parseFloat(alpha2) : 1), _obj;
    };
};
// ../../node_modules/framer-motion/dist/es/value/types/color/rgba.mjs
var clampRgbUnit = function(v) {
    return clamp(0, 255, v);
};
var rgbUnit = _object_spread_props(_object_spread({}, number), {
    transform: function(v) {
        return Math.round(clampRgbUnit(v));
    }
});
var rgba = {
    test: /* @__PURE__ */ isColorString("rgb", "red"),
    parse: /* @__PURE__ */ splitColor("red", "green", "blue"),
    transform: function(param) {
        var red = param.red, green = param.green, blue = param.blue, tmp = param.alpha, alpha$1 = tmp === void 0 ? 1 : tmp;
        return "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
    }
};
// ../../node_modules/framer-motion/dist/es/value/types/color/hex.mjs
function parseHex(v) {
    var r = "";
    var g = "";
    var b = "";
    var a = "";
    if (v.length > 5) {
        r = v.substring(1, 3);
        g = v.substring(3, 5);
        b = v.substring(5, 7);
        a = v.substring(7, 9);
    } else {
        r = v.substring(1, 2);
        g = v.substring(2, 3);
        b = v.substring(3, 4);
        a = v.substring(4, 5);
        r += r;
        g += g;
        b += b;
        a += a;
    }
    return {
        red: parseInt(r, 16),
        green: parseInt(g, 16),
        blue: parseInt(b, 16),
        alpha: a ? parseInt(a, 16) / 255 : 1
    };
}
var hex = {
    test: /* @__PURE__ */ isColorString("#"),
    parse: parseHex,
    transform: rgba.transform
};
// ../../node_modules/framer-motion/dist/es/value/types/color/hsla.mjs
var hsla = {
    test: /* @__PURE__ */ isColorString("hsl", "hue"),
    parse: /* @__PURE__ */ splitColor("hue", "saturation", "lightness"),
    transform: function(param) {
        var hue = param.hue, saturation = param.saturation, lightness = param.lightness, tmp = param.alpha, alpha$1 = tmp === void 0 ? 1 : tmp;
        return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
    }
};
// ../../node_modules/framer-motion/dist/es/value/types/color/index.mjs
var color = {
    test: function(v) {
        return rgba.test(v) || hex.test(v) || hsla.test(v);
    },
    parse: function(v) {
        if (rgba.test(v)) {
            return rgba.parse(v);
        } else if (hsla.test(v)) {
            return hsla.parse(v);
        } else {
            return hex.parse(v);
        }
    },
    transform: function(v) {
        return typeof v === "string" ? v : v.hasOwnProperty("red") ? rgba.transform(v) : hsla.transform(v);
    }
};
// ../../node_modules/framer-motion/dist/es/value/types/utils/color-regex.mjs
var colorRegex = RegExp("(?:#[\\da-f]{3,8}|(?:rgb|hsl)a?\\((?:-?[\\d.]+%?[,\\s]+){2}-?[\\d.]+%?\\s*(?:[,/]\\s*)?(?:\\b\\d+(?:\\.\\d+)?|\\.\\d+)?%?\\))", "giu");
// ../../node_modules/framer-motion/dist/es/value/types/complex/index.mjs
function test(v) {
    var _a, _b;
    return isNaN(v) && typeof v === "string" && (((_a = v.match(floatRegex)) === null || _a === void 0 ? void 0 : _a.length) || 0) + (((_b = v.match(colorRegex)) === null || _b === void 0 ? void 0 : _b.length) || 0) > 0;
}
var NUMBER_TOKEN = "number";
var COLOR_TOKEN = "color";
var VAR_TOKEN = "var";
var VAR_FUNCTION_TOKEN = "var(";
var SPLIT_TOKEN = "${}";
var complexRegex = RegExp("var\\s*\\(\\s*--(?:[\\w-]+\\s*|[\\w-]+\\s*,(?:\\s*[^)(\\s]|\\s*\\((?:[^)(]|\\([^)(]*\\))*\\))+\\s*)\\)|#[\\da-f]{3,8}|(?:rgb|hsl)a?\\((?:-?[\\d.]+%?[,\\s]+){2}-?[\\d.]+%?\\s*(?:[,/]\\s*)?(?:\\b\\d+(?:\\.\\d+)?|\\.\\d+)?%?\\)|-?(?:\\d+(?:\\.\\d+)?|\\.\\d+)", "giu");
function analyseComplexValue(value) {
    var originalValue = value.toString();
    var values = [];
    var indexes = {
        color: [],
        number: [],
        var: []
    };
    var types = [];
    var i = 0;
    var tokenised = originalValue.replace(complexRegex, function(parsedValue) {
        if (color.test(parsedValue)) {
            indexes.color.push(i);
            types.push(COLOR_TOKEN);
            values.push(color.parse(parsedValue));
        } else if (parsedValue.startsWith(VAR_FUNCTION_TOKEN)) {
            indexes.var.push(i);
            types.push(VAR_TOKEN);
            values.push(parsedValue);
        } else {
            indexes.number.push(i);
            types.push(NUMBER_TOKEN);
            values.push(parseFloat(parsedValue));
        }
        ++i;
        return SPLIT_TOKEN;
    });
    var split = tokenised.split(SPLIT_TOKEN);
    return {
        values: values,
        split: split,
        indexes: indexes,
        types: types
    };
}
function parseComplexValue(v) {
    return analyseComplexValue(v).values;
}
function createTransformer(source) {
    var _analyseComplexValue = analyseComplexValue(source), split = _analyseComplexValue.split, types = _analyseComplexValue.types;
    var numSections = split.length;
    return function(v) {
        var output = "";
        for(var i = 0; i < numSections; i++){
            output += split[i];
            if (v[i] !== void 0) {
                var type = types[i];
                if (type === NUMBER_TOKEN) {
                    output += sanitize(v[i]);
                } else if (type === COLOR_TOKEN) {
                    output += color.transform(v[i]);
                } else {
                    output += v[i];
                }
            }
        }
        return output;
    };
}
var convertNumbersToZero = function(v) {
    return typeof v === "number" ? 0 : v;
};
function getAnimatableNone(v) {
    var parsed = parseComplexValue(v);
    var transformer = createTransformer(v);
    return transformer(parsed.map(convertNumbersToZero));
}
var complex = {
    test: test,
    parse: parseComplexValue,
    createTransformer: createTransformer,
    getAnimatableNone: getAnimatableNone
};
// ../../node_modules/framer-motion/dist/es/value/types/complex/filter.mjs
var maxDefaults = /* @__PURE__ */ new Set([
    "brightness",
    "contrast",
    "saturate",
    "opacity"
]);
function applyDefaultFilter(v) {
    var _v_slice_split = _sliced_to_array(v.slice(0, -1).split("("), 2), name = _v_slice_split[0], value = _v_slice_split[1];
    if (name === "drop-shadow") return v;
    var _ref = _sliced_to_array(value.match(floatRegex) || [], 1), number2 = _ref[0];
    if (!number2) return v;
    var unit = value.replace(number2, "");
    var defaultValue = maxDefaults.has(name) ? 1 : 0;
    if (number2 !== value) defaultValue *= 100;
    return name + "(" + defaultValue + unit + ")";
}
var functionRegex = RegExp("\\b([a-z-]*)\\(.*?\\)", "gu");
var filter = _object_spread_props(_object_spread({}, complex), {
    getAnimatableNone: function(v) {
        var functions = v.match(functionRegex);
        return functions ? functions.map(applyDefaultFilter).join(" ") : v;
    }
});
// ../../node_modules/framer-motion/dist/es/render/dom/value-types/number-browser.mjs
var browserNumberValueTypes = {
    // Border props
    borderWidth: px,
    borderTopWidth: px,
    borderRightWidth: px,
    borderBottomWidth: px,
    borderLeftWidth: px,
    borderRadius: px,
    radius: px,
    borderTopLeftRadius: px,
    borderTopRightRadius: px,
    borderBottomRightRadius: px,
    borderBottomLeftRadius: px,
    // Positioning props
    width: px,
    maxWidth: px,
    height: px,
    maxHeight: px,
    top: px,
    right: px,
    bottom: px,
    left: px,
    // Spacing props
    padding: px,
    paddingTop: px,
    paddingRight: px,
    paddingBottom: px,
    paddingLeft: px,
    margin: px,
    marginTop: px,
    marginRight: px,
    marginBottom: px,
    marginLeft: px,
    // Misc
    backgroundPositionX: px,
    backgroundPositionY: px
};
// ../../node_modules/framer-motion/dist/es/render/dom/value-types/transform.mjs
var transformValueTypes = {
    rotate: degrees,
    rotateX: degrees,
    rotateY: degrees,
    rotateZ: degrees,
    scale: scale,
    scaleX: scale,
    scaleY: scale,
    scaleZ: scale,
    skew: degrees,
    skewX: degrees,
    skewY: degrees,
    distance: px,
    translateX: px,
    translateY: px,
    translateZ: px,
    x: px,
    y: px,
    z: px,
    perspective: px,
    transformPerspective: px,
    opacity: alpha,
    originX: progressPercentage,
    originY: progressPercentage,
    originZ: px
};
// ../../node_modules/framer-motion/dist/es/render/dom/value-types/type-int.mjs
var int = _object_spread_props(_object_spread({}, number), {
    transform: Math.round
});
// ../../node_modules/framer-motion/dist/es/render/dom/value-types/number.mjs
var numberValueTypes = _object_spread_props(_object_spread({}, browserNumberValueTypes, transformValueTypes), {
    zIndex: int,
    size: px,
    // SVG
    fillOpacity: alpha,
    strokeOpacity: alpha,
    numOctaves: int
});
// ../../node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs
var defaultValueTypes = _object_spread_props(_object_spread({}, numberValueTypes), {
    // Color props
    color: color,
    backgroundColor: color,
    outlineColor: color,
    fill: color,
    stroke: color,
    // Border props
    borderColor: color,
    borderTopColor: color,
    borderRightColor: color,
    borderBottomColor: color,
    borderLeftColor: color,
    filter: filter,
    WebkitFilter: filter
});
var getDefaultValueType = function(key) {
    return defaultValueTypes[key];
};
// ../../node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs
function getAnimatableNone2(key, value) {
    var defaultValueType = getDefaultValueType(key);
    if (defaultValueType !== filter) defaultValueType = complex;
    return defaultValueType.getAnimatableNone ? defaultValueType.getAnimatableNone(value) : void 0;
}
// ../../node_modules/framer-motion/dist/es/render/html/utils/make-none-animatable.mjs
var invalidTemplates = /* @__PURE__ */ new Set([
    "auto",
    "none",
    "0"
]);
function makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name) {
    var i = 0;
    var animatableTemplate = void 0;
    while(i < unresolvedKeyframes.length && !animatableTemplate){
        var keyframe = unresolvedKeyframes[i];
        if (typeof keyframe === "string" && !invalidTemplates.has(keyframe) && analyseComplexValue(keyframe).values.length) {
            animatableTemplate = unresolvedKeyframes[i];
        }
        i++;
    }
    if (animatableTemplate && name) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = noneKeyframeIndexes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var noneIndex = _step.value;
                unresolvedKeyframes[noneIndex] = getAnimatableNone2(name, animatableTemplate);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
}
// ../../node_modules/framer-motion/dist/es/render/dom/DOMKeyframesResolver.mjs
var DOMKeyframesResolver = /*#__PURE__*/ function(KeyframeResolver) {
    _inherits(DOMKeyframesResolver, KeyframeResolver);
    function DOMKeyframesResolver(unresolvedKeyframes, onComplete, name, motionValue2, element) {
        _class_call_check(this, DOMKeyframesResolver);
        return _call_super(this, DOMKeyframesResolver, [
            unresolvedKeyframes,
            onComplete,
            name,
            motionValue2,
            element,
            true
        ]);
    }
    _create_class(DOMKeyframesResolver, [
        {
            key: "readKeyframes",
            value: function readKeyframes() {
                var _this = this, unresolvedKeyframes = _this.unresolvedKeyframes, element = _this.element, name = _this.name;
                if (!element || !element.current) return;
                _get(_get_prototype_of(DOMKeyframesResolver.prototype), "readKeyframes", this).call(this);
                for(var i = 0; i < unresolvedKeyframes.length; i++){
                    var keyframe = unresolvedKeyframes[i];
                    if (typeof keyframe === "string") {
                        keyframe = keyframe.trim();
                        if (isCSSVariableToken(keyframe)) {
                            var resolved = getVariableValue(keyframe, element.current);
                            if (resolved !== void 0) {
                                unresolvedKeyframes[i] = resolved;
                            }
                            if (i === unresolvedKeyframes.length - 1) {
                                this.finalKeyframe = keyframe;
                            }
                        }
                    }
                }
                this.resolveNoneKeyframes();
                if (!positionalKeys.has(name) || unresolvedKeyframes.length !== 2) {
                    return;
                }
                var _unresolvedKeyframes = _sliced_to_array(unresolvedKeyframes, 2), origin = _unresolvedKeyframes[0], target = _unresolvedKeyframes[1];
                var originType = findDimensionValueType(origin);
                var targetType = findDimensionValueType(target);
                if (originType === targetType) return;
                if (isNumOrPxType(originType) && isNumOrPxType(targetType)) {
                    for(var i1 = 0; i1 < unresolvedKeyframes.length; i1++){
                        var value = unresolvedKeyframes[i1];
                        if (typeof value === "string") {
                            unresolvedKeyframes[i1] = parseFloat(value);
                        }
                    }
                } else {
                    this.needsMeasurement = true;
                }
            }
        },
        {
            key: "resolveNoneKeyframes",
            value: function resolveNoneKeyframes() {
                var _this = this, unresolvedKeyframes = _this.unresolvedKeyframes, name = _this.name;
                var noneKeyframeIndexes = [];
                for(var i = 0; i < unresolvedKeyframes.length; i++){
                    if (isNone(unresolvedKeyframes[i])) {
                        noneKeyframeIndexes.push(i);
                    }
                }
                if (noneKeyframeIndexes.length) {
                    makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name);
                }
            }
        },
        {
            key: "measureInitialState",
            value: function measureInitialState() {
                var _this = this, element = _this.element, unresolvedKeyframes = _this.unresolvedKeyframes, name = _this.name;
                if (!element || !element.current) return;
                if (name === "height") {
                    this.suspendedScrollY = window.pageYOffset;
                }
                this.measuredOrigin = positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
                unresolvedKeyframes[0] = this.measuredOrigin;
                var measureKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
                if (measureKeyframe !== void 0) {
                    element.getValue(name, measureKeyframe).jump(measureKeyframe, false);
                }
            }
        },
        {
            key: "measureEndState",
            value: function measureEndState() {
                var _a;
                var _this = this, element = _this.element, name = _this.name, unresolvedKeyframes = _this.unresolvedKeyframes;
                if (!element || !element.current) return;
                var value = element.getValue(name);
                value && value.jump(this.measuredOrigin, false);
                var finalKeyframeIndex = unresolvedKeyframes.length - 1;
                var finalKeyframe = unresolvedKeyframes[finalKeyframeIndex];
                unresolvedKeyframes[finalKeyframeIndex] = positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
                if (finalKeyframe !== null && this.finalKeyframe === void 0) {
                    this.finalKeyframe = finalKeyframe;
                }
                if ((_a = this.removedTransforms) === null || _a === void 0 ? void 0 : _a.length) {
                    this.removedTransforms.forEach(function(param) {
                        var _param = _sliced_to_array(param, 2), unsetTransformName = _param[0], unsetTransformValue = _param[1];
                        element.getValue(unsetTransformName).set(unsetTransformValue);
                    });
                }
                this.resolveNoneKeyframes();
            }
        }
    ]);
    return DOMKeyframesResolver;
}(KeyframeResolver);
// ../../node_modules/framer-motion/dist/es/animation/generators/utils/is-generator.mjs
function isGenerator(type) {
    return typeof type === "function";
}
// ../../node_modules/framer-motion/dist/es/frameloop/sync-time.mjs
var now;
function clearTime() {
    now = void 0;
}
var time = {
    now: function() {
        if (now === void 0) {
            time.set(frameData.isProcessing || MotionGlobalConfig.useManualTiming ? frameData.timestamp : performance.now());
        }
        return now;
    },
    set: function(newTime) {
        now = newTime;
        queueMicrotask(clearTime);
    }
};
// ../../node_modules/framer-motion/dist/es/animation/utils/is-animatable.mjs
var isAnimatable = function(value, name) {
    if (name === "zIndex") return false;
    if (typeof value === "number" || Array.isArray(value)) return true;
    if (typeof value === "string" && // It's animatable if we have a string
    (complex.test(value) || value === "0") && // And it contains numbers and/or colors
    !value.startsWith("url(")) {
        return true;
    }
    return false;
};
// ../../node_modules/framer-motion/dist/es/animation/animators/utils/can-animate.mjs
function hasKeyframesChanged(keyframes2) {
    var current = keyframes2[0];
    if (keyframes2.length === 1) return true;
    for(var i = 0; i < keyframes2.length; i++){
        if (keyframes2[i] !== current) return true;
    }
}
function canAnimate(keyframes2, name, type, velocity) {
    var originKeyframe = keyframes2[0];
    if (originKeyframe === null) return false;
    if (name === "display" || name === "visibility") return true;
    var targetKeyframe = keyframes2[keyframes2.length - 1];
    var isOriginAnimatable = isAnimatable(originKeyframe, name);
    var isTargetAnimatable = isAnimatable(targetKeyframe, name);
    warning(isOriginAnimatable === isTargetAnimatable, "You are trying to animate ".concat(name, ' from "').concat(originKeyframe, '" to "').concat(targetKeyframe, '". ').concat(originKeyframe, " is not an animatable value - to enable this animation set ").concat(originKeyframe, " to a value animatable to ").concat(targetKeyframe, " via the `style` property."));
    if (!isOriginAnimatable || !isTargetAnimatable) {
        return false;
    }
    return hasKeyframesChanged(keyframes2) || (type === "spring" || isGenerator(type)) && velocity;
}
// ../../node_modules/framer-motion/dist/es/animation/animators/BaseAnimation.mjs
var MAX_RESOLVE_DELAY = 40;
var BaseAnimation = /*#__PURE__*/ function() {
    function BaseAnimation(_param) {
        _class_call_check(this, BaseAnimation);
        var _param_autoplay = _param.autoplay, autoplay = _param_autoplay === void 0 ? true : _param_autoplay, tmp = _param.delay, delay2 = tmp === void 0 ? 0 : tmp, _param_type = _param.type, type = _param_type === void 0 ? "keyframes" : _param_type, _param_repeat = _param.repeat, repeat = _param_repeat === void 0 ? 0 : _param_repeat, _param_repeatDelay = _param.repeatDelay, repeatDelay = _param_repeatDelay === void 0 ? 0 : _param_repeatDelay, _param_repeatType = _param.repeatType, repeatType = _param_repeatType === void 0 ? "loop" : _param_repeatType, options = _object_without_properties(_param, [
            "autoplay",
            "delay",
            "type",
            "repeat",
            "repeatDelay",
            "repeatType"
        ]);
        this.isStopped = false;
        this.hasAttemptedResolve = false;
        this.createdAt = time.now();
        this.options = _object_spread({
            autoplay: autoplay,
            delay: delay2,
            type: type,
            repeat: repeat,
            repeatDelay: repeatDelay,
            repeatType: repeatType
        }, options);
        this.updateFinishedPromise();
    }
    _create_class(BaseAnimation, [
        {
            /**
   * This method uses the createdAt and resolvedAt to calculate the
   * animation startTime. *Ideally*, we would use the createdAt time as t=0
   * as the following frame would then be the first frame of the animation in
   * progress, which would feel snappier.
   *
   * However, if there's a delay (main thread work) between the creation of
   * the animation and the first commited frame, we prefer to use resolvedAt
   * to avoid a sudden jump into the animation.
   */ key: "calcStartTime",
            value: function calcStartTime() {
                if (!this.resolvedAt) return this.createdAt;
                return this.resolvedAt - this.createdAt > MAX_RESOLVE_DELAY ? this.resolvedAt : this.createdAt;
            }
        },
        {
            key: "resolved",
            get: /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */ function get() {
                if (!this._resolved && !this.hasAttemptedResolve) {
                    flushKeyframeResolvers();
                }
                return this._resolved;
            }
        },
        {
            /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */ key: "onKeyframesResolved",
            value: function onKeyframesResolved(keyframes2, finalKeyframe) {
                this.resolvedAt = time.now();
                this.hasAttemptedResolve = true;
                var _this_options = this.options, name = _this_options.name, type = _this_options.type, velocity = _this_options.velocity, delay2 = _this_options.delay, onComplete = _this_options.onComplete, onUpdate = _this_options.onUpdate, isGenerator2 = _this_options.isGenerator;
                if (!isGenerator2 && !canAnimate(keyframes2, name, type, velocity)) {
                    if (instantAnimationState.current || !delay2) {
                        onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(getFinalKeyframe(keyframes2, this.options, finalKeyframe));
                        onComplete === null || onComplete === void 0 ? void 0 : onComplete();
                        this.resolveFinishedPromise();
                        return;
                    } else {
                        this.options.duration = 0;
                    }
                }
                var resolvedAnimation = this.initPlayback(keyframes2, finalKeyframe);
                if (resolvedAnimation === false) return;
                this._resolved = _object_spread({
                    keyframes: keyframes2,
                    finalKeyframe: finalKeyframe
                }, resolvedAnimation);
                this.onPostResolved();
            }
        },
        {
            key: "onPostResolved",
            value: function onPostResolved() {}
        },
        {
            /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */ key: "then",
            value: function then(resolve, reject) {
                return this.currentFinishedPromise.then(resolve, reject);
            }
        },
        {
            key: "flatten",
            value: function flatten() {
                this.options.type = "keyframes";
                this.options.ease = "linear";
            }
        },
        {
            key: "updateFinishedPromise",
            value: function updateFinishedPromise() {
                var _this = this;
                this.currentFinishedPromise = new Promise(function(resolve) {
                    _this.resolveFinishedPromise = resolve;
                });
            }
        }
    ]);
    return BaseAnimation;
}();
// ../../node_modules/framer-motion/dist/es/utils/progress.mjs
var progress = function(from, to, value) {
    var toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};
// ../../node_modules/framer-motion/dist/es/animation/animators/waapi/utils/linear.mjs
var generateLinearEasing = function(easing, duration) {
    var resolution = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 10;
    var points = "";
    var numPoints = Math.max(Math.round(duration / resolution), 2);
    for(var i = 0; i < numPoints; i++){
        points += easing(progress(0, numPoints - 1, i)) + ", ";
    }
    return "linear(".concat(points.substring(0, points.length - 2), ")");
};
// ../../node_modules/framer-motion/dist/es/utils/velocity-per-second.mjs
function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1e3 / frameDuration) : 0;
}
// ../../node_modules/framer-motion/dist/es/animation/generators/utils/velocity.mjs
var velocitySampleDuration = 5;
function calcGeneratorVelocity(resolveValue, t, current) {
    var prevT = Math.max(t - velocitySampleDuration, 0);
    return velocityPerSecond(current - resolveValue(prevT), t - prevT);
}
// ../../node_modules/framer-motion/dist/es/animation/generators/spring/defaults.mjs
var springDefaults = {
    // Default spring physics
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    // Default duration/bounce-based options
    duration: 800,
    // in ms
    bounce: 0.3,
    visualDuration: 0.3,
    // in seconds
    // Rest thresholds
    restSpeed: {
        granular: 0.01,
        default: 2
    },
    restDelta: {
        granular: 5e-3,
        default: 0.5
    },
    // Limits
    minDuration: 0.01,
    // in seconds
    maxDuration: 10,
    // in seconds
    minDamping: 0.05,
    maxDamping: 1
};
// ../../node_modules/framer-motion/dist/es/animation/generators/spring/find.mjs
var safeMin = 1e-3;
function findSpring(param) {
    var _param_duration = param.duration, duration = _param_duration === void 0 ? springDefaults.duration : _param_duration, _param_bounce = param.bounce, bounce = _param_bounce === void 0 ? springDefaults.bounce : _param_bounce, _param_velocity = param.velocity, velocity = _param_velocity === void 0 ? springDefaults.velocity : _param_velocity, _param_mass = param.mass, mass = _param_mass === void 0 ? springDefaults.mass : _param_mass;
    var envelope;
    var derivative;
    warning(duration <= secondsToMilliseconds(springDefaults.maxDuration), "Spring duration must be 10 seconds or less");
    var dampingRatio = 1 - bounce;
    dampingRatio = clamp(springDefaults.minDamping, springDefaults.maxDamping, dampingRatio);
    duration = clamp(springDefaults.minDuration, springDefaults.maxDuration, millisecondsToSeconds(duration));
    if (dampingRatio < 1) {
        envelope = function(undampedFreq2) {
            var exponentialDecay = undampedFreq2 * dampingRatio;
            var delta = exponentialDecay * duration;
            var a = exponentialDecay - velocity;
            var b = calcAngularFreq(undampedFreq2, dampingRatio);
            var c = Math.exp(-delta);
            return safeMin - a / b * c;
        };
        derivative = function(undampedFreq2) {
            var exponentialDecay = undampedFreq2 * dampingRatio;
            var delta = exponentialDecay * duration;
            var d = delta * velocity + velocity;
            var e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq2, 2) * duration;
            var f = Math.exp(-delta);
            var g = calcAngularFreq(Math.pow(undampedFreq2, 2), dampingRatio);
            var factor = -envelope(undampedFreq2) + safeMin > 0 ? -1 : 1;
            return factor * ((d - e) * f) / g;
        };
    } else {
        envelope = function(undampedFreq2) {
            var a = Math.exp(-undampedFreq2 * duration);
            var b = (undampedFreq2 - velocity) * duration + 1;
            return -safeMin + a * b;
        };
        derivative = function(undampedFreq2) {
            var a = Math.exp(-undampedFreq2 * duration);
            var b = (velocity - undampedFreq2) * (duration * duration);
            return a * b;
        };
    }
    var initialGuess = 5 / duration;
    var undampedFreq = approximateRoot(envelope, derivative, initialGuess);
    duration = secondsToMilliseconds(duration);
    if (isNaN(undampedFreq)) {
        return {
            stiffness: springDefaults.stiffness,
            damping: springDefaults.damping,
            duration: duration
        };
    } else {
        var stiffness = Math.pow(undampedFreq, 2) * mass;
        return {
            stiffness: stiffness,
            damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
            duration: duration
        };
    }
}
var rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
    var result = initialGuess;
    for(var i = 1; i < rootIterations; i++){
        result = result - envelope(result) / derivative(result);
    }
    return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
    return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}
// ../../node_modules/framer-motion/dist/es/animation/generators/utils/calc-duration.mjs
var maxGeneratorDuration = 2e4;
function calcGeneratorDuration(generator) {
    var duration = 0;
    var timeStep = 50;
    var state = generator.next(duration);
    while(!state.done && duration < maxGeneratorDuration){
        duration += timeStep;
        state = generator.next(duration);
    }
    return duration >= maxGeneratorDuration ? Infinity : duration;
}
// ../../node_modules/framer-motion/dist/es/animation/generators/spring/index.mjs
var durationKeys = [
    "duration",
    "bounce"
];
var physicsKeys = [
    "stiffness",
    "damping",
    "mass"
];
function isSpringType(options, keys) {
    return keys.some(function(key) {
        return options[key] !== void 0;
    });
}
function getSpringOptions(options) {
    var springOptions = _object_spread({
        velocity: springDefaults.velocity,
        stiffness: springDefaults.stiffness,
        damping: springDefaults.damping,
        mass: springDefaults.mass,
        isResolvedFromDuration: false
    }, options);
    if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
        if (options.visualDuration) {
            var visualDuration = options.visualDuration;
            var root = 2 * Math.PI / (visualDuration * 1.2);
            var stiffness = root * root;
            var damping = 2 * clamp(0.05, 1, 1 - options.bounce) * Math.sqrt(stiffness);
            springOptions = _object_spread_props(_object_spread({}, springOptions), {
                mass: springDefaults.mass,
                stiffness: stiffness,
                damping: damping
            });
        } else {
            var derived = findSpring(options);
            springOptions = _object_spread_props(_object_spread({}, springOptions, derived), {
                mass: springDefaults.mass
            });
            springOptions.isResolvedFromDuration = true;
        }
    }
    return springOptions;
}
function spring() {
    var optionsOrVisualDuration = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : springDefaults.visualDuration, bounce = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : springDefaults.bounce;
    var options = (typeof optionsOrVisualDuration === "undefined" ? "undefined" : _type_of(optionsOrVisualDuration)) !== "object" ? {
        visualDuration: optionsOrVisualDuration,
        keyframes: [
            0,
            1
        ],
        bounce: bounce
    } : optionsOrVisualDuration;
    var restSpeed = options.restSpeed, restDelta = options.restDelta;
    var origin = options.keyframes[0];
    var target = options.keyframes[options.keyframes.length - 1];
    var state = {
        done: false,
        value: origin
    };
    var _getSpringOptions = getSpringOptions(_object_spread_props(_object_spread({}, options), {
        velocity: -millisecondsToSeconds(options.velocity || 0)
    })), stiffness = _getSpringOptions.stiffness, damping = _getSpringOptions.damping, mass = _getSpringOptions.mass, duration = _getSpringOptions.duration, velocity = _getSpringOptions.velocity, isResolvedFromDuration = _getSpringOptions.isResolvedFromDuration;
    var initialVelocity = velocity || 0;
    var dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
    var initialDelta = target - origin;
    var undampedAngularFreq = millisecondsToSeconds(Math.sqrt(stiffness / mass));
    var isGranularScale = Math.abs(initialDelta) < 5;
    restSpeed || (restSpeed = isGranularScale ? springDefaults.restSpeed.granular : springDefaults.restSpeed.default);
    restDelta || (restDelta = isGranularScale ? springDefaults.restDelta.granular : springDefaults.restDelta.default);
    var resolveSpring;
    if (dampingRatio < 1) {
        var angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
        resolveSpring = function(t) {
            var envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
            return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
        };
    } else if (dampingRatio === 1) {
        resolveSpring = function(t) {
            return target - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
        };
    } else {
        var dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
        resolveSpring = function(t) {
            var envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
            var freqForT = Math.min(dampedAngularFreq * t, 300);
            return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
        };
    }
    var generator = {
        calculatedDuration: isResolvedFromDuration ? duration || null : null,
        next: function(t) {
            var current = resolveSpring(t);
            if (!isResolvedFromDuration) {
                var currentVelocity = 0;
                if (dampingRatio < 1) {
                    currentVelocity = t === 0 ? secondsToMilliseconds(initialVelocity) : calcGeneratorVelocity(resolveSpring, t, current);
                }
                var isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
                var isBelowDisplacementThreshold = Math.abs(target - current) <= restDelta;
                state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
            } else {
                state.done = t >= duration;
            }
            state.value = state.done ? target : current;
            return state;
        },
        toString: function() {
            var calculatedDuration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
            var easing = generateLinearEasing(function(progress2) {
                return generator.next(calculatedDuration * progress2).value;
            }, calculatedDuration, 30);
            return calculatedDuration + "ms " + easing;
        }
    };
    return generator;
}
// ../../node_modules/framer-motion/dist/es/animation/generators/inertia.mjs
function inertia(param) {
    var keyframes2 = param.keyframes, _param_velocity = param.velocity, velocity = _param_velocity === void 0 ? 0 : _param_velocity, _param_power = param.power, power = _param_power === void 0 ? 0.8 : _param_power, _param_timeConstant = param.timeConstant, timeConstant = _param_timeConstant === void 0 ? 325 : _param_timeConstant, _param_bounceDamping = param.bounceDamping, bounceDamping = _param_bounceDamping === void 0 ? 10 : _param_bounceDamping, _param_bounceStiffness = param.bounceStiffness, bounceStiffness = _param_bounceStiffness === void 0 ? 500 : _param_bounceStiffness, modifyTarget = param.modifyTarget, min = param.min, max = param.max, _param_restDelta = param.restDelta, restDelta = _param_restDelta === void 0 ? 0.5 : _param_restDelta, restSpeed = param.restSpeed;
    var origin = keyframes2[0];
    var state = {
        done: false,
        value: origin
    };
    var isOutOfBounds = function(v) {
        return min !== void 0 && v < min || max !== void 0 && v > max;
    };
    var nearestBoundary = function(v) {
        if (min === void 0) return max;
        if (max === void 0) return min;
        return Math.abs(min - v) < Math.abs(max - v) ? min : max;
    };
    var amplitude = power * velocity;
    var ideal = origin + amplitude;
    var target = modifyTarget === void 0 ? ideal : modifyTarget(ideal);
    if (target !== ideal) amplitude = target - origin;
    var calcDelta = function(t) {
        return -amplitude * Math.exp(-t / timeConstant);
    };
    var calcLatest = function(t) {
        return target + calcDelta(t);
    };
    var applyFriction = function(t) {
        var delta = calcDelta(t);
        var latest = calcLatest(t);
        state.done = Math.abs(delta) <= restDelta;
        state.value = state.done ? target : latest;
    };
    var timeReachedBoundary;
    var spring$1;
    var checkCatchBoundary = function(t) {
        if (!isOutOfBounds(state.value)) return;
        timeReachedBoundary = t;
        spring$1 = spring({
            keyframes: [
                state.value,
                nearestBoundary(state.value)
            ],
            velocity: calcGeneratorVelocity(calcLatest, t, state.value),
            // TODO: This should be passing * 1000
            damping: bounceDamping,
            stiffness: bounceStiffness,
            restDelta: restDelta,
            restSpeed: restSpeed
        });
    };
    checkCatchBoundary(0);
    return {
        calculatedDuration: null,
        next: function(t) {
            var hasUpdatedFrame = false;
            if (!spring$1 && timeReachedBoundary === void 0) {
                hasUpdatedFrame = true;
                applyFriction(t);
                checkCatchBoundary(t);
            }
            if (timeReachedBoundary !== void 0 && t >= timeReachedBoundary) {
                return spring$1.next(t - timeReachedBoundary);
            } else {
                !hasUpdatedFrame && applyFriction(t);
                return state;
            }
        }
    };
}
// ../../node_modules/framer-motion/dist/es/easing/ease.mjs
var easeIn = /* @__PURE__ */ cubicBezier(0.42, 0, 1, 1);
var easeOut = /* @__PURE__ */ cubicBezier(0, 0, 0.58, 1);
var easeInOut = /* @__PURE__ */ cubicBezier(0.42, 0, 0.58, 1);
// ../../node_modules/framer-motion/dist/es/easing/utils/is-easing-array.mjs
var isEasingArray = function(ease2) {
    return Array.isArray(ease2) && typeof ease2[0] !== "number";
};
// ../../node_modules/framer-motion/dist/es/easing/utils/is-bezier-definition.mjs
var isBezierDefinition = function(easing) {
    return Array.isArray(easing) && typeof easing[0] === "number";
};
// ../../node_modules/framer-motion/dist/es/easing/utils/map.mjs
var easingLookup = {
    linear: noop,
    easeIn: easeIn,
    easeInOut: easeInOut,
    easeOut: easeOut,
    circIn: circIn,
    circInOut: circInOut,
    circOut: circOut,
    backIn: backIn,
    backInOut: backInOut,
    backOut: backOut,
    anticipate: anticipate
};
var easingDefinitionToFunction = function(definition) {
    if (isBezierDefinition(definition)) {
        invariant(definition.length === 4, "Cubic bezier arrays must contain four numerical values.");
        var _definition = _sliced_to_array(definition, 4), x1 = _definition[0], y1 = _definition[1], x2 = _definition[2], y2 = _definition[3];
        return cubicBezier(x1, y1, x2, y2);
    } else if (typeof definition === "string") {
        invariant(easingLookup[definition] !== void 0, "Invalid easing type '".concat(definition, "'"));
        return easingLookup[definition];
    }
    return definition;
};
// ../../node_modules/framer-motion/dist/es/utils/pipe.mjs
var combineFunctions = function(a, b) {
    return function(v) {
        return b(a(v));
    };
};
var pipe = function() {
    for(var _len = arguments.length, transformers = new Array(_len), _key = 0; _key < _len; _key++){
        transformers[_key] = arguments[_key];
    }
    return transformers.reduce(combineFunctions);
};
// ../../node_modules/framer-motion/dist/es/utils/mix/number.mjs
var mixNumber = function(from, to, progress2) {
    return from + (to - from) * progress2;
};
// ../../node_modules/framer-motion/dist/es/utils/hsla-to-rgba.mjs
function hueToRgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
}
function hslaToRgba(param) {
    var hue = param.hue, saturation = param.saturation, lightness = param.lightness, alpha2 = param.alpha;
    hue /= 360;
    saturation /= 100;
    lightness /= 100;
    var red = 0;
    var green = 0;
    var blue = 0;
    if (!saturation) {
        red = green = blue = lightness;
    } else {
        var q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
        var p = 2 * lightness - q;
        red = hueToRgb(p, q, hue + 1 / 3);
        green = hueToRgb(p, q, hue);
        blue = hueToRgb(p, q, hue - 1 / 3);
    }
    return {
        red: Math.round(red * 255),
        green: Math.round(green * 255),
        blue: Math.round(blue * 255),
        alpha: alpha2
    };
}
// ../../node_modules/framer-motion/dist/es/utils/mix/immediate.mjs
function mixImmediate(a, b) {
    return function(p) {
        return p > 0 ? b : a;
    };
}
// ../../node_modules/framer-motion/dist/es/utils/mix/color.mjs
var mixLinearColor = function(from, to, v) {
    var fromExpo = from * from;
    var expo = v * (to * to - fromExpo) + fromExpo;
    return expo < 0 ? 0 : Math.sqrt(expo);
};
var colorTypes = [
    hex,
    rgba,
    hsla
];
var getColorType = function(v) {
    return colorTypes.find(function(type) {
        return type.test(v);
    });
};
function asRGBA(color2) {
    var type = getColorType(color2);
    warning(Boolean(type), "'".concat(color2, "' is not an animatable color. Use the equivalent color code instead."));
    if (!Boolean(type)) return false;
    var model = type.parse(color2);
    if (type === hsla) {
        model = hslaToRgba(model);
    }
    return model;
}
var mixColor = function(from, to) {
    var fromRGBA = asRGBA(from);
    var toRGBA = asRGBA(to);
    if (!fromRGBA || !toRGBA) {
        return mixImmediate(from, to);
    }
    var blended = _object_spread({}, fromRGBA);
    return function(v) {
        blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
        blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
        blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
        blended.alpha = mixNumber(fromRGBA.alpha, toRGBA.alpha, v);
        return rgba.transform(blended);
    };
};
// ../../node_modules/framer-motion/dist/es/utils/mix/visibility.mjs
var invisibleValues = /* @__PURE__ */ new Set([
    "none",
    "hidden"
]);
function mixVisibility(origin, target) {
    if (invisibleValues.has(origin)) {
        return function(p) {
            return p <= 0 ? origin : target;
        };
    } else {
        return function(p) {
            return p >= 1 ? target : origin;
        };
    }
}
// ../../node_modules/framer-motion/dist/es/utils/mix/complex.mjs
function mixNumber2(a, b) {
    return function(p) {
        return mixNumber(a, b, p);
    };
}
function getMixer(a) {
    if (typeof a === "number") {
        return mixNumber2;
    } else if (typeof a === "string") {
        return isCSSVariableToken(a) ? mixImmediate : color.test(a) ? mixColor : mixComplex;
    } else if (Array.isArray(a)) {
        return mixArray;
    } else if ((typeof a === "undefined" ? "undefined" : _type_of(a)) === "object") {
        return color.test(a) ? mixColor : mixObject;
    }
    return mixImmediate;
}
function mixArray(a, b) {
    var output = _to_consumable_array(a);
    var numValues = output.length;
    var blendValue = a.map(function(v, i) {
        return getMixer(v)(v, b[i]);
    });
    return function(p) {
        for(var i = 0; i < numValues; i++){
            output[i] = blendValue[i](p);
        }
        return output;
    };
}
function mixObject(a, b) {
    var output = _object_spread({}, a, b);
    var blendValue = {};
    for(var key in output){
        if (a[key] !== void 0 && b[key] !== void 0) {
            blendValue[key] = getMixer(a[key])(a[key], b[key]);
        }
    }
    return function(v) {
        for(var key in blendValue){
            output[key] = blendValue[key](v);
        }
        return output;
    };
}
function matchOrder(origin, target) {
    var _a;
    var orderedOrigin = [];
    var pointers = {
        color: 0,
        var: 0,
        number: 0
    };
    for(var i = 0; i < target.values.length; i++){
        var type = target.types[i];
        var originIndex = origin.indexes[type][pointers[type]];
        var originValue = (_a = origin.values[originIndex]) !== null && _a !== void 0 ? _a : 0;
        orderedOrigin[i] = originValue;
        pointers[type]++;
    }
    return orderedOrigin;
}
var mixComplex = function(origin, target) {
    var template = complex.createTransformer(target);
    var originStats = analyseComplexValue(origin);
    var targetStats = analyseComplexValue(target);
    var canInterpolate = originStats.indexes.var.length === targetStats.indexes.var.length && originStats.indexes.color.length === targetStats.indexes.color.length && originStats.indexes.number.length >= targetStats.indexes.number.length;
    if (canInterpolate) {
        if (invisibleValues.has(origin) && !targetStats.values.length || invisibleValues.has(target) && !originStats.values.length) {
            return mixVisibility(origin, target);
        }
        return pipe(mixArray(matchOrder(originStats, targetStats), targetStats.values), template);
    } else {
        warning(true, "Complex values '".concat(origin, "' and '").concat(target, "' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition."));
        return mixImmediate(origin, target);
    }
};
// ../../node_modules/framer-motion/dist/es/utils/mix/index.mjs
function mix(from, to, p) {
    if (typeof from === "number" && typeof to === "number" && typeof p === "number") {
        return mixNumber(from, to, p);
    }
    var mixer = getMixer(from);
    return mixer(from, to);
}
// ../../node_modules/framer-motion/dist/es/utils/interpolate.mjs
function createMixers(output, ease2, customMixer) {
    var mixers = [];
    var mixerFactory = customMixer || mix;
    var numMixers = output.length - 1;
    for(var i = 0; i < numMixers; i++){
        var mixer = mixerFactory(output[i], output[i + 1]);
        if (ease2) {
            var easingFunction = Array.isArray(ease2) ? ease2[i] || noop : ease2;
            mixer = pipe(easingFunction, mixer);
        }
        mixers.push(mixer);
    }
    return mixers;
}
function interpolate(input, output) {
    var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, tmp = _ref.clamp, isClamp = tmp === void 0 ? true : tmp, ease2 = _ref.ease, mixer = _ref.mixer;
    var inputLength = input.length;
    invariant(inputLength === output.length, "Both input and output ranges must be the same length");
    if (inputLength === 1) return function() {
        return output[0];
    };
    if (inputLength === 2 && input[0] === input[1]) return function() {
        return output[1];
    };
    if (input[0] > input[inputLength - 1]) {
        input = _to_consumable_array(input).reverse();
        output = _to_consumable_array(output).reverse();
    }
    var mixers = createMixers(output, ease2, mixer);
    var numMixers = mixers.length;
    var interpolator = function(v) {
        var i = 0;
        if (numMixers > 1) {
            for(; i < input.length - 2; i++){
                if (v < input[i + 1]) break;
            }
        }
        var progressInRange = progress(input[i], input[i + 1], v);
        return mixers[i](progressInRange);
    };
    return isClamp ? function(v) {
        return interpolator(clamp(input[0], input[inputLength - 1], v));
    } : interpolator;
}
// ../../node_modules/framer-motion/dist/es/utils/offsets/fill.mjs
function fillOffset(offset, remaining) {
    var min = offset[offset.length - 1];
    for(var i = 1; i <= remaining; i++){
        var offsetProgress = progress(0, remaining, i);
        offset.push(mixNumber(min, 1, offsetProgress));
    }
}
// ../../node_modules/framer-motion/dist/es/utils/offsets/default.mjs
function defaultOffset(arr) {
    var offset = [
        0
    ];
    fillOffset(offset, arr.length - 1);
    return offset;
}
// ../../node_modules/framer-motion/dist/es/utils/offsets/time.mjs
function convertOffsetToTimes(offset, duration) {
    return offset.map(function(o) {
        return o * duration;
    });
}
// ../../node_modules/framer-motion/dist/es/animation/generators/keyframes.mjs
function defaultEasing(values, easing) {
    return values.map(function() {
        return easing || easeInOut;
    }).splice(0, values.length - 1);
}
function keyframes(param) {
    var _param_duration = param.duration, duration = _param_duration === void 0 ? 300 : _param_duration, keyframeValues = param.keyframes, times = param.times, tmp = param.ease, ease2 = tmp === void 0 ? "easeInOut" : tmp;
    var easingFunctions = isEasingArray(ease2) ? ease2.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease2);
    var state = {
        done: false,
        value: keyframeValues[0]
    };
    var absoluteTimes = convertOffsetToTimes(// Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    times && times.length === keyframeValues.length ? times : defaultOffset(keyframeValues), duration);
    var mapTimeToKeyframe = interpolate(absoluteTimes, keyframeValues, {
        ease: Array.isArray(easingFunctions) ? easingFunctions : defaultEasing(keyframeValues, easingFunctions)
    });
    return {
        calculatedDuration: duration,
        next: function(t) {
            state.value = mapTimeToKeyframe(t);
            state.done = t >= duration;
            return state;
        }
    };
}
// ../../node_modules/framer-motion/dist/es/animation/animators/drivers/driver-frameloop.mjs
var frameloopDriver = function(update) {
    var passTimestamp = function(param) {
        var timestamp = param.timestamp;
        return update(timestamp);
    };
    return {
        start: function() {
            return frame.update(passTimestamp, true);
        },
        stop: function() {
            return cancelFrame(passTimestamp);
        },
        /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */ now: function() {
            return frameData.isProcessing ? frameData.timestamp : time.now();
        }
    };
};
// ../../node_modules/framer-motion/dist/es/animation/animators/MainThreadAnimation.mjs
var generators = {
    decay: inertia,
    inertia: inertia,
    tween: keyframes,
    keyframes: keyframes,
    spring: spring
};
var percentToProgress = function(percent2) {
    return percent2 / 100;
};
var MainThreadAnimation = /*#__PURE__*/ function(BaseAnimation) {
    _inherits(MainThreadAnimation, BaseAnimation);
    function MainThreadAnimation(options) {
        _class_call_check(this, MainThreadAnimation);
        var _this;
        _this = _call_super(this, MainThreadAnimation, [
            options
        ]);
        _this.holdTime = null;
        _this.cancelTime = null;
        _this.currentTime = 0;
        _this.playbackSpeed = 1;
        _this.pendingPlayState = "running";
        _this.startTime = null;
        _this.state = "idle";
        _this.stop = function() {
            _this.resolver.cancel();
            _this.isStopped = true;
            if (_this.state === "idle") return;
            _this.teardown();
            var onStop = _this.options.onStop;
            onStop && onStop();
        };
        var _this_options = _this.options, name = _this_options.name, motionValue2 = _this_options.motionValue, element = _this_options.element, keyframes2 = _this_options.keyframes;
        var KeyframeResolver$1 = (element === null || element === void 0 ? void 0 : element.KeyframeResolver) || KeyframeResolver;
        var onResolved = function(resolvedKeyframes, finalKeyframe) {
            return _this.onKeyframesResolved(resolvedKeyframes, finalKeyframe);
        };
        _this.resolver = new KeyframeResolver$1(keyframes2, onResolved, name, motionValue2, element);
        _this.resolver.scheduleResolve();
        return _this;
    }
    _create_class(MainThreadAnimation, [
        {
            key: "flatten",
            value: function flatten() {
                _get(_get_prototype_of(MainThreadAnimation.prototype), "flatten", this).call(this);
                if (this._resolved) {
                    Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
                }
            }
        },
        {
            key: "initPlayback",
            value: function initPlayback(keyframes$1) {
                var _this_options = this.options, _this_options_type = _this_options.type, type = _this_options_type === void 0 ? "keyframes" : _this_options_type, _this_options_repeat = _this_options.repeat, repeat = _this_options_repeat === void 0 ? 0 : _this_options_repeat, _this_options_repeatDelay = _this_options.repeatDelay, repeatDelay = _this_options_repeatDelay === void 0 ? 0 : _this_options_repeatDelay, repeatType = _this_options.repeatType, _this_options_velocity = _this_options.velocity, velocity = _this_options_velocity === void 0 ? 0 : _this_options_velocity;
                var generatorFactory = isGenerator(type) ? type : generators[type] || keyframes;
                var mapPercentToKeyframes;
                var mirroredGenerator;
                if (generatorFactory !== keyframes && typeof keyframes$1[0] !== "number") {
                    if (process.env.NODE_ENV !== "production") {
                        invariant(keyframes$1.length === 2, "Only two keyframes currently supported with spring and inertia animations. Trying to animate ".concat(keyframes$1));
                    }
                    mapPercentToKeyframes = pipe(percentToProgress, mix(keyframes$1[0], keyframes$1[1]));
                    keyframes$1 = [
                        0,
                        100
                    ];
                }
                var generator = generatorFactory(_object_spread_props(_object_spread({}, this.options), {
                    keyframes: keyframes$1
                }));
                if (repeatType === "mirror") {
                    mirroredGenerator = generatorFactory(_object_spread_props(_object_spread({}, this.options), {
                        keyframes: _to_consumable_array(keyframes$1).reverse(),
                        velocity: -velocity
                    }));
                }
                if (generator.calculatedDuration === null) {
                    generator.calculatedDuration = calcGeneratorDuration(generator);
                }
                var calculatedDuration = generator.calculatedDuration;
                var resolvedDuration = calculatedDuration + repeatDelay;
                var totalDuration = resolvedDuration * (repeat + 1) - repeatDelay;
                return {
                    generator: generator,
                    mirroredGenerator: mirroredGenerator,
                    mapPercentToKeyframes: mapPercentToKeyframes,
                    calculatedDuration: calculatedDuration,
                    resolvedDuration: resolvedDuration,
                    totalDuration: totalDuration
                };
            }
        },
        {
            key: "onPostResolved",
            value: function onPostResolved() {
                var _this_options = this.options, _this_options_autoplay = _this_options.autoplay, autoplay = _this_options_autoplay === void 0 ? true : _this_options_autoplay;
                this.play();
                if (this.pendingPlayState === "paused" || !autoplay) {
                    this.pause();
                } else {
                    this.state = this.pendingPlayState;
                }
            }
        },
        {
            key: "tick",
            value: function tick(timestamp) {
                var sample = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var resolved = this.resolved;
                if (!resolved) {
                    var _this_options = this.options, keyframes3 = _this_options.keyframes;
                    return {
                        done: true,
                        value: keyframes3[keyframes3.length - 1]
                    };
                }
                var finalKeyframe = resolved.finalKeyframe, generator = resolved.generator, mirroredGenerator = resolved.mirroredGenerator, mapPercentToKeyframes = resolved.mapPercentToKeyframes, keyframes2 = resolved.keyframes, calculatedDuration = resolved.calculatedDuration, totalDuration = resolved.totalDuration, resolvedDuration = resolved.resolvedDuration;
                if (this.startTime === null) return generator.next(0);
                var _this_options1 = this.options, delay2 = _this_options1.delay, repeat = _this_options1.repeat, repeatType = _this_options1.repeatType, repeatDelay = _this_options1.repeatDelay, onUpdate = _this_options1.onUpdate;
                if (this.speed > 0) {
                    this.startTime = Math.min(this.startTime, timestamp);
                } else if (this.speed < 0) {
                    this.startTime = Math.min(timestamp - totalDuration / this.speed, this.startTime);
                }
                if (sample) {
                    this.currentTime = timestamp;
                } else if (this.holdTime !== null) {
                    this.currentTime = this.holdTime;
                } else {
                    this.currentTime = Math.round(timestamp - this.startTime) * this.speed;
                }
                var timeWithoutDelay = this.currentTime - delay2 * (this.speed >= 0 ? 1 : -1);
                var isInDelayPhase = this.speed >= 0 ? timeWithoutDelay < 0 : timeWithoutDelay > totalDuration;
                this.currentTime = Math.max(timeWithoutDelay, 0);
                if (this.state === "finished" && this.holdTime === null) {
                    this.currentTime = totalDuration;
                }
                var elapsed = this.currentTime;
                var frameGenerator = generator;
                if (repeat) {
                    var progress2 = Math.min(this.currentTime, totalDuration) / resolvedDuration;
                    var currentIteration = Math.floor(progress2);
                    var iterationProgress = progress2 % 1;
                    if (!iterationProgress && progress2 >= 1) {
                        iterationProgress = 1;
                    }
                    iterationProgress === 1 && currentIteration--;
                    currentIteration = Math.min(currentIteration, repeat + 1);
                    var isOddIteration = Boolean(currentIteration % 2);
                    if (isOddIteration) {
                        if (repeatType === "reverse") {
                            iterationProgress = 1 - iterationProgress;
                            if (repeatDelay) {
                                iterationProgress -= repeatDelay / resolvedDuration;
                            }
                        } else if (repeatType === "mirror") {
                            frameGenerator = mirroredGenerator;
                        }
                    }
                    elapsed = clamp(0, 1, iterationProgress) * resolvedDuration;
                }
                var state = isInDelayPhase ? {
                    done: false,
                    value: keyframes2[0]
                } : frameGenerator.next(elapsed);
                if (mapPercentToKeyframes) {
                    state.value = mapPercentToKeyframes(state.value);
                }
                var done = state.done;
                if (!isInDelayPhase && calculatedDuration !== null) {
                    done = this.speed >= 0 ? this.currentTime >= totalDuration : this.currentTime <= 0;
                }
                var isAnimationFinished = this.holdTime === null && (this.state === "finished" || this.state === "running" && done);
                if (isAnimationFinished && finalKeyframe !== void 0) {
                    state.value = getFinalKeyframe(keyframes2, this.options, finalKeyframe);
                }
                if (onUpdate) {
                    onUpdate(state.value);
                }
                if (isAnimationFinished) {
                    this.finish();
                }
                return state;
            }
        },
        {
            key: "duration",
            get: function get() {
                var resolved = this.resolved;
                return resolved ? millisecondsToSeconds(resolved.calculatedDuration) : 0;
            }
        },
        {
            key: "time",
            get: function get() {
                return millisecondsToSeconds(this.currentTime);
            },
            set: function set(newTime) {
                newTime = secondsToMilliseconds(newTime);
                this.currentTime = newTime;
                if (this.holdTime !== null || this.speed === 0) {
                    this.holdTime = newTime;
                } else if (this.driver) {
                    this.startTime = this.driver.now() - newTime / this.speed;
                }
            }
        },
        {
            key: "speed",
            get: function get() {
                return this.playbackSpeed;
            },
            set: function set(newSpeed) {
                var hasChanged = this.playbackSpeed !== newSpeed;
                this.playbackSpeed = newSpeed;
                if (hasChanged) {
                    this.time = millisecondsToSeconds(this.currentTime);
                }
            }
        },
        {
            key: "play",
            value: function play() {
                var _this = this;
                if (!this.resolver.isScheduled) {
                    this.resolver.resume();
                }
                if (!this._resolved) {
                    this.pendingPlayState = "running";
                    return;
                }
                if (this.isStopped) return;
                var _this_options = this.options, _this_options_driver = _this_options.driver, driver = _this_options_driver === void 0 ? frameloopDriver : _this_options_driver, onPlay = _this_options.onPlay, startTime = _this_options.startTime;
                if (!this.driver) {
                    this.driver = driver(function(timestamp) {
                        return _this.tick(timestamp);
                    });
                }
                onPlay && onPlay();
                var now2 = this.driver.now();
                if (this.holdTime !== null) {
                    this.startTime = now2 - this.holdTime;
                } else if (!this.startTime) {
                    this.startTime = startTime !== null && startTime !== void 0 ? startTime : this.calcStartTime();
                } else if (this.state === "finished") {
                    this.startTime = now2;
                }
                if (this.state === "finished") {
                    this.updateFinishedPromise();
                }
                this.cancelTime = this.startTime;
                this.holdTime = null;
                this.state = "running";
                this.driver.start();
            }
        },
        {
            key: "pause",
            value: function pause() {
                var _a;
                if (!this._resolved) {
                    this.pendingPlayState = "paused";
                    return;
                }
                this.state = "paused";
                this.holdTime = (_a = this.currentTime) !== null && _a !== void 0 ? _a : 0;
            }
        },
        {
            key: "complete",
            value: function complete() {
                if (this.state !== "running") {
                    this.play();
                }
                this.pendingPlayState = this.state = "finished";
                this.holdTime = null;
            }
        },
        {
            key: "finish",
            value: function finish() {
                this.teardown();
                this.state = "finished";
                var onComplete = this.options.onComplete;
                onComplete && onComplete();
            }
        },
        {
            key: "cancel",
            value: function cancel() {
                if (this.cancelTime !== null) {
                    this.tick(this.cancelTime);
                }
                this.teardown();
                this.updateFinishedPromise();
            }
        },
        {
            key: "teardown",
            value: function teardown() {
                this.state = "idle";
                this.stopDriver();
                this.resolveFinishedPromise();
                this.updateFinishedPromise();
                this.startTime = this.cancelTime = null;
                this.resolver.cancel();
            }
        },
        {
            key: "stopDriver",
            value: function stopDriver() {
                if (!this.driver) return;
                this.driver.stop();
                this.driver = void 0;
            }
        },
        {
            key: "sample",
            value: function sample(time2) {
                this.startTime = 0;
                return this.tick(time2, true);
            }
        }
    ]);
    return MainThreadAnimation;
}(BaseAnimation);
// ../../node_modules/framer-motion/dist/es/animation/animators/utils/accelerated-values.mjs
var acceleratedValues = /* @__PURE__ */ new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform"
]);
// ../../node_modules/framer-motion/dist/es/utils/memo.mjs
function memo(callback) {
    var result;
    return function() {
        if (result === void 0) result = callback();
        return result;
    };
}
// ../../node_modules/framer-motion/dist/es/animation/animators/waapi/utils/supports-flags.mjs
var supportsFlags = {
    linearEasing: void 0
};
// ../../node_modules/framer-motion/dist/es/animation/animators/waapi/utils/memo-supports.mjs
function memoSupports(callback, supportsFlag) {
    var memoized = memo(callback);
    return function() {
        var _a;
        return (_a = supportsFlags[supportsFlag]) !== null && _a !== void 0 ? _a : memoized();
    };
}
// ../../node_modules/framer-motion/dist/es/animation/animators/waapi/utils/supports-linear-easing.mjs
var supportsLinearEasing = /* @__PURE__ */ memoSupports(function() {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        });
    } catch (e) {
        return false;
    }
    return true;
}, "linearEasing");
// ../../node_modules/framer-motion/dist/es/animation/animators/waapi/easing.mjs
function isWaapiSupportedEasing(easing) {
    return Boolean(typeof easing === "function" && supportsLinearEasing() || !easing || typeof easing === "string" && (easing in supportedWaapiEasing || supportsLinearEasing()) || isBezierDefinition(easing) || Array.isArray(easing) && easing.every(isWaapiSupportedEasing));
}
var cubicBezierAsString = function(param) {
    var _param = _sliced_to_array(param, 4), a = _param[0], b = _param[1], c = _param[2], d = _param[3];
    return "cubic-bezier(".concat(a, ", ").concat(b, ", ").concat(c, ", ").concat(d, ")");
};
var supportedWaapiEasing = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: /* @__PURE__ */ cubicBezierAsString([
        0,
        0.65,
        0.55,
        1
    ]),
    circOut: /* @__PURE__ */ cubicBezierAsString([
        0.55,
        0,
        1,
        0.45
    ]),
    backIn: /* @__PURE__ */ cubicBezierAsString([
        0.31,
        0.01,
        0.66,
        -0.59
    ]),
    backOut: /* @__PURE__ */ cubicBezierAsString([
        0.33,
        1.53,
        0.69,
        0.99
    ])
};
function mapEasingToNativeEasing(easing, duration) {
    if (!easing) {
        return void 0;
    } else if (typeof easing === "function" && supportsLinearEasing()) {
        return generateLinearEasing(easing, duration);
    } else if (isBezierDefinition(easing)) {
        return cubicBezierAsString(easing);
    } else if (Array.isArray(easing)) {
        return easing.map(function(segmentEasing) {
            return mapEasingToNativeEasing(segmentEasing, duration) || supportedWaapiEasing.easeOut;
        });
    } else {
        return supportedWaapiEasing[easing];
    }
}
// ../../node_modules/framer-motion/dist/es/animation/animators/waapi/index.mjs
function startWaapiAnimation(element, valueName, keyframes2) {
    var _ref = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, tmp = _ref.delay, delay2 = tmp === void 0 ? 0 : tmp, _ref_duration = _ref.duration, duration = _ref_duration === void 0 ? 300 : _ref_duration, _ref_repeat = _ref.repeat, repeat = _ref_repeat === void 0 ? 0 : _ref_repeat, _ref_repeatType = _ref.repeatType, repeatType = _ref_repeatType === void 0 ? "loop" : _ref_repeatType, tmp1 = _ref.ease, ease2 = tmp1 === void 0 ? "easeInOut" : tmp1, times = _ref.times;
    var keyframeOptions = _define_property({}, valueName, keyframes2);
    if (times) keyframeOptions.offset = times;
    var easing = mapEasingToNativeEasing(ease2, duration);
    if (Array.isArray(easing)) keyframeOptions.easing = easing;
    return element.animate(keyframeOptions, {
        delay: delay2,
        duration: duration,
        easing: !Array.isArray(easing) ? easing : "linear",
        fill: "both",
        iterations: repeat + 1,
        direction: repeatType === "reverse" ? "alternate" : "normal"
    });
}
// ../../node_modules/framer-motion/dist/es/animation/animators/waapi/utils/attach-timeline.mjs
function attachTimeline(animation, timeline) {
    animation.timeline = timeline;
    animation.onfinish = null;
}
// ../../node_modules/framer-motion/dist/es/animation/animators/waapi/utils/supports-waapi.mjs
var supportsWaapi = /* @__PURE__ */ memo(function() {
    return Object.hasOwnProperty.call(Element.prototype, "animate");
});
// ../../node_modules/framer-motion/dist/es/animation/animators/AcceleratedAnimation.mjs
var sampleDelta = 10;
var maxDuration = 2e4;
function requiresPregeneratedKeyframes(options) {
    return isGenerator(options.type) || options.type === "spring" || !isWaapiSupportedEasing(options.ease);
}
function pregenerateKeyframes(keyframes2, options) {
    var sampleAnimation = new MainThreadAnimation(_object_spread_props(_object_spread({}, options), {
        keyframes: keyframes2,
        repeat: 0,
        delay: 0,
        isGenerator: true
    }));
    var state = {
        done: false,
        value: keyframes2[0]
    };
    var pregeneratedKeyframes = [];
    var t = 0;
    while(!state.done && t < maxDuration){
        state = sampleAnimation.sample(t);
        pregeneratedKeyframes.push(state.value);
        t += sampleDelta;
    }
    return {
        times: void 0,
        keyframes: pregeneratedKeyframes,
        duration: t - sampleDelta,
        ease: "linear"
    };
}
var unsupportedEasingFunctions = {
    anticipate: anticipate,
    backInOut: backInOut,
    circInOut: circInOut
};
function isUnsupportedEase(key) {
    return key in unsupportedEasingFunctions;
}
var AcceleratedAnimation = /*#__PURE__*/ function(BaseAnimation) {
    _inherits(AcceleratedAnimation, BaseAnimation);
    function AcceleratedAnimation(options) {
        _class_call_check(this, AcceleratedAnimation);
        var _this;
        _this = _call_super(this, AcceleratedAnimation, [
            options
        ]);
        var _this_options = _this.options, name = _this_options.name, motionValue2 = _this_options.motionValue, element = _this_options.element, keyframes2 = _this_options.keyframes;
        _this.resolver = new DOMKeyframesResolver(keyframes2, function(resolvedKeyframes, finalKeyframe) {
            return _this.onKeyframesResolved(resolvedKeyframes, finalKeyframe);
        }, name, motionValue2, element);
        _this.resolver.scheduleResolve();
        return _this;
    }
    _create_class(AcceleratedAnimation, [
        {
            key: "initPlayback",
            value: function initPlayback(keyframes2, finalKeyframe) {
                var _this = this;
                var _a;
                var _this_options = this.options, _this_options_duration = _this_options.duration, duration = _this_options_duration === void 0 ? 300 : _this_options_duration, times = _this_options.times, ease2 = _this_options.ease, type = _this_options.type, motionValue2 = _this_options.motionValue, name = _this_options.name, startTime = _this_options.startTime;
                if (!((_a = motionValue2.owner) === null || _a === void 0 ? void 0 : _a.current)) {
                    return false;
                }
                if (typeof ease2 === "string" && supportsLinearEasing() && isUnsupportedEase(ease2)) {
                    ease2 = unsupportedEasingFunctions[ease2];
                }
                if (requiresPregeneratedKeyframes(this.options)) {
                    var _this_options1 = this.options, onComplete = _this_options1.onComplete, onUpdate = _this_options1.onUpdate, motionValue3 = _this_options1.motionValue, element = _this_options1.element, options = _object_without_properties(_this_options1, [
                        "onComplete",
                        "onUpdate",
                        "motionValue",
                        "element"
                    ]);
                    var pregeneratedAnimation = pregenerateKeyframes(keyframes2, options);
                    keyframes2 = pregeneratedAnimation.keyframes;
                    if (keyframes2.length === 1) {
                        keyframes2[1] = keyframes2[0];
                    }
                    duration = pregeneratedAnimation.duration;
                    times = pregeneratedAnimation.times;
                    ease2 = pregeneratedAnimation.ease;
                    type = "keyframes";
                }
                var animation = startWaapiAnimation(motionValue2.owner.current, name, keyframes2, _object_spread_props(_object_spread({}, this.options), {
                    duration: duration,
                    times: times,
                    ease: ease2
                }));
                animation.startTime = startTime !== null && startTime !== void 0 ? startTime : this.calcStartTime();
                if (this.pendingTimeline) {
                    attachTimeline(animation, this.pendingTimeline);
                    this.pendingTimeline = void 0;
                } else {
                    animation.onfinish = function() {
                        var onComplete = _this.options.onComplete;
                        motionValue2.set(getFinalKeyframe(keyframes2, _this.options, finalKeyframe));
                        onComplete && onComplete();
                        _this.cancel();
                        _this.resolveFinishedPromise();
                    };
                }
                return {
                    animation: animation,
                    duration: duration,
                    times: times,
                    type: type,
                    ease: ease2,
                    keyframes: keyframes2
                };
            }
        },
        {
            key: "duration",
            get: function get() {
                var resolved = this.resolved;
                if (!resolved) return 0;
                var duration = resolved.duration;
                return millisecondsToSeconds(duration);
            }
        },
        {
            key: "time",
            get: function get() {
                var resolved = this.resolved;
                if (!resolved) return 0;
                var animation = resolved.animation;
                return millisecondsToSeconds(animation.currentTime || 0);
            },
            set: function set(newTime) {
                var resolved = this.resolved;
                if (!resolved) return;
                var animation = resolved.animation;
                animation.currentTime = secondsToMilliseconds(newTime);
            }
        },
        {
            key: "speed",
            get: function get() {
                var resolved = this.resolved;
                if (!resolved) return 1;
                var animation = resolved.animation;
                return animation.playbackRate;
            },
            set: function set(newSpeed) {
                var resolved = this.resolved;
                if (!resolved) return;
                var animation = resolved.animation;
                animation.playbackRate = newSpeed;
            }
        },
        {
            key: "state",
            get: function get() {
                var resolved = this.resolved;
                if (!resolved) return "idle";
                var animation = resolved.animation;
                return animation.playState;
            }
        },
        {
            key: "startTime",
            get: function get() {
                var resolved = this.resolved;
                if (!resolved) return null;
                var animation = resolved.animation;
                return animation.startTime;
            }
        },
        {
            /**
   * Replace the default DocumentTimeline with another AnimationTimeline.
   * Currently used for scroll animations.
   */ key: "attachTimeline",
            value: function attachTimeline1(timeline) {
                if (!this._resolved) {
                    this.pendingTimeline = timeline;
                } else {
                    var resolved = this.resolved;
                    if (!resolved) return noop;
                    var animation = resolved.animation;
                    attachTimeline(animation, timeline);
                }
                return noop;
            }
        },
        {
            key: "play",
            value: function play() {
                if (this.isStopped) return;
                var resolved = this.resolved;
                if (!resolved) return;
                var animation = resolved.animation;
                if (animation.playState === "finished") {
                    this.updateFinishedPromise();
                }
                animation.play();
            }
        },
        {
            key: "pause",
            value: function pause() {
                var resolved = this.resolved;
                if (!resolved) return;
                var animation = resolved.animation;
                animation.pause();
            }
        },
        {
            key: "stop",
            value: function stop() {
                this.resolver.cancel();
                this.isStopped = true;
                if (this.state === "idle") return;
                this.resolveFinishedPromise();
                this.updateFinishedPromise();
                var resolved = this.resolved;
                if (!resolved) return;
                var animation = resolved.animation, keyframes2 = resolved.keyframes, duration = resolved.duration, type = resolved.type, ease2 = resolved.ease, times = resolved.times;
                if (animation.playState === "idle" || animation.playState === "finished") {
                    return;
                }
                if (this.time) {
                    var _this_options = this.options, motionValue2 = _this_options.motionValue, onUpdate = _this_options.onUpdate, onComplete = _this_options.onComplete, element = _this_options.element, options = _object_without_properties(_this_options, [
                        "motionValue",
                        "onUpdate",
                        "onComplete",
                        "element"
                    ]);
                    var sampleAnimation = new MainThreadAnimation(_object_spread_props(_object_spread({}, options), {
                        keyframes: keyframes2,
                        duration: duration,
                        type: type,
                        ease: ease2,
                        times: times,
                        isGenerator: true
                    }));
                    var sampleTime = secondsToMilliseconds(this.time);
                    motionValue2.setWithVelocity(sampleAnimation.sample(sampleTime - sampleDelta).value, sampleAnimation.sample(sampleTime).value, sampleDelta);
                }
                var onStop = this.options.onStop;
                onStop && onStop();
                this.cancel();
            }
        },
        {
            key: "complete",
            value: function complete() {
                var resolved = this.resolved;
                if (!resolved) return;
                resolved.animation.finish();
            }
        },
        {
            key: "cancel",
            value: function cancel() {
                var resolved = this.resolved;
                if (!resolved) return;
                resolved.animation.cancel();
            }
        }
    ], [
        {
            key: "supports",
            value: function supports(options) {
                var motionValue2 = options.motionValue, name = options.name, repeatDelay = options.repeatDelay, repeatType = options.repeatType, damping = options.damping, type = options.type;
                return supportsWaapi() && name && acceleratedValues.has(name) && motionValue2 && motionValue2.owner && _instanceof(motionValue2.owner.current, HTMLElement) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */ !motionValue2.owner.getProps().onUpdate && !repeatDelay && repeatType !== "mirror" && damping !== 0 && type !== "inertia";
            }
        }
    ]);
    return AcceleratedAnimation;
}(BaseAnimation);
// ../../node_modules/framer-motion/dist/es/render/dom/scroll/supports.mjs
var supportsScrollTimeline = memo(function() {
    return window.ScrollTimeline !== void 0;
});
// ../../node_modules/framer-motion/dist/es/animation/GroupPlaybackControls.mjs
var GroupPlaybackControls = /*#__PURE__*/ function() {
    function GroupPlaybackControls(animations2) {
        var _this = this;
        _class_call_check(this, GroupPlaybackControls);
        this.stop = function() {
            return _this.runAll("stop");
        };
        this.animations = animations2.filter(Boolean);
    }
    _create_class(GroupPlaybackControls, [
        {
            key: "then",
            value: function then(onResolve, onReject) {
                return Promise.all(this.animations).then(onResolve).catch(onReject);
            }
        },
        {
            /**
   * TODO: Filter out cancelled or stopped animations before returning
   */ key: "getAll",
            value: function getAll(propName) {
                return this.animations[0][propName];
            }
        },
        {
            key: "setAll",
            value: function setAll(propName, newValue) {
                for(var i = 0; i < this.animations.length; i++){
                    this.animations[i][propName] = newValue;
                }
            }
        },
        {
            key: "attachTimeline",
            value: function attachTimeline(timeline, fallback) {
                var _this = this;
                var subscriptions = this.animations.map(function(animation) {
                    if (supportsScrollTimeline() && animation.attachTimeline) {
                        return animation.attachTimeline(timeline);
                    } else {
                        return fallback(animation);
                    }
                });
                return function() {
                    subscriptions.forEach(function(cancel, i) {
                        cancel && cancel();
                        _this.animations[i].stop();
                    });
                };
            }
        },
        {
            key: "time",
            get: function get() {
                return this.getAll("time");
            },
            set: function set(time2) {
                this.setAll("time", time2);
            }
        },
        {
            key: "speed",
            get: function get() {
                return this.getAll("speed");
            },
            set: function set(speed) {
                this.setAll("speed", speed);
            }
        },
        {
            key: "startTime",
            get: function get() {
                return this.getAll("startTime");
            }
        },
        {
            key: "duration",
            get: function get() {
                var max = 0;
                for(var i = 0; i < this.animations.length; i++){
                    max = Math.max(max, this.animations[i].duration);
                }
                return max;
            }
        },
        {
            key: "runAll",
            value: function runAll(methodName) {
                this.animations.forEach(function(controls) {
                    return controls[methodName]();
                });
            }
        },
        {
            key: "flatten",
            value: function flatten() {
                this.runAll("flatten");
            }
        },
        {
            key: "play",
            value: function play() {
                this.runAll("play");
            }
        },
        {
            key: "pause",
            value: function pause() {
                this.runAll("pause");
            }
        },
        {
            key: "cancel",
            value: function cancel() {
                this.runAll("cancel");
            }
        },
        {
            key: "complete",
            value: function complete() {
                this.runAll("complete");
            }
        }
    ]);
    return GroupPlaybackControls;
}();
// ../../node_modules/framer-motion/dist/es/animation/utils/is-transition-defined.mjs
function isTransitionDefined(_param) {
    var when = _param.when, _delay = _param.delay, delayChildren = _param.delayChildren, staggerChildren = _param.staggerChildren, staggerDirection = _param.staggerDirection, repeat = _param.repeat, repeatType = _param.repeatType, repeatDelay = _param.repeatDelay, from = _param.from, elapsed = _param.elapsed, transition = _object_without_properties(_param, [
        "when",
        "delay",
        "delayChildren",
        "staggerChildren",
        "staggerDirection",
        "repeat",
        "repeatType",
        "repeatDelay",
        "from",
        "elapsed"
    ]);
    return !!Object.keys(transition).length;
}
// ../../node_modules/framer-motion/dist/es/animation/interfaces/motion-value.mjs
var animateMotionValue = function(name, value, target) {
    var transition = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, element = arguments.length > 4 ? arguments[4] : void 0, isHandoff = arguments.length > 5 ? arguments[5] : void 0;
    return function(onComplete) {
        var valueTransition = getValueTransition(transition, name) || {};
        var delay2 = valueTransition.delay || transition.delay || 0;
        var _transition_elapsed = transition.elapsed, elapsed = _transition_elapsed === void 0 ? 0 : _transition_elapsed;
        elapsed = elapsed - secondsToMilliseconds(delay2);
        var options = _object_spread_props(_object_spread({
            keyframes: Array.isArray(target) ? target : [
                null,
                target
            ],
            ease: "easeOut",
            velocity: value.getVelocity()
        }, valueTransition), {
            delay: -elapsed,
            onUpdate: function(v) {
                value.set(v);
                valueTransition.onUpdate && valueTransition.onUpdate(v);
            },
            onComplete: function() {
                onComplete();
                valueTransition.onComplete && valueTransition.onComplete();
            },
            name: name,
            motionValue: value,
            element: isHandoff ? void 0 : element
        });
        if (!isTransitionDefined(valueTransition)) {
            options = _object_spread({}, options, getDefaultTransition(name, options));
        }
        if (options.duration) {
            options.duration = secondsToMilliseconds(options.duration);
        }
        if (options.repeatDelay) {
            options.repeatDelay = secondsToMilliseconds(options.repeatDelay);
        }
        if (options.from !== void 0) {
            options.keyframes[0] = options.from;
        }
        var shouldSkip = false;
        if (options.type === false || options.duration === 0 && !options.repeatDelay) {
            options.duration = 0;
            if (options.delay === 0) {
                shouldSkip = true;
            }
        }
        if (instantAnimationState.current || MotionGlobalConfig.skipAnimations) {
            shouldSkip = true;
            options.duration = 0;
            options.delay = 0;
        }
        if (shouldSkip && !isHandoff && value.get() !== void 0) {
            var finalKeyframe = getFinalKeyframe(options.keyframes, valueTransition);
            if (finalKeyframe !== void 0) {
                frame.update(function() {
                    options.onUpdate(finalKeyframe);
                    options.onComplete();
                });
                return new GroupPlaybackControls([]);
            }
        }
        if (!isHandoff && AcceleratedAnimation.supports(options)) {
            return new AcceleratedAnimation(options);
        } else {
            return new MainThreadAnimation(options);
        }
    };
};
// ../../node_modules/framer-motion/dist/es/utils/resolve-value.mjs
var isCustomValue = function(v) {
    return Boolean(v && (typeof v === "undefined" ? "undefined" : _type_of(v)) === "object" && v.mix && v.toValue);
};
var resolveFinalValueInKeyframes = function(v) {
    return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
};
// ../../node_modules/framer-motion/dist/es/utils/array.mjs
function addUniqueItem(arr, item) {
    if (arr.indexOf(item) === -1) arr.push(item);
}
function removeItem(arr, item) {
    var index = arr.indexOf(item);
    if (index > -1) arr.splice(index, 1);
}
// ../../node_modules/framer-motion/dist/es/utils/subscription-manager.mjs
var SubscriptionManager = /*#__PURE__*/ function() {
    function SubscriptionManager() {
        _class_call_check(this, SubscriptionManager);
        this.subscriptions = [];
    }
    _create_class(SubscriptionManager, [
        {
            key: "add",
            value: function add(handler) {
                var _this = this;
                addUniqueItem(this.subscriptions, handler);
                return function() {
                    return removeItem(_this.subscriptions, handler);
                };
            }
        },
        {
            key: "notify",
            value: function notify(a, b, c) {
                var numSubscriptions = this.subscriptions.length;
                if (!numSubscriptions) return;
                if (numSubscriptions === 1) {
                    this.subscriptions[0](a, b, c);
                } else {
                    for(var i = 0; i < numSubscriptions; i++){
                        var handler = this.subscriptions[i];
                        handler && handler(a, b, c);
                    }
                }
            }
        },
        {
            key: "getSize",
            value: function getSize() {
                return this.subscriptions.length;
            }
        },
        {
            key: "clear",
            value: function clear() {
                this.subscriptions.length = 0;
            }
        }
    ]);
    return SubscriptionManager;
}();
// ../../node_modules/framer-motion/dist/es/value/index.mjs
var MAX_VELOCITY_DELTA = 30;
var isFloat = function(value) {
    return !isNaN(parseFloat(value));
};
var collectMotionValues = {
    current: void 0
};
var MotionValue = /*#__PURE__*/ function() {
    function MotionValue(init) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var _this = this;
        _class_call_check(this, MotionValue);
        this.version = "11.12.0";
        this.canTrackVelocity = null;
        this.events = {};
        this.updateAndNotify = function(v) {
            var render = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
            var currentTime = time.now();
            if (_this.updatedAt !== currentTime) {
                _this.setPrevFrameValue();
            }
            _this.prev = _this.current;
            _this.setCurrent(v);
            if (_this.current !== _this.prev && _this.events.change) {
                _this.events.change.notify(_this.current);
            }
            if (render && _this.events.renderRequest) {
                _this.events.renderRequest.notify(_this.current);
            }
        };
        this.hasAnimated = false;
        this.setCurrent(init);
        this.owner = options.owner;
    }
    _create_class(MotionValue, [
        {
            key: "setCurrent",
            value: function setCurrent(current) {
                this.current = current;
                this.updatedAt = time.now();
                if (this.canTrackVelocity === null && current !== void 0) {
                    this.canTrackVelocity = isFloat(this.current);
                }
            }
        },
        {
            key: "setPrevFrameValue",
            value: function setPrevFrameValue() {
                var prevFrameValue = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.current;
                this.prevFrameValue = prevFrameValue;
                this.prevUpdatedAt = this.updatedAt;
            }
        },
        {
            /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */ key: "onChange",
            value: function onChange(subscription) {
                if (process.env.NODE_ENV !== "production") {
                    warnOnce(false, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).');
                }
                return this.on("change", subscription);
            }
        },
        {
            key: "on",
            value: function on(eventName, callback) {
                var _this = this;
                if (!this.events[eventName]) {
                    this.events[eventName] = new SubscriptionManager();
                }
                var unsubscribe = this.events[eventName].add(callback);
                if (eventName === "change") {
                    return function() {
                        unsubscribe();
                        frame.read(function() {
                            if (!_this.events.change.getSize()) {
                                _this.stop();
                            }
                        });
                    };
                }
                return unsubscribe;
            }
        },
        {
            key: "clearListeners",
            value: function clearListeners() {
                for(var eventManagers in this.events){
                    this.events[eventManagers].clear();
                }
            }
        },
        {
            /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */ key: "attach",
            value: function attach(passiveEffect, stopPassiveEffect) {
                this.passiveEffect = passiveEffect;
                this.stopPassiveEffect = stopPassiveEffect;
            }
        },
        {
            /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */ key: "set",
            value: function set(v) {
                var render = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                if (!render || !this.passiveEffect) {
                    this.updateAndNotify(v, render);
                } else {
                    this.passiveEffect(v, this.updateAndNotify);
                }
            }
        },
        {
            key: "setWithVelocity",
            value: function setWithVelocity(prev, current, delta) {
                this.set(current);
                this.prev = void 0;
                this.prevFrameValue = prev;
                this.prevUpdatedAt = this.updatedAt - delta;
            }
        },
        {
            /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */ key: "jump",
            value: function jump(v) {
                var endAnimation = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                this.updateAndNotify(v);
                this.prev = v;
                this.prevUpdatedAt = this.prevFrameValue = void 0;
                endAnimation && this.stop();
                if (this.stopPassiveEffect) this.stopPassiveEffect();
            }
        },
        {
            /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */ key: "get",
            value: function get() {
                if (collectMotionValues.current) {
                    collectMotionValues.current.push(this);
                }
                return this.current;
            }
        },
        {
            /**
   * @public
   */ key: "getPrevious",
            value: function getPrevious() {
                return this.prev;
            }
        },
        {
            /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */ key: "getVelocity",
            value: function getVelocity() {
                var currentTime = time.now();
                if (!this.canTrackVelocity || this.prevFrameValue === void 0 || currentTime - this.updatedAt > MAX_VELOCITY_DELTA) {
                    return 0;
                }
                var delta = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
                return velocityPerSecond(parseFloat(this.current) - parseFloat(this.prevFrameValue), delta);
            }
        },
        {
            /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */ key: "start",
            value: function start(startAnimation) {
                var _this = this;
                this.stop();
                return new Promise(function(resolve) {
                    _this.hasAnimated = true;
                    _this.animation = startAnimation(resolve);
                    if (_this.events.animationStart) {
                        _this.events.animationStart.notify();
                    }
                }).then(function() {
                    if (_this.events.animationComplete) {
                        _this.events.animationComplete.notify();
                    }
                    _this.clearAnimation();
                });
            }
        },
        {
            /**
   * Stop the currently active animation.
   *
   * @public
   */ key: "stop",
            value: function stop() {
                if (this.animation) {
                    this.animation.stop();
                    if (this.events.animationCancel) {
                        this.events.animationCancel.notify();
                    }
                }
                this.clearAnimation();
            }
        },
        {
            /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */ key: "isAnimating",
            value: function isAnimating() {
                return !!this.animation;
            }
        },
        {
            key: "clearAnimation",
            value: function clearAnimation() {
                delete this.animation;
            }
        },
        {
            /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */ key: "destroy",
            value: function destroy() {
                this.clearListeners();
                this.stop();
                if (this.stopPassiveEffect) {
                    this.stopPassiveEffect();
                }
            }
        }
    ]);
    return MotionValue;
}();
function motionValue(init, options) {
    return new MotionValue(init, options);
}
// ../../node_modules/framer-motion/dist/es/render/utils/setters.mjs
function setMotionValue(visualElement, key, value) {
    if (visualElement.hasValue(key)) {
        visualElement.getValue(key).set(value);
    } else {
        visualElement.addValue(key, motionValue(value));
    }
}
function setTarget(visualElement, definition) {
    var resolved = resolveVariant(visualElement, definition);
    var _ref = resolved || {}, _ref_transitionEnd = _ref.transitionEnd, transitionEnd = _ref_transitionEnd === void 0 ? {} : _ref_transitionEnd, _ref_transition = _ref.transition, transition = _ref_transition === void 0 ? {} : _ref_transition, target = _object_without_properties(_ref, [
        "transitionEnd",
        "transition"
    ]);
    target = _object_spread({}, target, transitionEnd);
    for(var key in target){
        var value = resolveFinalValueInKeyframes(target[key]);
        setMotionValue(visualElement, key, value);
    }
}
// ../../node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs
var camelToDash = function(str) {
    return str.replace(RegExp("([a-z])([A-Z])", "gu"), "$1-$2").toLowerCase();
};
// ../../node_modules/framer-motion/dist/es/animation/optimized-appear/data-id.mjs
var optimizedAppearDataId = "framerAppearId";
var optimizedAppearDataAttribute = "data-" + camelToDash(optimizedAppearDataId);
// ../../node_modules/framer-motion/dist/es/animation/optimized-appear/get-appear-id.mjs
function getOptimisedAppearId(visualElement) {
    return visualElement.props[optimizedAppearDataAttribute];
}
// ../../node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs
var isMotionValue = function(value) {
    return Boolean(value && value.getVelocity);
};
// ../../node_modules/framer-motion/dist/es/value/use-will-change/is.mjs
function isWillChangeMotionValue(value) {
    return Boolean(isMotionValue(value) && value.add);
}
// ../../node_modules/framer-motion/dist/es/value/use-will-change/add-will-change.mjs
function addValueToWillChange(visualElement, key) {
    var willChange = visualElement.getValue("willChange");
    if (isWillChangeMotionValue(willChange)) {
        return willChange.add(key);
    }
}
// ../../node_modules/framer-motion/dist/es/animation/interfaces/visual-element-target.mjs
function shouldBlockAnimation(param, key) {
    var protectedKeys = param.protectedKeys, needsAnimating = param.needsAnimating;
    var shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
    needsAnimating[key] = false;
    return shouldBlock;
}
function animateTarget(visualElement, targetAndTransition) {
    var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, tmp = _ref.delay, delay2 = tmp === void 0 ? 0 : tmp, transitionOverride = _ref.transitionOverride, type = _ref.type;
    var _a;
    var _targetAndTransition_transition = targetAndTransition.transition, transition = _targetAndTransition_transition === void 0 ? visualElement.getDefaultTransition() : _targetAndTransition_transition, transitionEnd = targetAndTransition.transitionEnd, target = _object_without_properties(targetAndTransition, [
        "transition",
        "transitionEnd"
    ]);
    if (transitionOverride) transition = transitionOverride;
    var animations2 = [];
    var animationTypeState = type && visualElement.animationState && visualElement.animationState.getState()[type];
    for(var key in target){
        var value = visualElement.getValue(key, (_a = visualElement.latestValues[key]) !== null && _a !== void 0 ? _a : null);
        var valueTarget = target[key];
        if (valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key)) {
            continue;
        }
        var valueTransition = _object_spread({
            delay: delay2
        }, getValueTransition(transition || {}, key));
        var isHandoff = false;
        if (window.MotionHandoffAnimation) {
            var appearId = getOptimisedAppearId(visualElement);
            if (appearId) {
                var startTime = window.MotionHandoffAnimation(appearId, key, frame);
                if (startTime !== null) {
                    valueTransition.startTime = startTime;
                    isHandoff = true;
                }
            }
        }
        addValueToWillChange(visualElement, key);
        value.start(animateMotionValue(key, value, valueTarget, visualElement.shouldReduceMotion && transformProps.has(key) ? {
            type: false
        } : valueTransition, visualElement, isHandoff));
        var animation = value.animation;
        if (animation) {
            animations2.push(animation);
        }
    }
    if (transitionEnd) {
        Promise.all(animations2).then(function() {
            frame.update(function() {
                transitionEnd && setTarget(visualElement, transitionEnd);
            });
        });
    }
    return animations2;
}
// ../../node_modules/framer-motion/dist/es/animation/interfaces/visual-element-variant.mjs
function animateVariant(visualElement, variant) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var _a;
    var resolved = resolveVariant(visualElement, variant, options.type === "exit" ? (_a = visualElement.presenceContext) === null || _a === void 0 ? void 0 : _a.custom : void 0);
    var _ref = resolved || {}, _ref_transition = _ref.transition, transition = _ref_transition === void 0 ? visualElement.getDefaultTransition() || {} : _ref_transition;
    if (options.transitionOverride) {
        transition = options.transitionOverride;
    }
    var getAnimation = resolved ? function() {
        return Promise.all(animateTarget(visualElement, resolved, options));
    } : function() {
        return Promise.resolve();
    };
    var getChildAnimations = visualElement.variantChildren && visualElement.variantChildren.size ? function() {
        var forwardDelay = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        var _transition_delayChildren = transition.delayChildren, delayChildren = _transition_delayChildren === void 0 ? 0 : _transition_delayChildren, staggerChildren = transition.staggerChildren, staggerDirection = transition.staggerDirection;
        return animateChildren(visualElement, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
    } : function() {
        return Promise.resolve();
    };
    var when = transition.when;
    if (when) {
        var _ref1 = _sliced_to_array(when === "beforeChildren" ? [
            getAnimation,
            getChildAnimations
        ] : [
            getChildAnimations,
            getAnimation
        ], 2), first = _ref1[0], last = _ref1[1];
        return first().then(function() {
            return last();
        });
    } else {
        return Promise.all([
            getAnimation(),
            getChildAnimations(options.delay)
        ]);
    }
}
function animateChildren(visualElement, variant) {
    var delayChildren = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, staggerChildren = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, staggerDirection = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 1, options = arguments.length > 5 ? arguments[5] : void 0;
    var animations2 = [];
    var maxStaggerDuration = (visualElement.variantChildren.size - 1) * staggerChildren;
    var generateStaggerDuration = staggerDirection === 1 ? function() {
        var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        return i * staggerChildren;
    } : function() {
        var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        return maxStaggerDuration - i * staggerChildren;
    };
    Array.from(visualElement.variantChildren).sort(sortByTreeOrder).forEach(function(child, i) {
        child.notify("AnimationStart", variant);
        animations2.push(animateVariant(child, variant, _object_spread_props(_object_spread({}, options), {
            delay: delayChildren + generateStaggerDuration(i)
        })).then(function() {
            return child.notify("AnimationComplete", variant);
        }));
    });
    return Promise.all(animations2);
}
function sortByTreeOrder(a, b) {
    return a.sortNodePosition(b);
}
// ../../node_modules/framer-motion/dist/es/animation/interfaces/visual-element.mjs
function animateVisualElement(visualElement, definition) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    visualElement.notify("AnimationStart", definition);
    var animation;
    if (Array.isArray(definition)) {
        var animations2 = definition.map(function(variant) {
            return animateVariant(visualElement, variant, options);
        });
        animation = Promise.all(animations2);
    } else if (typeof definition === "string") {
        animation = animateVariant(visualElement, definition, options);
    } else {
        var resolvedDefinition = typeof definition === "function" ? resolveVariant(visualElement, definition, options.custom) : definition;
        animation = Promise.all(animateTarget(visualElement, resolvedDefinition, options));
    }
    return animation.then(function() {
        visualElement.notify("AnimationComplete", definition);
    });
}
// ../../node_modules/framer-motion/dist/es/render/utils/get-variant-context.mjs
var numVariantProps = variantProps.length;
function getVariantContext(visualElement) {
    if (!visualElement) return void 0;
    if (!visualElement.isControllingVariants) {
        var context2 = visualElement.parent ? getVariantContext(visualElement.parent) || {} : {};
        if (visualElement.props.initial !== void 0) {
            context2.initial = visualElement.props.initial;
        }
        return context2;
    }
    var context = {};
    for(var i = 0; i < numVariantProps; i++){
        var name = variantProps[i];
        var prop = visualElement.props[name];
        if (isVariantLabel(prop) || prop === false) {
            context[name] = prop;
        }
    }
    return context;
}
// ../../node_modules/framer-motion/dist/es/render/utils/animation-state.mjs
var reversePriorityOrder = _to_consumable_array(variantPriorityOrder).reverse();
var numAnimationTypes = variantPriorityOrder.length;
function animateList(visualElement) {
    return function(animations2) {
        return Promise.all(animations2.map(function(param) {
            var animation = param.animation, options = param.options;
            return animateVisualElement(visualElement, animation, options);
        }));
    };
}
function createAnimationState(visualElement) {
    var animate = animateList(visualElement);
    var state = createState();
    var isInitialRender = true;
    var buildResolvedTypeValues = function(type) {
        return function(acc, definition) {
            var _a;
            var resolved = resolveVariant(visualElement, definition, type === "exit" ? (_a = visualElement.presenceContext) === null || _a === void 0 ? void 0 : _a.custom : void 0);
            if (resolved) {
                var transition = resolved.transition, transitionEnd = resolved.transitionEnd, target = _object_without_properties(resolved, [
                    "transition",
                    "transitionEnd"
                ]);
                acc = _object_spread({}, acc, target, transitionEnd);
            }
            return acc;
        };
    };
    function setAnimateFunction(makeAnimator) {
        animate = makeAnimator(visualElement);
    }
    function animateChanges(changedActiveType) {
        var _loop = function(i) {
            var type = reversePriorityOrder[i];
            var typeState = state[type];
            var prop = props[type] !== void 0 ? props[type] : context[type];
            var propIsVariant = isVariantLabel(prop);
            var activeDelta = type === changedActiveType ? typeState.isActive : null;
            if (activeDelta === false) removedVariantIndex = i;
            var isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
            if (isInherited && isInitialRender && visualElement.manuallyAnimateOnMount) {
                isInherited = false;
            }
            typeState.protectedKeys = _object_spread({}, encounteredKeys);
            if (// If it isn't active and hasn't *just* been set as inactive
            !typeState.isActive && activeDelta === null || // If we didn't and don't have any defined prop for this animation type
            !prop && !typeState.prevProp || // Or if the prop doesn't define an animation
            isAnimationControls(prop) || typeof prop === "boolean") {
                return "continue";
            }
            var variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
            var shouldAnimateType = variantDidChange || // If we're making this variant active, we want to always make it active
            type === changedActiveType && typeState.isActive && !isInherited && propIsVariant || // If we removed a higher-priority variant (i is in reverse order)
            i > removedVariantIndex && propIsVariant;
            var handledRemovedValues = false;
            var definitionList = Array.isArray(prop) ? prop : [
                prop
            ];
            var resolvedValues = definitionList.reduce(buildResolvedTypeValues(type), {});
            if (activeDelta === false) resolvedValues = {};
            var _typeState_prevResolvedValues = typeState.prevResolvedValues, prevResolvedValues = _typeState_prevResolvedValues === void 0 ? {} : _typeState_prevResolvedValues;
            var allKeys = _object_spread({}, prevResolvedValues, resolvedValues);
            var markToAnimate = function(key) {
                shouldAnimateType = true;
                if (removedKeys.has(key)) {
                    handledRemovedValues = true;
                    removedKeys.delete(key);
                }
                typeState.needsAnimating[key] = true;
                var motionValue2 = visualElement.getValue(key);
                if (motionValue2) motionValue2.liveStyle = false;
            };
            for(var key in allKeys){
                var next = resolvedValues[key];
                var prev = prevResolvedValues[key];
                if (encounteredKeys.hasOwnProperty(key)) continue;
                var valueHasChanged = false;
                if (isKeyframesTarget(next) && isKeyframesTarget(prev)) {
                    valueHasChanged = !shallowCompare(next, prev);
                } else {
                    valueHasChanged = next !== prev;
                }
                if (valueHasChanged) {
                    if (next !== void 0 && next !== null) {
                        markToAnimate(key);
                    } else {
                        removedKeys.add(key);
                    }
                } else if (next !== void 0 && removedKeys.has(key)) {
                    markToAnimate(key);
                } else {
                    typeState.protectedKeys[key] = true;
                }
            }
            typeState.prevProp = prop;
            typeState.prevResolvedValues = resolvedValues;
            if (typeState.isActive) {
                encounteredKeys = _object_spread({}, encounteredKeys, resolvedValues);
            }
            if (isInitialRender && visualElement.blockInitialAnimation) {
                shouldAnimateType = false;
            }
            var willAnimateViaParent = isInherited && variantDidChange;
            var needsAnimating = !willAnimateViaParent || handledRemovedValues;
            if (shouldAnimateType && needsAnimating) {
                var _animations2;
                (_animations2 = animations2).push.apply(_animations2, _to_consumable_array(definitionList.map(function(animation) {
                    return {
                        animation: animation,
                        options: {
                            type: type
                        }
                    };
                })));
            }
        };
        var props = visualElement.props;
        var context = getVariantContext(visualElement.parent) || {};
        var animations2 = [];
        var removedKeys = /* @__PURE__ */ new Set();
        var encounteredKeys = {};
        var removedVariantIndex = Infinity;
        for(var i = 0; i < numAnimationTypes; i++)_loop(i);
        if (removedKeys.size) {
            var fallbackAnimation = {};
            removedKeys.forEach(function(key) {
                var fallbackTarget = visualElement.getBaseTarget(key);
                var motionValue2 = visualElement.getValue(key);
                if (motionValue2) motionValue2.liveStyle = true;
                fallbackAnimation[key] = fallbackTarget !== null && fallbackTarget !== void 0 ? fallbackTarget : null;
            });
            animations2.push({
                animation: fallbackAnimation
            });
        }
        var shouldAnimate = Boolean(animations2.length);
        if (isInitialRender && (props.initial === false || props.initial === props.animate) && !visualElement.manuallyAnimateOnMount) {
            shouldAnimate = false;
        }
        isInitialRender = false;
        return shouldAnimate ? animate(animations2) : Promise.resolve();
    }
    function setActive(type, isActive) {
        var _a;
        if (state[type].isActive === isActive) return Promise.resolve();
        (_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach(function(child) {
            var _a2;
            return (_a2 = child.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(type, isActive);
        });
        state[type].isActive = isActive;
        var animations2 = animateChanges(type);
        for(var key in state){
            state[key].protectedKeys = {};
        }
        return animations2;
    }
    return {
        animateChanges: animateChanges,
        setActive: setActive,
        setAnimateFunction: setAnimateFunction,
        getState: function() {
            return state;
        },
        reset: function() {
            state = createState();
            isInitialRender = true;
        }
    };
}
function checkVariantsDidChange(prev, next) {
    if (typeof next === "string") {
        return next !== prev;
    } else if (Array.isArray(next)) {
        return !shallowCompare(next, prev);
    }
    return false;
}
function createTypeState() {
    var isActive = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    return {
        isActive: isActive,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    };
}
function createState() {
    return {
        animate: createTypeState(true),
        whileInView: createTypeState(),
        whileHover: createTypeState(),
        whileTap: createTypeState(),
        whileDrag: createTypeState(),
        whileFocus: createTypeState(),
        exit: createTypeState()
    };
}
// ../../node_modules/framer-motion/dist/es/motion/features/Feature.mjs
var Feature = /*#__PURE__*/ function() {
    function Feature(node) {
        _class_call_check(this, Feature);
        this.isMounted = false;
        this.node = node;
    }
    _create_class(Feature, [
        {
            key: "update",
            value: function update() {}
        }
    ]);
    return Feature;
}();
// ../../node_modules/framer-motion/dist/es/motion/features/animation/index.mjs
var AnimationFeature = /*#__PURE__*/ function(Feature) {
    _inherits(AnimationFeature, Feature);
    function AnimationFeature(node) {
        _class_call_check(this, AnimationFeature);
        var _this;
        _this = _call_super(this, AnimationFeature, [
            node
        ]);
        node.animationState || (node.animationState = createAnimationState(node));
        return _this;
    }
    _create_class(AnimationFeature, [
        {
            key: "updateAnimationControlsSubscription",
            value: function updateAnimationControlsSubscription() {
                var animate = this.node.getProps().animate;
                if (isAnimationControls(animate)) {
                    this.unmountControls = animate.subscribe(this.node);
                }
            }
        },
        {
            /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */ key: "mount",
            value: function mount() {
                this.updateAnimationControlsSubscription();
            }
        },
        {
            key: "update",
            value: function update() {
                var animate = this.node.getProps().animate;
                var _ref = this.node.prevProps || {}, prevAnimate = _ref.animate;
                if (animate !== prevAnimate) {
                    this.updateAnimationControlsSubscription();
                }
            }
        },
        {
            key: "unmount",
            value: function unmount() {
                var _a;
                this.node.animationState.reset();
                (_a = this.unmountControls) === null || _a === void 0 ? void 0 : _a.call(this);
            }
        }
    ]);
    return AnimationFeature;
}(Feature);
// ../../node_modules/framer-motion/dist/es/motion/features/animation/exit.mjs
var id = 0;
var ExitAnimationFeature = /*#__PURE__*/ function(Feature) {
    _inherits(ExitAnimationFeature, Feature);
    function ExitAnimationFeature() {
        _class_call_check(this, ExitAnimationFeature);
        var _this;
        _this = _call_super(this, ExitAnimationFeature, arguments);
        _this.id = id++;
        return _this;
    }
    _create_class(ExitAnimationFeature, [
        {
            key: "update",
            value: function update() {
                var _this = this;
                if (!this.node.presenceContext) return;
                var _this_node_presenceContext = this.node.presenceContext, isPresent = _this_node_presenceContext.isPresent, onExitComplete = _this_node_presenceContext.onExitComplete;
                var _ref = this.node.prevPresenceContext || {}, prevIsPresent = _ref.isPresent;
                if (!this.node.animationState || isPresent === prevIsPresent) {
                    return;
                }
                var exitAnimation = this.node.animationState.setActive("exit", !isPresent);
                if (onExitComplete && !isPresent) {
                    exitAnimation.then(function() {
                        return onExitComplete(_this.id);
                    });
                }
            }
        },
        {
            key: "mount",
            value: function mount() {
                var register = (this.node.presenceContext || {}).register;
                if (register) {
                    this.unmount = register(this.id);
                }
            }
        },
        {
            key: "unmount",
            value: function unmount() {}
        }
    ]);
    return ExitAnimationFeature;
}(Feature);
// ../../node_modules/framer-motion/dist/es/motion/features/animations.mjs
var animations = {
    animation: {
        Feature: AnimationFeature
    },
    exit: {
        Feature: ExitAnimationFeature
    }
};
// ../../node_modules/framer-motion/dist/es/events/utils/is-primary-pointer.mjs
var isPrimaryPointer = function(event) {
    if (event.pointerType === "mouse") {
        return typeof event.button !== "number" || event.button <= 0;
    } else {
        return event.isPrimary !== false;
    }
};
// ../../node_modules/framer-motion/dist/es/events/event-info.mjs
function extractEventInfo(event) {
    var pointType = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "page";
    return {
        point: {
            x: event["".concat(pointType, "X")],
            y: event["".concat(pointType, "Y")]
        }
    };
}
var addPointerInfo = function(handler) {
    return function(event) {
        return isPrimaryPointer(event) && handler(event, extractEventInfo(event));
    };
};
// ../../node_modules/framer-motion/dist/es/events/add-dom-event.mjs
function addDomEvent(target, eventName, handler) {
    var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
        passive: true
    };
    target.addEventListener(eventName, handler, options);
    return function() {
        return target.removeEventListener(eventName, handler);
    };
}
// ../../node_modules/framer-motion/dist/es/events/add-pointer-event.mjs
function addPointerEvent(target, eventName, handler, options) {
    return addDomEvent(target, eventName, addPointerInfo(handler), options);
}
// ../../node_modules/framer-motion/dist/es/utils/distance.mjs
var distance = function(a, b) {
    return Math.abs(a - b);
};
function distance2D(a, b) {
    var xDelta = distance(a.x, b.x);
    var yDelta = distance(a.y, b.y);
    return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2));
}
// ../../node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs
var PanSession = /*#__PURE__*/ function() {
    function PanSession(event, handlers) {
        var _this = this;
        var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, transformPagePoint = _ref.transformPagePoint, contextWindow = _ref.contextWindow, _ref_dragSnapToOrigin = _ref.dragSnapToOrigin, dragSnapToOrigin = _ref_dragSnapToOrigin === void 0 ? false : _ref_dragSnapToOrigin;
        _class_call_check(this, PanSession);
        this.startEvent = null;
        this.lastMoveEvent = null;
        this.lastMoveEventInfo = null;
        this.handlers = {};
        this.contextWindow = window;
        this.updatePoint = function() {
            if (!(_this.lastMoveEvent && _this.lastMoveEventInfo)) return;
            var info2 = getPanInfo(_this.lastMoveEventInfo, _this.history);
            var isPanStarted = _this.startEvent !== null;
            var isDistancePastThreshold = distance2D(info2.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!isPanStarted && !isDistancePastThreshold) return;
            var point2 = info2.point;
            var timestamp2 = frameData.timestamp;
            _this.history.push(_object_spread_props(_object_spread({}, point2), {
                timestamp: timestamp2
            }));
            var _this_handlers = _this.handlers, onStart = _this_handlers.onStart, onMove = _this_handlers.onMove;
            if (!isPanStarted) {
                onStart && onStart(_this.lastMoveEvent, info2);
                _this.startEvent = _this.lastMoveEvent;
            }
            onMove && onMove(_this.lastMoveEvent, info2);
        };
        this.handlePointerMove = function(event2, info2) {
            _this.lastMoveEvent = event2;
            _this.lastMoveEventInfo = transformPoint(info2, _this.transformPagePoint);
            frame.update(_this.updatePoint, true);
        };
        this.handlePointerUp = function(event2, info2) {
            _this.end();
            var _this_handlers = _this.handlers, onEnd = _this_handlers.onEnd, onSessionEnd = _this_handlers.onSessionEnd, resumeAnimation = _this_handlers.resumeAnimation;
            if (_this.dragSnapToOrigin) resumeAnimation && resumeAnimation();
            if (!(_this.lastMoveEvent && _this.lastMoveEventInfo)) return;
            var panInfo = getPanInfo(event2.type === "pointercancel" ? _this.lastMoveEventInfo : transformPoint(info2, _this.transformPagePoint), _this.history);
            if (_this.startEvent && onEnd) {
                onEnd(event2, panInfo);
            }
            onSessionEnd && onSessionEnd(event2, panInfo);
        };
        if (!isPrimaryPointer(event)) return;
        this.dragSnapToOrigin = dragSnapToOrigin;
        this.handlers = handlers;
        this.transformPagePoint = transformPagePoint;
        this.contextWindow = contextWindow || window;
        var info = extractEventInfo(event);
        var initialInfo = transformPoint(info, this.transformPagePoint);
        var point = initialInfo.point;
        var timestamp = frameData.timestamp;
        this.history = [
            _object_spread_props(_object_spread({}, point), {
                timestamp: timestamp
            })
        ];
        var onSessionStart = handlers.onSessionStart;
        onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
        this.removeListeners = pipe(addPointerEvent(this.contextWindow, "pointermove", this.handlePointerMove), addPointerEvent(this.contextWindow, "pointerup", this.handlePointerUp), addPointerEvent(this.contextWindow, "pointercancel", this.handlePointerUp));
    }
    _create_class(PanSession, [
        {
            key: "updateHandlers",
            value: function updateHandlers(handlers) {
                this.handlers = handlers;
            }
        },
        {
            key: "end",
            value: function end() {
                this.removeListeners && this.removeListeners();
                cancelFrame(this.updatePoint);
            }
        }
    ]);
    return PanSession;
}();
function transformPoint(info, transformPagePoint) {
    return transformPagePoint ? {
        point: transformPagePoint(info.point)
    } : info;
}
function subtractPoint(a, b) {
    return {
        x: a.x - b.x,
        y: a.y - b.y
    };
}
function getPanInfo(param, history) {
    var point = param.point;
    return {
        point: point,
        delta: subtractPoint(point, lastDevicePoint(history)),
        offset: subtractPoint(point, startDevicePoint(history)),
        velocity: getVelocity(history, 0.1)
    };
}
function startDevicePoint(history) {
    return history[0];
}
function lastDevicePoint(history) {
    return history[history.length - 1];
}
function getVelocity(history, timeDelta) {
    if (history.length < 2) {
        return {
            x: 0,
            y: 0
        };
    }
    var i = history.length - 1;
    var timestampedPoint = null;
    var lastPoint = lastDevicePoint(history);
    while(i >= 0){
        timestampedPoint = history[i];
        if (lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta)) {
            break;
        }
        i--;
    }
    if (!timestampedPoint) {
        return {
            x: 0,
            y: 0
        };
    }
    var time2 = millisecondsToSeconds(lastPoint.timestamp - timestampedPoint.timestamp);
    if (time2 === 0) {
        return {
            x: 0,
            y: 0
        };
    }
    var currentVelocity = {
        x: (lastPoint.x - timestampedPoint.x) / time2,
        y: (lastPoint.y - timestampedPoint.y) / time2
    };
    if (currentVelocity.x === Infinity) {
        currentVelocity.x = 0;
    }
    if (currentVelocity.y === Infinity) {
        currentVelocity.y = 0;
    }
    return currentVelocity;
}
// ../../node_modules/framer-motion/dist/es/gestures/drag/utils/lock.mjs
function createLock(name) {
    var lock = null;
    return function() {
        var openLock = function() {
            lock = null;
        };
        if (lock === null) {
            lock = name;
            return openLock;
        }
        return false;
    };
}
var globalHorizontalLock = createLock("dragHorizontal");
var globalVerticalLock = createLock("dragVertical");
function getGlobalLock(drag2) {
    var lock = false;
    if (drag2 === "y") {
        lock = globalVerticalLock();
    } else if (drag2 === "x") {
        lock = globalHorizontalLock();
    } else {
        var openHorizontal = globalHorizontalLock();
        var openVertical = globalVerticalLock();
        if (openHorizontal && openVertical) {
            lock = function() {
                openHorizontal();
                openVertical();
            };
        } else {
            if (openHorizontal) openHorizontal();
            if (openVertical) openVertical();
        }
    }
    return lock;
}
function isDragActive() {
    var openGestureLock = getGlobalLock(true);
    if (!openGestureLock) return true;
    openGestureLock();
    return false;
}
// ../../node_modules/framer-motion/dist/es/utils/is-ref-object.mjs
function isRefObject(ref) {
    return ref && (typeof ref === "undefined" ? "undefined" : _type_of(ref)) === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
}
// ../../node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs
var SCALE_PRECISION = 1e-4;
var SCALE_MIN = 1 - SCALE_PRECISION;
var SCALE_MAX = 1 + SCALE_PRECISION;
var TRANSLATE_PRECISION = 0.01;
var TRANSLATE_MIN = 0 - TRANSLATE_PRECISION;
var TRANSLATE_MAX = 0 + TRANSLATE_PRECISION;
function calcLength(axis) {
    return axis.max - axis.min;
}
function isNear(value, target, maxDistance) {
    return Math.abs(value - target) <= maxDistance;
}
function calcAxisDelta(delta, source, target) {
    var origin = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0.5;
    delta.origin = origin;
    delta.originPoint = mixNumber(source.min, source.max, delta.origin);
    delta.scale = calcLength(target) / calcLength(source);
    delta.translate = mixNumber(target.min, target.max, delta.origin) - delta.originPoint;
    if (delta.scale >= SCALE_MIN && delta.scale <= SCALE_MAX || isNaN(delta.scale)) {
        delta.scale = 1;
    }
    if (delta.translate >= TRANSLATE_MIN && delta.translate <= TRANSLATE_MAX || isNaN(delta.translate)) {
        delta.translate = 0;
    }
}
function calcBoxDelta(delta, source, target, origin) {
    calcAxisDelta(delta.x, source.x, target.x, origin ? origin.originX : void 0);
    calcAxisDelta(delta.y, source.y, target.y, origin ? origin.originY : void 0);
}
function calcRelativeAxis(target, relative, parent) {
    target.min = parent.min + relative.min;
    target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent) {
    calcRelativeAxis(target.x, relative.x, parent.x);
    calcRelativeAxis(target.y, relative.y, parent.y);
}
function calcRelativeAxisPosition(target, layout2, parent) {
    target.min = layout2.min - parent.min;
    target.max = target.min + calcLength(layout2);
}
function calcRelativePosition(target, layout2, parent) {
    calcRelativeAxisPosition(target.x, layout2.x, parent.x);
    calcRelativeAxisPosition(target.y, layout2.y, parent.y);
}
// ../../node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs
function applyConstraints(point, param, elastic) {
    var min = param.min, max = param.max;
    if (min !== void 0 && point < min) {
        point = elastic ? mixNumber(min, point, elastic.min) : Math.max(point, min);
    } else if (max !== void 0 && point > max) {
        point = elastic ? mixNumber(max, point, elastic.max) : Math.min(point, max);
    }
    return point;
}
function calcRelativeAxisConstraints(axis, min, max) {
    return {
        min: min !== void 0 ? axis.min + min : void 0,
        max: max !== void 0 ? axis.max + max - (axis.max - axis.min) : void 0
    };
}
function calcRelativeConstraints(layoutBox, param) {
    var top = param.top, left = param.left, bottom = param.bottom, right = param.right;
    return {
        x: calcRelativeAxisConstraints(layoutBox.x, left, right),
        y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
    };
}
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
    var min = constraintsAxis.min - layoutAxis.min;
    var max = constraintsAxis.max - layoutAxis.max;
    if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) {
        var ref;
        ref = [
            max,
            min
        ], min = ref[0], max = ref[1], ref;
    }
    return {
        min: min,
        max: max
    };
}
function calcViewportConstraints(layoutBox, constraintsBox) {
    return {
        x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
        y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
    };
}
function calcOrigin(source, target) {
    var origin = 0.5;
    var sourceLength = calcLength(source);
    var targetLength = calcLength(target);
    if (targetLength > sourceLength) {
        origin = progress(target.min, target.max - sourceLength, source.min);
    } else if (sourceLength > targetLength) {
        origin = progress(source.min, source.max - targetLength, target.min);
    }
    return clamp(0, 1, origin);
}
function rebaseAxisConstraints(layout2, constraints) {
    var relativeConstraints = {};
    if (constraints.min !== void 0) {
        relativeConstraints.min = constraints.min - layout2.min;
    }
    if (constraints.max !== void 0) {
        relativeConstraints.max = constraints.max - layout2.min;
    }
    return relativeConstraints;
}
var defaultElastic = 0.35;
function resolveDragElastic() {
    var dragElastic = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : defaultElastic;
    if (dragElastic === false) {
        dragElastic = 0;
    } else if (dragElastic === true) {
        dragElastic = defaultElastic;
    }
    return {
        x: resolveAxisElastic(dragElastic, "left", "right"),
        y: resolveAxisElastic(dragElastic, "top", "bottom")
    };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
    return {
        min: resolvePointElastic(dragElastic, minLabel),
        max: resolvePointElastic(dragElastic, maxLabel)
    };
}
function resolvePointElastic(dragElastic, label) {
    return typeof dragElastic === "number" ? dragElastic : dragElastic[label] || 0;
}
// ../../node_modules/framer-motion/dist/es/projection/geometry/models.mjs
var createAxisDelta = function() {
    return {
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    };
};
var createDelta = function() {
    return {
        x: createAxisDelta(),
        y: createAxisDelta()
    };
};
var createAxis = function() {
    return {
        min: 0,
        max: 0
    };
};
var createBox = function() {
    return {
        x: createAxis(),
        y: createAxis()
    };
};
// ../../node_modules/framer-motion/dist/es/projection/utils/each-axis.mjs
function eachAxis(callback) {
    return [
        callback("x"),
        callback("y")
    ];
}
// ../../node_modules/framer-motion/dist/es/projection/geometry/conversion.mjs
function convertBoundingBoxToBox(param) {
    var top = param.top, left = param.left, right = param.right, bottom = param.bottom;
    return {
        x: {
            min: left,
            max: right
        },
        y: {
            min: top,
            max: bottom
        }
    };
}
function convertBoxToBoundingBox(param) {
    var x = param.x, y = param.y;
    return {
        top: y.min,
        right: x.max,
        bottom: y.max,
        left: x.min
    };
}
function transformBoxPoints(point, transformPoint2) {
    if (!transformPoint2) return point;
    var topLeft = transformPoint2({
        x: point.left,
        y: point.top
    });
    var bottomRight = transformPoint2({
        x: point.right,
        y: point.bottom
    });
    return {
        top: topLeft.y,
        left: topLeft.x,
        bottom: bottomRight.y,
        right: bottomRight.x
    };
}
// ../../node_modules/framer-motion/dist/es/projection/utils/has-transform.mjs
function isIdentityScale(scale2) {
    return scale2 === void 0 || scale2 === 1;
}
function hasScale(param) {
    var scale2 = param.scale, scaleX = param.scaleX, scaleY = param.scaleY;
    return !isIdentityScale(scale2) || !isIdentityScale(scaleX) || !isIdentityScale(scaleY);
}
function hasTransform(values) {
    return hasScale(values) || has2DTranslate(values) || values.z || values.rotate || values.rotateX || values.rotateY || values.skewX || values.skewY;
}
function has2DTranslate(values) {
    return is2DTranslate(values.x) || is2DTranslate(values.y);
}
function is2DTranslate(value) {
    return value && value !== "0%";
}
// ../../node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs
function scalePoint(point, scale2, originPoint) {
    var distanceFromOrigin = point - originPoint;
    var scaled = scale2 * distanceFromOrigin;
    return originPoint + scaled;
}
function applyPointDelta(point, translate, scale2, originPoint, boxScale) {
    if (boxScale !== void 0) {
        point = scalePoint(point, boxScale, originPoint);
    }
    return scalePoint(point, scale2, originPoint) + translate;
}
function applyAxisDelta(axis) {
    var translate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, scale2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, originPoint = arguments.length > 3 ? arguments[3] : void 0, boxScale = arguments.length > 4 ? arguments[4] : void 0;
    axis.min = applyPointDelta(axis.min, translate, scale2, originPoint, boxScale);
    axis.max = applyPointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function applyBoxDelta(box, param) {
    var x = param.x, y = param.y;
    applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
    applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
var TREE_SCALE_SNAP_MIN = 0.999999999999;
var TREE_SCALE_SNAP_MAX = 1.0000000000001;
function applyTreeDeltas(box, treeScale, treePath) {
    var isSharedTransition = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    var treeLength = treePath.length;
    if (!treeLength) return;
    treeScale.x = treeScale.y = 1;
    var node;
    var delta;
    for(var i = 0; i < treeLength; i++){
        node = treePath[i];
        delta = node.projectionDelta;
        var visualElement = node.options.visualElement;
        if (visualElement && visualElement.props.style && visualElement.props.style.display === "contents") {
            continue;
        }
        if (isSharedTransition && node.options.layoutScroll && node.scroll && node !== node.root) {
            transformBox(box, {
                x: -node.scroll.offset.x,
                y: -node.scroll.offset.y
            });
        }
        if (delta) {
            treeScale.x *= delta.x.scale;
            treeScale.y *= delta.y.scale;
            applyBoxDelta(box, delta);
        }
        if (isSharedTransition && hasTransform(node.latestValues)) {
            transformBox(box, node.latestValues);
        }
    }
    if (treeScale.x < TREE_SCALE_SNAP_MAX && treeScale.x > TREE_SCALE_SNAP_MIN) {
        treeScale.x = 1;
    }
    if (treeScale.y < TREE_SCALE_SNAP_MAX && treeScale.y > TREE_SCALE_SNAP_MIN) {
        treeScale.y = 1;
    }
}
function translateAxis(axis, distance2) {
    axis.min = axis.min + distance2;
    axis.max = axis.max + distance2;
}
function transformAxis(axis, axisTranslate, axisScale, boxScale) {
    var axisOrigin = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0.5;
    var originPoint = mixNumber(axis.min, axis.max, axisOrigin);
    applyAxisDelta(axis, axisTranslate, axisScale, originPoint, boxScale);
}
function transformBox(box, transform) {
    transformAxis(box.x, transform.x, transform.scaleX, transform.scale, transform.originX);
    transformAxis(box.y, transform.y, transform.scaleY, transform.scale, transform.originY);
}
// ../../node_modules/framer-motion/dist/es/projection/utils/measure.mjs
function measureViewportBox(instance, transformPoint2) {
    return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint2));
}
function measurePageBox(element, rootProjectionNode2, transformPagePoint) {
    var viewportBox = measureViewportBox(element, transformPagePoint);
    var scroll = rootProjectionNode2.scroll;
    if (scroll) {
        translateAxis(viewportBox.x, scroll.offset.x);
        translateAxis(viewportBox.y, scroll.offset.y);
    }
    return viewportBox;
}
// ../../node_modules/framer-motion/dist/es/utils/get-context-window.mjs
var getContextWindow = function(param) {
    var current = param.current;
    return current ? current.ownerDocument.defaultView : null;
};
// ../../node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
var elementDragControls = /* @__PURE__ */ new WeakMap();
var VisualElementDragControls = /*#__PURE__*/ function() {
    function VisualElementDragControls(visualElement) {
        _class_call_check(this, VisualElementDragControls);
        this.openGlobalLock = null;
        this.isDragging = false;
        this.currentDirection = null;
        this.originPoint = {
            x: 0,
            y: 0
        };
        this.constraints = false;
        this.hasMutatedConstraints = false;
        this.elastic = createBox();
        this.visualElement = visualElement;
    }
    _create_class(VisualElementDragControls, [
        {
            key: "start",
            value: function start(originEvent) {
                var _this = this;
                var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref_snapToCursor = _ref.snapToCursor, snapToCursor = _ref_snapToCursor === void 0 ? false : _ref_snapToCursor;
                var presenceContext = this.visualElement.presenceContext;
                if (presenceContext && presenceContext.isPresent === false) return;
                var onSessionStart = function(event) {
                    var _this_getProps = _this.getProps(), dragSnapToOrigin2 = _this_getProps.dragSnapToOrigin;
                    dragSnapToOrigin2 ? _this.pauseAnimation() : _this.stopAnimation();
                    if (snapToCursor) {
                        _this.snapToCursor(extractEventInfo(event, "page").point);
                    }
                };
                var onStart = function(event, info) {
                    var _this_getProps = _this.getProps(), drag2 = _this_getProps.drag, dragPropagation = _this_getProps.dragPropagation, onDragStart = _this_getProps.onDragStart;
                    if (drag2 && !dragPropagation) {
                        if (_this.openGlobalLock) _this.openGlobalLock();
                        _this.openGlobalLock = getGlobalLock(drag2);
                        if (!_this.openGlobalLock) return;
                    }
                    _this.isDragging = true;
                    _this.currentDirection = null;
                    _this.resolveConstraints();
                    if (_this.visualElement.projection) {
                        _this.visualElement.projection.isAnimationBlocked = true;
                        _this.visualElement.projection.target = void 0;
                    }
                    eachAxis(function(axis) {
                        var current = _this.getAxisMotionValue(axis).get() || 0;
                        if (percent.test(current)) {
                            var projection = _this.visualElement.projection;
                            if (projection && projection.layout) {
                                var measuredAxis = projection.layout.layoutBox[axis];
                                if (measuredAxis) {
                                    var length = calcLength(measuredAxis);
                                    current = length * (parseFloat(current) / 100);
                                }
                            }
                        }
                        _this.originPoint[axis] = current;
                    });
                    if (onDragStart) {
                        frame.postRender(function() {
                            return onDragStart(event, info);
                        });
                    }
                    addValueToWillChange(_this.visualElement, "transform");
                    var animationState = _this.visualElement.animationState;
                    animationState && animationState.setActive("whileDrag", true);
                };
                var onMove = function(event, info) {
                    var _this_getProps = _this.getProps(), dragPropagation = _this_getProps.dragPropagation, dragDirectionLock = _this_getProps.dragDirectionLock, onDirectionLock = _this_getProps.onDirectionLock, onDrag = _this_getProps.onDrag;
                    if (!dragPropagation && !_this.openGlobalLock) return;
                    var offset = info.offset;
                    if (dragDirectionLock && _this.currentDirection === null) {
                        _this.currentDirection = getCurrentDirection(offset);
                        if (_this.currentDirection !== null) {
                            onDirectionLock && onDirectionLock(_this.currentDirection);
                        }
                        return;
                    }
                    _this.updateAxis("x", info.point, offset);
                    _this.updateAxis("y", info.point, offset);
                    _this.visualElement.render();
                    onDrag && onDrag(event, info);
                };
                var onSessionEnd = function(event, info) {
                    return _this.stop(event, info);
                };
                var resumeAnimation = function() {
                    return eachAxis(function(axis) {
                        var _a;
                        return _this.getAnimationState(axis) === "paused" && ((_a = _this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.play());
                    });
                };
                var dragSnapToOrigin = this.getProps().dragSnapToOrigin;
                this.panSession = new PanSession(originEvent, {
                    onSessionStart: onSessionStart,
                    onStart: onStart,
                    onMove: onMove,
                    onSessionEnd: onSessionEnd,
                    resumeAnimation: resumeAnimation
                }, {
                    transformPagePoint: this.visualElement.getTransformPagePoint(),
                    dragSnapToOrigin: dragSnapToOrigin,
                    contextWindow: getContextWindow(this.visualElement)
                });
            }
        },
        {
            key: "stop",
            value: function stop(event, info) {
                var isDragging = this.isDragging;
                this.cancel();
                if (!isDragging) return;
                var velocity = info.velocity;
                this.startAnimation(velocity);
                var onDragEnd = this.getProps().onDragEnd;
                if (onDragEnd) {
                    frame.postRender(function() {
                        return onDragEnd(event, info);
                    });
                }
            }
        },
        {
            key: "cancel",
            value: function cancel() {
                this.isDragging = false;
                var _this_visualElement = this.visualElement, projection = _this_visualElement.projection, animationState = _this_visualElement.animationState;
                if (projection) {
                    projection.isAnimationBlocked = false;
                }
                this.panSession && this.panSession.end();
                this.panSession = void 0;
                var dragPropagation = this.getProps().dragPropagation;
                if (!dragPropagation && this.openGlobalLock) {
                    this.openGlobalLock();
                    this.openGlobalLock = null;
                }
                animationState && animationState.setActive("whileDrag", false);
            }
        },
        {
            key: "updateAxis",
            value: function updateAxis(axis, _point, offset) {
                var _this_getProps = this.getProps(), drag2 = _this_getProps.drag;
                if (!offset || !shouldDrag(axis, drag2, this.currentDirection)) return;
                var axisValue = this.getAxisMotionValue(axis);
                var next = this.originPoint[axis] + offset[axis];
                if (this.constraints && this.constraints[axis]) {
                    next = applyConstraints(next, this.constraints[axis], this.elastic[axis]);
                }
                axisValue.set(next);
            }
        },
        {
            key: "resolveConstraints",
            value: function resolveConstraints() {
                var _this = this;
                var _a;
                var _this_getProps = this.getProps(), dragConstraints = _this_getProps.dragConstraints, dragElastic = _this_getProps.dragElastic;
                var layout2 = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : (_a = this.visualElement.projection) === null || _a === void 0 ? void 0 : _a.layout;
                var prevConstraints = this.constraints;
                if (dragConstraints && isRefObject(dragConstraints)) {
                    if (!this.constraints) {
                        this.constraints = this.resolveRefConstraints();
                    }
                } else {
                    if (dragConstraints && layout2) {
                        this.constraints = calcRelativeConstraints(layout2.layoutBox, dragConstraints);
                    } else {
                        this.constraints = false;
                    }
                }
                this.elastic = resolveDragElastic(dragElastic);
                if (prevConstraints !== this.constraints && layout2 && this.constraints && !this.hasMutatedConstraints) {
                    eachAxis(function(axis) {
                        if (_this.constraints !== false && _this.getAxisMotionValue(axis)) {
                            _this.constraints[axis] = rebaseAxisConstraints(layout2.layoutBox[axis], _this.constraints[axis]);
                        }
                    });
                }
            }
        },
        {
            key: "resolveRefConstraints",
            value: function resolveRefConstraints() {
                var _this_getProps = this.getProps(), constraints = _this_getProps.dragConstraints, onMeasureDragConstraints = _this_getProps.onMeasureDragConstraints;
                if (!constraints || !isRefObject(constraints)) return false;
                var constraintsElement = constraints.current;
                invariant(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                var projection = this.visualElement.projection;
                if (!projection || !projection.layout) return false;
                var constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
                var measuredConstraints = calcViewportConstraints(projection.layout.layoutBox, constraintsBox);
                if (onMeasureDragConstraints) {
                    var userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
                    this.hasMutatedConstraints = !!userConstraints;
                    if (userConstraints) {
                        measuredConstraints = convertBoundingBoxToBox(userConstraints);
                    }
                }
                return measuredConstraints;
            }
        },
        {
            key: "startAnimation",
            value: function startAnimation(velocity) {
                var _this = this;
                var _this_getProps = this.getProps(), drag2 = _this_getProps.drag, dragMomentum = _this_getProps.dragMomentum, dragElastic = _this_getProps.dragElastic, dragTransition = _this_getProps.dragTransition, dragSnapToOrigin = _this_getProps.dragSnapToOrigin, onDragTransitionEnd = _this_getProps.onDragTransitionEnd;
                var constraints = this.constraints || {};
                var momentumAnimations = eachAxis(function(axis) {
                    if (!shouldDrag(axis, drag2, _this.currentDirection)) {
                        return;
                    }
                    var transition = constraints && constraints[axis] || {};
                    if (dragSnapToOrigin) transition = {
                        min: 0,
                        max: 0
                    };
                    var bounceStiffness = dragElastic ? 200 : 1e6;
                    var bounceDamping = dragElastic ? 40 : 1e7;
                    var inertia2 = _object_spread({
                        type: "inertia",
                        velocity: dragMomentum ? velocity[axis] : 0,
                        bounceStiffness: bounceStiffness,
                        bounceDamping: bounceDamping,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10
                    }, dragTransition, transition);
                    return _this.startAxisValueAnimation(axis, inertia2);
                });
                return Promise.all(momentumAnimations).then(onDragTransitionEnd);
            }
        },
        {
            key: "startAxisValueAnimation",
            value: function startAxisValueAnimation(axis, transition) {
                var axisValue = this.getAxisMotionValue(axis);
                addValueToWillChange(this.visualElement, axis);
                return axisValue.start(animateMotionValue(axis, axisValue, 0, transition, this.visualElement, false));
            }
        },
        {
            key: "stopAnimation",
            value: function stopAnimation() {
                var _this = this;
                eachAxis(function(axis) {
                    return _this.getAxisMotionValue(axis).stop();
                });
            }
        },
        {
            key: "pauseAnimation",
            value: function pauseAnimation() {
                var _this = this;
                eachAxis(function(axis) {
                    var _a;
                    return (_a = _this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.pause();
                });
            }
        },
        {
            key: "getAnimationState",
            value: function getAnimationState(axis) {
                var _a;
                return (_a = this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.state;
            }
        },
        {
            /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */ key: "getAxisMotionValue",
            value: function getAxisMotionValue(axis) {
                var dragKey = "_drag".concat(axis.toUpperCase());
                var props = this.visualElement.getProps();
                var externalMotionValue = props[dragKey];
                return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, (props.initial ? props.initial[axis] : void 0) || 0);
            }
        },
        {
            key: "snapToCursor",
            value: function snapToCursor(point) {
                var _this = this;
                eachAxis(function(axis) {
                    var _this_getProps = _this.getProps(), drag2 = _this_getProps.drag;
                    if (!shouldDrag(axis, drag2, _this.currentDirection)) return;
                    var projection = _this.visualElement.projection;
                    var axisValue = _this.getAxisMotionValue(axis);
                    if (projection && projection.layout) {
                        var _projection_layout_layoutBox_axis = projection.layout.layoutBox[axis], min = _projection_layout_layoutBox_axis.min, max = _projection_layout_layoutBox_axis.max;
                        axisValue.set(point[axis] - mixNumber(min, max, 0.5));
                    }
                });
            }
        },
        {
            /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */ key: "scalePositionWithinConstraints",
            value: function scalePositionWithinConstraints() {
                var _this = this;
                if (!this.visualElement.current) return;
                var _this_getProps = this.getProps(), drag2 = _this_getProps.drag, dragConstraints = _this_getProps.dragConstraints;
                var projection = this.visualElement.projection;
                if (!isRefObject(dragConstraints) || !projection || !this.constraints) return;
                this.stopAnimation();
                var boxProgress = {
                    x: 0,
                    y: 0
                };
                eachAxis(function(axis) {
                    var axisValue = _this.getAxisMotionValue(axis);
                    if (axisValue && _this.constraints !== false) {
                        var latest = axisValue.get();
                        boxProgress[axis] = calcOrigin({
                            min: latest,
                            max: latest
                        }, _this.constraints[axis]);
                    }
                });
                var transformTemplate = this.visualElement.getProps().transformTemplate;
                this.visualElement.current.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
                projection.root && projection.root.updateScroll();
                projection.updateLayout();
                this.resolveConstraints();
                eachAxis(function(axis) {
                    if (!shouldDrag(axis, drag2, null)) return;
                    var axisValue = _this.getAxisMotionValue(axis);
                    var _this_constraints_axis = _this.constraints[axis], min = _this_constraints_axis.min, max = _this_constraints_axis.max;
                    axisValue.set(mixNumber(min, max, boxProgress[axis]));
                });
            }
        },
        {
            key: "addListeners",
            value: function addListeners() {
                var _this = this;
                if (!this.visualElement.current) return;
                elementDragControls.set(this.visualElement, this);
                var element = this.visualElement.current;
                var stopPointerListener = addPointerEvent(element, "pointerdown", function(event) {
                    var _this_getProps = _this.getProps(), drag2 = _this_getProps.drag, _this_getProps_dragListener = _this_getProps.dragListener, dragListener = _this_getProps_dragListener === void 0 ? true : _this_getProps_dragListener;
                    drag2 && dragListener && _this.start(event);
                });
                var measureDragConstraints = function() {
                    var dragConstraints = _this.getProps().dragConstraints;
                    if (isRefObject(dragConstraints) && dragConstraints.current) {
                        _this.constraints = _this.resolveRefConstraints();
                    }
                };
                var projection = this.visualElement.projection;
                var stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
                if (projection && !projection.layout) {
                    projection.root && projection.root.updateScroll();
                    projection.updateLayout();
                }
                frame.read(measureDragConstraints);
                var stopResizeListener = addDomEvent(window, "resize", function() {
                    return _this.scalePositionWithinConstraints();
                });
                var stopLayoutUpdateListener = projection.addEventListener("didUpdate", function(param) {
                    var delta = param.delta, hasLayoutChanged = param.hasLayoutChanged;
                    if (_this.isDragging && hasLayoutChanged) {
                        eachAxis(function(axis) {
                            var motionValue2 = _this.getAxisMotionValue(axis);
                            if (!motionValue2) return;
                            _this.originPoint[axis] += delta[axis].translate;
                            motionValue2.set(motionValue2.get() + delta[axis].translate);
                        });
                        _this.visualElement.render();
                    }
                });
                return function() {
                    stopResizeListener();
                    stopPointerListener();
                    stopMeasureLayoutListener();
                    stopLayoutUpdateListener && stopLayoutUpdateListener();
                };
            }
        },
        {
            key: "getProps",
            value: function getProps() {
                var props = this.visualElement.getProps();
                var tmp = props.drag, drag2 = tmp === void 0 ? false : tmp, _props_dragDirectionLock = props.dragDirectionLock, dragDirectionLock = _props_dragDirectionLock === void 0 ? false : _props_dragDirectionLock, _props_dragPropagation = props.dragPropagation, dragPropagation = _props_dragPropagation === void 0 ? false : _props_dragPropagation, _props_dragConstraints = props.dragConstraints, dragConstraints = _props_dragConstraints === void 0 ? false : _props_dragConstraints, _props_dragElastic = props.dragElastic, dragElastic = _props_dragElastic === void 0 ? defaultElastic : _props_dragElastic, _props_dragMomentum = props.dragMomentum, dragMomentum = _props_dragMomentum === void 0 ? true : _props_dragMomentum;
                return _object_spread_props(_object_spread({}, props), {
                    drag: drag2,
                    dragDirectionLock: dragDirectionLock,
                    dragPropagation: dragPropagation,
                    dragConstraints: dragConstraints,
                    dragElastic: dragElastic,
                    dragMomentum: dragMomentum
                });
            }
        }
    ]);
    return VisualElementDragControls;
}();
function shouldDrag(direction, drag2, currentDirection) {
    return (drag2 === true || drag2 === direction) && (currentDirection === null || currentDirection === direction);
}
function getCurrentDirection(offset) {
    var lockThreshold = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 10;
    var direction = null;
    if (Math.abs(offset.y) > lockThreshold) {
        direction = "y";
    } else if (Math.abs(offset.x) > lockThreshold) {
        direction = "x";
    }
    return direction;
}
// ../../node_modules/framer-motion/dist/es/gestures/drag/index.mjs
var DragGesture = /*#__PURE__*/ function(Feature) {
    _inherits(DragGesture, Feature);
    function DragGesture(node) {
        _class_call_check(this, DragGesture);
        var _this;
        _this = _call_super(this, DragGesture, [
            node
        ]);
        _this.removeGroupControls = noop;
        _this.removeListeners = noop;
        _this.controls = new VisualElementDragControls(node);
        return _this;
    }
    _create_class(DragGesture, [
        {
            key: "mount",
            value: function mount() {
                var dragControls = this.node.getProps().dragControls;
                if (dragControls) {
                    this.removeGroupControls = dragControls.subscribe(this.controls);
                }
                this.removeListeners = this.controls.addListeners() || noop;
            }
        },
        {
            key: "unmount",
            value: function unmount() {
                this.removeGroupControls();
                this.removeListeners();
            }
        }
    ]);
    return DragGesture;
}(Feature);
// ../../node_modules/framer-motion/dist/es/gestures/pan/index.mjs
var asyncHandler = function(handler) {
    return function(event, info) {
        if (handler) {
            frame.postRender(function() {
                return handler(event, info);
            });
        }
    };
};
var PanGesture = /*#__PURE__*/ function(Feature) {
    _inherits(PanGesture, Feature);
    function PanGesture() {
        _class_call_check(this, PanGesture);
        var _this;
        _this = _call_super(this, PanGesture, arguments);
        _this.removePointerDownListener = noop;
        return _this;
    }
    _create_class(PanGesture, [
        {
            key: "onPointerDown",
            value: function onPointerDown(pointerDownEvent) {
                this.session = new PanSession(pointerDownEvent, this.createPanHandlers(), {
                    transformPagePoint: this.node.getTransformPagePoint(),
                    contextWindow: getContextWindow(this.node)
                });
            }
        },
        {
            key: "createPanHandlers",
            value: function createPanHandlers() {
                var _this = this;
                var _this_node_getProps = this.node.getProps(), onPanSessionStart = _this_node_getProps.onPanSessionStart, onPanStart = _this_node_getProps.onPanStart, onPan = _this_node_getProps.onPan, onPanEnd = _this_node_getProps.onPanEnd;
                return {
                    onSessionStart: asyncHandler(onPanSessionStart),
                    onStart: asyncHandler(onPanStart),
                    onMove: onPan,
                    onEnd: function(event, info) {
                        delete _this.session;
                        if (onPanEnd) {
                            frame.postRender(function() {
                                return onPanEnd(event, info);
                            });
                        }
                    }
                };
            }
        },
        {
            key: "mount",
            value: function mount() {
                var _this = this;
                this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", function(event) {
                    return _this.onPointerDown(event);
                });
            }
        },
        {
            key: "update",
            value: function update() {
                this.session && this.session.updateHandlers(this.createPanHandlers());
            }
        },
        {
            key: "unmount",
            value: function unmount() {
                this.removePointerDownListener();
                this.session && this.session.end();
            }
        }
    ]);
    return PanGesture;
}(Feature);
// ../../node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
var import_jsx_runtime = require("react/jsx-runtime");
var import_react5 = require("react");
// ../../node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
var import_react2 = require("react");
// ../../node_modules/framer-motion/dist/es/context/PresenceContext.mjs
var import_react = require("react");
var PresenceContext = (0, import_react.createContext)(null);
// ../../node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
function usePresence() {
    var context = (0, import_react2.useContext)(PresenceContext);
    if (context === null) return [
        true,
        null
    ];
    var isPresent = context.isPresent, onExitComplete = context.onExitComplete, register = context.register;
    var id3 = (0, import_react2.useId)();
    (0, import_react2.useEffect)(function() {
        return register(id3);
    }, []);
    var safeToRemove = (0, import_react2.useCallback)(function() {
        return onExitComplete && onExitComplete(id3);
    }, [
        id3,
        onExitComplete
    ]);
    return !isPresent && onExitComplete ? [
        false,
        safeToRemove
    ] : [
        true
    ];
}
// ../../node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
var import_react3 = require("react");
var LayoutGroupContext = (0, import_react3.createContext)({});
// ../../node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs
var import_react4 = require("react");
var SwitchLayoutGroupContext = (0, import_react4.createContext)({});
// ../../node_modules/framer-motion/dist/es/projection/node/state.mjs
var globalProjectionState = {
    /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */ hasAnimatedSinceResize: true,
    /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */ hasEverUpdated: false
};
// ../../node_modules/framer-motion/dist/es/projection/styles/scale-border-radius.mjs
function pixelsToPercent(pixels, axis) {
    if (axis.max === axis.min) return 0;
    return pixels / (axis.max - axis.min) * 100;
}
var correctBorderRadius = {
    correct: function(latest, node) {
        if (!node.target) return latest;
        if (typeof latest === "string") {
            if (px.test(latest)) {
                latest = parseFloat(latest);
            } else {
                return latest;
            }
        }
        var x = pixelsToPercent(latest, node.target.x);
        var y = pixelsToPercent(latest, node.target.y);
        return "".concat(x, "% ").concat(y, "%");
    }
};
// ../../node_modules/framer-motion/dist/es/projection/styles/scale-box-shadow.mjs
var correctBoxShadow = {
    correct: function(latest, param) {
        var treeScale = param.treeScale, projectionDelta = param.projectionDelta;
        var original = latest;
        var shadow = complex.parse(latest);
        if (shadow.length > 5) return original;
        var template = complex.createTransformer(latest);
        var offset = typeof shadow[0] !== "number" ? 1 : 0;
        var xScale = projectionDelta.x.scale * treeScale.x;
        var yScale = projectionDelta.y.scale * treeScale.y;
        shadow[0 + offset] /= xScale;
        shadow[1 + offset] /= yScale;
        var averageScale = mixNumber(xScale, yScale, 0.5);
        if (typeof shadow[2 + offset] === "number") shadow[2 + offset] /= averageScale;
        if (typeof shadow[3 + offset] === "number") shadow[3 + offset] /= averageScale;
        return template(shadow);
    }
};
// ../../node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs
var scaleCorrectors = {};
function addScaleCorrector(correctors) {
    Object.assign(scaleCorrectors, correctors);
}
// ../../node_modules/framer-motion/dist/es/frameloop/microtask.mjs
var _createRenderBatcher1 = createRenderBatcher(queueMicrotask, false), microtask = _createRenderBatcher1.schedule, cancelMicrotask = _createRenderBatcher1.cancel;
// ../../node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
var MeasureLayoutWithContext = /*#__PURE__*/ function(_import_react5_Component) {
    _inherits(MeasureLayoutWithContext, _import_react5_Component);
    function MeasureLayoutWithContext() {
        _class_call_check(this, MeasureLayoutWithContext);
        return _call_super(this, MeasureLayoutWithContext, arguments);
    }
    _create_class(MeasureLayoutWithContext, [
        {
            /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */ key: "componentDidMount",
            value: function componentDidMount() {
                var _this = this;
                var _this_props = this.props, visualElement = _this_props.visualElement, layoutGroup = _this_props.layoutGroup, switchLayoutGroup = _this_props.switchLayoutGroup, layoutId = _this_props.layoutId;
                var projection = visualElement.projection;
                addScaleCorrector(defaultScaleCorrectors);
                if (projection) {
                    if (layoutGroup.group) layoutGroup.group.add(projection);
                    if (switchLayoutGroup && switchLayoutGroup.register && layoutId) {
                        switchLayoutGroup.register(projection);
                    }
                    projection.root.didUpdate();
                    projection.addEventListener("animationComplete", function() {
                        _this.safeToRemove();
                    });
                    projection.setOptions(_object_spread_props(_object_spread({}, projection.options), {
                        onExitComplete: function() {
                            return _this.safeToRemove();
                        }
                    }));
                }
                globalProjectionState.hasEverUpdated = true;
            }
        },
        {
            key: "getSnapshotBeforeUpdate",
            value: function getSnapshotBeforeUpdate(prevProps) {
                var _this = this;
                var _this_props = this.props, layoutDependency = _this_props.layoutDependency, visualElement = _this_props.visualElement, drag2 = _this_props.drag, isPresent = _this_props.isPresent;
                var projection = visualElement.projection;
                if (!projection) return null;
                projection.isPresent = isPresent;
                if (drag2 || prevProps.layoutDependency !== layoutDependency || layoutDependency === void 0) {
                    projection.willUpdate();
                } else {
                    this.safeToRemove();
                }
                if (prevProps.isPresent !== isPresent) {
                    if (isPresent) {
                        projection.promote();
                    } else if (!projection.relegate()) {
                        frame.postRender(function() {
                            var stack = projection.getStack();
                            if (!stack || !stack.members.length) {
                                _this.safeToRemove();
                            }
                        });
                    }
                }
                return null;
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                var _this = this;
                var projection = this.props.visualElement.projection;
                if (projection) {
                    projection.root.didUpdate();
                    microtask.postRender(function() {
                        if (!projection.currentAnimation && projection.isLead()) {
                            _this.safeToRemove();
                        }
                    });
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                var _this_props = this.props, visualElement = _this_props.visualElement, layoutGroup = _this_props.layoutGroup, promoteContext = _this_props.switchLayoutGroup;
                var projection = visualElement.projection;
                if (projection) {
                    projection.scheduleCheckAfterUnmount();
                    if (layoutGroup && layoutGroup.group) layoutGroup.group.remove(projection);
                    if (promoteContext && promoteContext.deregister) promoteContext.deregister(projection);
                }
            }
        },
        {
            key: "safeToRemove",
            value: function safeToRemove() {
                var safeToRemove = this.props.safeToRemove;
                safeToRemove && safeToRemove();
            }
        },
        {
            key: "render",
            value: function render() {
                return null;
            }
        }
    ]);
    return MeasureLayoutWithContext;
}(import_react5.Component);
function MeasureLayout(props) {
    var _usePresence = _sliced_to_array(usePresence(), 2), isPresent = _usePresence[0], safeToRemove = _usePresence[1];
    var layoutGroup = (0, import_react5.useContext)(LayoutGroupContext);
    return (0, import_jsx_runtime.jsx)(MeasureLayoutWithContext, _object_spread_props(_object_spread({}, props), {
        layoutGroup: layoutGroup,
        switchLayoutGroup: (0, import_react5.useContext)(SwitchLayoutGroupContext),
        isPresent: isPresent,
        safeToRemove: safeToRemove
    }));
}
var defaultScaleCorrectors = {
    borderRadius: _object_spread_props(_object_spread({}, correctBorderRadius), {
        applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius"
        ]
    }),
    borderTopLeftRadius: correctBorderRadius,
    borderTopRightRadius: correctBorderRadius,
    borderBottomLeftRadius: correctBorderRadius,
    borderBottomRightRadius: correctBorderRadius,
    boxShadow: correctBoxShadow
};
// ../../node_modules/framer-motion/dist/es/projection/animation/mix-values.mjs
var borders = [
    "TopLeft",
    "TopRight",
    "BottomLeft",
    "BottomRight"
];
var numBorders = borders.length;
var asNumber = function(value) {
    return typeof value === "string" ? parseFloat(value) : value;
};
var isPx = function(value) {
    return typeof value === "number" || px.test(value);
};
function mixValues(target, follow, lead, progress2, shouldCrossfadeOpacity, isOnlyMember) {
    if (shouldCrossfadeOpacity) {
        target.opacity = mixNumber(0, // TODO Reinstate this if only child
        lead.opacity !== void 0 ? lead.opacity : 1, easeCrossfadeIn(progress2));
        target.opacityExit = mixNumber(follow.opacity !== void 0 ? follow.opacity : 1, 0, easeCrossfadeOut(progress2));
    } else if (isOnlyMember) {
        target.opacity = mixNumber(follow.opacity !== void 0 ? follow.opacity : 1, lead.opacity !== void 0 ? lead.opacity : 1, progress2);
    }
    for(var i = 0; i < numBorders; i++){
        var borderLabel = "border".concat(borders[i], "Radius");
        var followRadius = getRadius(follow, borderLabel);
        var leadRadius = getRadius(lead, borderLabel);
        if (followRadius === void 0 && leadRadius === void 0) continue;
        followRadius || (followRadius = 0);
        leadRadius || (leadRadius = 0);
        var canMix = followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius);
        if (canMix) {
            target[borderLabel] = Math.max(mixNumber(asNumber(followRadius), asNumber(leadRadius), progress2), 0);
            if (percent.test(leadRadius) || percent.test(followRadius)) {
                target[borderLabel] += "%";
            }
        } else {
            target[borderLabel] = leadRadius;
        }
    }
    if (follow.rotate || lead.rotate) {
        target.rotate = mixNumber(follow.rotate || 0, lead.rotate || 0, progress2);
    }
}
function getRadius(values, radiusName) {
    return values[radiusName] !== void 0 ? values[radiusName] : values.borderRadius;
}
var easeCrossfadeIn = /* @__PURE__ */ compress(0, 0.5, circOut);
var easeCrossfadeOut = /* @__PURE__ */ compress(0.5, 0.95, noop);
function compress(min, max, easing) {
    return function(p) {
        if (p < min) return 0;
        if (p > max) return 1;
        return easing(progress(min, max, p));
    };
}
// ../../node_modules/framer-motion/dist/es/projection/geometry/copy.mjs
function copyAxisInto(axis, originAxis) {
    axis.min = originAxis.min;
    axis.max = originAxis.max;
}
function copyBoxInto(box, originBox) {
    copyAxisInto(box.x, originBox.x);
    copyAxisInto(box.y, originBox.y);
}
function copyAxisDeltaInto(delta, originDelta) {
    delta.translate = originDelta.translate;
    delta.scale = originDelta.scale;
    delta.originPoint = originDelta.originPoint;
    delta.origin = originDelta.origin;
}
// ../../node_modules/framer-motion/dist/es/projection/geometry/delta-remove.mjs
function removePointDelta(point, translate, scale2, originPoint, boxScale) {
    point -= translate;
    point = scalePoint(point, 1 / scale2, originPoint);
    if (boxScale !== void 0) {
        point = scalePoint(point, 1 / boxScale, originPoint);
    }
    return point;
}
function removeAxisDelta(axis) {
    var translate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, scale2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, origin = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0.5, boxScale = arguments.length > 4 ? arguments[4] : void 0, originAxis = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : axis, sourceAxis = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : axis;
    if (percent.test(translate)) {
        translate = parseFloat(translate);
        var relativeProgress = mixNumber(sourceAxis.min, sourceAxis.max, translate / 100);
        translate = relativeProgress - sourceAxis.min;
    }
    if (typeof translate !== "number") return;
    var originPoint = mixNumber(originAxis.min, originAxis.max, origin);
    if (axis === originAxis) originPoint -= translate;
    axis.min = removePointDelta(axis.min, translate, scale2, originPoint, boxScale);
    axis.max = removePointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function removeAxisTransforms(axis, transforms, param, origin, sourceAxis) {
    var _param = _sliced_to_array(param, 3), key = _param[0], scaleKey = _param[1], originKey = _param[2];
    removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
}
var xKeys = [
    "x",
    "scaleX",
    "originX"
];
var yKeys = [
    "y",
    "scaleY",
    "originY"
];
function removeBoxTransforms(box, transforms, originBox, sourceBox) {
    removeAxisTransforms(box.x, transforms, xKeys, originBox ? originBox.x : void 0, sourceBox ? sourceBox.x : void 0);
    removeAxisTransforms(box.y, transforms, yKeys, originBox ? originBox.y : void 0, sourceBox ? sourceBox.y : void 0);
}
// ../../node_modules/framer-motion/dist/es/projection/geometry/utils.mjs
function isAxisDeltaZero(delta) {
    return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
    return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function axisEquals(a, b) {
    return a.min === b.min && a.max === b.max;
}
function boxEquals(a, b) {
    return axisEquals(a.x, b.x) && axisEquals(a.y, b.y);
}
function axisEqualsRounded(a, b) {
    return Math.round(a.min) === Math.round(b.min) && Math.round(a.max) === Math.round(b.max);
}
function boxEqualsRounded(a, b) {
    return axisEqualsRounded(a.x, b.x) && axisEqualsRounded(a.y, b.y);
}
function aspectRatio(box) {
    return calcLength(box.x) / calcLength(box.y);
}
function axisDeltaEquals(a, b) {
    return a.translate === b.translate && a.scale === b.scale && a.originPoint === b.originPoint;
}
// ../../node_modules/framer-motion/dist/es/projection/shared/stack.mjs
var NodeStack = /*#__PURE__*/ function() {
    function NodeStack() {
        _class_call_check(this, NodeStack);
        this.members = [];
    }
    _create_class(NodeStack, [
        {
            key: "add",
            value: function add(node) {
                addUniqueItem(this.members, node);
                node.scheduleRender();
            }
        },
        {
            key: "remove",
            value: function remove(node) {
                removeItem(this.members, node);
                if (node === this.prevLead) {
                    this.prevLead = void 0;
                }
                if (node === this.lead) {
                    var prevLead = this.members[this.members.length - 1];
                    if (prevLead) {
                        this.promote(prevLead);
                    }
                }
            }
        },
        {
            key: "relegate",
            value: function relegate(node) {
                var indexOfNode = this.members.findIndex(function(member) {
                    return node === member;
                });
                if (indexOfNode === 0) return false;
                var prevLead;
                for(var i = indexOfNode; i >= 0; i--){
                    var member = this.members[i];
                    if (member.isPresent !== false) {
                        prevLead = member;
                        break;
                    }
                }
                if (prevLead) {
                    this.promote(prevLead);
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            key: "promote",
            value: function promote(node, preserveFollowOpacity) {
                var prevLead = this.lead;
                if (node === prevLead) return;
                this.prevLead = prevLead;
                this.lead = node;
                node.show();
                if (prevLead) {
                    prevLead.instance && prevLead.scheduleRender();
                    node.scheduleRender();
                    node.resumeFrom = prevLead;
                    if (preserveFollowOpacity) {
                        node.resumeFrom.preserveOpacity = true;
                    }
                    if (prevLead.snapshot) {
                        node.snapshot = prevLead.snapshot;
                        node.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues;
                    }
                    if (node.root && node.root.isUpdating) {
                        node.isLayoutDirty = true;
                    }
                    var crossfade = node.options.crossfade;
                    if (crossfade === false) {
                        prevLead.hide();
                    }
                }
            }
        },
        {
            key: "exitAnimationComplete",
            value: function exitAnimationComplete() {
                this.members.forEach(function(node) {
                    var options = node.options, resumingFrom = node.resumingFrom;
                    options.onExitComplete && options.onExitComplete();
                    if (resumingFrom) {
                        resumingFrom.options.onExitComplete && resumingFrom.options.onExitComplete();
                    }
                });
            }
        },
        {
            key: "scheduleRender",
            value: function scheduleRender() {
                this.members.forEach(function(node) {
                    node.instance && node.scheduleRender(false);
                });
            }
        },
        {
            /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */ key: "removeLeadSnapshot",
            value: function removeLeadSnapshot() {
                if (this.lead && this.lead.snapshot) {
                    this.lead.snapshot = void 0;
                }
            }
        }
    ]);
    return NodeStack;
}();
// ../../node_modules/framer-motion/dist/es/projection/styles/transform.mjs
function buildProjectionTransform(delta, treeScale, latestTransform) {
    var transform = "";
    var xTranslate = delta.x.translate / treeScale.x;
    var yTranslate = delta.y.translate / treeScale.y;
    var zTranslate = (latestTransform === null || latestTransform === void 0 ? void 0 : latestTransform.z) || 0;
    if (xTranslate || yTranslate || zTranslate) {
        transform = "translate3d(".concat(xTranslate, "px, ").concat(yTranslate, "px, ").concat(zTranslate, "px) ");
    }
    if (treeScale.x !== 1 || treeScale.y !== 1) {
        transform += "scale(".concat(1 / treeScale.x, ", ").concat(1 / treeScale.y, ") ");
    }
    if (latestTransform) {
        var transformPerspective = latestTransform.transformPerspective, rotate = latestTransform.rotate, rotateX = latestTransform.rotateX, rotateY = latestTransform.rotateY, skewX = latestTransform.skewX, skewY = latestTransform.skewY;
        if (transformPerspective) transform = "perspective(".concat(transformPerspective, "px) ").concat(transform);
        if (rotate) transform += "rotate(".concat(rotate, "deg) ");
        if (rotateX) transform += "rotateX(".concat(rotateX, "deg) ");
        if (rotateY) transform += "rotateY(".concat(rotateY, "deg) ");
        if (skewX) transform += "skewX(".concat(skewX, "deg) ");
        if (skewY) transform += "skewY(".concat(skewY, "deg) ");
    }
    var elementScaleX = delta.x.scale * treeScale.x;
    var elementScaleY = delta.y.scale * treeScale.y;
    if (elementScaleX !== 1 || elementScaleY !== 1) {
        transform += "scale(".concat(elementScaleX, ", ").concat(elementScaleY, ")");
    }
    return transform || "none";
}
// ../../node_modules/framer-motion/dist/es/render/utils/compare-by-depth.mjs
var compareByDepth = function(a, b) {
    return a.depth - b.depth;
};
// ../../node_modules/framer-motion/dist/es/render/utils/flat-tree.mjs
var FlatTree = /*#__PURE__*/ function() {
    function FlatTree() {
        _class_call_check(this, FlatTree);
        this.children = [];
        this.isDirty = false;
    }
    _create_class(FlatTree, [
        {
            key: "add",
            value: function add(child) {
                addUniqueItem(this.children, child);
                this.isDirty = true;
            }
        },
        {
            key: "remove",
            value: function remove(child) {
                removeItem(this.children, child);
                this.isDirty = true;
            }
        },
        {
            key: "forEach",
            value: function forEach(callback) {
                this.isDirty && this.children.sort(compareByDepth);
                this.isDirty = false;
                this.children.forEach(callback);
            }
        }
    ]);
    return FlatTree;
}();
// ../../node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs
function resolveMotionValue(value) {
    var unwrappedValue = isMotionValue(value) ? value.get() : value;
    return isCustomValue(unwrappedValue) ? unwrappedValue.toValue() : unwrappedValue;
}
// ../../node_modules/framer-motion/dist/es/utils/delay.mjs
function delay(callback, timeout) {
    var start = time.now();
    var checkElapsed = function(param) {
        var timestamp = param.timestamp;
        var elapsed = timestamp - start;
        if (elapsed >= timeout) {
            cancelFrame(checkElapsed);
            callback(elapsed - timeout);
        }
    };
    frame.read(checkElapsed, true);
    return function() {
        return cancelFrame(checkElapsed);
    };
}
// ../../node_modules/framer-motion/dist/es/render/dom/utils/is-svg-element.mjs
function isSVGElement(element) {
    return _instanceof(element, SVGElement) && element.tagName !== "svg";
}
// ../../node_modules/framer-motion/dist/es/animation/animate/single-value.mjs
function animateSingleValue(value, keyframes2, options) {
    var motionValue$1 = isMotionValue(value) ? value : motionValue(value);
    motionValue$1.start(animateMotionValue("", motionValue$1, keyframes2, options));
    return motionValue$1.animation;
}
// ../../node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs
var metrics = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
};
var isDebug = typeof window !== "undefined" && window.MotionDebug !== void 0;
var transformAxes = [
    "",
    "X",
    "Y",
    "Z"
];
var hiddenVisibility = {
    visibility: "hidden"
};
var animationTarget = 1e3;
var id2 = 0;
function resetDistortingTransform(key, visualElement, values, sharedAnimationValues) {
    var latestValues = visualElement.latestValues;
    if (latestValues[key]) {
        values[key] = latestValues[key];
        visualElement.setStaticValue(key, 0);
        if (sharedAnimationValues) {
            sharedAnimationValues[key] = 0;
        }
    }
}
function cancelTreeOptimisedTransformAnimations(projectionNode) {
    projectionNode.hasCheckedOptimisedAppear = true;
    if (projectionNode.root === projectionNode) return;
    var visualElement = projectionNode.options.visualElement;
    if (!visualElement) return;
    var appearId = getOptimisedAppearId(visualElement);
    if (window.MotionHasOptimisedAnimation(appearId, "transform")) {
        var _projectionNode_options = projectionNode.options, layout2 = _projectionNode_options.layout, layoutId = _projectionNode_options.layoutId;
        window.MotionCancelOptimisedAnimation(appearId, "transform", frame, !(layout2 || layoutId));
    }
    var parent = projectionNode.parent;
    if (parent && !parent.hasCheckedOptimisedAppear) {
        cancelTreeOptimisedTransformAnimations(parent);
    }
}
function createProjectionNode(param) {
    var attachResizeListener = param.attachResizeListener, defaultParent = param.defaultParent, measureScroll = param.measureScroll, checkIsScrollRoot = param.checkIsScrollRoot, resetTransform = param.resetTransform;
    return /*#__PURE__*/ function() {
        function ProjectionNode() {
            var _this = this;
            var latestValues = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, parent = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : defaultParent === null || defaultParent === void 0 ? void 0 : defaultParent();
            _class_call_check(this, ProjectionNode);
            this.id = id2++;
            this.animationId = 0;
            this.children = /* @__PURE__ */ new Set();
            this.options = {};
            this.isTreeAnimating = false;
            this.isAnimationBlocked = false;
            this.isLayoutDirty = false;
            this.isProjectionDirty = false;
            this.isSharedProjectionDirty = false;
            this.isTransformDirty = false;
            this.updateManuallyBlocked = false;
            this.updateBlockedByResize = false;
            this.isUpdating = false;
            this.isSVG = false;
            this.needsReset = false;
            this.shouldResetTransform = false;
            this.hasCheckedOptimisedAppear = false;
            this.treeScale = {
                x: 1,
                y: 1
            };
            this.eventHandlers = /* @__PURE__ */ new Map();
            this.hasTreeAnimated = false;
            this.updateScheduled = false;
            this.scheduleUpdate = function() {
                return _this.update();
            };
            this.projectionUpdateScheduled = false;
            this.checkUpdateFailed = function() {
                if (_this.isUpdating) {
                    _this.isUpdating = false;
                    _this.clearAllSnapshots();
                }
            };
            this.updateProjection = function() {
                _this.projectionUpdateScheduled = false;
                if (isDebug) {
                    metrics.totalNodes = metrics.resolvedTargetDeltas = metrics.recalculatedProjection = 0;
                }
                _this.nodes.forEach(propagateDirtyNodes);
                _this.nodes.forEach(resolveTargetDelta);
                _this.nodes.forEach(calcProjection);
                _this.nodes.forEach(cleanDirtyNodes);
                if (isDebug) {
                    window.MotionDebug.record(metrics);
                }
            };
            this.resolvedRelativeTargetAt = 0;
            this.hasProjected = false;
            this.isVisible = true;
            this.animationProgress = 0;
            this.sharedNodes = /* @__PURE__ */ new Map();
            this.latestValues = latestValues;
            this.root = parent ? parent.root || parent : this;
            this.path = parent ? _to_consumable_array(parent.path).concat([
                parent
            ]) : [];
            this.parent = parent;
            this.depth = parent ? parent.depth + 1 : 0;
            for(var i = 0; i < this.path.length; i++){
                this.path[i].shouldResetTransform = true;
            }
            if (this.root === this) this.nodes = new FlatTree();
        }
        _create_class(ProjectionNode, [
            {
                key: "addEventListener",
                value: function addEventListener(name, handler) {
                    if (!this.eventHandlers.has(name)) {
                        this.eventHandlers.set(name, new SubscriptionManager());
                    }
                    return this.eventHandlers.get(name).add(handler);
                }
            },
            {
                key: "notifyListeners",
                value: function notifyListeners(name) {
                    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                        args[_key - 1] = arguments[_key];
                    }
                    var _subscriptionManager;
                    var subscriptionManager = this.eventHandlers.get(name);
                    subscriptionManager && (_subscriptionManager = subscriptionManager).notify.apply(_subscriptionManager, _to_consumable_array(args));
                }
            },
            {
                key: "hasListeners",
                value: function hasListeners(name) {
                    return this.eventHandlers.has(name);
                }
            },
            {
                /**
     * Lifecycles
     */ key: "mount",
                value: function mount(instance) {
                    var _this = this;
                    var isLayoutDirty = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.root.hasTreeAnimated;
                    if (this.instance) return;
                    this.isSVG = isSVGElement(instance);
                    this.instance = instance;
                    var _this_options = this.options, layoutId = _this_options.layoutId, layout2 = _this_options.layout, visualElement = _this_options.visualElement;
                    if (visualElement && !visualElement.current) {
                        visualElement.mount(instance);
                    }
                    this.root.nodes.add(this);
                    this.parent && this.parent.children.add(this);
                    if (isLayoutDirty && (layout2 || layoutId)) {
                        this.isLayoutDirty = true;
                    }
                    if (attachResizeListener) {
                        var cancelDelay;
                        var resizeUnblockUpdate = function() {
                            return _this.root.updateBlockedByResize = false;
                        };
                        attachResizeListener(instance, function() {
                            _this.root.updateBlockedByResize = true;
                            cancelDelay && cancelDelay();
                            cancelDelay = delay(resizeUnblockUpdate, 250);
                            if (globalProjectionState.hasAnimatedSinceResize) {
                                globalProjectionState.hasAnimatedSinceResize = false;
                                _this.nodes.forEach(finishAnimation);
                            }
                        });
                    }
                    if (layoutId) {
                        this.root.registerSharedNode(layoutId, this);
                    }
                    if (this.options.animate !== false && visualElement && (layoutId || layout2)) {
                        this.addEventListener("didUpdate", function(param) {
                            var delta = param.delta, hasLayoutChanged = param.hasLayoutChanged, hasRelativeTargetChanged = param.hasRelativeTargetChanged, newLayout = param.layout;
                            if (_this.isTreeAnimationBlocked()) {
                                _this.target = void 0;
                                _this.relativeTarget = void 0;
                                return;
                            }
                            var layoutTransition = _this.options.transition || visualElement.getDefaultTransition() || defaultLayoutTransition;
                            var _visualElement_getProps = visualElement.getProps(), onLayoutAnimationStart = _visualElement_getProps.onLayoutAnimationStart, onLayoutAnimationComplete = _visualElement_getProps.onLayoutAnimationComplete;
                            var targetChanged = !_this.targetLayout || !boxEqualsRounded(_this.targetLayout, newLayout) || hasRelativeTargetChanged;
                            var hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeTargetChanged;
                            if (_this.options.layoutRoot || _this.resumeFrom && _this.resumeFrom.instance || hasOnlyRelativeTargetChanged || hasLayoutChanged && (targetChanged || !_this.currentAnimation)) {
                                if (_this.resumeFrom) {
                                    _this.resumingFrom = _this.resumeFrom;
                                    _this.resumingFrom.resumingFrom = void 0;
                                }
                                _this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);
                                var animationOptions = _object_spread_props(_object_spread({}, getValueTransition(layoutTransition, "layout")), {
                                    onPlay: onLayoutAnimationStart,
                                    onComplete: onLayoutAnimationComplete
                                });
                                if (visualElement.shouldReduceMotion || _this.options.layoutRoot) {
                                    animationOptions.delay = 0;
                                    animationOptions.type = false;
                                }
                                _this.startAnimation(animationOptions);
                            } else {
                                if (!hasLayoutChanged) {
                                    finishAnimation(_this);
                                }
                                if (_this.isLead() && _this.options.onExitComplete) {
                                    _this.options.onExitComplete();
                                }
                            }
                            _this.targetLayout = newLayout;
                        });
                    }
                }
            },
            {
                key: "unmount",
                value: function unmount() {
                    this.options.layoutId && this.willUpdate();
                    this.root.nodes.remove(this);
                    var stack = this.getStack();
                    stack && stack.remove(this);
                    this.parent && this.parent.children.delete(this);
                    this.instance = void 0;
                    cancelFrame(this.updateProjection);
                }
            },
            {
                // only on the root
                key: "blockUpdate",
                value: function blockUpdate() {
                    this.updateManuallyBlocked = true;
                }
            },
            {
                key: "unblockUpdate",
                value: function unblockUpdate() {
                    this.updateManuallyBlocked = false;
                }
            },
            {
                key: "isUpdateBlocked",
                value: function isUpdateBlocked() {
                    return this.updateManuallyBlocked || this.updateBlockedByResize;
                }
            },
            {
                key: "isTreeAnimationBlocked",
                value: function isTreeAnimationBlocked() {
                    return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
                }
            },
            {
                // Note: currently only running on root node
                key: "startUpdate",
                value: function startUpdate() {
                    if (this.isUpdateBlocked()) return;
                    this.isUpdating = true;
                    this.nodes && this.nodes.forEach(resetSkewAndRotation);
                    this.animationId++;
                }
            },
            {
                key: "getTransformTemplate",
                value: function getTransformTemplate() {
                    var visualElement = this.options.visualElement;
                    return visualElement && visualElement.getProps().transformTemplate;
                }
            },
            {
                key: "willUpdate",
                value: function willUpdate() {
                    var shouldNotifyListeners = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                    this.root.hasTreeAnimated = true;
                    if (this.root.isUpdateBlocked()) {
                        this.options.onExitComplete && this.options.onExitComplete();
                        return;
                    }
                    if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear) {
                        cancelTreeOptimisedTransformAnimations(this);
                    }
                    !this.root.isUpdating && this.root.startUpdate();
                    if (this.isLayoutDirty) return;
                    this.isLayoutDirty = true;
                    for(var i = 0; i < this.path.length; i++){
                        var node = this.path[i];
                        node.shouldResetTransform = true;
                        node.updateScroll("snapshot");
                        if (node.options.layoutRoot) {
                            node.willUpdate(false);
                        }
                    }
                    var _this_options = this.options, layoutId = _this_options.layoutId, layout2 = _this_options.layout;
                    if (layoutId === void 0 && !layout2) return;
                    var transformTemplate = this.getTransformTemplate();
                    this.prevTransformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
                    this.updateSnapshot();
                    shouldNotifyListeners && this.notifyListeners("willUpdate");
                }
            },
            {
                key: "update",
                value: function update() {
                    this.updateScheduled = false;
                    var updateWasBlocked = this.isUpdateBlocked();
                    if (updateWasBlocked) {
                        this.unblockUpdate();
                        this.clearAllSnapshots();
                        this.nodes.forEach(clearMeasurements);
                        return;
                    }
                    if (!this.isUpdating) {
                        this.nodes.forEach(clearIsLayoutDirty);
                    }
                    this.isUpdating = false;
                    this.nodes.forEach(resetTransformStyle);
                    this.nodes.forEach(updateLayout);
                    this.nodes.forEach(notifyLayoutUpdate);
                    this.clearAllSnapshots();
                    var now2 = time.now();
                    frameData.delta = clamp(0, 1e3 / 60, now2 - frameData.timestamp);
                    frameData.timestamp = now2;
                    frameData.isProcessing = true;
                    frameSteps.update.process(frameData);
                    frameSteps.preRender.process(frameData);
                    frameSteps.render.process(frameData);
                    frameData.isProcessing = false;
                }
            },
            {
                key: "didUpdate",
                value: function didUpdate() {
                    if (!this.updateScheduled) {
                        this.updateScheduled = true;
                        microtask.read(this.scheduleUpdate);
                    }
                }
            },
            {
                key: "clearAllSnapshots",
                value: function clearAllSnapshots() {
                    this.nodes.forEach(clearSnapshot);
                    this.sharedNodes.forEach(removeLeadSnapshots);
                }
            },
            {
                key: "scheduleUpdateProjection",
                value: function scheduleUpdateProjection() {
                    if (!this.projectionUpdateScheduled) {
                        this.projectionUpdateScheduled = true;
                        frame.preRender(this.updateProjection, false, true);
                    }
                }
            },
            {
                key: "scheduleCheckAfterUnmount",
                value: function scheduleCheckAfterUnmount() {
                    var _this = this;
                    frame.postRender(function() {
                        if (_this.isLayoutDirty) {
                            _this.root.didUpdate();
                        } else {
                            _this.root.checkUpdateFailed();
                        }
                    });
                }
            },
            {
                /**
     * Update measurements
     */ key: "updateSnapshot",
                value: function updateSnapshot() {
                    if (this.snapshot || !this.instance) return;
                    this.snapshot = this.measure();
                }
            },
            {
                key: "updateLayout",
                value: function updateLayout() {
                    if (!this.instance) return;
                    this.updateScroll();
                    if (!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty) {
                        return;
                    }
                    if (this.resumeFrom && !this.resumeFrom.instance) {
                        for(var i = 0; i < this.path.length; i++){
                            var node = this.path[i];
                            node.updateScroll();
                        }
                    }
                    var prevLayout = this.layout;
                    this.layout = this.measure(false);
                    this.layoutCorrected = createBox();
                    this.isLayoutDirty = false;
                    this.projectionDelta = void 0;
                    this.notifyListeners("measure", this.layout.layoutBox);
                    var visualElement = this.options.visualElement;
                    visualElement && visualElement.notify("LayoutMeasure", this.layout.layoutBox, prevLayout ? prevLayout.layoutBox : void 0);
                }
            },
            {
                key: "updateScroll",
                value: function updateScroll() {
                    var phase = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "measure";
                    var needsMeasurement = Boolean(this.options.layoutScroll && this.instance);
                    if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === phase) {
                        needsMeasurement = false;
                    }
                    if (needsMeasurement) {
                        var isRoot = checkIsScrollRoot(this.instance);
                        this.scroll = {
                            animationId: this.root.animationId,
                            phase: phase,
                            isRoot: isRoot,
                            offset: measureScroll(this.instance),
                            wasRoot: this.scroll ? this.scroll.isRoot : isRoot
                        };
                    }
                }
            },
            {
                key: "resetTransform",
                value: function resetTransform1() {
                    if (!resetTransform) return;
                    var isResetRequested = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout;
                    var hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
                    var transformTemplate = this.getTransformTemplate();
                    var transformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
                    var transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
                    if (isResetRequested && (hasProjection || hasTransform(this.latestValues) || transformTemplateHasChanged)) {
                        resetTransform(this.instance, transformTemplateValue);
                        this.shouldResetTransform = false;
                        this.scheduleRender();
                    }
                }
            },
            {
                key: "measure",
                value: function measure() {
                    var removeTransform = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                    var pageBox = this.measurePageBox();
                    var layoutBox = this.removeElementScroll(pageBox);
                    if (removeTransform) {
                        layoutBox = this.removeTransform(layoutBox);
                    }
                    roundBox(layoutBox);
                    return {
                        animationId: this.root.animationId,
                        measuredBox: pageBox,
                        layoutBox: layoutBox,
                        latestValues: {},
                        source: this.id
                    };
                }
            },
            {
                key: "measurePageBox",
                value: function measurePageBox() {
                    var _a;
                    var visualElement = this.options.visualElement;
                    if (!visualElement) return createBox();
                    var box = visualElement.measureViewportBox();
                    var wasInScrollRoot = ((_a = this.scroll) === null || _a === void 0 ? void 0 : _a.wasRoot) || this.path.some(checkNodeWasScrollRoot);
                    if (!wasInScrollRoot) {
                        var scroll = this.root.scroll;
                        if (scroll) {
                            translateAxis(box.x, scroll.offset.x);
                            translateAxis(box.y, scroll.offset.y);
                        }
                    }
                    return box;
                }
            },
            {
                key: "removeElementScroll",
                value: function removeElementScroll(box) {
                    var _a;
                    var boxWithoutScroll = createBox();
                    copyBoxInto(boxWithoutScroll, box);
                    if ((_a = this.scroll) === null || _a === void 0 ? void 0 : _a.wasRoot) {
                        return boxWithoutScroll;
                    }
                    for(var i = 0; i < this.path.length; i++){
                        var node = this.path[i];
                        var scroll = node.scroll, options = node.options;
                        if (node !== this.root && scroll && options.layoutScroll) {
                            if (scroll.wasRoot) {
                                copyBoxInto(boxWithoutScroll, box);
                            }
                            translateAxis(boxWithoutScroll.x, scroll.offset.x);
                            translateAxis(boxWithoutScroll.y, scroll.offset.y);
                        }
                    }
                    return boxWithoutScroll;
                }
            },
            {
                key: "applyTransform",
                value: function applyTransform(box) {
                    var transformOnly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                    var withTransforms = createBox();
                    copyBoxInto(withTransforms, box);
                    for(var i = 0; i < this.path.length; i++){
                        var node = this.path[i];
                        if (!transformOnly && node.options.layoutScroll && node.scroll && node !== node.root) {
                            transformBox(withTransforms, {
                                x: -node.scroll.offset.x,
                                y: -node.scroll.offset.y
                            });
                        }
                        if (!hasTransform(node.latestValues)) continue;
                        transformBox(withTransforms, node.latestValues);
                    }
                    if (hasTransform(this.latestValues)) {
                        transformBox(withTransforms, this.latestValues);
                    }
                    return withTransforms;
                }
            },
            {
                key: "removeTransform",
                value: function removeTransform(box) {
                    var boxWithoutTransform = createBox();
                    copyBoxInto(boxWithoutTransform, box);
                    for(var i = 0; i < this.path.length; i++){
                        var node = this.path[i];
                        if (!node.instance) continue;
                        if (!hasTransform(node.latestValues)) continue;
                        hasScale(node.latestValues) && node.updateSnapshot();
                        var sourceBox = createBox();
                        var nodeBox = node.measurePageBox();
                        copyBoxInto(sourceBox, nodeBox);
                        removeBoxTransforms(boxWithoutTransform, node.latestValues, node.snapshot ? node.snapshot.layoutBox : void 0, sourceBox);
                    }
                    if (hasTransform(this.latestValues)) {
                        removeBoxTransforms(boxWithoutTransform, this.latestValues);
                    }
                    return boxWithoutTransform;
                }
            },
            {
                key: "setTargetDelta",
                value: function setTargetDelta(delta) {
                    this.targetDelta = delta;
                    this.root.scheduleUpdateProjection();
                    this.isProjectionDirty = true;
                }
            },
            {
                key: "setOptions",
                value: function setOptions(options) {
                    this.options = _object_spread_props(_object_spread({}, this.options, options), {
                        crossfade: options.crossfade !== void 0 ? options.crossfade : true
                    });
                }
            },
            {
                key: "clearMeasurements",
                value: function clearMeasurements() {
                    this.scroll = void 0;
                    this.layout = void 0;
                    this.snapshot = void 0;
                    this.prevTransformTemplateValue = void 0;
                    this.targetDelta = void 0;
                    this.target = void 0;
                    this.isLayoutDirty = false;
                }
            },
            {
                key: "forceRelativeParentToResolveTarget",
                value: function forceRelativeParentToResolveTarget() {
                    if (!this.relativeParent) return;
                    if (this.relativeParent.resolvedRelativeTargetAt !== frameData.timestamp) {
                        this.relativeParent.resolveTargetDelta(true);
                    }
                }
            },
            {
                key: "resolveTargetDelta",
                value: function resolveTargetDelta() {
                    var forceRecalculation = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
                    var _a;
                    var lead = this.getLead();
                    this.isProjectionDirty || (this.isProjectionDirty = lead.isProjectionDirty);
                    this.isTransformDirty || (this.isTransformDirty = lead.isTransformDirty);
                    this.isSharedProjectionDirty || (this.isSharedProjectionDirty = lead.isSharedProjectionDirty);
                    var isShared = Boolean(this.resumingFrom) || this !== lead;
                    var canSkip = !(forceRecalculation || isShared && this.isSharedProjectionDirty || this.isProjectionDirty || ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize);
                    if (canSkip) return;
                    var _this_options = this.options, layout2 = _this_options.layout, layoutId = _this_options.layoutId;
                    if (!this.layout || !(layout2 || layoutId)) return;
                    this.resolvedRelativeTargetAt = frameData.timestamp;
                    if (!this.targetDelta && !this.relativeTarget) {
                        var relativeParent = this.getClosestProjectingParent();
                        if (relativeParent && relativeParent.layout && this.animationProgress !== 1) {
                            this.relativeParent = relativeParent;
                            this.forceRelativeParentToResolveTarget();
                            this.relativeTarget = createBox();
                            this.relativeTargetOrigin = createBox();
                            calcRelativePosition(this.relativeTargetOrigin, this.layout.layoutBox, relativeParent.layout.layoutBox);
                            copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
                        } else {
                            this.relativeParent = this.relativeTarget = void 0;
                        }
                    }
                    if (!this.relativeTarget && !this.targetDelta) return;
                    if (!this.target) {
                        this.target = createBox();
                        this.targetWithTransforms = createBox();
                    }
                    if (this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
                        this.forceRelativeParentToResolveTarget();
                        calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target);
                    } else if (this.targetDelta) {
                        if (Boolean(this.resumingFrom)) {
                            this.target = this.applyTransform(this.layout.layoutBox);
                        } else {
                            copyBoxInto(this.target, this.layout.layoutBox);
                        }
                        applyBoxDelta(this.target, this.targetDelta);
                    } else {
                        copyBoxInto(this.target, this.layout.layoutBox);
                    }
                    if (this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = false;
                        var relativeParent1 = this.getClosestProjectingParent();
                        if (relativeParent1 && Boolean(relativeParent1.resumingFrom) === Boolean(this.resumingFrom) && !relativeParent1.options.layoutScroll && relativeParent1.target && this.animationProgress !== 1) {
                            this.relativeParent = relativeParent1;
                            this.forceRelativeParentToResolveTarget();
                            this.relativeTarget = createBox();
                            this.relativeTargetOrigin = createBox();
                            calcRelativePosition(this.relativeTargetOrigin, this.target, relativeParent1.target);
                            copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
                        } else {
                            this.relativeParent = this.relativeTarget = void 0;
                        }
                    }
                    if (isDebug) {
                        metrics.resolvedTargetDeltas++;
                    }
                }
            },
            {
                key: "getClosestProjectingParent",
                value: function getClosestProjectingParent() {
                    if (!this.parent || hasScale(this.parent.latestValues) || has2DTranslate(this.parent.latestValues)) {
                        return void 0;
                    }
                    if (this.parent.isProjecting()) {
                        return this.parent;
                    } else {
                        return this.parent.getClosestProjectingParent();
                    }
                }
            },
            {
                key: "isProjecting",
                value: function isProjecting() {
                    return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
                }
            },
            {
                key: "calcProjection",
                value: function calcProjection() {
                    var _a;
                    var lead = this.getLead();
                    var isShared = Boolean(this.resumingFrom) || this !== lead;
                    var canSkip = true;
                    if (this.isProjectionDirty || ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isProjectionDirty)) {
                        canSkip = false;
                    }
                    if (isShared && (this.isSharedProjectionDirty || this.isTransformDirty)) {
                        canSkip = false;
                    }
                    if (this.resolvedRelativeTargetAt === frameData.timestamp) {
                        canSkip = false;
                    }
                    if (canSkip) return;
                    var _this_options = this.options, layout2 = _this_options.layout, layoutId = _this_options.layoutId;
                    this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation);
                    if (!this.isTreeAnimating) {
                        this.targetDelta = this.relativeTarget = void 0;
                    }
                    if (!this.layout || !(layout2 || layoutId)) return;
                    copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
                    var prevTreeScaleX = this.treeScale.x;
                    var prevTreeScaleY = this.treeScale.y;
                    applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, isShared);
                    if (lead.layout && !lead.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1)) {
                        lead.target = lead.layout.layoutBox;
                        lead.targetWithTransforms = createBox();
                    }
                    var target = lead.target;
                    if (!target) {
                        if (this.prevProjectionDelta) {
                            this.createProjectionDeltas();
                            this.scheduleRender();
                        }
                        return;
                    }
                    if (!this.projectionDelta || !this.prevProjectionDelta) {
                        this.createProjectionDeltas();
                    } else {
                        copyAxisDeltaInto(this.prevProjectionDelta.x, this.projectionDelta.x);
                        copyAxisDeltaInto(this.prevProjectionDelta.y, this.projectionDelta.y);
                    }
                    calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
                    if (this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY || !axisDeltaEquals(this.projectionDelta.x, this.prevProjectionDelta.x) || !axisDeltaEquals(this.projectionDelta.y, this.prevProjectionDelta.y)) {
                        this.hasProjected = true;
                        this.scheduleRender();
                        this.notifyListeners("projectionUpdate", target);
                    }
                    if (isDebug) {
                        metrics.recalculatedProjection++;
                    }
                }
            },
            {
                key: "hide",
                value: function hide() {
                    this.isVisible = false;
                }
            },
            {
                key: "show",
                value: function show() {
                    this.isVisible = true;
                }
            },
            {
                key: "scheduleRender",
                value: function scheduleRender() {
                    var notifyAll = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                    var _a;
                    (_a = this.options.visualElement) === null || _a === void 0 ? void 0 : _a.scheduleRender();
                    if (notifyAll) {
                        var stack = this.getStack();
                        stack && stack.scheduleRender();
                    }
                    if (this.resumingFrom && !this.resumingFrom.instance) {
                        this.resumingFrom = void 0;
                    }
                }
            },
            {
                key: "createProjectionDeltas",
                value: function createProjectionDeltas() {
                    this.prevProjectionDelta = createDelta();
                    this.projectionDelta = createDelta();
                    this.projectionDeltaWithTransform = createDelta();
                }
            },
            {
                key: "setAnimationOrigin",
                value: function setAnimationOrigin(delta) {
                    var _this = this;
                    var hasOnlyRelativeTargetChanged = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                    var snapshot = this.snapshot;
                    var snapshotLatestValues = snapshot ? snapshot.latestValues : {};
                    var mixedValues = _object_spread({}, this.latestValues);
                    var targetDelta = createDelta();
                    if (!this.relativeParent || !this.relativeParent.options.layoutRoot) {
                        this.relativeTarget = this.relativeTargetOrigin = void 0;
                    }
                    this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
                    var relativeLayout = createBox();
                    var snapshotSource = snapshot ? snapshot.source : void 0;
                    var layoutSource = this.layout ? this.layout.source : void 0;
                    var isSharedLayoutAnimation = snapshotSource !== layoutSource;
                    var stack = this.getStack();
                    var isOnlyMember = !stack || stack.members.length <= 1;
                    var shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));
                    this.animationProgress = 0;
                    var prevRelativeTarget;
                    this.mixTargetDelta = function(latest) {
                        var progress2 = latest / 1e3;
                        mixAxisDelta(targetDelta.x, delta.x, progress2);
                        mixAxisDelta(targetDelta.y, delta.y, progress2);
                        _this.setTargetDelta(targetDelta);
                        if (_this.relativeTarget && _this.relativeTargetOrigin && _this.layout && _this.relativeParent && _this.relativeParent.layout) {
                            calcRelativePosition(relativeLayout, _this.layout.layoutBox, _this.relativeParent.layout.layoutBox);
                            mixBox(_this.relativeTarget, _this.relativeTargetOrigin, relativeLayout, progress2);
                            if (prevRelativeTarget && boxEquals(_this.relativeTarget, prevRelativeTarget)) {
                                _this.isProjectionDirty = false;
                            }
                            if (!prevRelativeTarget) prevRelativeTarget = createBox();
                            copyBoxInto(prevRelativeTarget, _this.relativeTarget);
                        }
                        if (isSharedLayoutAnimation) {
                            _this.animationValues = mixedValues;
                            mixValues(mixedValues, snapshotLatestValues, _this.latestValues, progress2, shouldCrossfadeOpacity, isOnlyMember);
                        }
                        _this.root.scheduleUpdateProjection();
                        _this.scheduleRender();
                        _this.animationProgress = progress2;
                    };
                    this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
                }
            },
            {
                key: "startAnimation",
                value: function startAnimation(options) {
                    var _this = this;
                    this.notifyListeners("animationStart");
                    this.currentAnimation && this.currentAnimation.stop();
                    if (this.resumingFrom && this.resumingFrom.currentAnimation) {
                        this.resumingFrom.currentAnimation.stop();
                    }
                    if (this.pendingAnimation) {
                        cancelFrame(this.pendingAnimation);
                        this.pendingAnimation = void 0;
                    }
                    this.pendingAnimation = frame.update(function() {
                        globalProjectionState.hasAnimatedSinceResize = true;
                        _this.currentAnimation = animateSingleValue(0, animationTarget, _object_spread_props(_object_spread({}, options), {
                            onUpdate: function(latest) {
                                _this.mixTargetDelta(latest);
                                options.onUpdate && options.onUpdate(latest);
                            },
                            onComplete: function() {
                                options.onComplete && options.onComplete();
                                _this.completeAnimation();
                            }
                        }));
                        if (_this.resumingFrom) {
                            _this.resumingFrom.currentAnimation = _this.currentAnimation;
                        }
                        _this.pendingAnimation = void 0;
                    });
                }
            },
            {
                key: "completeAnimation",
                value: function completeAnimation() {
                    if (this.resumingFrom) {
                        this.resumingFrom.currentAnimation = void 0;
                        this.resumingFrom.preserveOpacity = void 0;
                    }
                    var stack = this.getStack();
                    stack && stack.exitAnimationComplete();
                    this.resumingFrom = this.currentAnimation = this.animationValues = void 0;
                    this.notifyListeners("animationComplete");
                }
            },
            {
                key: "finishAnimation",
                value: function finishAnimation() {
                    if (this.currentAnimation) {
                        this.mixTargetDelta && this.mixTargetDelta(animationTarget);
                        this.currentAnimation.stop();
                    }
                    this.completeAnimation();
                }
            },
            {
                key: "applyTransformsToTarget",
                value: function applyTransformsToTarget() {
                    var lead = this.getLead();
                    var targetWithTransforms = lead.targetWithTransforms, target = lead.target, layout2 = lead.layout, latestValues = lead.latestValues;
                    if (!targetWithTransforms || !target || !layout2) return;
                    if (this !== lead && this.layout && layout2 && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, layout2.layoutBox)) {
                        target = this.target || createBox();
                        var xLength = calcLength(this.layout.layoutBox.x);
                        target.x.min = lead.target.x.min;
                        target.x.max = target.x.min + xLength;
                        var yLength = calcLength(this.layout.layoutBox.y);
                        target.y.min = lead.target.y.min;
                        target.y.max = target.y.min + yLength;
                    }
                    copyBoxInto(targetWithTransforms, target);
                    transformBox(targetWithTransforms, latestValues);
                    calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
                }
            },
            {
                key: "registerSharedNode",
                value: function registerSharedNode(layoutId, node) {
                    if (!this.sharedNodes.has(layoutId)) {
                        this.sharedNodes.set(layoutId, new NodeStack());
                    }
                    var stack = this.sharedNodes.get(layoutId);
                    stack.add(node);
                    var config = node.options.initialPromotionConfig;
                    node.promote({
                        transition: config ? config.transition : void 0,
                        preserveFollowOpacity: config && config.shouldPreserveFollowOpacity ? config.shouldPreserveFollowOpacity(node) : void 0
                    });
                }
            },
            {
                key: "isLead",
                value: function isLead() {
                    var stack = this.getStack();
                    return stack ? stack.lead === this : true;
                }
            },
            {
                key: "getLead",
                value: function getLead() {
                    var _a;
                    var layoutId = this.options.layoutId;
                    return layoutId ? ((_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.lead) || this : this;
                }
            },
            {
                key: "getPrevLead",
                value: function getPrevLead() {
                    var _a;
                    var layoutId = this.options.layoutId;
                    return layoutId ? (_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.prevLead : void 0;
                }
            },
            {
                key: "getStack",
                value: function getStack() {
                    var layoutId = this.options.layoutId;
                    if (layoutId) return this.root.sharedNodes.get(layoutId);
                }
            },
            {
                key: "promote",
                value: function promote() {
                    var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, needsReset = _ref.needsReset, transition = _ref.transition, preserveFollowOpacity = _ref.preserveFollowOpacity;
                    var stack = this.getStack();
                    if (stack) stack.promote(this, preserveFollowOpacity);
                    if (needsReset) {
                        this.projectionDelta = void 0;
                        this.needsReset = true;
                    }
                    if (transition) this.setOptions({
                        transition: transition
                    });
                }
            },
            {
                key: "relegate",
                value: function relegate() {
                    var stack = this.getStack();
                    if (stack) {
                        return stack.relegate(this);
                    } else {
                        return false;
                    }
                }
            },
            {
                key: "resetSkewAndRotation",
                value: function resetSkewAndRotation() {
                    var visualElement = this.options.visualElement;
                    if (!visualElement) return;
                    var hasDistortingTransform = false;
                    var latestValues = visualElement.latestValues;
                    if (latestValues.z || latestValues.rotate || latestValues.rotateX || latestValues.rotateY || latestValues.rotateZ || latestValues.skewX || latestValues.skewY) {
                        hasDistortingTransform = true;
                    }
                    if (!hasDistortingTransform) return;
                    var resetValues = {};
                    if (latestValues.z) {
                        resetDistortingTransform("z", visualElement, resetValues, this.animationValues);
                    }
                    for(var i = 0; i < transformAxes.length; i++){
                        resetDistortingTransform("rotate".concat(transformAxes[i]), visualElement, resetValues, this.animationValues);
                        resetDistortingTransform("skew".concat(transformAxes[i]), visualElement, resetValues, this.animationValues);
                    }
                    visualElement.render();
                    for(var key in resetValues){
                        visualElement.setStaticValue(key, resetValues[key]);
                        if (this.animationValues) {
                            this.animationValues[key] = resetValues[key];
                        }
                    }
                    visualElement.scheduleRender();
                }
            },
            {
                key: "getProjectionStyles",
                value: function getProjectionStyles(styleProp) {
                    var _a, _b;
                    if (!this.instance || this.isSVG) return void 0;
                    if (!this.isVisible) {
                        return hiddenVisibility;
                    }
                    var styles = {
                        visibility: ""
                    };
                    var transformTemplate = this.getTransformTemplate();
                    if (this.needsReset) {
                        this.needsReset = false;
                        styles.opacity = "";
                        styles.pointerEvents = resolveMotionValue(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "";
                        styles.transform = transformTemplate ? transformTemplate(this.latestValues, "") : "none";
                        return styles;
                    }
                    var lead = this.getLead();
                    if (!this.projectionDelta || !this.layout || !lead.target) {
                        var emptyStyles = {};
                        if (this.options.layoutId) {
                            emptyStyles.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1;
                            emptyStyles.pointerEvents = resolveMotionValue(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "";
                        }
                        if (this.hasProjected && !hasTransform(this.latestValues)) {
                            emptyStyles.transform = transformTemplate ? transformTemplate({}, "") : "none";
                            this.hasProjected = false;
                        }
                        return emptyStyles;
                    }
                    var valuesToRender = lead.animationValues || lead.latestValues;
                    this.applyTransformsToTarget();
                    styles.transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
                    if (transformTemplate) {
                        styles.transform = transformTemplate(valuesToRender, styles.transform);
                    }
                    var _this_projectionDelta = this.projectionDelta, x = _this_projectionDelta.x, y = _this_projectionDelta.y;
                    styles.transformOrigin = "".concat(x.origin * 100, "% ").concat(y.origin * 100, "% 0");
                    if (lead.animationValues) {
                        styles.opacity = lead === this ? (_b = (_a = valuesToRender.opacity) !== null && _a !== void 0 ? _a : this.latestValues.opacity) !== null && _b !== void 0 ? _b : 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
                    } else {
                        styles.opacity = lead === this ? valuesToRender.opacity !== void 0 ? valuesToRender.opacity : "" : valuesToRender.opacityExit !== void 0 ? valuesToRender.opacityExit : 0;
                    }
                    for(var key in scaleCorrectors){
                        if (valuesToRender[key] === void 0) continue;
                        var _scaleCorrectors_key = scaleCorrectors[key], correct = _scaleCorrectors_key.correct, applyTo = _scaleCorrectors_key.applyTo;
                        var corrected = styles.transform === "none" ? valuesToRender[key] : correct(valuesToRender[key], lead);
                        if (applyTo) {
                            var num = applyTo.length;
                            for(var i = 0; i < num; i++){
                                styles[applyTo[i]] = corrected;
                            }
                        } else {
                            styles[key] = corrected;
                        }
                    }
                    if (this.options.layoutId) {
                        styles.pointerEvents = lead === this ? resolveMotionValue(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "" : "none";
                    }
                    return styles;
                }
            },
            {
                key: "clearSnapshot",
                value: function clearSnapshot() {
                    this.resumeFrom = this.snapshot = void 0;
                }
            },
            {
                // Only run on root
                key: "resetTree",
                value: function resetTree() {
                    this.root.nodes.forEach(function(node) {
                        var _a;
                        return (_a = node.currentAnimation) === null || _a === void 0 ? void 0 : _a.stop();
                    });
                    this.root.nodes.forEach(clearMeasurements);
                    this.root.sharedNodes.clear();
                }
            }
        ]);
        return ProjectionNode;
    }();
}
function updateLayout(node) {
    node.updateLayout();
}
function notifyLayoutUpdate(node) {
    var _a;
    var snapshot = ((_a = node.resumeFrom) === null || _a === void 0 ? void 0 : _a.snapshot) || node.snapshot;
    if (node.isLead() && node.layout && snapshot && node.hasListeners("didUpdate")) {
        var _node_layout = node.layout, layout2 = _node_layout.layoutBox, measuredLayout = _node_layout.measuredBox;
        var animationType = node.options.animationType;
        var isShared = snapshot.source !== node.layout.source;
        if (animationType === "size") {
            eachAxis(function(axis) {
                var axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
                var length = calcLength(axisSnapshot);
                axisSnapshot.min = layout2[axis].min;
                axisSnapshot.max = axisSnapshot.min + length;
            });
        } else if (shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout2)) {
            eachAxis(function(axis) {
                var axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
                var length = calcLength(layout2[axis]);
                axisSnapshot.max = axisSnapshot.min + length;
                if (node.relativeTarget && !node.currentAnimation) {
                    node.isProjectionDirty = true;
                    node.relativeTarget[axis].max = node.relativeTarget[axis].min + length;
                }
            });
        }
        var layoutDelta = createDelta();
        calcBoxDelta(layoutDelta, layout2, snapshot.layoutBox);
        var visualDelta = createDelta();
        if (isShared) {
            calcBoxDelta(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measuredBox);
        } else {
            calcBoxDelta(visualDelta, layout2, snapshot.layoutBox);
        }
        var hasLayoutChanged = !isDeltaZero(layoutDelta);
        var hasRelativeTargetChanged = false;
        if (!node.resumeFrom) {
            var relativeParent = node.getClosestProjectingParent();
            if (relativeParent && !relativeParent.resumeFrom) {
                var parentSnapshot = relativeParent.snapshot, parentLayout = relativeParent.layout;
                if (parentSnapshot && parentLayout) {
                    var relativeSnapshot = createBox();
                    calcRelativePosition(relativeSnapshot, snapshot.layoutBox, parentSnapshot.layoutBox);
                    var relativeLayout = createBox();
                    calcRelativePosition(relativeLayout, layout2, parentLayout.layoutBox);
                    if (!boxEqualsRounded(relativeSnapshot, relativeLayout)) {
                        hasRelativeTargetChanged = true;
                    }
                    if (relativeParent.options.layoutRoot) {
                        node.relativeTarget = relativeLayout;
                        node.relativeTargetOrigin = relativeSnapshot;
                        node.relativeParent = relativeParent;
                    }
                }
            }
        }
        node.notifyListeners("didUpdate", {
            layout: layout2,
            snapshot: snapshot,
            delta: visualDelta,
            layoutDelta: layoutDelta,
            hasLayoutChanged: hasLayoutChanged,
            hasRelativeTargetChanged: hasRelativeTargetChanged
        });
    } else if (node.isLead()) {
        var onExitComplete = node.options.onExitComplete;
        onExitComplete && onExitComplete();
    }
    node.options.transition = void 0;
}
function propagateDirtyNodes(node) {
    if (isDebug) {
        metrics.totalNodes++;
    }
    if (!node.parent) return;
    if (!node.isProjecting()) {
        node.isProjectionDirty = node.parent.isProjectionDirty;
    }
    node.isSharedProjectionDirty || (node.isSharedProjectionDirty = Boolean(node.isProjectionDirty || node.parent.isProjectionDirty || node.parent.isSharedProjectionDirty));
    node.isTransformDirty || (node.isTransformDirty = node.parent.isTransformDirty);
}
function cleanDirtyNodes(node) {
    node.isProjectionDirty = node.isSharedProjectionDirty = node.isTransformDirty = false;
}
function clearSnapshot(node) {
    node.clearSnapshot();
}
function clearMeasurements(node) {
    node.clearMeasurements();
}
function clearIsLayoutDirty(node) {
    node.isLayoutDirty = false;
}
function resetTransformStyle(node) {
    var visualElement = node.options.visualElement;
    if (visualElement && visualElement.getProps().onBeforeLayoutMeasure) {
        visualElement.notify("BeforeLayoutMeasure");
    }
    node.resetTransform();
}
function finishAnimation(node) {
    node.finishAnimation();
    node.targetDelta = node.relativeTarget = node.target = void 0;
    node.isProjectionDirty = true;
}
function resolveTargetDelta(node) {
    node.resolveTargetDelta();
}
function calcProjection(node) {
    node.calcProjection();
}
function resetSkewAndRotation(node) {
    node.resetSkewAndRotation();
}
function removeLeadSnapshots(stack) {
    stack.removeLeadSnapshot();
}
function mixAxisDelta(output, delta, p) {
    output.translate = mixNumber(delta.translate, 0, p);
    output.scale = mixNumber(delta.scale, 1, p);
    output.origin = delta.origin;
    output.originPoint = delta.originPoint;
}
function mixAxis(output, from, to, p) {
    output.min = mixNumber(from.min, to.min, p);
    output.max = mixNumber(from.max, to.max, p);
}
function mixBox(output, from, to, p) {
    mixAxis(output.x, from.x, to.x, p);
    mixAxis(output.y, from.y, to.y, p);
}
function hasOpacityCrossfade(node) {
    return node.animationValues && node.animationValues.opacityExit !== void 0;
}
var defaultLayoutTransition = {
    duration: 0.45,
    ease: [
        0.4,
        0,
        0.1,
        1
    ]
};
var userAgentContains = function(string) {
    return typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(string);
};
var roundPoint = userAgentContains("applewebkit/") && !userAgentContains("chrome/") ? Math.round : noop;
function roundAxis(axis) {
    axis.min = roundPoint(axis.min);
    axis.max = roundPoint(axis.max);
}
function roundBox(box) {
    roundAxis(box.x);
    roundAxis(box.y);
}
function shouldAnimatePositionOnly(animationType, snapshot, layout2) {
    return animationType === "position" || animationType === "preserve-aspect" && !isNear(aspectRatio(snapshot), aspectRatio(layout2), 0.2);
}
function checkNodeWasScrollRoot(node) {
    var _a;
    return node !== node.root && ((_a = node.scroll) === null || _a === void 0 ? void 0 : _a.wasRoot);
}
// ../../node_modules/framer-motion/dist/es/projection/node/DocumentProjectionNode.mjs
var DocumentProjectionNode = createProjectionNode({
    attachResizeListener: function(ref, notify) {
        return addDomEvent(ref, "resize", notify);
    },
    measureScroll: function() {
        return {
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        };
    },
    checkIsScrollRoot: function() {
        return true;
    }
});
// ../../node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs
var rootProjectionNode = {
    current: void 0
};
var HTMLProjectionNode = createProjectionNode({
    measureScroll: function(instance) {
        return {
            x: instance.scrollLeft,
            y: instance.scrollTop
        };
    },
    defaultParent: function() {
        if (!rootProjectionNode.current) {
            var documentNode = new DocumentProjectionNode({});
            documentNode.mount(window);
            documentNode.setOptions({
                layoutScroll: true
            });
            rootProjectionNode.current = documentNode;
        }
        return rootProjectionNode.current;
    },
    resetTransform: function(instance, value) {
        instance.style.transform = value !== void 0 ? value : "none";
    },
    checkIsScrollRoot: function(instance) {
        return Boolean(window.getComputedStyle(instance).position === "fixed");
    }
});
// ../../node_modules/framer-motion/dist/es/motion/features/drag.mjs
var drag = {
    pan: {
        Feature: PanGesture
    },
    drag: {
        Feature: DragGesture,
        ProjectionNode: HTMLProjectionNode,
        MeasureLayout: MeasureLayout
    }
};
// ../../node_modules/framer-motion/dist/es/gestures/hover.mjs
function addHoverEvent(node, isActive) {
    var eventName = isActive ? "pointerenter" : "pointerleave";
    var callbackName = isActive ? "onHoverStart" : "onHoverEnd";
    var handleEvent = function(event, info) {
        if (event.pointerType === "touch" || isDragActive()) return;
        var props = node.getProps();
        if (node.animationState && props.whileHover) {
            node.animationState.setActive("whileHover", isActive);
        }
        var callback = props[callbackName];
        if (callback) {
            frame.postRender(function() {
                return callback(event, info);
            });
        }
    };
    return addPointerEvent(node.current, eventName, handleEvent, {
        passive: !node.getProps()[callbackName]
    });
}
var HoverGesture = /*#__PURE__*/ function(Feature) {
    _inherits(HoverGesture, Feature);
    function HoverGesture() {
        _class_call_check(this, HoverGesture);
        return _call_super(this, HoverGesture, arguments);
    }
    _create_class(HoverGesture, [
        {
            key: "mount",
            value: function mount() {
                this.unmount = pipe(addHoverEvent(this.node, true), addHoverEvent(this.node, false));
            }
        },
        {
            key: "unmount",
            value: function unmount() {}
        }
    ]);
    return HoverGesture;
}(Feature);
// ../../node_modules/framer-motion/dist/es/gestures/focus.mjs
var FocusGesture = /*#__PURE__*/ function(Feature) {
    _inherits(FocusGesture, Feature);
    function FocusGesture() {
        _class_call_check(this, FocusGesture);
        var _this;
        _this = _call_super(this, FocusGesture, arguments);
        _this.isActive = false;
        return _this;
    }
    _create_class(FocusGesture, [
        {
            key: "onFocus",
            value: function onFocus() {
                var isFocusVisible = false;
                try {
                    isFocusVisible = this.node.current.matches(":focus-visible");
                } catch (e) {
                    isFocusVisible = true;
                }
                if (!isFocusVisible || !this.node.animationState) return;
                this.node.animationState.setActive("whileFocus", true);
                this.isActive = true;
            }
        },
        {
            key: "onBlur",
            value: function onBlur() {
                if (!this.isActive || !this.node.animationState) return;
                this.node.animationState.setActive("whileFocus", false);
                this.isActive = false;
            }
        },
        {
            key: "mount",
            value: function mount() {
                var _this = this;
                this.unmount = pipe(addDomEvent(this.node.current, "focus", function() {
                    return _this.onFocus();
                }), addDomEvent(this.node.current, "blur", function() {
                    return _this.onBlur();
                }));
            }
        },
        {
            key: "unmount",
            value: function unmount() {}
        }
    ]);
    return FocusGesture;
}(Feature);
// ../../node_modules/framer-motion/dist/es/gestures/utils/is-node-or-child.mjs
var isNodeOrChild = function(parent, child) {
    if (!child) {
        return false;
    } else if (parent === child) {
        return true;
    } else {
        return isNodeOrChild(parent, child.parentElement);
    }
};
// ../../node_modules/framer-motion/dist/es/gestures/press.mjs
function fireSyntheticPointerEvent(name, handler) {
    if (!handler) return;
    var syntheticPointerEvent = new PointerEvent("pointer" + name);
    handler(syntheticPointerEvent, extractEventInfo(syntheticPointerEvent));
}
var PressGesture = /*#__PURE__*/ function(Feature) {
    _inherits(PressGesture, Feature);
    function PressGesture() {
        _class_call_check(this, PressGesture);
        var _this;
        _this = _call_super(this, PressGesture, arguments);
        _this.removeStartListeners = noop;
        _this.removeEndListeners = noop;
        _this.removeAccessibleListeners = noop;
        _this.startPointerPress = function(startEvent, startInfo) {
            if (_this.isPressing) return;
            _this.removeEndListeners();
            var props = _this.node.getProps();
            var endPointerPress = function(endEvent, endInfo) {
                if (!_this.checkPressEnd()) return;
                var _this_node_getProps = _this.node.getProps(), onTap = _this_node_getProps.onTap, onTapCancel = _this_node_getProps.onTapCancel, globalTapTarget = _this_node_getProps.globalTapTarget;
                var handler = !globalTapTarget && !isNodeOrChild(_this.node.current, endEvent.target) ? onTapCancel : onTap;
                if (handler) {
                    frame.update(function() {
                        return handler(endEvent, endInfo);
                    });
                }
            };
            var removePointerUpListener = addPointerEvent(window, "pointerup", endPointerPress, {
                passive: !(props.onTap || props["onPointerUp"])
            });
            var removePointerCancelListener = addPointerEvent(window, "pointercancel", function(cancelEvent, cancelInfo) {
                return _this.cancelPress(cancelEvent, cancelInfo);
            }, {
                passive: !(props.onTapCancel || props["onPointerCancel"])
            });
            _this.removeEndListeners = pipe(removePointerUpListener, removePointerCancelListener);
            _this.startPress(startEvent, startInfo);
        };
        _this.startAccessiblePress = function() {
            var handleKeydown = function(keydownEvent) {
                if (keydownEvent.key !== "Enter" || _this.isPressing) return;
                var handleKeyup = function(keyupEvent) {
                    if (keyupEvent.key !== "Enter" || !_this.checkPressEnd()) return;
                    fireSyntheticPointerEvent("up", function(event, info) {
                        var onTap = _this.node.getProps().onTap;
                        if (onTap) {
                            frame.postRender(function() {
                                return onTap(event, info);
                            });
                        }
                    });
                };
                _this.removeEndListeners();
                _this.removeEndListeners = addDomEvent(_this.node.current, "keyup", handleKeyup);
                fireSyntheticPointerEvent("down", function(event, info) {
                    _this.startPress(event, info);
                });
            };
            var removeKeydownListener = addDomEvent(_this.node.current, "keydown", handleKeydown);
            var handleBlur = function() {
                if (!_this.isPressing) return;
                fireSyntheticPointerEvent("cancel", function(cancelEvent, cancelInfo) {
                    return _this.cancelPress(cancelEvent, cancelInfo);
                });
            };
            var removeBlurListener = addDomEvent(_this.node.current, "blur", handleBlur);
            _this.removeAccessibleListeners = pipe(removeKeydownListener, removeBlurListener);
        };
        return _this;
    }
    _create_class(PressGesture, [
        {
            key: "startPress",
            value: function startPress(event, info) {
                this.isPressing = true;
                var _this_node_getProps = this.node.getProps(), onTapStart = _this_node_getProps.onTapStart, whileTap = _this_node_getProps.whileTap;
                if (whileTap && this.node.animationState) {
                    this.node.animationState.setActive("whileTap", true);
                }
                if (onTapStart) {
                    frame.postRender(function() {
                        return onTapStart(event, info);
                    });
                }
            }
        },
        {
            key: "checkPressEnd",
            value: function checkPressEnd() {
                this.removeEndListeners();
                this.isPressing = false;
                var props = this.node.getProps();
                if (props.whileTap && this.node.animationState) {
                    this.node.animationState.setActive("whileTap", false);
                }
                return !isDragActive();
            }
        },
        {
            key: "cancelPress",
            value: function cancelPress(event, info) {
                if (!this.checkPressEnd()) return;
                var onTapCancel = this.node.getProps().onTapCancel;
                if (onTapCancel) {
                    frame.postRender(function() {
                        return onTapCancel(event, info);
                    });
                }
            }
        },
        {
            key: "mount",
            value: function mount() {
                var props = this.node.getProps();
                var removePointerListener = addPointerEvent(props.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
                    passive: !(props.onTapStart || props["onPointerStart"])
                });
                var removeFocusListener = addDomEvent(this.node.current, "focus", this.startAccessiblePress);
                this.removeStartListeners = pipe(removePointerListener, removeFocusListener);
            }
        },
        {
            key: "unmount",
            value: function unmount() {
                this.removeStartListeners();
                this.removeEndListeners();
                this.removeAccessibleListeners();
            }
        }
    ]);
    return PressGesture;
}(Feature);
// ../../node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs
var observerCallbacks = /* @__PURE__ */ new WeakMap();
var observers = /* @__PURE__ */ new WeakMap();
var fireObserverCallback = function(entry) {
    var callback = observerCallbacks.get(entry.target);
    callback && callback(entry);
};
var fireAllObserverCallbacks = function(entries) {
    entries.forEach(fireObserverCallback);
};
function initIntersectionObserver(_param) {
    var root = _param.root, options = _object_without_properties(_param, [
        "root"
    ]);
    var lookupRoot = root || document;
    if (!observers.has(lookupRoot)) {
        observers.set(lookupRoot, {});
    }
    var rootObservers = observers.get(lookupRoot);
    var key = JSON.stringify(options);
    if (!rootObservers[key]) {
        rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, _object_spread({
            root: root
        }, options));
    }
    return rootObservers[key];
}
function observeIntersection(element, options, callback) {
    var rootInteresectionObserver = initIntersectionObserver(options);
    observerCallbacks.set(element, callback);
    rootInteresectionObserver.observe(element);
    return function() {
        observerCallbacks.delete(element);
        rootInteresectionObserver.unobserve(element);
    };
}
// ../../node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs
var thresholdNames = {
    some: 0,
    all: 1
};
var InViewFeature = /*#__PURE__*/ function(Feature) {
    _inherits(InViewFeature, Feature);
    function InViewFeature() {
        _class_call_check(this, InViewFeature);
        var _this;
        _this = _call_super(this, InViewFeature, arguments);
        _this.hasEnteredView = false;
        _this.isInView = false;
        return _this;
    }
    _create_class(InViewFeature, [
        {
            key: "startObserver",
            value: function startObserver() {
                var _this = this;
                this.unmount();
                var _this_node_getProps = this.node.getProps(), _this_node_getProps_viewport = _this_node_getProps.viewport, viewport = _this_node_getProps_viewport === void 0 ? {} : _this_node_getProps_viewport;
                var root = viewport.root, rootMargin = viewport.margin, _viewport_amount = viewport.amount, amount = _viewport_amount === void 0 ? "some" : _viewport_amount, once = viewport.once;
                var options = {
                    root: root ? root.current : void 0,
                    rootMargin: rootMargin,
                    threshold: typeof amount === "number" ? amount : thresholdNames[amount]
                };
                var onIntersectionUpdate = function(entry) {
                    var isIntersecting = entry.isIntersecting;
                    if (_this.isInView === isIntersecting) return;
                    _this.isInView = isIntersecting;
                    if (once && !isIntersecting && _this.hasEnteredView) {
                        return;
                    } else if (isIntersecting) {
                        _this.hasEnteredView = true;
                    }
                    if (_this.node.animationState) {
                        _this.node.animationState.setActive("whileInView", isIntersecting);
                    }
                    var _this_node_getProps = _this.node.getProps(), onViewportEnter = _this_node_getProps.onViewportEnter, onViewportLeave = _this_node_getProps.onViewportLeave;
                    var callback = isIntersecting ? onViewportEnter : onViewportLeave;
                    callback && callback(entry);
                };
                return observeIntersection(this.node.current, options, onIntersectionUpdate);
            }
        },
        {
            key: "mount",
            value: function mount() {
                this.startObserver();
            }
        },
        {
            key: "update",
            value: function update() {
                if (typeof IntersectionObserver === "undefined") return;
                var _this_node = this.node, props = _this_node.props, prevProps = _this_node.prevProps;
                var hasOptionsChanged = [
                    "amount",
                    "margin",
                    "root"
                ].some(hasViewportOptionChanged(props, prevProps));
                if (hasOptionsChanged) {
                    this.startObserver();
                }
            }
        },
        {
            key: "unmount",
            value: function unmount() {}
        }
    ]);
    return InViewFeature;
}(Feature);
function hasViewportOptionChanged(param) {
    var _param_viewport = param.viewport, viewport = _param_viewport === void 0 ? {} : _param_viewport, _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, tmp = _ref.viewport, prevViewport = tmp === void 0 ? {} : tmp;
    return function(name) {
        return viewport[name] !== prevViewport[name];
    };
}
// ../../node_modules/framer-motion/dist/es/motion/features/gestures.mjs
var gestureAnimations = {
    inView: {
        Feature: InViewFeature
    },
    tap: {
        Feature: PressGesture
    },
    focus: {
        Feature: FocusGesture
    },
    hover: {
        Feature: HoverGesture
    }
};
// ../../node_modules/framer-motion/dist/es/motion/features/layout.mjs
var layout = {
    layout: {
        ProjectionNode: HTMLProjectionNode,
        MeasureLayout: MeasureLayout
    }
};
// ../../node_modules/framer-motion/dist/es/motion/index.mjs
var import_jsx_runtime2 = require("react/jsx-runtime");
var import_react13 = require("react");
// ../../node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
var import_react6 = require("react");
var MotionConfigContext = (0, import_react6.createContext)({
    transformPagePoint: function(p) {
        return p;
    },
    isStatic: false,
    reducedMotion: "never"
});
// ../../node_modules/framer-motion/dist/es/context/MotionContext/index.mjs
var import_react7 = require("react");
var MotionContext = (0, import_react7.createContext)({});
// ../../node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
var import_react10 = require("react");
// ../../node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var import_react8 = require("react");
// ../../node_modules/framer-motion/dist/es/utils/is-browser.mjs
var isBrowser = typeof window !== "undefined";
// ../../node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var useIsomorphicLayoutEffect = isBrowser ? import_react8.useLayoutEffect : import_react8.useEffect;
// ../../node_modules/framer-motion/dist/es/context/LazyContext.mjs
var import_react9 = require("react");
var LazyContext = (0, import_react9.createContext)({
    strict: false
});
// ../../node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
function useVisualElement(Component2, visualState, props, createVisualElement, ProjectionNodeConstructor) {
    var _a, _b;
    var _ref = (0, import_react10.useContext)(MotionContext), parent = _ref.visualElement;
    var lazyContext = (0, import_react10.useContext)(LazyContext);
    var presenceContext = (0, import_react10.useContext)(PresenceContext);
    var reducedMotionConfig = (0, import_react10.useContext)(MotionConfigContext).reducedMotion;
    var visualElementRef = (0, import_react10.useRef)();
    createVisualElement = createVisualElement || lazyContext.renderer;
    if (!visualElementRef.current && createVisualElement) {
        visualElementRef.current = createVisualElement(Component2, {
            visualState: visualState,
            parent: parent,
            props: props,
            presenceContext: presenceContext,
            blockInitialAnimation: presenceContext ? presenceContext.initial === false : false,
            reducedMotionConfig: reducedMotionConfig
        });
    }
    var visualElement = visualElementRef.current;
    var initialLayoutGroupConfig = (0, import_react10.useContext)(SwitchLayoutGroupContext);
    if (visualElement && !visualElement.projection && ProjectionNodeConstructor && (visualElement.type === "html" || visualElement.type === "svg")) {
        createProjectionNode2(visualElementRef.current, props, ProjectionNodeConstructor, initialLayoutGroupConfig);
    }
    var isMounted = (0, import_react10.useRef)(false);
    (0, import_react10.useInsertionEffect)(function() {
        if (visualElement && isMounted.current) {
            visualElement.update(props, presenceContext);
        }
    });
    var optimisedAppearId = props[optimizedAppearDataAttribute];
    var wantsHandoff = (0, import_react10.useRef)(Boolean(optimisedAppearId) && !((_a = window.MotionHandoffIsComplete) === null || _a === void 0 ? void 0 : _a.call(window, optimisedAppearId)) && ((_b = window.MotionHasOptimisedAnimation) === null || _b === void 0 ? void 0 : _b.call(window, optimisedAppearId)));
    useIsomorphicLayoutEffect(function() {
        if (!visualElement) return;
        isMounted.current = true;
        window.MotionIsMounted = true;
        visualElement.updateFeatures();
        microtask.render(visualElement.render);
        if (wantsHandoff.current && visualElement.animationState) {
            visualElement.animationState.animateChanges();
        }
    });
    (0, import_react10.useEffect)(function() {
        if (!visualElement) return;
        if (!wantsHandoff.current && visualElement.animationState) {
            visualElement.animationState.animateChanges();
        }
        if (wantsHandoff.current) {
            queueMicrotask(function() {
                var _a2;
                (_a2 = window.MotionHandoffMarkAsComplete) === null || _a2 === void 0 ? void 0 : _a2.call(window, optimisedAppearId);
            });
            wantsHandoff.current = false;
        }
    });
    return visualElement;
}
function createProjectionNode2(visualElement, props, ProjectionNodeConstructor, initialPromotionConfig) {
    var layoutId = props.layoutId, layout2 = props.layout, drag2 = props.drag, dragConstraints = props.dragConstraints, layoutScroll = props.layoutScroll, layoutRoot = props.layoutRoot;
    visualElement.projection = new ProjectionNodeConstructor(visualElement.latestValues, props["data-framer-portal-id"] ? void 0 : getClosestProjectingNode(visualElement.parent));
    visualElement.projection.setOptions({
        layoutId: layoutId,
        layout: layout2,
        alwaysMeasureLayout: Boolean(drag2) || dragConstraints && isRefObject(dragConstraints),
        visualElement: visualElement,
        /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */ animationType: typeof layout2 === "string" ? layout2 : "both",
        initialPromotionConfig: initialPromotionConfig,
        layoutScroll: layoutScroll,
        layoutRoot: layoutRoot
    });
}
function getClosestProjectingNode(visualElement) {
    if (!visualElement) return void 0;
    return visualElement.options.allowProjection !== false ? visualElement.projection : getClosestProjectingNode(visualElement.parent);
}
// ../../node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
var import_react11 = require("react");
function useMotionRef(visualState, visualElement, externalRef) {
    return (0, import_react11.useCallback)(function(instance) {
        instance && visualState.mount && visualState.mount(instance);
        if (visualElement) {
            if (instance) {
                visualElement.mount(instance);
            } else {
                visualElement.unmount();
            }
        }
        if (externalRef) {
            if (typeof externalRef === "function") {
                externalRef(instance);
            } else if (isRefObject(externalRef)) {
                externalRef.current = instance;
            }
        }
    }, /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */ [
        visualElement
    ]);
}
// ../../node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
var import_react12 = require("react");
// ../../node_modules/framer-motion/dist/es/render/utils/is-controlling-variants.mjs
function isControllingVariants(props) {
    return isAnimationControls(props.animate) || variantProps.some(function(name) {
        return isVariantLabel(props[name]);
    });
}
function isVariantNode(props) {
    return Boolean(isControllingVariants(props) || props.variants);
}
// ../../node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
function getCurrentTreeVariants(props, context) {
    if (isControllingVariants(props)) {
        var initial = props.initial, animate = props.animate;
        return {
            initial: initial === false || isVariantLabel(initial) ? initial : void 0,
            animate: isVariantLabel(animate) ? animate : void 0
        };
    }
    return props.inherit !== false ? context : {};
}
// ../../node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
function useCreateMotionContext(props) {
    var _getCurrentTreeVariants = getCurrentTreeVariants(props, (0, import_react12.useContext)(MotionContext)), initial = _getCurrentTreeVariants.initial, animate = _getCurrentTreeVariants.animate;
    return (0, import_react12.useMemo)(function() {
        return {
            initial: initial,
            animate: animate
        };
    }, [
        variantLabelsAsDependency(initial),
        variantLabelsAsDependency(animate)
    ]);
}
function variantLabelsAsDependency(prop) {
    return Array.isArray(prop) ? prop.join(" ") : prop;
}
// ../../node_modules/framer-motion/dist/es/motion/features/definitions.mjs
var featureProps = {
    animation: [
        "animate",
        "variants",
        "whileHover",
        "whileTap",
        "exit",
        "whileInView",
        "whileFocus",
        "whileDrag"
    ],
    exit: [
        "exit"
    ],
    drag: [
        "drag",
        "dragControls"
    ],
    focus: [
        "whileFocus"
    ],
    hover: [
        "whileHover",
        "onHoverStart",
        "onHoverEnd"
    ],
    tap: [
        "whileTap",
        "onTap",
        "onTapStart",
        "onTapCancel"
    ],
    pan: [
        "onPan",
        "onPanStart",
        "onPanSessionStart",
        "onPanEnd"
    ],
    inView: [
        "whileInView",
        "onViewportEnter",
        "onViewportLeave"
    ],
    layout: [
        "layout",
        "layoutId"
    ]
};
var featureDefinitions = {};
for(var key in featureProps)_loop(key);
// ../../node_modules/framer-motion/dist/es/motion/features/load-features.mjs
function loadFeatures(features) {
    for(var key in features){
        featureDefinitions[key] = _object_spread({}, featureDefinitions[key], features[key]);
    }
}
// ../../node_modules/framer-motion/dist/es/motion/utils/symbol.mjs
var motionComponentSymbol = Symbol.for("motionComponentSymbol");
// ../../node_modules/framer-motion/dist/es/motion/index.mjs
function createRendererMotionComponent(param) {
    var preloadedFeatures = param.preloadedFeatures, createVisualElement = param.createVisualElement, useRender = param.useRender, useVisualState = param.useVisualState, Component2 = param.Component;
    preloadedFeatures && loadFeatures(preloadedFeatures);
    function MotionComponent(props, externalRef) {
        var MeasureLayout2;
        var configAndProps = _object_spread_props(_object_spread({}, (0, import_react13.useContext)(MotionConfigContext), props), {
            layoutId: useLayoutId(props)
        });
        var isStatic = configAndProps.isStatic;
        var context = useCreateMotionContext(props);
        var visualState = useVisualState(props, isStatic);
        if (!isStatic && isBrowser) {
            useStrictMode(configAndProps, preloadedFeatures);
            var layoutProjection = getProjectionFunctionality(configAndProps);
            MeasureLayout2 = layoutProjection.MeasureLayout;
            context.visualElement = useVisualElement(Component2, visualState, configAndProps, createVisualElement, layoutProjection.ProjectionNode);
        }
        return (0, import_jsx_runtime2.jsxs)(MotionContext.Provider, {
            value: context,
            children: [
                MeasureLayout2 && context.visualElement ? (0, import_jsx_runtime2.jsx)(MeasureLayout2, _object_spread({
                    visualElement: context.visualElement
                }, configAndProps)) : null,
                useRender(Component2, props, useMotionRef(visualState, context.visualElement, externalRef), visualState, isStatic, context.visualElement)
            ]
        });
    }
    var ForwardRefMotionComponent = (0, import_react13.forwardRef)(MotionComponent);
    ForwardRefMotionComponent[motionComponentSymbol] = Component2;
    return ForwardRefMotionComponent;
}
function useLayoutId(param) {
    var layoutId = param.layoutId;
    var layoutGroupId = (0, import_react13.useContext)(LayoutGroupContext).id;
    return layoutGroupId && layoutId !== void 0 ? layoutGroupId + "-" + layoutId : layoutId;
}
function useStrictMode(configAndProps, preloadedFeatures) {
    var isStrict = (0, import_react13.useContext)(LazyContext).strict;
    if (process.env.NODE_ENV !== "production" && preloadedFeatures && isStrict) {
        var strictMessage = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
        configAndProps.ignoreStrict ? warning(false, strictMessage) : invariant(false, strictMessage);
    }
}
function getProjectionFunctionality(props) {
    var drag2 = featureDefinitions.drag, layout2 = featureDefinitions.layout;
    if (!drag2 && !layout2) return {};
    var combined = _object_spread({}, drag2, layout2);
    return {
        MeasureLayout: (drag2 === null || drag2 === void 0 ? void 0 : drag2.isEnabled(props)) || (layout2 === null || layout2 === void 0 ? void 0 : layout2.isEnabled(props)) ? combined.MeasureLayout : void 0,
        ProjectionNode: combined.ProjectionNode
    };
}
// ../../node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
var lowercaseSVGElements = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "switch",
    "symbol",
    "svg",
    "text",
    "tspan",
    "use",
    "view"
];
// ../../node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
function isSVGComponent(Component2) {
    if (/**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */ typeof Component2 !== "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */ Component2.includes("-")) {
        return false;
    } else if (/**
     * If it's in our list of lowercase SVG tags, it's an SVG component
     */ lowercaseSVGElements.indexOf(Component2) > -1 || /**
     * If it contains a capital letter, it's an SVG component
     */ RegExp("[A-Z]", "u").test(Component2)) {
        return true;
    }
    return false;
}
// ../../node_modules/framer-motion/dist/es/render/html/utils/render.mjs
function renderHTML(element, param, styleProp, projection) {
    var style = param.style, vars = param.vars;
    Object.assign(element.style, style, projection && projection.getProjectionStyles(styleProp));
    for(var key in vars){
        element.style.setProperty(key, vars[key]);
    }
}
// ../../node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs
var camelCaseAttributes = /* @__PURE__ */ new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust"
]);
// ../../node_modules/framer-motion/dist/es/render/svg/utils/render.mjs
function renderSVG(element, renderState, _styleProp, projection) {
    renderHTML(element, renderState, void 0, projection);
    for(var key in renderState.attrs){
        element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
    }
}
// ../../node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs
function isForcedMotionValue(key, param) {
    var layout2 = param.layout, layoutId = param.layoutId;
    return transformProps.has(key) || key.startsWith("origin") || (layout2 || layoutId !== void 0) && (!!scaleCorrectors[key] || key === "opacity");
}
// ../../node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
    var _a;
    var style = props.style;
    var newValues = {};
    for(var key in style){
        if (isMotionValue(style[key]) || prevProps.style && isMotionValue(prevProps.style[key]) || isForcedMotionValue(key, props) || ((_a = visualElement === null || visualElement === void 0 ? void 0 : visualElement.getValue(key)) === null || _a === void 0 ? void 0 : _a.liveStyle) !== void 0) {
            newValues[key] = style[key];
        }
    }
    return newValues;
}
// ../../node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps2(props, prevProps, visualElement) {
    var newValues = scrapeMotionValuesFromProps(props, prevProps, visualElement);
    for(var key in props){
        if (isMotionValue(props[key]) || isMotionValue(prevProps[key])) {
            var targetKey = transformPropOrder.indexOf(key) !== -1 ? "attr" + key.charAt(0).toUpperCase() + key.substring(1) : key;
            newValues[targetKey] = props[key];
        }
    }
    return newValues;
}
// ../../node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
var import_react15 = require("react");
// ../../node_modules/framer-motion/dist/es/utils/use-constant.mjs
var import_react14 = require("react");
function useConstant(init) {
    var ref = (0, import_react14.useRef)(null);
    if (ref.current === null) {
        ref.current = init();
    }
    return ref.current;
}
// ../../node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
function makeState(param, props, context, presenceContext) {
    var scrapeMotionValuesFromProps3 = param.scrapeMotionValuesFromProps, createRenderState = param.createRenderState, onMount = param.onMount;
    var state = {
        latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps3),
        renderState: createRenderState()
    };
    if (onMount) {
        state.mount = function(instance) {
            return onMount(props, instance, state);
        };
    }
    return state;
}
var makeUseVisualState = function(config) {
    return function(props, isStatic) {
        var context = (0, import_react15.useContext)(MotionContext);
        var presenceContext = (0, import_react15.useContext)(PresenceContext);
        var make = function() {
            return makeState(config, props, context, presenceContext);
        };
        return isStatic ? make() : useConstant(make);
    };
};
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
    var values = {};
    var motionValues = scrapeMotionValues(props, {});
    for(var key in motionValues){
        values[key] = resolveMotionValue(motionValues[key]);
    }
    var initial = props.initial, animate = props.animate;
    var isControllingVariants$1 = isControllingVariants(props);
    var isVariantNode$1 = isVariantNode(props);
    if (context && isVariantNode$1 && !isControllingVariants$1 && props.inherit !== false) {
        if (initial === void 0) initial = context.initial;
        if (animate === void 0) animate = context.animate;
    }
    var isInitialAnimationBlocked = presenceContext ? presenceContext.initial === false : false;
    isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
    var variantToSet = isInitialAnimationBlocked ? animate : initial;
    if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
        var list = Array.isArray(variantToSet) ? variantToSet : [
            variantToSet
        ];
        for(var i = 0; i < list.length; i++){
            var resolved = resolveVariantFromProps(props, list[i]);
            if (resolved) {
                var transitionEnd = resolved.transitionEnd, transition = resolved.transition, target = _object_without_properties(resolved, [
                    "transitionEnd",
                    "transition"
                ]);
                for(var key1 in target){
                    var valueTarget = target[key1];
                    if (Array.isArray(valueTarget)) {
                        var index = isInitialAnimationBlocked ? valueTarget.length - 1 : 0;
                        valueTarget = valueTarget[index];
                    }
                    if (valueTarget !== null) {
                        values[key1] = valueTarget;
                    }
                }
                for(var key2 in transitionEnd){
                    values[key2] = transitionEnd[key2];
                }
            }
        }
    }
    return values;
}
// ../../node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
var createHtmlRenderState = function() {
    return {
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
    };
};
// ../../node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
var createSvgRenderState = function() {
    return _object_spread_props(_object_spread({}, createHtmlRenderState()), {
        attrs: {}
    });
};
// ../../node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.mjs
var getValueAsType = function(value, type) {
    return type && typeof value === "number" ? type.transform(value) : value;
};
// ../../node_modules/framer-motion/dist/es/render/html/utils/build-transform.mjs
var translateAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
};
var numTransforms = transformPropOrder.length;
function buildTransform(latestValues, transform, transformTemplate) {
    var transformString = "";
    var transformIsDefault = true;
    for(var i = 0; i < numTransforms; i++){
        var key = transformPropOrder[i];
        var value = latestValues[key];
        if (value === void 0) continue;
        var valueIsDefault = true;
        if (typeof value === "number") {
            valueIsDefault = value === (key.startsWith("scale") ? 1 : 0);
        } else {
            valueIsDefault = parseFloat(value) === 0;
        }
        if (!valueIsDefault || transformTemplate) {
            var valueAsType = getValueAsType(value, numberValueTypes[key]);
            if (!valueIsDefault) {
                transformIsDefault = false;
                var transformName = translateAlias[key] || key;
                transformString += "".concat(transformName, "(").concat(valueAsType, ") ");
            }
            if (transformTemplate) {
                transform[key] = valueAsType;
            }
        }
    }
    transformString = transformString.trim();
    if (transformTemplate) {
        transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
    } else if (transformIsDefault) {
        transformString = "none";
    }
    return transformString;
}
// ../../node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs
function buildHTMLStyles(state, latestValues, transformTemplate) {
    var style = state.style, vars = state.vars, transformOrigin = state.transformOrigin;
    var hasTransform2 = false;
    var hasTransformOrigin = false;
    for(var key in latestValues){
        var value = latestValues[key];
        if (transformProps.has(key)) {
            hasTransform2 = true;
            continue;
        } else if (isCSSVariableName(key)) {
            vars[key] = value;
            continue;
        } else {
            var valueAsType = getValueAsType(value, numberValueTypes[key]);
            if (key.startsWith("origin")) {
                hasTransformOrigin = true;
                transformOrigin[key] = valueAsType;
            } else {
                style[key] = valueAsType;
            }
        }
    }
    if (!latestValues.transform) {
        if (hasTransform2 || transformTemplate) {
            style.transform = buildTransform(latestValues, state.transform, transformTemplate);
        } else if (style.transform) {
            style.transform = "none";
        }
    }
    if (hasTransformOrigin) {
        var _transformOrigin_originX = transformOrigin.originX, originX = _transformOrigin_originX === void 0 ? "50%" : _transformOrigin_originX, _transformOrigin_originY = transformOrigin.originY, originY = _transformOrigin_originY === void 0 ? "50%" : _transformOrigin_originY, _transformOrigin_originZ = transformOrigin.originZ, originZ = _transformOrigin_originZ === void 0 ? 0 : _transformOrigin_originZ;
        style.transformOrigin = "".concat(originX, " ").concat(originY, " ").concat(originZ);
    }
}
// ../../node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.mjs
function calcOrigin2(origin, offset, size) {
    return typeof origin === "string" ? origin : px.transform(offset + size * origin);
}
function calcSVGTransformOrigin(dimensions, originX, originY) {
    var pxOriginX = calcOrigin2(originX, dimensions.x, dimensions.width);
    var pxOriginY = calcOrigin2(originY, dimensions.y, dimensions.height);
    return "".concat(pxOriginX, " ").concat(pxOriginY);
}
// ../../node_modules/framer-motion/dist/es/render/svg/utils/path.mjs
var dashKeys = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
};
var camelKeys = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function buildSVGPath(attrs, length) {
    var spacing = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, offset = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, useDashCase = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true;
    attrs.pathLength = 1;
    var keys = useDashCase ? dashKeys : camelKeys;
    attrs[keys.offset] = px.transform(-offset);
    var pathLength = px.transform(length);
    var pathSpacing = px.transform(spacing);
    attrs[keys.array] = "".concat(pathLength, " ").concat(pathSpacing);
}
// ../../node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs
function buildSVGAttrs(state, _param, isSVGTag2, transformTemplate) {
    var attrX = _param.attrX, attrY = _param.attrY, attrScale = _param.attrScale, originX = _param.originX, originY = _param.originY, pathLength = _param.pathLength, _param_pathSpacing = _param.pathSpacing, pathSpacing = _param_pathSpacing === void 0 ? 1 : _param_pathSpacing, _param_pathOffset = _param.pathOffset, pathOffset = _param_pathOffset === void 0 ? 0 : _param_pathOffset, latest = _object_without_properties(_param, [
        "attrX",
        "attrY",
        "attrScale",
        "originX",
        "originY",
        "pathLength",
        "pathSpacing",
        "pathOffset"
    ]);
    buildHTMLStyles(state, latest, transformTemplate);
    if (isSVGTag2) {
        if (state.style.viewBox) {
            state.attrs.viewBox = state.style.viewBox;
        }
        return;
    }
    state.attrs = state.style;
    state.style = {};
    var attrs = state.attrs, style = state.style, dimensions = state.dimensions;
    if (attrs.transform) {
        if (dimensions) style.transform = attrs.transform;
        delete attrs.transform;
    }
    if (dimensions && (originX !== void 0 || originY !== void 0 || style.transform)) {
        style.transformOrigin = calcSVGTransformOrigin(dimensions, originX !== void 0 ? originX : 0.5, originY !== void 0 ? originY : 0.5);
    }
    if (attrX !== void 0) attrs.x = attrX;
    if (attrY !== void 0) attrs.y = attrY;
    if (attrScale !== void 0) attrs.scale = attrScale;
    if (pathLength !== void 0) {
        buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
    }
}
// ../../node_modules/framer-motion/dist/es/render/svg/utils/is-svg-tag.mjs
var isSVGTag = function(tag) {
    return typeof tag === "string" && tag.toLowerCase() === "svg";
};
// ../../node_modules/framer-motion/dist/es/render/svg/config-motion.mjs
var svgMotionConfig = {
    useVisualState: makeUseVisualState({
        scrapeMotionValuesFromProps: scrapeMotionValuesFromProps2,
        createRenderState: createSvgRenderState,
        onMount: function(props, instance, param) {
            var renderState = param.renderState, latestValues = param.latestValues;
            frame.read(function() {
                try {
                    renderState.dimensions = typeof instance.getBBox === "function" ? instance.getBBox() : instance.getBoundingClientRect();
                } catch (e) {
                    renderState.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    };
                }
            });
            frame.render(function() {
                buildSVGAttrs(renderState, latestValues, isSVGTag(instance.tagName), props.transformTemplate);
                renderSVG(instance, renderState);
            });
        }
    })
};
// ../../node_modules/framer-motion/dist/es/render/html/config-motion.mjs
var htmlMotionConfig = {
    useVisualState: makeUseVisualState({
        scrapeMotionValuesFromProps: scrapeMotionValuesFromProps,
        createRenderState: createHtmlRenderState
    })
};
// ../../node_modules/framer-motion/dist/es/render/dom/use-render.mjs
var import_react18 = require("react");
// ../../node_modules/framer-motion/dist/es/render/html/use-props.mjs
var import_react16 = require("react");
function copyRawValuesOnly(target, source, props) {
    for(var key in source){
        if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
            target[key] = source[key];
        }
    }
}
function useInitialMotionValues(param, visualState) {
    var transformTemplate = param.transformTemplate;
    return (0, import_react16.useMemo)(function() {
        var state = createHtmlRenderState();
        buildHTMLStyles(state, visualState, transformTemplate);
        return Object.assign({}, state.vars, state.style);
    }, [
        visualState
    ]);
}
function useStyle(props, visualState) {
    var styleProp = props.style || {};
    var style = {};
    copyRawValuesOnly(style, styleProp, props);
    Object.assign(style, useInitialMotionValues(props, visualState));
    return style;
}
function useHTMLProps(props, visualState) {
    var htmlProps = {};
    var style = useStyle(props, visualState);
    if (props.drag && props.dragListener !== false) {
        htmlProps.draggable = false;
        style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
        style.touchAction = props.drag === true ? "none" : "pan-".concat(props.drag === "x" ? "y" : "x");
    }
    if (props.tabIndex === void 0 && (props.onTap || props.onTapStart || props.whileTap)) {
        htmlProps.tabIndex = 0;
    }
    htmlProps.style = style;
    return htmlProps;
}
// ../../node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
var validMotionProps = /* @__PURE__ */ new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "custom",
    "inherit",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "globalTapTarget",
    "ignoreStrict",
    "viewport"
]);
function isValidMotionProp(key) {
    return key.startsWith("while") || key.startsWith("drag") && key !== "draggable" || key.startsWith("layout") || key.startsWith("onTap") || key.startsWith("onPan") || key.startsWith("onLayout") || validMotionProps.has(key);
}
// ../../node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs
var shouldForward = function(key) {
    return !isValidMotionProp(key);
};
function loadExternalIsValidProp(isValidProp) {
    if (!isValidProp) return;
    shouldForward = function(key) {
        return key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
    };
}
try {
    loadExternalIsValidProp(require("@emotion/is-prop-valid").default);
} catch (_a) {}
function filterProps(props, isDom, forwardMotionProps) {
    var filteredProps = {};
    for(var key in props){
        if (key === "values" && _type_of(props.values) === "object") continue;
        if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key) || // If trying to use native HTML drag events, forward drag listeners
        props["draggable"] && key.startsWith("onDrag")) {
            filteredProps[key] = props[key];
        }
    }
    return filteredProps;
}
// ../../node_modules/framer-motion/dist/es/render/svg/use-props.mjs
var import_react17 = require("react");
function useSVGProps(props, visualState, _isStatic, Component2) {
    var visualProps = (0, import_react17.useMemo)(function() {
        var state = createSvgRenderState();
        buildSVGAttrs(state, visualState, isSVGTag(Component2), props.transformTemplate);
        return _object_spread_props(_object_spread({}, state.attrs), {
            style: _object_spread({}, state.style)
        });
    }, [
        visualState
    ]);
    if (props.style) {
        var rawStyles = {};
        copyRawValuesOnly(rawStyles, props.style, props);
        visualProps.style = _object_spread({}, rawStyles, visualProps.style);
    }
    return visualProps;
}
// ../../node_modules/framer-motion/dist/es/render/dom/use-render.mjs
function createUseRender() {
    var forwardMotionProps = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    var useRender = function(Component2, props, ref, param, isStatic) {
        var latestValues = param.latestValues;
        var useVisualProps = isSVGComponent(Component2) ? useSVGProps : useHTMLProps;
        var visualProps = useVisualProps(props, latestValues, isStatic, Component2);
        var filteredProps = filterProps(props, typeof Component2 === "string", forwardMotionProps);
        var elementProps = Component2 !== import_react18.Fragment ? _object_spread_props(_object_spread({}, filteredProps, visualProps), {
            ref: ref
        }) : {};
        var children = props.children;
        var renderedChildren = (0, import_react18.useMemo)(function() {
            return isMotionValue(children) ? children.get() : children;
        }, [
            children
        ]);
        return (0, import_react18.createElement)(Component2, _object_spread_props(_object_spread({}, elementProps), {
            children: renderedChildren
        }));
    };
    return useRender;
}
// ../../node_modules/framer-motion/dist/es/render/components/create-factory.mjs
function createMotionComponentFactory(preloadedFeatures, createVisualElement) {
    return function createMotionComponent2(Component2) {
        var forwardMotionProps = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            forwardMotionProps: false
        }).forwardMotionProps;
        var baseConfig = isSVGComponent(Component2) ? svgMotionConfig : htmlMotionConfig;
        var config = _object_spread_props(_object_spread({}, baseConfig), {
            preloadedFeatures: preloadedFeatures,
            useRender: createUseRender(forwardMotionProps),
            createVisualElement: createVisualElement,
            Component: Component2
        });
        return createRendererMotionComponent(config);
    };
}
// ../../node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
var import_react19 = require("react");
// ../../node_modules/framer-motion/dist/es/utils/reduced-motion/state.mjs
var prefersReducedMotion = {
    current: null
};
var hasReducedMotionListener = {
    current: false
};
// ../../node_modules/framer-motion/dist/es/utils/reduced-motion/index.mjs
function initPrefersReducedMotion() {
    hasReducedMotionListener.current = true;
    if (!isBrowser) return;
    if (window.matchMedia) {
        var motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
        var setReducedMotionPreferences = function() {
            return prefersReducedMotion.current = motionMediaQuery.matches;
        };
        motionMediaQuery.addListener(setReducedMotionPreferences);
        setReducedMotionPreferences();
    } else {
        prefersReducedMotion.current = false;
    }
}
// ../../node_modules/framer-motion/dist/es/render/utils/motion-values.mjs
function updateMotionValuesFromProps(element, next, prev) {
    for(var key in next){
        var nextValue = next[key];
        var prevValue = prev[key];
        if (isMotionValue(nextValue)) {
            element.addValue(key, nextValue);
            if (process.env.NODE_ENV === "development") {
                warnOnce(nextValue.version === "11.12.0", "Attempting to mix Motion versions ".concat(nextValue.version, " with 11.12.0 may not work as expected."));
            }
        } else if (isMotionValue(prevValue)) {
            element.addValue(key, motionValue(nextValue, {
                owner: element
            }));
        } else if (prevValue !== nextValue) {
            if (element.hasValue(key)) {
                var existingValue = element.getValue(key);
                if (existingValue.liveStyle === true) {
                    existingValue.jump(nextValue);
                } else if (!existingValue.hasAnimated) {
                    existingValue.set(nextValue);
                }
            } else {
                var latestValue = element.getStaticValue(key);
                element.addValue(key, motionValue(latestValue !== void 0 ? latestValue : nextValue, {
                    owner: element
                }));
            }
        }
    }
    for(var key1 in prev){
        if (next[key1] === void 0) element.removeValue(key1);
    }
    return next;
}
// ../../node_modules/framer-motion/dist/es/render/store.mjs
var visualElementStore = /* @__PURE__ */ new WeakMap();
// ../../node_modules/framer-motion/dist/es/render/dom/value-types/find.mjs
var valueTypes = _to_consumable_array(dimensionValueTypes).concat([
    color,
    complex
]);
var findValueType = function(v) {
    return valueTypes.find(testValueType(v));
};
// ../../node_modules/framer-motion/dist/es/render/VisualElement.mjs
var propEventHandlers = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete"
];
var VisualElement = /*#__PURE__*/ function() {
    function VisualElement(param) {
        var _this = this;
        var parent = param.parent, props = param.props, presenceContext = param.presenceContext, reducedMotionConfig = param.reducedMotionConfig, blockInitialAnimation = param.blockInitialAnimation, visualState = param.visualState, options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        _class_call_check(this, VisualElement);
        this.current = null;
        this.children = /* @__PURE__ */ new Set();
        this.isVariantNode = false;
        this.isControllingVariants = false;
        this.shouldReduceMotion = null;
        this.values = /* @__PURE__ */ new Map();
        this.KeyframeResolver = KeyframeResolver;
        this.features = {};
        this.valueSubscriptions = /* @__PURE__ */ new Map();
        this.prevMotionValues = {};
        this.events = {};
        this.propEventSubscriptions = {};
        this.notifyUpdate = function() {
            return _this.notify("Update", _this.latestValues);
        };
        this.render = function() {
            if (!_this.current) return;
            _this.triggerBuild();
            _this.renderInstance(_this.current, _this.renderState, _this.props.style, _this.projection);
        };
        this.renderScheduledAt = 0;
        this.scheduleRender = function() {
            var now2 = time.now();
            if (_this.renderScheduledAt < now2) {
                _this.renderScheduledAt = now2;
                frame.render(_this.render, false, true);
            }
        };
        var latestValues = visualState.latestValues, renderState = visualState.renderState;
        this.latestValues = latestValues;
        this.baseTarget = _object_spread({}, latestValues);
        this.initialValues = props.initial ? _object_spread({}, latestValues) : {};
        this.renderState = renderState;
        this.parent = parent;
        this.props = props;
        this.presenceContext = presenceContext;
        this.depth = parent ? parent.depth + 1 : 0;
        this.reducedMotionConfig = reducedMotionConfig;
        this.options = options;
        this.blockInitialAnimation = Boolean(blockInitialAnimation);
        this.isControllingVariants = isControllingVariants(props);
        this.isVariantNode = isVariantNode(props);
        if (this.isVariantNode) {
            this.variantChildren = /* @__PURE__ */ new Set();
        }
        this.manuallyAnimateOnMount = Boolean(parent && parent.current);
        var _this_scrapeMotionValuesFromProps = this.scrapeMotionValuesFromProps(props, {}, this), willChange = _this_scrapeMotionValuesFromProps.willChange, initialMotionValues = _object_without_properties(_this_scrapeMotionValuesFromProps, [
            "willChange"
        ]);
        for(var key in initialMotionValues){
            var value = initialMotionValues[key];
            if (latestValues[key] !== void 0 && isMotionValue(value)) {
                value.set(latestValues[key], false);
            }
        }
    }
    _create_class(VisualElement, [
        {
            /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */ key: "scrapeMotionValuesFromProps",
            value: function scrapeMotionValuesFromProps(_props, _prevProps, _visualElement) {
                return {};
            }
        },
        {
            key: "mount",
            value: function mount(instance) {
                var _this = this;
                this.current = instance;
                visualElementStore.set(instance, this);
                if (this.projection && !this.projection.instance) {
                    this.projection.mount(instance);
                }
                if (this.parent && this.isVariantNode && !this.isControllingVariants) {
                    this.removeFromVariantTree = this.parent.addVariantChild(this);
                }
                this.values.forEach(function(value, key) {
                    return _this.bindToMotionValue(key, value);
                });
                if (!hasReducedMotionListener.current) {
                    initPrefersReducedMotion();
                }
                this.shouldReduceMotion = this.reducedMotionConfig === "never" ? false : this.reducedMotionConfig === "always" ? true : prefersReducedMotion.current;
                if (process.env.NODE_ENV !== "production") {
                    warnOnce(this.shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.");
                }
                if (this.parent) this.parent.children.add(this);
                this.update(this.props, this.presenceContext);
            }
        },
        {
            key: "unmount",
            value: function unmount() {
                visualElementStore.delete(this.current);
                this.projection && this.projection.unmount();
                cancelFrame(this.notifyUpdate);
                cancelFrame(this.render);
                this.valueSubscriptions.forEach(function(remove) {
                    return remove();
                });
                this.valueSubscriptions.clear();
                this.removeFromVariantTree && this.removeFromVariantTree();
                this.parent && this.parent.children.delete(this);
                for(var key in this.events){
                    this.events[key].clear();
                }
                for(var key1 in this.features){
                    var feature = this.features[key1];
                    if (feature) {
                        feature.unmount();
                        feature.isMounted = false;
                    }
                }
                this.current = null;
            }
        },
        {
            key: "bindToMotionValue",
            value: function bindToMotionValue(key, value) {
                var _this = this;
                if (this.valueSubscriptions.has(key)) {
                    this.valueSubscriptions.get(key)();
                }
                var valueIsTransform = transformProps.has(key);
                var removeOnChange = value.on("change", function(latestValue) {
                    _this.latestValues[key] = latestValue;
                    _this.props.onUpdate && frame.preRender(_this.notifyUpdate);
                    if (valueIsTransform && _this.projection) {
                        _this.projection.isTransformDirty = true;
                    }
                });
                var removeOnRenderRequest = value.on("renderRequest", this.scheduleRender);
                var removeSyncCheck;
                if (window.MotionCheckAppearSync) {
                    removeSyncCheck = window.MotionCheckAppearSync(this, key, value);
                }
                this.valueSubscriptions.set(key, function() {
                    removeOnChange();
                    removeOnRenderRequest();
                    if (removeSyncCheck) removeSyncCheck();
                    if (value.owner) value.stop();
                });
            }
        },
        {
            key: "sortNodePosition",
            value: function sortNodePosition(other) {
                if (!this.current || !this.sortInstanceNodePosition || this.type !== other.type) {
                    return 0;
                }
                return this.sortInstanceNodePosition(this.current, other.current);
            }
        },
        {
            key: "updateFeatures",
            value: function updateFeatures() {
                var key = "animation";
                for(key in featureDefinitions){
                    var featureDefinition = featureDefinitions[key];
                    if (!featureDefinition) continue;
                    var isEnabled = featureDefinition.isEnabled, FeatureConstructor = featureDefinition.Feature;
                    if (!this.features[key] && FeatureConstructor && isEnabled(this.props)) {
                        this.features[key] = new FeatureConstructor(this);
                    }
                    if (this.features[key]) {
                        var feature = this.features[key];
                        if (feature.isMounted) {
                            feature.update();
                        } else {
                            feature.mount();
                            feature.isMounted = true;
                        }
                    }
                }
            }
        },
        {
            key: "triggerBuild",
            value: function triggerBuild() {
                this.build(this.renderState, this.latestValues, this.props);
            }
        },
        {
            /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */ key: "measureViewportBox",
            value: function measureViewportBox() {
                return this.current ? this.measureInstanceViewportBox(this.current, this.props) : createBox();
            }
        },
        {
            key: "getStaticValue",
            value: function getStaticValue(key) {
                return this.latestValues[key];
            }
        },
        {
            key: "setStaticValue",
            value: function setStaticValue(key, value) {
                this.latestValues[key] = value;
            }
        },
        {
            /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */ key: "update",
            value: function update(props, presenceContext) {
                if (props.transformTemplate || this.props.transformTemplate) {
                    this.scheduleRender();
                }
                this.prevProps = this.props;
                this.props = props;
                this.prevPresenceContext = this.presenceContext;
                this.presenceContext = presenceContext;
                for(var i = 0; i < propEventHandlers.length; i++){
                    var key = propEventHandlers[i];
                    if (this.propEventSubscriptions[key]) {
                        this.propEventSubscriptions[key]();
                        delete this.propEventSubscriptions[key];
                    }
                    var listenerName = "on" + key;
                    var listener = props[listenerName];
                    if (listener) {
                        this.propEventSubscriptions[key] = this.on(key, listener);
                    }
                }
                this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(props, this.prevProps, this), this.prevMotionValues);
                if (this.handleChildMotionValue) {
                    this.handleChildMotionValue();
                }
            }
        },
        {
            key: "getProps",
            value: function getProps() {
                return this.props;
            }
        },
        {
            /**
   * Returns the variant definition with a given name.
   */ key: "getVariant",
            value: function getVariant(name) {
                return this.props.variants ? this.props.variants[name] : void 0;
            }
        },
        {
            /**
   * Returns the defined default transition on this component.
   */ key: "getDefaultTransition",
            value: function getDefaultTransition() {
                return this.props.transition;
            }
        },
        {
            key: "getTransformPagePoint",
            value: function getTransformPagePoint() {
                return this.props.transformPagePoint;
            }
        },
        {
            key: "getClosestVariantNode",
            value: function getClosestVariantNode() {
                return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
            }
        },
        {
            /**
   * Add a child visual element to our set of children.
   */ key: "addVariantChild",
            value: function addVariantChild(child) {
                var closestVariantNode = this.getClosestVariantNode();
                if (closestVariantNode) {
                    closestVariantNode.variantChildren && closestVariantNode.variantChildren.add(child);
                    return function() {
                        return closestVariantNode.variantChildren.delete(child);
                    };
                }
            }
        },
        {
            /**
   * Add a motion value and bind it to this visual element.
   */ key: "addValue",
            value: function addValue(key, value) {
                var existingValue = this.values.get(key);
                if (value !== existingValue) {
                    if (existingValue) this.removeValue(key);
                    this.bindToMotionValue(key, value);
                    this.values.set(key, value);
                    this.latestValues[key] = value.get();
                }
            }
        },
        {
            /**
   * Remove a motion value and unbind any active subscriptions.
   */ key: "removeValue",
            value: function removeValue(key) {
                this.values.delete(key);
                var unsubscribe = this.valueSubscriptions.get(key);
                if (unsubscribe) {
                    unsubscribe();
                    this.valueSubscriptions.delete(key);
                }
                delete this.latestValues[key];
                this.removeValueFromRenderState(key, this.renderState);
            }
        },
        {
            /**
   * Check whether we have a motion value for this key
   */ key: "hasValue",
            value: function hasValue(key) {
                return this.values.has(key);
            }
        },
        {
            key: "getValue",
            value: function getValue(key, defaultValue) {
                if (this.props.values && this.props.values[key]) {
                    return this.props.values[key];
                }
                var value = this.values.get(key);
                if (value === void 0 && defaultValue !== void 0) {
                    value = motionValue(defaultValue === null ? void 0 : defaultValue, {
                        owner: this
                    });
                    this.addValue(key, value);
                }
                return value;
            }
        },
        {
            /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */ key: "readValue",
            value: function readValue(key, target) {
                var _a;
                var value = this.latestValues[key] !== void 0 || !this.current ? this.latestValues[key] : (_a = this.getBaseTargetFromProps(this.props, key)) !== null && _a !== void 0 ? _a : this.readValueFromInstance(this.current, key, this.options);
                if (value !== void 0 && value !== null) {
                    if (typeof value === "string" && (isNumericalString(value) || isZeroValueString(value))) {
                        value = parseFloat(value);
                    } else if (!findValueType(value) && complex.test(target)) {
                        value = getAnimatableNone2(key, target);
                    }
                    this.setBaseTarget(key, isMotionValue(value) ? value.get() : value);
                }
                return isMotionValue(value) ? value.get() : value;
            }
        },
        {
            /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */ key: "setBaseTarget",
            value: function setBaseTarget(key, value) {
                this.baseTarget[key] = value;
            }
        },
        {
            /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */ key: "getBaseTarget",
            value: function getBaseTarget(key) {
                var _a;
                var initial = this.props.initial;
                var valueFromInitial;
                if (typeof initial === "string" || (typeof initial === "undefined" ? "undefined" : _type_of(initial)) === "object") {
                    var variant = resolveVariantFromProps(this.props, initial, (_a = this.presenceContext) === null || _a === void 0 ? void 0 : _a.custom);
                    if (variant) {
                        valueFromInitial = variant[key];
                    }
                }
                if (initial && valueFromInitial !== void 0) {
                    return valueFromInitial;
                }
                var target = this.getBaseTargetFromProps(this.props, key);
                if (target !== void 0 && !isMotionValue(target)) return target;
                return this.initialValues[key] !== void 0 && valueFromInitial === void 0 ? void 0 : this.baseTarget[key];
            }
        },
        {
            key: "on",
            value: function on(eventName, callback) {
                if (!this.events[eventName]) {
                    this.events[eventName] = new SubscriptionManager();
                }
                return this.events[eventName].add(callback);
            }
        },
        {
            key: "notify",
            value: function notify(eventName) {
                for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    args[_key - 1] = arguments[_key];
                }
                if (this.events[eventName]) {
                    var _this_events_eventName;
                    (_this_events_eventName = this.events[eventName]).notify.apply(_this_events_eventName, _to_consumable_array(args));
                }
            }
        }
    ]);
    return VisualElement;
}();
// ../../node_modules/framer-motion/dist/es/render/dom/DOMVisualElement.mjs
var DOMVisualElement = /*#__PURE__*/ function(VisualElement) {
    _inherits(DOMVisualElement, VisualElement);
    function DOMVisualElement() {
        _class_call_check(this, DOMVisualElement);
        var _this;
        _this = _call_super(this, DOMVisualElement, arguments);
        _this.KeyframeResolver = DOMKeyframesResolver;
        return _this;
    }
    _create_class(DOMVisualElement, [
        {
            key: "sortInstanceNodePosition",
            value: function sortInstanceNodePosition(a, b) {
                return a.compareDocumentPosition(b) & 2 ? 1 : -1;
            }
        },
        {
            key: "getBaseTargetFromProps",
            value: function getBaseTargetFromProps(props, key) {
                return props.style ? props.style[key] : void 0;
            }
        },
        {
            key: "removeValueFromRenderState",
            value: function removeValueFromRenderState(key, param) {
                var vars = param.vars, style = param.style;
                delete vars[key];
                delete style[key];
            }
        }
    ]);
    return DOMVisualElement;
}(VisualElement);
// ../../node_modules/framer-motion/dist/es/render/html/HTMLVisualElement.mjs
function getComputedStyle(element) {
    return window.getComputedStyle(element);
}
var HTMLVisualElement = /*#__PURE__*/ function(DOMVisualElement) {
    _inherits(HTMLVisualElement, DOMVisualElement);
    function HTMLVisualElement() {
        _class_call_check(this, HTMLVisualElement);
        var _this;
        _this = _call_super(this, HTMLVisualElement, arguments);
        _this.type = "html";
        _this.renderInstance = renderHTML;
        return _this;
    }
    _create_class(HTMLVisualElement, [
        {
            key: "readValueFromInstance",
            value: function readValueFromInstance(instance, key) {
                if (transformProps.has(key)) {
                    var defaultType = getDefaultValueType(key);
                    return defaultType ? defaultType.default || 0 : 0;
                } else {
                    var computedStyle = getComputedStyle(instance);
                    var value = (isCSSVariableName(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
                    return typeof value === "string" ? value.trim() : value;
                }
            }
        },
        {
            key: "measureInstanceViewportBox",
            value: function measureInstanceViewportBox(instance, param) {
                var transformPagePoint = param.transformPagePoint;
                return measureViewportBox(instance, transformPagePoint);
            }
        },
        {
            key: "build",
            value: function build(renderState, latestValues, props) {
                buildHTMLStyles(renderState, latestValues, props.transformTemplate);
            }
        },
        {
            key: "scrapeMotionValuesFromProps",
            value: function scrapeMotionValuesFromProps1(props, prevProps, visualElement) {
                return scrapeMotionValuesFromProps(props, prevProps, visualElement);
            }
        },
        {
            key: "handleChildMotionValue",
            value: function handleChildMotionValue() {
                var _this = this;
                if (this.childSubscription) {
                    this.childSubscription();
                    delete this.childSubscription;
                }
                var children = this.props.children;
                if (isMotionValue(children)) {
                    this.childSubscription = children.on("change", function(latest) {
                        if (_this.current) _this.current.textContent = "".concat(latest);
                    });
                }
            }
        }
    ]);
    return HTMLVisualElement;
}(DOMVisualElement);
// ../../node_modules/framer-motion/dist/es/render/svg/SVGVisualElement.mjs
var SVGVisualElement = /*#__PURE__*/ function(DOMVisualElement) {
    _inherits(SVGVisualElement, DOMVisualElement);
    function SVGVisualElement() {
        _class_call_check(this, SVGVisualElement);
        var _this;
        _this = _call_super(this, SVGVisualElement, arguments);
        _this.type = "svg";
        _this.isSVGTag = false;
        _this.measureInstanceViewportBox = createBox;
        return _this;
    }
    _create_class(SVGVisualElement, [
        {
            key: "getBaseTargetFromProps",
            value: function getBaseTargetFromProps(props, key) {
                return props[key];
            }
        },
        {
            key: "readValueFromInstance",
            value: function readValueFromInstance(instance, key) {
                if (transformProps.has(key)) {
                    var defaultType = getDefaultValueType(key);
                    return defaultType ? defaultType.default || 0 : 0;
                }
                key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
                return instance.getAttribute(key);
            }
        },
        {
            key: "scrapeMotionValuesFromProps",
            value: function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
                return scrapeMotionValuesFromProps2(props, prevProps, visualElement);
            }
        },
        {
            key: "build",
            value: function build(renderState, latestValues, props) {
                buildSVGAttrs(renderState, latestValues, this.isSVGTag, props.transformTemplate);
            }
        },
        {
            key: "renderInstance",
            value: function renderInstance(instance, renderState, styleProp, projection) {
                renderSVG(instance, renderState, styleProp, projection);
            }
        },
        {
            key: "mount",
            value: function mount(instance) {
                this.isSVGTag = isSVGTag(instance.tagName);
                _get(_get_prototype_of(SVGVisualElement.prototype), "mount", this).call(this, instance);
            }
        }
    ]);
    return SVGVisualElement;
}(DOMVisualElement);
// ../../node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
var createDomVisualElement = function(Component2, options) {
    return isSVGComponent(Component2) ? new SVGVisualElement(options) : new HTMLVisualElement(options, {
        allowProjection: Component2 !== import_react19.Fragment
    });
};
// ../../node_modules/framer-motion/dist/es/render/components/motion/create.mjs
var createMotionComponent = /* @__PURE__ */ createMotionComponentFactory(_object_spread({}, animations, gestureAnimations, drag, layout), createDomVisualElement);
// ../../node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs
var motion = /* @__PURE__ */ createDOMMotionComponentProxy(createMotionComponent);
// src/components/Button.tsx
var buttonVariants = (0, import_class_variance_authority.cva)("relative inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: [
                "bg-blue-600 text-white hover:bg-blue-700",
                "shadow-[0_0_0_3px_rgba(59,130,246,0.3)]",
                "dark:shadow-[0_0_0_3px_rgba(59,130,246,0.2)]"
            ],
            secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
            ghost: "hover:bg-gray-100 hover:text-gray-900",
            gradient: [
                "relative inline-flex h-12 overflow-hidden rounded-full p-[1px]",
                "focus:outline-none focus:ring-2 focus:ring-slate-400",
                "focus:ring-offset-2 focus:ring-offset-slate-50",
                "before:absolute before:inset-[-1000%]",
                "before:animate-[spin_2s_linear_infinite]",
                "before:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]",
                "hover:scale-105 transition-transform duration-200"
            ]
        },
        size: {
            sm: "h-9 px-3",
            md: "h-10 px-4",
            lg: "h-12 px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "md"
    }
});
var Button = React.forwardRef(function(_param, ref) {
    var className = _param.className, variant = _param.variant, size = _param.size, _param_asChild = _param.asChild, asChild = _param_asChild === void 0 ? false : _param_asChild, children = _param.children, props = _object_without_properties(_param, [
        "className",
        "variant",
        "size",
        "asChild",
        "children"
    ]);
    var Comp = asChild ? motion.button : "button";
    if (variant === "gradient") {
        return /* @__PURE__ */ React.createElement(motion.button, _object_spread({
            ref: ref,
            whileHover: {
                scale: 1.05
            },
            whileTap: {
                scale: 0.95
            },
            className: cn(buttonVariants({
                variant: variant,
                size: size,
                className: className
            }))
        }, props), /* @__PURE__ */ React.createElement("span", {
            className: "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl"
        }, children));
    }
    return /* @__PURE__ */ React.createElement(Comp, _object_spread({
        className: cn(buttonVariants({
            variant: variant,
            size: size,
            className: className
        })),
        ref: ref
    }, props), children);
});
Button.displayName = "Button";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    Button: Button,
    cn: cn
});
