(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === "object" && typeof module === "object")
    module.exports = factory(require("lodash"), require("react"));
  else if (typeof define === "function" && define.amd)
    define(["lodash", "react"], factory);
  else if (typeof exports === "object")
    exports["PeityReact"] = factory(require("lodash"), require("react"));
  else root["PeityReact"] = factory(root["_"], root["React"]);
})(
  this,
  function (__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_5__) {
    return /******/ (function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/ var installedModules = {};
      /******/
      /******/ // The require function
      /******/ function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/ if (installedModules[moduleId]) {
          /******/ return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/ var module = (installedModules[moduleId] = {
          /******/ i: moduleId,
          /******/ l: false,
          /******/ exports: {},
          /******/
        });
        /******/
        /******/ // Execute the module function
        /******/ modules[moduleId].call(
          module.exports,
          module,
          module.exports,
          __webpack_require__
        );
        /******/
        /******/ // Flag the module as loaded
        /******/ module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/ return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/ __webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/ __webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/ __webpack_require__.d = function (exports, name, getter) {
        /******/ if (!__webpack_require__.o(exports, name)) {
          /******/ Object.defineProperty(exports, name, {
            /******/ configurable: false,
            /******/ enumerable: true,
            /******/ get: getter,
            /******/
          });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/ __webpack_require__.n = function (module) {
        /******/ var getter =
          module && module.__esModule
            ? /******/ function getDefault() {
                return module["default"];
              }
            : /******/ function getModuleExports() {
                return module;
              };
        /******/ __webpack_require__.d(getter, "a", getter);
        /******/ return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/ __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/ __webpack_require__.p = "/";
      /******/
      /******/ // Load entry module and return exports
      /******/ return __webpack_require__((__webpack_require__.s = 9));
      /******/
    })(
      /************************************************************************/
      /******/ [
        /* 0 */
        /***/ function (module, exports) {
          // shim for using process in browser
          var process = (module.exports = {});

          // cached from whatever global is present so that test runners that stub it
          // don't break things.  But we need to wrap it in a try catch in case it is
          // wrapped in strict mode code which doesn't define any globals.  It's inside a
          // function because try/catches deoptimize in certain engines.

          var cachedSetTimeout;
          var cachedClearTimeout;

          function defaultSetTimout() {
            throw new Error("setTimeout has not been defined");
          }
          function defaultClearTimeout() {
            throw new Error("clearTimeout has not been defined");
          }
          (function () {
            try {
              if (typeof setTimeout === "function") {
                cachedSetTimeout = setTimeout;
              } else {
                cachedSetTimeout = defaultSetTimout;
              }
            } catch (e) {
              cachedSetTimeout = defaultSetTimout;
            }
            try {
              if (typeof clearTimeout === "function") {
                cachedClearTimeout = clearTimeout;
              } else {
                cachedClearTimeout = defaultClearTimeout;
              }
            } catch (e) {
              cachedClearTimeout = defaultClearTimeout;
            }
          })();
          function runTimeout(fun) {
            if (cachedSetTimeout === setTimeout) {
              //normal enviroments in sane situations
              return setTimeout(fun, 0);
            }
            // if setTimeout wasn't available but was latter defined
            if (
              (cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) &&
              setTimeout
            ) {
              cachedSetTimeout = setTimeout;
              return setTimeout(fun, 0);
            }
            try {
              // when when somebody has screwed with setTimeout but no I.E. maddness
              return cachedSetTimeout(fun, 0);
            } catch (e) {
              try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                return cachedSetTimeout.call(null, fun, 0);
              } catch (e) {
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                return cachedSetTimeout.call(this, fun, 0);
              }
            }
          }
          function runClearTimeout(marker) {
            if (cachedClearTimeout === clearTimeout) {
              //normal enviroments in sane situations
              return clearTimeout(marker);
            }
            // if clearTimeout wasn't available but was latter defined
            if (
              (cachedClearTimeout === defaultClearTimeout ||
                !cachedClearTimeout) &&
              clearTimeout
            ) {
              cachedClearTimeout = clearTimeout;
              return clearTimeout(marker);
            }
            try {
              // when when somebody has screwed with setTimeout but no I.E. maddness
              return cachedClearTimeout(marker);
            } catch (e) {
              try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                return cachedClearTimeout.call(null, marker);
              } catch (e) {
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                return cachedClearTimeout.call(this, marker);
              }
            }
          }
          var queue = [];
          var draining = false;
          var currentQueue;
          var queueIndex = -1;

          function cleanUpNextTick() {
            if (!draining || !currentQueue) {
              return;
            }
            draining = false;
            if (currentQueue.length) {
              queue = currentQueue.concat(queue);
            } else {
              queueIndex = -1;
            }
            if (queue.length) {
              drainQueue();
            }
          }

          function drainQueue() {
            if (draining) {
              return;
            }
            var timeout = runTimeout(cleanUpNextTick);
            draining = true;

            var len = queue.length;
            while (len) {
              currentQueue = queue;
              queue = [];
              while (++queueIndex < len) {
                if (currentQueue) {
                  currentQueue[queueIndex].run();
                }
              }
              queueIndex = -1;
              len = queue.length;
            }
            currentQueue = null;
            draining = false;
            runClearTimeout(timeout);
          }

          process.nextTick = function (fun) {
            var args = new Array(arguments.length - 1);
            if (arguments.length > 1) {
              for (var i = 1; i < arguments.length; i++) {
                args[i - 1] = arguments[i];
              }
            }
            queue.push(new Item(fun, args));
            if (queue.length === 1 && !draining) {
              runTimeout(drainQueue);
            }
          };

          // v8 likes predictible objects
          function Item(fun, array) {
            this.fun = fun;
            this.array = array;
          }
          Item.prototype.run = function () {
            this.fun.apply(null, this.array);
          };
          process.title = "browser";
          process.browser = true;
          process.env = {};
          process.argv = [];
          process.version = ""; // empty string to avoid regexp issues
          process.versions = {};

          function noop() {}

          process.on = noop;
          process.addListener = noop;
          process.once = noop;
          process.off = noop;
          process.removeListener = noop;
          process.removeAllListeners = noop;
          process.emit = noop;
          process.prependListener = noop;
          process.prependOnceListener = noop;

          process.listeners = function (name) {
            return [];
          };

          process.binding = function (name) {
            throw new Error("process.binding is not supported");
          };

          process.cwd = function () {
            return "/";
          };
          process.chdir = function (dir) {
            throw new Error("process.chdir is not supported");
          };
          process.umask = function () {
            return 0;
          };

          /***/
        },
        /* 1 */
        /***/ function (module, exports) {
          module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

          /***/
        },
        /* 2 */
        /***/ function (module, exports, __webpack_require__) {
          "use strict";

          /**
           * Copyright (c) 2013-present, Facebook, Inc.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           *
           *
           */

          function makeEmptyFunction(arg) {
            return function () {
              return arg;
            };
          }

          /**
           * This function accepts and discards inputs; it has no side effects. This is
           * primarily useful idiomatically for overridable function endpoints which
           * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
           */
          var emptyFunction = function emptyFunction() {};

          emptyFunction.thatReturns = makeEmptyFunction;
          emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
          emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
          emptyFunction.thatReturnsNull = makeEmptyFunction(null);
          emptyFunction.thatReturnsThis = function () {
            return this;
          };
          emptyFunction.thatReturnsArgument = function (arg) {
            return arg;
          };

          module.exports = emptyFunction;

          /***/
        },
        /* 3 */
        /***/ function (module, exports, __webpack_require__) {
          "use strict";
          /* WEBPACK VAR INJECTION */ (function (process) {
            /**
             * Copyright (c) 2013-present, Facebook, Inc.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             *
             */

            /**
             * Use invariant() to assert state which your program assumes to be true.
             *
             * Provide sprintf-style format (only %s is supported) and arguments
             * to provide information about what broke and what you were
             * expecting.
             *
             * The invariant message will be stripped in production, but the invariant
             * will remain to ensure logic does not differ in production.
             */

            var validateFormat = function validateFormat(format) {};

            if (process.env.NODE_ENV !== "production") {
              validateFormat = function validateFormat(format) {
                if (format === undefined) {
                  throw new Error(
                    "invariant requires an error message argument"
                  );
                }
              };
            }

            function invariant(condition, format, a, b, c, d, e, f) {
              validateFormat(format);

              if (!condition) {
                var error;
                if (format === undefined) {
                  error = new Error(
                    "Minified exception occurred; use the non-minified dev environment " +
                      "for the full error message and additional helpful warnings."
                  );
                } else {
                  var args = [a, b, c, d, e, f];
                  var argIndex = 0;
                  error = new Error(
                    format.replace(/%s/g, function () {
                      return args[argIndex++];
                    })
                  );
                  error.name = "Invariant Violation";
                }

                error.framesToPop = 1; // we don't care about invariant's own frame
                throw error;
              }
            }

            module.exports = invariant;
            /* WEBPACK VAR INJECTION */
          }).call(exports, __webpack_require__(0));

          /***/
        },
        /* 4 */
        /***/ function (module, exports, __webpack_require__) {
          "use strict";
          /**
           * Copyright (c) 2013-present, Facebook, Inc.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           */

          var ReactPropTypesSecret =
            "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";

          module.exports = ReactPropTypesSecret;

          /***/
        },
        /* 5 */
        /***/ function (module, exports) {
          module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

          /***/
        },
        /* 6 */
        /***/ function (module, exports, __webpack_require__) {
          /* WEBPACK VAR INJECTION */ (function (process) {
            /**
             * Copyright (c) 2013-present, Facebook, Inc.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */

            if (process.env.NODE_ENV !== "production") {
              var REACT_ELEMENT_TYPE =
                (typeof Symbol === "function" &&
                  Symbol.for &&
                  Symbol.for("react.element")) ||
                0xeac7;

              var isValidElement = function (object) {
                return (
                  typeof object === "object" &&
                  object !== null &&
                  object.$$typeof === REACT_ELEMENT_TYPE
                );
              };

              // By explicitly using `prop-types` you are opting into new development behavior.
              // http://fb.me/prop-types-in-prod
              var throwOnDirectAccess = true;
              module.exports = __webpack_require__(12)(
                isValidElement,
                throwOnDirectAccess
              );
            } else {
              // By explicitly using `prop-types` you are opting into new production behavior.
              // http://fb.me/prop-types-in-prod
              module.exports = __webpack_require__(15)();
            }

            /* WEBPACK VAR INJECTION */
          }).call(exports, __webpack_require__(0));

          /***/
        },
        /* 7 */
        /***/ function (module, exports, __webpack_require__) {
          "use strict";
          /* WEBPACK VAR INJECTION */ (function (process) {
            /**
             * Copyright (c) 2014-present, Facebook, Inc.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             *
             */

            var emptyFunction = __webpack_require__(2);

            /**
             * Similar to invariant but only logs a warning if the condition is not met.
             * This can be used to log issues in development environments in critical
             * paths. Removing the logging code for production environments will keep the
             * same logic and follow the same code paths.
             */

            var warning = emptyFunction;

            if (process.env.NODE_ENV !== "production") {
              var printWarning = function printWarning(format) {
                for (
                  var _len = arguments.length,
                    args = Array(_len > 1 ? _len - 1 : 0),
                    _key = 1;
                  _key < _len;
                  _key++
                ) {
                  args[_key - 1] = arguments[_key];
                }

                var argIndex = 0;
                var message =
                  "Warning: " +
                  format.replace(/%s/g, function () {
                    return args[argIndex++];
                  });
                if (typeof console !== "undefined") {
                  console.error(message);
                }
                try {
                  // --- Welcome to debugging React ---
                  // This error was thrown as a convenience so that you can use this stack
                  // to find the callsite that caused this warning to fire.
                  throw new Error(message);
                } catch (x) {}
              };

              warning = function warning(condition, format) {
                if (format === undefined) {
                  throw new Error(
                    "`warning(condition, format, ...args)` requires a warning " +
                      "message argument"
                  );
                }

                if (format.indexOf("Failed Composite propType: ") === 0) {
                  return; // Ignore CompositeComponent proptype check.
                }

                if (!condition) {
                  for (
                    var _len2 = arguments.length,
                      args = Array(_len2 > 2 ? _len2 - 2 : 0),
                      _key2 = 2;
                    _key2 < _len2;
                    _key2++
                  ) {
                    args[_key2 - 2] = arguments[_key2];
                  }

                  printWarning.apply(undefined, [format].concat(args));
                }
              };
            }

            module.exports = warning;
            /* WEBPACK VAR INJECTION */
          }).call(exports, __webpack_require__(0));

          /***/
        },
        /* 8 */
        /***/ function (module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true,
          });

          var _typeof =
            typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    typeof Symbol === "function" &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? "symbol"
                    : typeof obj;
                };

          exports.processValues = processValues;

          var _lodash = __webpack_require__(1);

          function processValues(originalValues, delimiter) {
            return (0, _lodash.isEqual)(
              typeof originalValues === "undefined"
                ? "undefined"
                : _typeof(originalValues),
              "string"
            )
              ? (0, _lodash.split)(originalValues, delimiter).map(function (v) {
                  return Number(v);
                })
              : (0, _lodash.flatten)([originalValues]);
          }

          /***/
        },
        /* 9 */
        /***/ function (module, exports, __webpack_require__) {
          module.exports = __webpack_require__(10);

          /***/
        },
        /* 10 */
        /***/ function (module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true,
          });
          // exports.Bar = exports.Line = undefined;

          var _Line = __webpack_require__(11);

          var _Line2 = _interopRequireDefault(_Line);

          var _Bar = __webpack_require__(16);

          var _Bar2 = _interopRequireDefault(_Bar);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }

          exports.default = {
            Line: _Line2.default,
            Bar: _Bar2.default,
          };
          exports.Line = _Line2.default;
          exports.Bar = _Bar2.default;

          /***/
        },
        /* 11 */
        /***/ function (module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true,
          });

          var _extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }
              return target;
            };

          var _createClass = (function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function (Constructor, protoProps, staticProps) {
              if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          })();

          var _lodash = __webpack_require__(1);

          var _react = __webpack_require__(5);

          var _react2 = _interopRequireDefault(_react);

          var _propTypes = __webpack_require__(6);

          var _propTypes2 = _interopRequireDefault(_propTypes);

          var _utils = __webpack_require__(8);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }

          var Line = (function (_React$Component) {
            _inherits(Line, _React$Component);

            function Line(props) {
              _classCallCheck(this, Line);

              var _this = _possibleConstructorReturn(
                this,
                (Line.__proto__ || Object.getPrototypeOf(Line)).call(
                  this,
                  props
                )
              );

              _this.renderFill = function () {
                if (_this.state.canDrawFill) {
                  return _react2.default.createElement("polygon", {
                    fill: _this.props.fillColor,
                    points: (0, _lodash.join)(_this.state.coords, " "),
                  });
                }
              };

              _this.renderStroke = function () {
                if (_this.state.canDrawStroke) {
                  return _react2.default.createElement("polyline", {
                    fill: _this.props.strokeFillColor,
                    points: (0, _lodash.join)(
                      (0, _lodash.slice)(
                        _this.state.coords,
                        2,
                        _this.state.coords.length - 2
                      ),
                      " "
                    ),
                    stroke: _this.props.strokeColor,
                    strokeWidth: _this.props.strokeWidth,
                    strokeLinecap: "square",
                  });
                }
              };

              _this.state = _extends({}, _this.computeValues(props));
              return _this;
            }

            _createClass(Line, [
              {
                key: "componentWillReceiveProps",
                value: function componentWillReceiveProps(nextProps) {
                  this.setState(this.computeValues(nextProps));
                },
              },
              {
                key: "computeValues",
                value: function computeValues() {
                  var _this2 = this;

                  var props =
                    arguments.length > 0 && arguments[0] !== undefined
                      ? arguments[0]
                      : this.props;
                  var values = props.values,
                    maxAxisValue = props.maxAxisValue,
                    minAxisValue = props.minAxisValue,
                    strokeWidth = props.strokeWidth,
                    strokeColor = props.strokeColor,
                    height = props.height,
                    fillColor = props.fillColor,
                    width = props.width;

                  var chartValues = (0, _utils.processValues)(
                    this.props.values,
                    this.props.delimiter
                  );
                  var maxValue = (0, _lodash.max)([
                    (0, _lodash.max)(chartValues),
                    Number(maxAxisValue),
                  ]);
                  var minValue = (0, _lodash.min)([
                    (0, _lodash.min)(chartValues),
                    Number(minAxisValue),
                  ]);
                  var chartHeight = height - strokeWidth;
                  var scaleDiff = maxValue - minValue;
                  var zero = this.yScale(
                    Math.max(minValue, 0),
                    chartHeight,
                    strokeWidth,
                    scaleDiff,
                    minValue
                  );

                  var coordsFromValues = [];
                  (0, _lodash.each)(chartValues, function (val, key) {
                    return coordsFromValues.push(
                      _this2.xScale(key, width, chartValues.length),
                      _this2.yScale(
                        val,
                        chartHeight,
                        strokeWidth,
                        scaleDiff,
                        minValue
                      )
                    );
                  });

                  var coords = (0, _lodash.concat)(
                    [0, zero],
                    coordsFromValues,
                    [width, zero]
                  );

                  var canDrawStroke = !(
                    (0, _lodash.isEmpty)(strokeColor) || strokeWidth === 0
                  );
                  var canDrawFill = !(0, _lodash.isEmpty)(fillColor);

                  return {
                    coords: coords,
                    canDrawStroke: canDrawStroke,
                    canDrawFill: canDrawFill,
                  };
                },
              },
              {
                key: "xScale",
                value: function xScale(input, width, valuesLength) {
                  return input * (width / (valuesLength - 1));
                },
              },
              {
                key: "yScale",
                value: function yScale(
                  input,
                  initalHeight,
                  strokeWidth,
                  diff,
                  min
                ) {
                  var yScale = initalHeight;

                  if (diff) {
                    yScale -= ((input - min) / diff) * initalHeight;
                  }

                  return yScale + strokeWidth / 2;
                },
              },
              {
                key: "values",
                value: function values(_values) {
                  return typeof this.props.values === "string" &&
                    this.props.values
                    ? (0, _lodash.split)(
                        this.props.values,
                        this.props.delimiter
                      ).map(function (v) {
                        return Number(v);
                      })
                    : (0, _lodash.flatten)([this.props.values]);
                },
              },
              {
                key: "render",
                value: function render() {
                  var _props = this.props,
                    height = _props.height,
                    width = _props.width;

                  return _react2.default.createElement(
                    "svg",
                    {
                      className: "peity peity-line",
                      height: height,
                      width: width,
                    },
                    this.renderFill(),
                    this.renderStroke()
                  );
                },
              },
            ]);

            return Line;
          })(_react2.default.Component);

          Line.defaultProps = {
            delimiter: ",",
            fillColor: "#c6d9fd",
            height: 16,
            minAxisValue: 0,
            maxAxisValue: -Infinity,
            strokeColor: "#4d89f9",
            strokeWidth: 1,
            width: 32,
            strokeFillColor: "none",
          };

          Line.propTypes = {
            values: _propTypes2.default.any.isRequired,
            delimiter: _propTypes2.default.string,
            fillColor: _propTypes2.default.string,
            height: _propTypes2.default.number,
            minAxisValue: _propTypes2.default.number,
            maxAxisValue: _propTypes2.default.number,
            strokeColor: _propTypes2.default.string,
            strokeWidth: _propTypes2.default.number,
            width: _propTypes2.default.number,
            strokeFillColor: _propTypes2.default.string,
          };

          exports.default = Line;

          /***/
        },
        /* 12 */
        /***/ function (module, exports, __webpack_require__) {
          "use strict";
          /* WEBPACK VAR INJECTION */ (function (process) {
            /**
             * Copyright (c) 2013-present, Facebook, Inc.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */

            var emptyFunction = __webpack_require__(2);
            var invariant = __webpack_require__(3);
            var warning = __webpack_require__(7);
            var assign = __webpack_require__(13);

            var ReactPropTypesSecret = __webpack_require__(4);
            var checkPropTypes = __webpack_require__(14);

            module.exports = function (isValidElement, throwOnDirectAccess) {
              /* global Symbol */
              var ITERATOR_SYMBOL =
                typeof Symbol === "function" && Symbol.iterator;
              var FAUX_ITERATOR_SYMBOL = "@@iterator"; // Before Symbol spec.

              /**
               * Returns the iterator method function contained on the iterable object.
               *
               * Be sure to invoke the function with the iterable as context:
               *
               *     var iteratorFn = getIteratorFn(myIterable);
               *     if (iteratorFn) {
               *       var iterator = iteratorFn.call(myIterable);
               *       ...
               *     }
               *
               * @param {?object} maybeIterable
               * @return {?function}
               */
              function getIteratorFn(maybeIterable) {
                var iteratorFn =
                  maybeIterable &&
                  ((ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL]) ||
                    maybeIterable[FAUX_ITERATOR_SYMBOL]);
                if (typeof iteratorFn === "function") {
                  return iteratorFn;
                }
              }

              /**
               * Collection of methods that allow declaration and validation of props that are
               * supplied to React components. Example usage:
               *
               *   var Props = require('ReactPropTypes');
               *   var MyArticle = React.createClass({
               *     propTypes: {
               *       // An optional string prop named "description".
               *       description: Props.string,
               *
               *       // A required enum prop named "category".
               *       category: Props.oneOf(['News','Photos']).isRequired,
               *
               *       // A prop named "dialog" that requires an instance of Dialog.
               *       dialog: Props.instanceOf(Dialog).isRequired
               *     },
               *     render: function() { ... }
               *   });
               *
               * A more formal specification of how these methods are used:
               *
               *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
               *   decl := ReactPropTypes.{type}(.isRequired)?
               *
               * Each and every declaration produces a function with the same signature. This
               * allows the creation of custom validation functions. For example:
               *
               *  var MyLink = React.createClass({
               *    propTypes: {
               *      // An optional string or URI prop named "href".
               *      href: function(props, propName, componentName) {
               *        var propValue = props[propName];
               *        if (propValue != null && typeof propValue !== 'string' &&
               *            !(propValue instanceof URI)) {
               *          return new Error(
               *            'Expected a string or an URI for ' + propName + ' in ' +
               *            componentName
               *          );
               *        }
               *      }
               *    },
               *    render: function() {...}
               *  });
               *
               * @internal
               */

              var ANONYMOUS = "<<anonymous>>";

              // Important!
              // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
              var ReactPropTypes = {
                array: createPrimitiveTypeChecker("array"),
                bool: createPrimitiveTypeChecker("boolean"),
                func: createPrimitiveTypeChecker("function"),
                number: createPrimitiveTypeChecker("number"),
                object: createPrimitiveTypeChecker("object"),
                string: createPrimitiveTypeChecker("string"),
                symbol: createPrimitiveTypeChecker("symbol"),

                any: createAnyTypeChecker(),
                arrayOf: createArrayOfTypeChecker,
                element: createElementTypeChecker(),
                instanceOf: createInstanceTypeChecker,
                node: createNodeChecker(),
                objectOf: createObjectOfTypeChecker,
                oneOf: createEnumTypeChecker,
                oneOfType: createUnionTypeChecker,
                shape: createShapeTypeChecker,
                exact: createStrictShapeTypeChecker,
              };

              /**
               * inlined Object.is polyfill to avoid requiring consumers ship their own
               * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
               */
              /*eslint-disable no-self-compare*/
              function is(x, y) {
                // SameValue algorithm
                if (x === y) {
                  // Steps 1-5, 7-10
                  // Steps 6.b-6.e: +0 != -0
                  return x !== 0 || 1 / x === 1 / y;
                } else {
                  // Step 6.a: NaN == NaN
                  return x !== x && y !== y;
                }
              }
              /*eslint-enable no-self-compare*/

              /**
               * We use an Error-like object for backward compatibility as people may call
               * PropTypes directly and inspect their output. However, we don't use real
               * Errors anymore. We don't inspect their stack anyway, and creating them
               * is prohibitively expensive if they are created too often, such as what
               * happens in oneOfType() for any type before the one that matched.
               */
              function PropTypeError(message) {
                this.message = message;
                this.stack = "";
              }
              // Make `instanceof Error` still work for returned errors.
              PropTypeError.prototype = Error.prototype;

              function createChainableTypeChecker(validate) {
                if (process.env.NODE_ENV !== "production") {
                  var manualPropTypeCallCache = {};
                  var manualPropTypeWarningCount = 0;
                }
                function checkType(
                  isRequired,
                  props,
                  propName,
                  componentName,
                  location,
                  propFullName,
                  secret
                ) {
                  componentName = componentName || ANONYMOUS;
                  propFullName = propFullName || propName;

                  if (secret !== ReactPropTypesSecret) {
                    if (throwOnDirectAccess) {
                      // New behavior only for users of `prop-types` package
                      invariant(
                        false,
                        "Calling PropTypes validators directly is not supported by the `prop-types` package. " +
                          "Use `PropTypes.checkPropTypes()` to call them. " +
                          "Read more at http://fb.me/use-check-prop-types"
                      );
                    } else if (
                      process.env.NODE_ENV !== "production" &&
                      typeof console !== "undefined"
                    ) {
                      // Old behavior for people using React.PropTypes
                      var cacheKey = componentName + ":" + propName;
                      if (
                        !manualPropTypeCallCache[cacheKey] &&
                        // Avoid spamming the console because they are often not actionable except for lib authors
                        manualPropTypeWarningCount < 3
                      ) {
                        warning(
                          false,
                          "You are manually calling a React.PropTypes validation " +
                            "function for the `%s` prop on `%s`. This is deprecated " +
                            "and will throw in the standalone `prop-types` package. " +
                            "You may be seeing this warning due to a third-party PropTypes " +
                            "library. See https://fb.me/react-warning-dont-call-proptypes " +
                            "for details.",
                          propFullName,
                          componentName
                        );
                        manualPropTypeCallCache[cacheKey] = true;
                        manualPropTypeWarningCount++;
                      }
                    }
                  }
                  if (props[propName] == null) {
                    if (isRequired) {
                      if (props[propName] === null) {
                        return new PropTypeError(
                          "The " +
                            location +
                            " `" +
                            propFullName +
                            "` is marked as required " +
                            ("in `" +
                              componentName +
                              "`, but its value is `null`.")
                        );
                      }
                      return new PropTypeError(
                        "The " +
                          location +
                          " `" +
                          propFullName +
                          "` is marked as required in " +
                          ("`" +
                            componentName +
                            "`, but its value is `undefined`.")
                      );
                    }
                    return null;
                  } else {
                    return validate(
                      props,
                      propName,
                      componentName,
                      location,
                      propFullName
                    );
                  }
                }

                var chainedCheckType = checkType.bind(null, false);
                chainedCheckType.isRequired = checkType.bind(null, true);

                return chainedCheckType;
              }

              function createPrimitiveTypeChecker(expectedType) {
                function validate(
                  props,
                  propName,
                  componentName,
                  location,
                  propFullName,
                  secret
                ) {
                  var propValue = props[propName];
                  var propType = getPropType(propValue);
                  if (propType !== expectedType) {
                    // `propValue` being instance of, say, date/regexp, pass the 'object'
                    // check, but we can offer a more precise error message here rather than
                    // 'of type `object`'.
                    var preciseType = getPreciseType(propValue);

                    return new PropTypeError(
                      "Invalid " +
                        location +
                        " `" +
                        propFullName +
                        "` of type " +
                        ("`" +
                          preciseType +
                          "` supplied to `" +
                          componentName +
                          "`, expected ") +
                        ("`" + expectedType + "`.")
                    );
                  }
                  return null;
                }
                return createChainableTypeChecker(validate);
              }

              function createAnyTypeChecker() {
                return createChainableTypeChecker(
                  emptyFunction.thatReturnsNull
                );
              }

              function createArrayOfTypeChecker(typeChecker) {
                function validate(
                  props,
                  propName,
                  componentName,
                  location,
                  propFullName
                ) {
                  if (typeof typeChecker !== "function") {
                    return new PropTypeError(
                      "Property `" +
                        propFullName +
                        "` of component `" +
                        componentName +
                        "` has invalid PropType notation inside arrayOf."
                    );
                  }
                  var propValue = props[propName];
                  if (!Array.isArray(propValue)) {
                    var propType = getPropType(propValue);
                    return new PropTypeError(
                      "Invalid " +
                        location +
                        " `" +
                        propFullName +
                        "` of type " +
                        ("`" +
                          propType +
                          "` supplied to `" +
                          componentName +
                          "`, expected an array.")
                    );
                  }
                  for (var i = 0; i < propValue.length; i++) {
                    var error = typeChecker(
                      propValue,
                      i,
                      componentName,
                      location,
                      propFullName + "[" + i + "]",
                      ReactPropTypesSecret
                    );
                    if (error instanceof Error) {
                      return error;
                    }
                  }
                  return null;
                }
                return createChainableTypeChecker(validate);
              }

              function createElementTypeChecker() {
                function validate(
                  props,
                  propName,
                  componentName,
                  location,
                  propFullName
                ) {
                  var propValue = props[propName];
                  if (!isValidElement(propValue)) {
                    var propType = getPropType(propValue);
                    return new PropTypeError(
                      "Invalid " +
                        location +
                        " `" +
                        propFullName +
                        "` of type " +
                        ("`" +
                          propType +
                          "` supplied to `" +
                          componentName +
                          "`, expected a single ReactElement.")
                    );
                  }
                  return null;
                }
                return createChainableTypeChecker(validate);
              }

              function createInstanceTypeChecker(expectedClass) {
                function validate(
                  props,
                  propName,
                  componentName,
                  location,
                  propFullName
                ) {
                  if (!(props[propName] instanceof expectedClass)) {
                    var expectedClassName = expectedClass.name || ANONYMOUS;
                    var actualClassName = getClassName(props[propName]);
                    return new PropTypeError(
                      "Invalid " +
                        location +
                        " `" +
                        propFullName +
                        "` of type " +
                        ("`" +
                          actualClassName +
                          "` supplied to `" +
                          componentName +
                          "`, expected ") +
                        ("instance of `" + expectedClassName + "`.")
                    );
                  }
                  return null;
                }
                return createChainableTypeChecker(validate);
              }

              function createEnumTypeChecker(expectedValues) {
                if (!Array.isArray(expectedValues)) {
                  process.env.NODE_ENV !== "production"
                    ? warning(
                        false,
                        "Invalid argument supplied to oneOf, expected an instance of array."
                      )
                    : void 0;
                  return emptyFunction.thatReturnsNull;
                }

                function validate(
                  props,
                  propName,
                  componentName,
                  location,
                  propFullName
                ) {
                  var propValue = props[propName];
                  for (var i = 0; i < expectedValues.length; i++) {
                    if (is(propValue, expectedValues[i])) {
                      return null;
                    }
                  }

                  var valuesString = JSON.stringify(expectedValues);
                  return new PropTypeError(
                    "Invalid " +
                      location +
                      " `" +
                      propFullName +
                      "` of value `" +
                      propValue +
                      "` " +
                      ("supplied to `" +
                        componentName +
                        "`, expected one of " +
                        valuesString +
                        ".")
                  );
                }
                return createChainableTypeChecker(validate);
              }

              function createObjectOfTypeChecker(typeChecker) {
                function validate(
                  props,
                  propName,
                  componentName,
                  location,
                  propFullName
                ) {
                  if (typeof typeChecker !== "function") {
                    return new PropTypeError(
                      "Property `" +
                        propFullName +
                        "` of component `" +
                        componentName +
                        "` has invalid PropType notation inside objectOf."
                    );
                  }
                  var propValue = props[propName];
                  var propType = getPropType(propValue);
                  if (propType !== "object") {
                    return new PropTypeError(
                      "Invalid " +
                        location +
                        " `" +
                        propFullName +
                        "` of type " +
                        ("`" +
                          propType +
                          "` supplied to `" +
                          componentName +
                          "`, expected an object.")
                    );
                  }
                  for (var key in propValue) {
                    if (propValue.hasOwnProperty(key)) {
                      var error = typeChecker(
                        propValue,
                        key,
                        componentName,
                        location,
                        propFullName + "." + key,
                        ReactPropTypesSecret
                      );
                      if (error instanceof Error) {
                        return error;
                      }
                    }
                  }
                  return null;
                }
                return createChainableTypeChecker(validate);
              }

              function createUnionTypeChecker(arrayOfTypeCheckers) {
                if (!Array.isArray(arrayOfTypeCheckers)) {
                  process.env.NODE_ENV !== "production"
                    ? warning(
                        false,
                        "Invalid argument supplied to oneOfType, expected an instance of array."
                      )
                    : void 0;
                  return emptyFunction.thatReturnsNull;
                }

                for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                  var checker = arrayOfTypeCheckers[i];
                  if (typeof checker !== "function") {
                    warning(
                      false,
                      "Invalid argument supplied to oneOfType. Expected an array of check functions, but " +
                        "received %s at index %s.",
                      getPostfixForTypeWarning(checker),
                      i
                    );
                    return emptyFunction.thatReturnsNull;
                  }
                }

                function validate(
                  props,
                  propName,
                  componentName,
                  location,
                  propFullName
                ) {
                  for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                    var checker = arrayOfTypeCheckers[i];
                    if (
                      checker(
                        props,
                        propName,
                        componentName,
                        location,
                        propFullName,
                        ReactPropTypesSecret
                      ) == null
                    ) {
                      return null;
                    }
                  }

                  return new PropTypeError(
                    "Invalid " +
                      location +
                      " `" +
                      propFullName +
                      "` supplied to " +
                      ("`" + componentName + "`.")
                  );
                }
                return createChainableTypeChecker(validate);
              }

              function createNodeChecker() {
                function validate(
                  props,
                  propName,
                  componentName,
                  location,
                  propFullName
                ) {
                  if (!isNode(props[propName])) {
                    return new PropTypeError(
                      "Invalid " +
                        location +
                        " `" +
                        propFullName +
                        "` supplied to " +
                        ("`" + componentName + "`, expected a ReactNode.")
                    );
                  }
                  return null;
                }
                return createChainableTypeChecker(validate);
              }

              function createShapeTypeChecker(shapeTypes) {
                function validate(
                  props,
                  propName,
                  componentName,
                  location,
                  propFullName
                ) {
                  var propValue = props[propName];
                  var propType = getPropType(propValue);
                  if (propType !== "object") {
                    return new PropTypeError(
                      "Invalid " +
                        location +
                        " `" +
                        propFullName +
                        "` of type `" +
                        propType +
                        "` " +
                        ("supplied to `" +
                          componentName +
                          "`, expected `object`.")
                    );
                  }
                  for (var key in shapeTypes) {
                    var checker = shapeTypes[key];
                    if (!checker) {
                      continue;
                    }
                    var error = checker(
                      propValue,
                      key,
                      componentName,
                      location,
                      propFullName + "." + key,
                      ReactPropTypesSecret
                    );
                    if (error) {
                      return error;
                    }
                  }
                  return null;
                }
                return createChainableTypeChecker(validate);
              }

              function createStrictShapeTypeChecker(shapeTypes) {
                function validate(
                  props,
                  propName,
                  componentName,
                  location,
                  propFullName
                ) {
                  var propValue = props[propName];
                  var propType = getPropType(propValue);
                  if (propType !== "object") {
                    return new PropTypeError(
                      "Invalid " +
                        location +
                        " `" +
                        propFullName +
                        "` of type `" +
                        propType +
                        "` " +
                        ("supplied to `" +
                          componentName +
                          "`, expected `object`.")
                    );
                  }
                  // We need to check all keys in case some are required but missing from
                  // props.
                  var allKeys = assign({}, props[propName], shapeTypes);
                  for (var key in allKeys) {
                    var checker = shapeTypes[key];
                    if (!checker) {
                      return new PropTypeError(
                        "Invalid " +
                          location +
                          " `" +
                          propFullName +
                          "` key `" +
                          key +
                          "` supplied to `" +
                          componentName +
                          "`." +
                          "\nBad object: " +
                          JSON.stringify(props[propName], null, "  ") +
                          "\nValid keys: " +
                          JSON.stringify(Object.keys(shapeTypes), null, "  ")
                      );
                    }
                    var error = checker(
                      propValue,
                      key,
                      componentName,
                      location,
                      propFullName + "." + key,
                      ReactPropTypesSecret
                    );
                    if (error) {
                      return error;
                    }
                  }
                  return null;
                }

                return createChainableTypeChecker(validate);
              }

              function isNode(propValue) {
                switch (typeof propValue) {
                  case "number":
                  case "string":
                  case "undefined":
                    return true;
                  case "boolean":
                    return !propValue;
                  case "object":
                    if (Array.isArray(propValue)) {
                      return propValue.every(isNode);
                    }
                    if (propValue === null || isValidElement(propValue)) {
                      return true;
                    }

                    var iteratorFn = getIteratorFn(propValue);
                    if (iteratorFn) {
                      var iterator = iteratorFn.call(propValue);
                      var step;
                      if (iteratorFn !== propValue.entries) {
                        while (!(step = iterator.next()).done) {
                          if (!isNode(step.value)) {
                            return false;
                          }
                        }
                      } else {
                        // Iterator will provide entry [k,v] tuples rather than values.
                        while (!(step = iterator.next()).done) {
                          var entry = step.value;
                          if (entry) {
                            if (!isNode(entry[1])) {
                              return false;
                            }
                          }
                        }
                      }
                    } else {
                      return false;
                    }

                    return true;
                  default:
                    return false;
                }
              }

              function isSymbol(propType, propValue) {
                // Native Symbol.
                if (propType === "symbol") {
                  return true;
                }

                // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
                if (propValue["@@toStringTag"] === "Symbol") {
                  return true;
                }

                // Fallback for non-spec compliant Symbols which are polyfilled.
                if (
                  typeof Symbol === "function" &&
                  propValue instanceof Symbol
                ) {
                  return true;
                }

                return false;
              }

              // Equivalent of `typeof` but with special handling for array and regexp.
              function getPropType(propValue) {
                var propType = typeof propValue;
                if (Array.isArray(propValue)) {
                  return "array";
                }
                if (propValue instanceof RegExp) {
                  // Old webkits (at least until Android 4.0) return 'function' rather than
                  // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
                  // passes PropTypes.object.
                  return "object";
                }
                if (isSymbol(propType, propValue)) {
                  return "symbol";
                }
                return propType;
              }

              // This handles more types than `getPropType`. Only used for error messages.
              // See `createPrimitiveTypeChecker`.
              function getPreciseType(propValue) {
                if (typeof propValue === "undefined" || propValue === null) {
                  return "" + propValue;
                }
                var propType = getPropType(propValue);
                if (propType === "object") {
                  if (propValue instanceof Date) {
                    return "date";
                  } else if (propValue instanceof RegExp) {
                    return "regexp";
                  }
                }
                return propType;
              }

              // Returns a string that is postfixed to a warning about an invalid type.
              // For example, "undefined" or "of type array"
              function getPostfixForTypeWarning(value) {
                var type = getPreciseType(value);
                switch (type) {
                  case "array":
                  case "object":
                    return "an " + type;
                  case "boolean":
                  case "date":
                  case "regexp":
                    return "a " + type;
                  default:
                    return type;
                }
              }

              // Returns class name of the object, if any.
              function getClassName(propValue) {
                if (!propValue.constructor || !propValue.constructor.name) {
                  return ANONYMOUS;
                }
                return propValue.constructor.name;
              }

              ReactPropTypes.checkPropTypes = checkPropTypes;
              ReactPropTypes.PropTypes = ReactPropTypes;

              return ReactPropTypes;
            };

            /* WEBPACK VAR INJECTION */
          }).call(exports, __webpack_require__(0));

          /***/
        },
        /* 13 */
        /***/ function (module, exports, __webpack_require__) {
          "use strict";
          /*
object-assign
(c) Sindre Sorhus
@license MIT
*/

          /* eslint-disable no-unused-vars */
          var getOwnPropertySymbols = Object.getOwnPropertySymbols;
          var hasOwnProperty = Object.prototype.hasOwnProperty;
          var propIsEnumerable = Object.prototype.propertyIsEnumerable;

          function toObject(val) {
            if (val === null || val === undefined) {
              throw new TypeError(
                "Object.assign cannot be called with null or undefined"
              );
            }

            return Object(val);
          }

          function shouldUseNative() {
            try {
              if (!Object.assign) {
                return false;
              }

              // Detect buggy property enumeration order in older V8 versions.

              // https://bugs.chromium.org/p/v8/issues/detail?id=4118
              var test1 = new String("abc"); // eslint-disable-line no-new-wrappers
              test1[5] = "de";
              if (Object.getOwnPropertyNames(test1)[0] === "5") {
                return false;
              }

              // https://bugs.chromium.org/p/v8/issues/detail?id=3056
              var test2 = {};
              for (var i = 0; i < 10; i++) {
                test2["_" + String.fromCharCode(i)] = i;
              }
              var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
                return test2[n];
              });
              if (order2.join("") !== "0123456789") {
                return false;
              }

              // https://bugs.chromium.org/p/v8/issues/detail?id=3056
              var test3 = {};
              "abcdefghijklmnopqrst".split("").forEach(function (letter) {
                test3[letter] = letter;
              });
              if (
                Object.keys(Object.assign({}, test3)).join("") !==
                "abcdefghijklmnopqrst"
              ) {
                return false;
              }

              return true;
            } catch (err) {
              // We don't expect any of the above to throw, but better to be safe.
              return false;
            }
          }

          module.exports = shouldUseNative()
            ? Object.assign
            : function (target, source) {
                var from;
                var to = toObject(target);
                var symbols;

                for (var s = 1; s < arguments.length; s++) {
                  from = Object(arguments[s]);

                  for (var key in from) {
                    if (hasOwnProperty.call(from, key)) {
                      to[key] = from[key];
                    }
                  }

                  if (getOwnPropertySymbols) {
                    symbols = getOwnPropertySymbols(from);
                    for (var i = 0; i < symbols.length; i++) {
                      if (propIsEnumerable.call(from, symbols[i])) {
                        to[symbols[i]] = from[symbols[i]];
                      }
                    }
                  }
                }

                return to;
              };

          /***/
        },
        /* 14 */
        /***/ function (module, exports, __webpack_require__) {
          "use strict";
          /* WEBPACK VAR INJECTION */ (function (process) {
            /**
             * Copyright (c) 2013-present, Facebook, Inc.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */

            if (process.env.NODE_ENV !== "production") {
              var invariant = __webpack_require__(3);
              var warning = __webpack_require__(7);
              var ReactPropTypesSecret = __webpack_require__(4);
              var loggedTypeFailures = {};
            }

            /**
             * Assert that the values match with the type specs.
             * Error messages are memorized and will only be shown once.
             *
             * @param {object} typeSpecs Map of name to a ReactPropType
             * @param {object} values Runtime values that need to be type-checked
             * @param {string} location e.g. "prop", "context", "child context"
             * @param {string} componentName Name of the component for error messages.
             * @param {?Function} getStack Returns the component stack.
             * @private
             */
            function checkPropTypes(
              typeSpecs,
              values,
              location,
              componentName,
              getStack
            ) {
              if (process.env.NODE_ENV !== "production") {
                for (var typeSpecName in typeSpecs) {
                  if (typeSpecs.hasOwnProperty(typeSpecName)) {
                    var error;
                    // Prop type validation may throw. In case they do, we don't want to
                    // fail the render phase where it didn't fail before. So we log it.
                    // After these have been cleaned up, we'll let them throw.
                    try {
                      // This is intentionally an invariant that gets caught. It's the same
                      // behavior as without this statement except with a better message.
                      invariant(
                        typeof typeSpecs[typeSpecName] === "function",
                        "%s: %s type `%s` is invalid; it must be a function, usually from " +
                          "the `prop-types` package, but received `%s`.",
                        componentName || "React class",
                        location,
                        typeSpecName,
                        typeof typeSpecs[typeSpecName]
                      );
                      error = typeSpecs[typeSpecName](
                        values,
                        typeSpecName,
                        componentName,
                        location,
                        null,
                        ReactPropTypesSecret
                      );
                    } catch (ex) {
                      error = ex;
                    }
                    warning(
                      !error || error instanceof Error,
                      "%s: type specification of %s `%s` is invalid; the type checker " +
                        "function must return `null` or an `Error` but returned a %s. " +
                        "You may have forgotten to pass an argument to the type checker " +
                        "creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and " +
                        "shape all require an argument).",
                      componentName || "React class",
                      location,
                      typeSpecName,
                      typeof error
                    );
                    if (
                      error instanceof Error &&
                      !(error.message in loggedTypeFailures)
                    ) {
                      // Only monitor this failure once because there tends to be a lot of the
                      // same error.
                      loggedTypeFailures[error.message] = true;

                      var stack = getStack ? getStack() : "";

                      warning(
                        false,
                        "Failed %s type: %s%s",
                        location,
                        error.message,
                        stack != null ? stack : ""
                      );
                    }
                  }
                }
              }
            }

            module.exports = checkPropTypes;

            /* WEBPACK VAR INJECTION */
          }).call(exports, __webpack_require__(0));

          /***/
        },
        /* 15 */
        /***/ function (module, exports, __webpack_require__) {
          "use strict";
          /**
           * Copyright (c) 2013-present, Facebook, Inc.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           */

          var emptyFunction = __webpack_require__(2);
          var invariant = __webpack_require__(3);
          var ReactPropTypesSecret = __webpack_require__(4);

          module.exports = function () {
            function shim(
              props,
              propName,
              componentName,
              location,
              propFullName,
              secret
            ) {
              if (secret === ReactPropTypesSecret) {
                // It is still safe when called from React.
                return;
              }
              invariant(
                false,
                "Calling PropTypes validators directly is not supported by the `prop-types` package. " +
                  "Use PropTypes.checkPropTypes() to call them. " +
                  "Read more at http://fb.me/use-check-prop-types"
              );
            }
            shim.isRequired = shim;
            function getShim() {
              return shim;
            }
            // Important!
            // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
            var ReactPropTypes = {
              array: shim,
              bool: shim,
              func: shim,
              number: shim,
              object: shim,
              string: shim,
              symbol: shim,

              any: shim,
              arrayOf: getShim,
              element: shim,
              instanceOf: getShim,
              node: shim,
              objectOf: getShim,
              oneOf: getShim,
              oneOfType: getShim,
              shape: getShim,
              exact: getShim,
            };

            ReactPropTypes.checkPropTypes = emptyFunction;
            ReactPropTypes.PropTypes = ReactPropTypes;

            return ReactPropTypes;
          };

          /***/
        },
        /* 16 */
        /***/ function (module, exports, __webpack_require__) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true,
          });

          var _createClass = (function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function (Constructor, protoProps, staticProps) {
              if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          })();

          var _lodash = __webpack_require__(1);

          var _react = __webpack_require__(5);

          var _react2 = _interopRequireDefault(_react);

          var _propTypes = __webpack_require__(6);

          var _propTypes2 = _interopRequireDefault(_propTypes);

          var _utils = __webpack_require__(8);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === "object" || typeof call === "function")
              ? call
              : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }

          var Bar = (function (_React$Component) {
            _inherits(Bar, _React$Component);

            function Bar(props) {
              _classCallCheck(this, Bar);

              var _this = _possibleConstructorReturn(
                this,
                (Bar.__proto__ || Object.getPrototypeOf(Bar)).call(this, props)
              );

              _this.fill = function (i) {
                return _this.props.fill[i % _this.props.fill.length];
              };

              _this.state = {
                reactValues: _this.computeValues(props),
              };
              return _this;
            }

            _createClass(Bar, [
              {
                key: "componentWillReceiveProps",
                value: function componentWillReceiveProps(nextProps) {
                  this.setState(this.computeValues(nextProps));
                },
              },
              {
                key: "computeValues",
                value: function computeValues() {
                  var _this2 = this;

                  var props =
                    arguments.length > 0 && arguments[0] !== undefined
                      ? arguments[0]
                      : this.props;
                  var _props = this.props,
                    maxAxisValue = _props.maxAxisValue,
                    minAxisValue = _props.minAxisValue,
                    width = _props.width,
                    height = _props.height,
                    padding = _props.padding,
                    values = _props.values,
                    delimiter = _props.delimiter;

                  var chartValues = (0, _utils.processValues)(
                    values,
                    delimiter
                  );
                  var maxValue = (0, _lodash.max)([
                    (0, _lodash.max)(chartValues),
                    Number(maxAxisValue),
                  ]);
                  var minValue = (0, _lodash.min)(chartValues);
                  var scaleDiff = maxValue - minValue;

                  var reactValues = (0, _lodash.map)(
                    chartValues,
                    function (value, i) {
                      var x = _this2.xScale(
                        Number(i) + padding,
                        width,
                        chartValues.length
                      );
                      var w =
                        _this2.xScale(
                          Number(i) + 1 - padding,
                          width,
                          chartValues.length
                        ) - x;
                      var valueY = _this2.yScale(
                        value,
                        height,
                        scaleDiff,
                        minValue
                      );
                      var y1 = valueY;
                      var y2 = valueY;
                      var h = 0;

                      if (!scaleDiff) {
                        h = 1;
                      } else if (value < 0) {
                        y1 = _this2.yScale(
                          (0, _lodash.min)([maxAxisValue, 0]),
                          height,
                          scaleDiff,
                          minValue
                        );
                      } else {
                        y2 = _this2.yScale(
                          (0, _lodash.max)([minAxisValue, 0]),
                          height,
                          scaleDiff,
                          minValue
                        );
                      }

                      h = y2 - y1;

                      if (h === 0) {
                        h = 1;
                        if (maxAxisValue > 0 && scaleDiff) y1--;
                      }

                      return {
                        fill: _this2.fill(i),
                        x: x,
                        y: y1,
                        width: w,
                        height: h,
                      };
                    }
                  );

                  return { reactValues: reactValues };
                },
              },
              {
                key: "xScale",
                value: function xScale(input, width, chartValuesLength) {
                  return input * (width / chartValuesLength);
                },
              },
              {
                key: "yScale",
                value: function yScale(
                  input,
                  initialHeight,
                  scaleDiff,
                  minValue
                ) {
                  var yScale = initialHeight;

                  if (scaleDiff) {
                    yScale -= ((input - minValue) / scaleDiff) * initialHeight;
                  } else {
                    yScale -= 1;
                  }

                  return yScale;
                },
              },
              {
                key: "render",
                value: function render() {
                  var _this3 = this;
                  var _props = this.props,
                    height = _props.height,
                    width = _props.width;

                  // console.log(`width: ${width}, height: ${height}`);

                  return _react2.default.createElement(
                    "svg",
                    {
                      className: "peity peity-bar",
                      height: height,
                      width: width,
                    },
                    (0, _lodash.map)(
                      _this3.state.reactValues,
                      function (value) {
                        // console.log(value);

                        if (Array.isArray(value)) {
                          return value.map((invalue, index) =>
                            _react2.default.createElement("rect", {
                              key: "" + index + invalue.x,
                              fill: invalue.fill,
                              x: invalue.x,
                              y: invalue.y,
                              width: invalue.width,
                              height: invalue.height,
                            })
                          );
                        } else {
                          return _react2.default.createElement("rect", {
                            key: "" + value.x,
                            fill: value.fill,
                            x: value.x,
                            y: value.y,
                            width: value.width,
                            height: value.height,
                          });
                        }
                      }
                    )
                  );
                },
              },
            ]);

            return Bar;
          })(_react2.default.Component);

          Bar.defaultProps = {
            delimiter: ",",
            fill: ["#4D89F9"],
            height: 16,
            minAxisValue: 0,
            padding: 0.1,
            width: 32,
          };

          Bar.propTypes = {
            values: _propTypes2.default.any.isRequired,
            delimiter: _propTypes2.default.string,
            fill: _propTypes2.default.array,
            height: _propTypes2.default.number,
            minAxisValue: _propTypes2.default.number,
            maxAxisValue: _propTypes2.default.number,
            padding: _propTypes2.default.number,
            width: _propTypes2.default.number,
          };

          exports.default = Bar;

          /***/
        },
        /******/
      ]
    );
  }
);
