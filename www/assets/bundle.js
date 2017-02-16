/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var $ = _interopRequire(__webpack_require__(2));

	__webpack_require__(3);

	var urlGet = __webpack_require__(7).urlGet;

	var Animation = _interopRequire(__webpack_require__(8));

	var s = 2017021612;
	function b() {
	    var version = s++;
	    var isnew = "2";
	    var zhibiao = "aqi";
	    var url1 = "http://121.42.153.68:6088/SiteManage/ArcgisPub/images/" + version + "_" + zhibiao + "_" + isnew + ".png";
	    return url1;
	}

	function a() {
	    var map = new AMap.Map("container", {
	        resizeEnable: true,
	        center: [116.33719, 39.942384],
	        zoom: 6,
	        layers: [new AMap.TileLayer()]
	    });

	    var aaa = {
	        add: function add(url, doneback) {
	            var opacity = 0.75;

	            function fade(fadeDoneBack, fadeFrame) {
	                var b = new Animation({
	                    doneBack: fadeDoneBack,
	                    totalTime: 100,
	                    onframe: function onframe(a) {
	                        aaa._currentLayer && aaa._currentLayer.setOptions({ opacity: opacity * (1 - a) });
	                        fadeFrame(a);
	                    }
	                });
	                b.start();
	            }

	            function show(showDoneBack) {
	                var b = new Animation({
	                    doneBack: function doneBack() {
	                        showDoneBack();
	                    },
	                    totalTime: 100,
	                    onframe: function onframe(a) {
	                        aaa._currentLayer && aaa._currentLayer.setOptions({ opacity: opacity * a });
	                    }
	                });
	                b.start();
	            }

	            fade(function () {
	                aaa._currentLayer && map.remove([aaa._currentLayer]);
	                aaa._currentLayer = aaa._newlayer;
	                aaa._newlayer = null;
	                show(doneback);
	            }, function (f) {
	                if (f < 0.5) {
	                    return;
	                }
	                var imageLayer = new AMap.ImageLayer({
	                    url: url,
	                    bounds: new AMap.Bounds([73.36194508, 10.289688560000005], [135.07842412, 58.2061676]),
	                    zooms: [1, 18],
	                    opacity: 0
	                });
	                map.add([imageLayer]);
	                aaa._newlayer = imageLayer;
	                show(doneback);
	            });
	        }

	    };

	    function slider_pre() {
	        var url = b();
	        var image = new Image();
	        image.src = url;
	        image.onload = function () {
	            image.onload = null;
	            aaa.add(url, slier);
	        };
	    }

	    function slier() {
	        setTimeout(function () {
	            slider_pre();
	        }, 2000);
	    }

	    slider_pre();

	    map.plugin(["AMap.ToolBar"], function () {
	        map.addControl(new AMap.ToolBar());
	    });

	    map.setStatus({ scrollWheel: false });
	}
	$(document).ready(function () {
	    a();
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* Zepto v1.2.0 - zepto event ajax form ie - zeptojs.com/license */
	"use strict";

	(function (global, factory) {
	    if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	        return factory(global);
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else factory(global);
	})(window, function (window) {
	    var Zepto = (function () {
	        var undefined,
	            key,
	            $,
	            classList,
	            emptyArray = [],
	            concat = emptyArray.concat,
	            filter = emptyArray.filter,
	            slice = emptyArray.slice,
	            document = window.document,
	            elementDisplay = {},
	            classCache = {},
	            cssNumber = { "column-count": 1, columns: 1, "font-weight": 1, "line-height": 1, opacity: 1, "z-index": 1, zoom: 1 },
	            fragmentRE = /^\s*<(\w+|!)[^>]*>/,
	            singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
	            tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
	            rootNodeRE = /^(?:body|html)$/i,
	            capitalRE = /([A-Z])/g,

	        // special attributes that should be get/set via method calls
	        methodAttributes = ["val", "css", "html", "text", "data", "width", "height", "offset"],
	            adjacencyOperators = ["after", "prepend", "before", "append"],
	            table = document.createElement("table"),
	            tableRow = document.createElement("tr"),
	            containers = {
	            tr: document.createElement("tbody"),
	            tbody: table, thead: table, tfoot: table,
	            td: tableRow, th: tableRow,
	            "*": document.createElement("div")
	        },
	            readyRE = /complete|loaded|interactive/,
	            simpleSelectorRE = /^[\w-]*$/,
	            class2type = {},
	            toString = class2type.toString,
	            zepto = {},
	            camelize,
	            uniq,
	            tempParent = document.createElement("div"),
	            propMap = {
	            tabindex: "tabIndex",
	            readonly: "readOnly",
	            "for": "htmlFor",
	            "class": "className",
	            maxlength: "maxLength",
	            cellspacing: "cellSpacing",
	            cellpadding: "cellPadding",
	            rowspan: "rowSpan",
	            colspan: "colSpan",
	            usemap: "useMap",
	            frameborder: "frameBorder",
	            contenteditable: "contentEditable"
	        },
	            isArray = Array.isArray || function (object) {
	            return object instanceof Array;
	        };

	        zepto.matches = function (element, selector) {
	            if (!selector || !element || element.nodeType !== 1) return false;
	            var matchesSelector = element.matches || element.webkitMatchesSelector || element.mozMatchesSelector || element.oMatchesSelector || element.matchesSelector;
	            if (matchesSelector) return matchesSelector.call(element, selector);
	            // fall back to performing a selector:
	            var match,
	                parent = element.parentNode,
	                temp = !parent;
	            if (temp) (parent = tempParent).appendChild(element);
	            match = ~zepto.qsa(parent, selector).indexOf(element);
	            temp && tempParent.removeChild(element);
	            return match;
	        };

	        function type(obj) {
	            return obj == null ? String(obj) : class2type[toString.call(obj)] || "object";
	        }

	        function isFunction(value) {
	            return type(value) == "function";
	        }
	        function isWindow(obj) {
	            return obj != null && obj == obj.window;
	        }
	        function isDocument(obj) {
	            return obj != null && obj.nodeType == obj.DOCUMENT_NODE;
	        }
	        function isObject(obj) {
	            return type(obj) == "object";
	        }
	        function isPlainObject(obj) {
	            return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype;
	        }

	        function likeArray(obj) {
	            var length = !!obj && "length" in obj && obj.length,
	                type = $.type(obj);

	            return "function" != type && !isWindow(obj) && ("array" == type || length === 0 || typeof length == "number" && length > 0 && length - 1 in obj);
	        }

	        function compact(array) {
	            return filter.call(array, function (item) {
	                return item != null;
	            });
	        }
	        function flatten(array) {
	            return array.length > 0 ? $.fn.concat.apply([], array) : array;
	        }
	        camelize = function (str) {
	            return str.replace(/-+(.)?/g, function (match, chr) {
	                return chr ? chr.toUpperCase() : "";
	            });
	        };
	        function dasherize(str) {
	            return str.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase();
	        }
	        uniq = function (array) {
	            return filter.call(array, function (item, idx) {
	                return array.indexOf(item) == idx;
	            });
	        };

	        function classRE(name) {
	            return name in classCache ? classCache[name] : classCache[name] = new RegExp("(^|\\s)" + name + "(\\s|$)");
	        }

	        function maybeAddPx(name, value) {
	            return typeof value == "number" && !cssNumber[dasherize(name)] ? value + "px" : value;
	        }

	        function defaultDisplay(nodeName) {
	            var element, display;
	            if (!elementDisplay[nodeName]) {
	                element = document.createElement(nodeName);
	                document.body.appendChild(element);
	                display = getComputedStyle(element, "").getPropertyValue("display");
	                element.parentNode.removeChild(element);
	                display == "none" && (display = "block");
	                elementDisplay[nodeName] = display;
	            }
	            return elementDisplay[nodeName];
	        }

	        function children(element) {
	            return "children" in element ? slice.call(element.children) : $.map(element.childNodes, function (node) {
	                if (node.nodeType == 1) return node;
	            });
	        }

	        function Z(dom, selector) {
	            var i,
	                len = dom ? dom.length : 0;
	            for (i = 0; i < len; i++) this[i] = dom[i];
	            this.length = len;
	            this.selector = selector || "";
	        }

	        // `$.zepto.fragment` takes a html string and an optional tag name
	        // to generate DOM nodes from the given html string.
	        // The generated DOM nodes are returned as an array.
	        // This function can be overridden in plugins for example to make
	        // it compatible with browsers that don't support the DOM fully.
	        zepto.fragment = function (html, name, properties) {
	            var dom, nodes, container;

	            // A special case optimization for a single tag
	            if (singleTagRE.test(html)) dom = $(document.createElement(RegExp.$1));

	            if (!dom) {
	                if (html.replace) html = html.replace(tagExpanderRE, "<$1></$2>");
	                if (name === undefined) name = fragmentRE.test(html) && RegExp.$1;
	                if (!(name in containers)) name = "*";

	                container = containers[name];
	                container.innerHTML = "" + html;
	                dom = $.each(slice.call(container.childNodes), function () {
	                    container.removeChild(this);
	                });
	            }

	            if (isPlainObject(properties)) {
	                nodes = $(dom);
	                $.each(properties, function (key, value) {
	                    if (methodAttributes.indexOf(key) > -1) nodes[key](value);else nodes.attr(key, value);
	                });
	            }

	            return dom;
	        };

	        // `$.zepto.Z` swaps out the prototype of the given `dom` array
	        // of nodes with `$.fn` and thus supplying all the Zepto functions
	        // to the array. This method can be overridden in plugins.
	        zepto.Z = function (dom, selector) {
	            return new Z(dom, selector);
	        };

	        // `$.zepto.isZ` should return `true` if the given object is a Zepto
	        // collection. This method can be overridden in plugins.
	        zepto.isZ = function (object) {
	            return object instanceof zepto.Z;
	        };

	        // `$.zepto.init` is Zepto's counterpart to jQuery's `$.fn.init` and
	        // takes a CSS selector and an optional context (and handles various
	        // special cases).
	        // This method can be overridden in plugins.
	        zepto.init = function (selector, context) {
	            var dom;
	            // If nothing given, return an empty Zepto collection
	            if (!selector) return zepto.Z()
	            // Optimize for string selectors
	            ;else if (typeof selector == "string") {
	                selector = selector.trim();
	                // If it's a html fragment, create nodes from it
	                // Note: In both Chrome 21 and Firefox 15, DOM error 12
	                // is thrown if the fragment doesn't begin with <
	                if (selector[0] == "<" && fragmentRE.test(selector)) dom = zepto.fragment(selector, RegExp.$1, context), selector = null
	                // If there's a context, create a collection on that context first, and select
	                // nodes from there
	                ;else if (context !== undefined) return $(context).find(selector)
	                // If it's a CSS selector, use it to select nodes.
	                ;else dom = zepto.qsa(document, selector);
	            }
	            // If a function is given, call it when the DOM is ready
	            else if (isFunction(selector)) return $(document).ready(selector)
	            // If a Zepto collection is given, just return it
	            ;else if (zepto.isZ(selector)) return selector;else {
	                // normalize array if an array of nodes is given
	                if (isArray(selector)) dom = compact(selector)
	                // Wrap DOM nodes.
	                ;else if (isObject(selector)) dom = [selector], selector = null
	                // If it's a html fragment, create nodes from it
	                ;else if (fragmentRE.test(selector)) dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null
	                // If there's a context, create a collection on that context first, and select
	                // nodes from there
	                ;else if (context !== undefined) return $(context).find(selector)
	                // And last but no least, if it's a CSS selector, use it to select nodes.
	                ;else dom = zepto.qsa(document, selector);
	            }
	            // create a new Zepto collection from the nodes found
	            return zepto.Z(dom, selector);
	        };

	        // `$` will be the base `Zepto` object. When calling this
	        // function just call `$.zepto.init, which makes the implementation
	        // details of selecting nodes and creating Zepto collections
	        // patchable in plugins.
	        $ = function (selector, context) {
	            return zepto.init(selector, context);
	        };

	        function extend(target, source, deep) {
	            for (key in source) if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
	                if (isPlainObject(source[key]) && !isPlainObject(target[key])) target[key] = {};
	                if (isArray(source[key]) && !isArray(target[key])) target[key] = [];
	                extend(target[key], source[key], deep);
	            } else if (source[key] !== undefined) target[key] = source[key];
	        }

	        // Copy all but undefined properties from one or more
	        // objects to the `target` object.
	        $.extend = function (target) {
	            var deep,
	                args = slice.call(arguments, 1);
	            if (typeof target == "boolean") {
	                deep = target;
	                target = args.shift();
	            }
	            args.forEach(function (arg) {
	                extend(target, arg, deep);
	            });
	            return target;
	        };

	        // `$.zepto.qsa` is Zepto's CSS selector implementation which
	        // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.
	        // This method can be overridden in plugins.
	        zepto.qsa = function (element, selector) {
	            var found,
	                maybeID = selector[0] == "#",
	                maybeClass = !maybeID && selector[0] == ".",
	                nameOnly = maybeID || maybeClass ? selector.slice(1) : selector,
	                // Ensure that a 1 char tag name still gets checked
	            isSimple = simpleSelectorRE.test(nameOnly);
	            return element.getElementById && isSimple && maybeID ? (found = element.getElementById(nameOnly)) ? [found] : [] : element.nodeType !== 1 && element.nodeType !== 9 && element.nodeType !== 11 ? [] : slice.call(isSimple && !maybeID && element.getElementsByClassName ? // DocumentFragment doesn't have getElementsByClassName/TagName
	            maybeClass ? element.getElementsByClassName(nameOnly) : // If it's simple, it could be a class
	            element.getElementsByTagName(selector) : // Or a tag
	            element.querySelectorAll(selector) // Or it's not simple, and we need to query all
	            );
	        };

	        function filtered(nodes, selector) {
	            return selector == null ? $(nodes) : $(nodes).filter(selector);
	        }

	        $.contains = document.documentElement.contains ? function (parent, node) {
	            return parent !== node && parent.contains(node);
	        } : function (parent, node) {
	            while (node && (node = node.parentNode)) if (node === parent) return true;
	            return false;
	        };

	        function funcArg(context, arg, idx, payload) {
	            return isFunction(arg) ? arg.call(context, idx, payload) : arg;
	        }

	        function setAttribute(node, name, value) {
	            value == null ? node.removeAttribute(name) : node.setAttribute(name, value);
	        }

	        // access className property while respecting SVGAnimatedString
	        function className(node, value) {
	            var klass = node.className || "",
	                svg = klass && klass.baseVal !== undefined;

	            if (value === undefined) {
	                return svg ? klass.baseVal : klass;
	            }svg ? klass.baseVal = value : node.className = value;
	        }

	        // "true"  => true
	        // "false" => false
	        // "null"  => null
	        // "42"    => 42
	        // "42.5"  => 42.5
	        // "08"    => "08"
	        // JSON    => parse if valid
	        // String  => self
	        function deserializeValue(value) {
	            try {
	                return value ? value == "true" || (value == "false" ? false : value == "null" ? null : +value + "" == value ? +value : /^[\[\{]/.test(value) ? $.parseJSON(value) : value) : value;
	            } catch (e) {
	                return value;
	            }
	        }

	        $.type = type;
	        $.isFunction = isFunction;
	        $.isWindow = isWindow;
	        $.isArray = isArray;
	        $.isPlainObject = isPlainObject;

	        $.isEmptyObject = function (obj) {
	            var name;
	            for (name in obj) return false;
	            return true;
	        };

	        $.isNumeric = function (val) {
	            var num = Number(val),
	                type = typeof val;
	            return val != null && type != "boolean" && (type != "string" || val.length) && !isNaN(num) && isFinite(num) || false;
	        };

	        $.inArray = function (elem, array, i) {
	            return emptyArray.indexOf.call(array, elem, i);
	        };

	        $.camelCase = camelize;
	        $.trim = function (str) {
	            return str == null ? "" : String.prototype.trim.call(str);
	        };

	        // plugin compatibility
	        $.uuid = 0;
	        $.support = {};
	        $.expr = {};
	        $.noop = function () {};

	        $.map = function (elements, callback) {
	            var value,
	                values = [],
	                i,
	                key;
	            if (likeArray(elements)) for (i = 0; i < elements.length; i++) {
	                value = callback(elements[i], i);
	                if (value != null) values.push(value);
	            } else for (key in elements) {
	                value = callback(elements[key], key);
	                if (value != null) values.push(value);
	            }
	            return flatten(values);
	        };

	        $.each = function (elements, callback) {
	            var i, key;
	            if (likeArray(elements)) {
	                for (i = 0; i < elements.length; i++) if (callback.call(elements[i], i, elements[i]) === false) return elements;
	            } else {
	                for (key in elements) if (callback.call(elements[key], key, elements[key]) === false) return elements;
	            }

	            return elements;
	        };

	        $.grep = function (elements, callback) {
	            return filter.call(elements, callback);
	        };

	        if (window.JSON) $.parseJSON = JSON.parse;

	        // Populate the class2type map
	        $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (i, name) {
	            class2type["[object " + name + "]"] = name.toLowerCase();
	        });

	        // Define methods that will be available on all
	        // Zepto collections
	        $.fn = {
	            constructor: zepto.Z,
	            length: 0,

	            // Because a collection acts like an array
	            // copy over these useful array functions.
	            forEach: emptyArray.forEach,
	            reduce: emptyArray.reduce,
	            push: emptyArray.push,
	            sort: emptyArray.sort,
	            splice: emptyArray.splice,
	            indexOf: emptyArray.indexOf,
	            concat: (function (_concat) {
	                var _concatWrapper = function concat() {
	                    return _concat.apply(this, arguments);
	                };

	                _concatWrapper.toString = function () {
	                    return _concat.toString();
	                };

	                return _concatWrapper;
	            })(function () {
	                var i,
	                    value,
	                    args = [];
	                for (i = 0; i < arguments.length; i++) {
	                    value = arguments[i];
	                    args[i] = zepto.isZ(value) ? value.toArray() : value;
	                }
	                return concat.apply(zepto.isZ(this) ? this.toArray() : this, args);
	            }),

	            // `map` and `slice` in the jQuery API work differently
	            // from their array counterparts
	            map: function map(fn) {
	                return $($.map(this, function (el, i) {
	                    return fn.call(el, i, el);
	                }));
	            },
	            slice: (function (_slice) {
	                var _sliceWrapper = function slice() {
	                    return _slice.apply(this, arguments);
	                };

	                _sliceWrapper.toString = function () {
	                    return _slice.toString();
	                };

	                return _sliceWrapper;
	            })(function () {
	                return $(slice.apply(this, arguments));
	            }),

	            ready: function ready(callback) {
	                // need to check if document.body exists for IE as that browser reports
	                // document ready when it hasn't yet created the body element
	                if (readyRE.test(document.readyState) && document.body) callback($);else document.addEventListener("DOMContentLoaded", function () {
	                    callback($);
	                }, false);
	                return this;
	            },
	            get: function get(idx) {
	                return idx === undefined ? slice.call(this) : this[idx >= 0 ? idx : idx + this.length];
	            },
	            toArray: function toArray() {
	                return this.get();
	            },
	            size: function size() {
	                return this.length;
	            },
	            remove: function remove() {
	                return this.each(function () {
	                    if (this.parentNode != null) this.parentNode.removeChild(this);
	                });
	            },
	            each: function each(callback) {
	                emptyArray.every.call(this, function (el, idx) {
	                    return callback.call(el, idx, el) !== false;
	                });
	                return this;
	            },
	            filter: (function (_filter) {
	                var _filterWrapper = function filter(_x) {
	                    return _filter.apply(this, arguments);
	                };

	                _filterWrapper.toString = function () {
	                    return _filter.toString();
	                };

	                return _filterWrapper;
	            })(function (selector) {
	                if (isFunction(selector)) return this.not(this.not(selector));
	                return $(filter.call(this, function (element) {
	                    return zepto.matches(element, selector);
	                }));
	            }),
	            add: function add(selector, context) {
	                return $(uniq(this.concat($(selector, context))));
	            },
	            is: function is(selector) {
	                return this.length > 0 && zepto.matches(this[0], selector);
	            },
	            not: function not(selector) {
	                var nodes = [];
	                if (isFunction(selector) && selector.call !== undefined) this.each(function (idx) {
	                    if (!selector.call(this, idx)) nodes.push(this);
	                });else {
	                    var excludes = typeof selector == "string" ? this.filter(selector) : likeArray(selector) && isFunction(selector.item) ? slice.call(selector) : $(selector);
	                    this.forEach(function (el) {
	                        if (excludes.indexOf(el) < 0) nodes.push(el);
	                    });
	                }
	                return $(nodes);
	            },
	            has: function has(selector) {
	                return this.filter(function () {
	                    return isObject(selector) ? $.contains(this, selector) : $(this).find(selector).size();
	                });
	            },
	            eq: function eq(idx) {
	                return idx === -1 ? this.slice(idx) : this.slice(idx, +idx + 1);
	            },
	            first: function first() {
	                var el = this[0];
	                return el && !isObject(el) ? el : $(el);
	            },
	            last: function last() {
	                var el = this[this.length - 1];
	                return el && !isObject(el) ? el : $(el);
	            },
	            find: function find(selector) {
	                var result,
	                    $this = this;
	                if (!selector) result = $();else if (typeof selector == "object") result = $(selector).filter(function () {
	                    var node = this;
	                    return emptyArray.some.call($this, function (parent) {
	                        return $.contains(parent, node);
	                    });
	                });else if (this.length == 1) result = $(zepto.qsa(this[0], selector));else result = this.map(function () {
	                    return zepto.qsa(this, selector);
	                });
	                return result;
	            },
	            closest: function closest(selector, context) {
	                var nodes = [],
	                    collection = typeof selector == "object" && $(selector);
	                this.each(function (_, node) {
	                    while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector))) node = node !== context && !isDocument(node) && node.parentNode;
	                    if (node && nodes.indexOf(node) < 0) nodes.push(node);
	                });
	                return $(nodes);
	            },
	            parents: function parents(selector) {
	                var ancestors = [],
	                    nodes = this;
	                while (nodes.length > 0) nodes = $.map(nodes, function (node) {
	                    if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
	                        ancestors.push(node);
	                        return node;
	                    }
	                });
	                return filtered(ancestors, selector);
	            },
	            parent: function parent(selector) {
	                return filtered(uniq(this.pluck("parentNode")), selector);
	            },
	            children: (function (_children) {
	                var _childrenWrapper = function children(_x) {
	                    return _children.apply(this, arguments);
	                };

	                _childrenWrapper.toString = function () {
	                    return _children.toString();
	                };

	                return _childrenWrapper;
	            })(function (selector) {
	                return filtered(this.map(function () {
	                    return children(this);
	                }), selector);
	            }),
	            contents: function contents() {
	                return this.map(function () {
	                    return this.contentDocument || slice.call(this.childNodes);
	                });
	            },
	            siblings: function siblings(selector) {
	                return filtered(this.map(function (i, el) {
	                    return filter.call(children(el.parentNode), function (child) {
	                        return child !== el;
	                    });
	                }), selector);
	            },
	            empty: function empty() {
	                return this.each(function () {
	                    this.innerHTML = "";
	                });
	            },
	            // `pluck` is borrowed from Prototype.js
	            pluck: function pluck(property) {
	                return $.map(this, function (el) {
	                    return el[property];
	                });
	            },
	            show: function show() {
	                return this.each(function () {
	                    this.style.display == "none" && (this.style.display = "");
	                    if (getComputedStyle(this, "").getPropertyValue("display") == "none") this.style.display = defaultDisplay(this.nodeName);
	                });
	            },
	            replaceWith: function replaceWith(newContent) {
	                return this.before(newContent).remove();
	            },
	            wrap: function wrap(structure) {
	                var func = isFunction(structure);
	                if (this[0] && !func) var dom = $(structure).get(0),
	                    clone = dom.parentNode || this.length > 1;

	                return this.each(function (index) {
	                    $(this).wrapAll(func ? structure.call(this, index) : clone ? dom.cloneNode(true) : dom);
	                });
	            },
	            wrapAll: function wrapAll(structure) {
	                if (this[0]) {
	                    $(this[0]).before(structure = $(structure));
	                    var children;
	                    // drill down to the inmost element
	                    while ((children = structure.children()).length) structure = children.first();
	                    $(structure).append(this);
	                }
	                return this;
	            },
	            wrapInner: function wrapInner(structure) {
	                var func = isFunction(structure);
	                return this.each(function (index) {
	                    var self = $(this),
	                        contents = self.contents(),
	                        dom = func ? structure.call(this, index) : structure;
	                    contents.length ? contents.wrapAll(dom) : self.append(dom);
	                });
	            },
	            unwrap: function unwrap() {
	                this.parent().each(function () {
	                    $(this).replaceWith($(this).children());
	                });
	                return this;
	            },
	            clone: function clone() {
	                return this.map(function () {
	                    return this.cloneNode(true);
	                });
	            },
	            hide: function hide() {
	                return this.css("display", "none");
	            },
	            toggle: function toggle(setting) {
	                return this.each(function () {
	                    var el = $(this);(setting === undefined ? el.css("display") == "none" : setting) ? el.show() : el.hide();
	                });
	            },
	            prev: function prev(selector) {
	                return $(this.pluck("previousElementSibling")).filter(selector || "*");
	            },
	            next: function next(selector) {
	                return $(this.pluck("nextElementSibling")).filter(selector || "*");
	            },
	            html: (function (_html) {
	                var _htmlWrapper = function html(_x) {
	                    return _html.apply(this, arguments);
	                };

	                _htmlWrapper.toString = function () {
	                    return _html.toString();
	                };

	                return _htmlWrapper;
	            })(function (html) {
	                return 0 in arguments ? this.each(function (idx) {
	                    var originHtml = this.innerHTML;
	                    $(this).empty().append(funcArg(this, html, idx, originHtml));
	                }) : 0 in this ? this[0].innerHTML : null;
	            }),
	            text: (function (_text) {
	                var _textWrapper = function text(_x) {
	                    return _text.apply(this, arguments);
	                };

	                _textWrapper.toString = function () {
	                    return _text.toString();
	                };

	                return _textWrapper;
	            })(function (text) {
	                return 0 in arguments ? this.each(function (idx) {
	                    var newText = funcArg(this, text, idx, this.textContent);
	                    this.textContent = newText == null ? "" : "" + newText;
	                }) : 0 in this ? this.pluck("textContent").join("") : null;
	            }),
	            attr: function attr(name, value) {
	                var result;
	                return typeof name == "string" && !(1 in arguments) ? 0 in this && this[0].nodeType == 1 && (result = this[0].getAttribute(name)) != null ? result : undefined : this.each(function (idx) {
	                    if (this.nodeType !== 1) return;
	                    if (isObject(name)) for (key in name) setAttribute(this, key, name[key]);else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)));
	                });
	            },
	            removeAttr: function removeAttr(name) {
	                return this.each(function () {
	                    this.nodeType === 1 && name.split(" ").forEach(function (attribute) {
	                        setAttribute(this, attribute);
	                    }, this);
	                });
	            },
	            prop: function prop(name, value) {
	                name = propMap[name] || name;
	                return 1 in arguments ? this.each(function (idx) {
	                    this[name] = funcArg(this, value, idx, this[name]);
	                }) : this[0] && this[0][name];
	            },
	            removeProp: function removeProp(name) {
	                name = propMap[name] || name;
	                return this.each(function () {
	                    delete this[name];
	                });
	            },
	            data: (function (_data) {
	                var _dataWrapper = function data(_x, _x2) {
	                    return _data.apply(this, arguments);
	                };

	                _dataWrapper.toString = function () {
	                    return _data.toString();
	                };

	                return _dataWrapper;
	            })(function (name, value) {
	                var attrName = "data-" + name.replace(capitalRE, "-$1").toLowerCase();

	                var data = 1 in arguments ? this.attr(attrName, value) : this.attr(attrName);

	                return data !== null ? deserializeValue(data) : undefined;
	            }),
	            val: function val(value) {
	                if (0 in arguments) {
	                    if (value == null) value = "";
	                    return this.each(function (idx) {
	                        this.value = funcArg(this, value, idx, this.value);
	                    });
	                } else {
	                    return this[0] && (this[0].multiple ? $(this[0]).find("option").filter(function () {
	                        return this.selected;
	                    }).pluck("value") : this[0].value);
	                }
	            },
	            offset: function offset(coordinates) {
	                if (coordinates) {
	                    return this.each(function (index) {
	                        var $this = $(this),
	                            coords = funcArg(this, coordinates, index, $this.offset()),
	                            parentOffset = $this.offsetParent().offset(),
	                            props = {
	                            top: coords.top - parentOffset.top,
	                            left: coords.left - parentOffset.left
	                        };

	                        if ($this.css("position") == "static") props.position = "relative";
	                        $this.css(props);
	                    });
	                }if (!this.length) {
	                    return null;
	                }if (document.documentElement !== this[0] && !$.contains(document.documentElement, this[0])) {
	                    return { top: 0, left: 0 };
	                }var obj = this[0].getBoundingClientRect();
	                return {
	                    left: obj.left + window.pageXOffset,
	                    top: obj.top + window.pageYOffset,
	                    width: Math.round(obj.width),
	                    height: Math.round(obj.height)
	                };
	            },
	            css: (function (_css) {
	                var _cssWrapper = function css(_x, _x2) {
	                    return _css.apply(this, arguments);
	                };

	                _cssWrapper.toString = function () {
	                    return _css.toString();
	                };

	                return _cssWrapper;
	            })(function (property, value) {
	                if (arguments.length < 2) {
	                    var element = this[0];
	                    if (typeof property == "string") {
	                        if (!element) return;
	                        return element.style[camelize(property)] || getComputedStyle(element, "").getPropertyValue(property);
	                    } else if (isArray(property)) {
	                        if (!element) return;
	                        var props = {};
	                        var computedStyle = getComputedStyle(element, "");
	                        $.each(property, function (_, prop) {
	                            props[prop] = element.style[camelize(prop)] || computedStyle.getPropertyValue(prop);
	                        });
	                        return props;
	                    }
	                }

	                var css = "";
	                if (type(property) == "string") {
	                    if (!value && value !== 0) this.each(function () {
	                        this.style.removeProperty(dasherize(property));
	                    });else css = dasherize(property) + ":" + maybeAddPx(property, value);
	                } else {
	                    for (key in property) if (!property[key] && property[key] !== 0) this.each(function () {
	                        this.style.removeProperty(dasherize(key));
	                    });else css += dasherize(key) + ":" + maybeAddPx(key, property[key]) + ";";
	                }

	                return this.each(function () {
	                    this.style.cssText += ";" + css;
	                });
	            }),
	            index: function index(element) {
	                return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0]);
	            },
	            hasClass: function hasClass(name) {
	                if (!name) {
	                    return false;
	                }return emptyArray.some.call(this, function (el) {
	                    return this.test(className(el));
	                }, classRE(name));
	            },
	            addClass: function addClass(name) {
	                if (!name) {
	                    return this;
	                }return this.each(function (idx) {
	                    if (!("className" in this)) return;
	                    classList = [];
	                    var cls = className(this),
	                        newName = funcArg(this, name, idx, cls);
	                    newName.split(/\s+/g).forEach(function (klass) {
	                        if (!$(this).hasClass(klass)) classList.push(klass);
	                    }, this);
	                    classList.length && className(this, cls + (cls ? " " : "") + classList.join(" "));
	                });
	            },
	            removeClass: function removeClass(name) {
	                return this.each(function (idx) {
	                    if (!("className" in this)) return;
	                    if (name === undefined) return className(this, "");
	                    classList = className(this);
	                    funcArg(this, name, idx, classList).split(/\s+/g).forEach(function (klass) {
	                        classList = classList.replace(classRE(klass), " ");
	                    });
	                    className(this, classList.trim());
	                });
	            },
	            toggleClass: function toggleClass(name, when) {
	                if (!name) {
	                    return this;
	                }return this.each(function (idx) {
	                    var $this = $(this),
	                        names = funcArg(this, name, idx, className(this));
	                    names.split(/\s+/g).forEach(function (klass) {
	                        (when === undefined ? !$this.hasClass(klass) : when) ? $this.addClass(klass) : $this.removeClass(klass);
	                    });
	                });
	            },
	            scrollTop: function scrollTop(value) {
	                if (!this.length) {
	                    return;
	                }var hasScrollTop = ("scrollTop" in this[0]);
	                if (value === undefined) {
	                    return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset;
	                }return this.each(hasScrollTop ? function () {
	                    this.scrollTop = value;
	                } : function () {
	                    this.scrollTo(this.scrollX, value);
	                });
	            },
	            scrollLeft: function scrollLeft(value) {
	                if (!this.length) {
	                    return;
	                }var hasScrollLeft = ("scrollLeft" in this[0]);
	                if (value === undefined) {
	                    return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset;
	                }return this.each(hasScrollLeft ? function () {
	                    this.scrollLeft = value;
	                } : function () {
	                    this.scrollTo(value, this.scrollY);
	                });
	            },
	            position: function position() {
	                if (!this.length) {
	                    return;
	                }var elem = this[0],

	                // Get *real* offsetParent
	                offsetParent = this.offsetParent(),

	                // Get correct offsets
	                offset = this.offset(),
	                    parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset();

	                // Subtract element margins
	                // note: when an element has margin: auto the offsetLeft and marginLeft
	                // are the same in Safari causing offset.left to incorrectly be 0
	                offset.top -= parseFloat($(elem).css("margin-top")) || 0;
	                offset.left -= parseFloat($(elem).css("margin-left")) || 0;

	                // Add offsetParent borders
	                parentOffset.top += parseFloat($(offsetParent[0]).css("border-top-width")) || 0;
	                parentOffset.left += parseFloat($(offsetParent[0]).css("border-left-width")) || 0;

	                // Subtract the two offsets
	                return {
	                    top: offset.top - parentOffset.top,
	                    left: offset.left - parentOffset.left
	                };
	            },
	            offsetParent: function offsetParent() {
	                return this.map(function () {
	                    var parent = this.offsetParent || document.body;
	                    while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css("position") == "static") parent = parent.offsetParent;
	                    return parent;
	                });
	            }
	        };

	        // for now
	        $.fn.detach = $.fn.remove

	        // Generate the `width` and `height` functions
	        ;["width", "height"].forEach(function (dimension) {
	            var dimensionProperty = dimension.replace(/./, function (m) {
	                return m[0].toUpperCase();
	            });

	            $.fn[dimension] = function (value) {
	                var offset,
	                    el = this[0];
	                if (value === undefined) return isWindow(el) ? el["inner" + dimensionProperty] : isDocument(el) ? el.documentElement["scroll" + dimensionProperty] : (offset = this.offset()) && offset[dimension];else return this.each(function (idx) {
	                    el = $(this);
	                    el.css(dimension, funcArg(this, value, idx, el[dimension]()));
	                });
	            };
	        });

	        function traverseNode(node, fun) {
	            fun(node);
	            for (var i = 0, len = node.childNodes.length; i < len; i++) traverseNode(node.childNodes[i], fun);
	        }

	        // Generate the `after`, `prepend`, `before`, `append`,
	        // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.
	        adjacencyOperators.forEach(function (operator, operatorIndex) {
	            var inside = operatorIndex % 2; //=> prepend, append

	            $.fn[operator] = function () {
	                // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings
	                var argType,
	                    nodes = $.map(arguments, function (arg) {
	                    var arr = [];
	                    argType = type(arg);
	                    if (argType == "array") {
	                        arg.forEach(function (el) {
	                            if (el.nodeType !== undefined) return arr.push(el);else if ($.zepto.isZ(el)) return arr = arr.concat(el.get());
	                            arr = arr.concat(zepto.fragment(el));
	                        });
	                        return arr;
	                    }
	                    return argType == "object" || arg == null ? arg : zepto.fragment(arg);
	                }),
	                    parent,
	                    copyByClone = this.length > 1;
	                if (nodes.length < 1) return this;

	                return this.each(function (_, target) {
	                    parent = inside ? target : target.parentNode;

	                    // convert all methods to a "before" operation
	                    target = operatorIndex == 0 ? target.nextSibling : operatorIndex == 1 ? target.firstChild : operatorIndex == 2 ? target : null;

	                    var parentInDocument = $.contains(document.documentElement, parent);

	                    nodes.forEach(function (node) {
	                        if (copyByClone) node = node.cloneNode(true);else if (!parent) return $(node).remove();

	                        parent.insertBefore(node, target);
	                        if (parentInDocument) traverseNode(node, function (el) {
	                            if (el.nodeName != null && el.nodeName.toUpperCase() === "SCRIPT" && (!el.type || el.type === "text/javascript") && !el.src) {
	                                var target = el.ownerDocument ? el.ownerDocument.defaultView : window;
	                                target.eval.call(target, el.innerHTML);
	                            }
	                        });
	                    });
	                });
	            };

	            // after    => insertAfter
	            // prepend  => prependTo
	            // before   => insertBefore
	            // append   => appendTo
	            $.fn[inside ? operator + "To" : "insert" + (operatorIndex ? "Before" : "After")] = function (html) {
	                $(html)[operator](this);
	                return this;
	            };
	        });

	        zepto.Z.prototype = Z.prototype = $.fn;

	        // Export internal API functions in the `$.zepto` namespace
	        zepto.uniq = uniq;
	        zepto.deserializeValue = deserializeValue;
	        $.zepto = zepto;

	        return $;
	    })();

	    window.Zepto = Zepto;
	    window.$ === undefined && (window.$ = Zepto);(function ($) {
	        var _zid = 1,
	            undefined,
	            slice = Array.prototype.slice,
	            isFunction = $.isFunction,
	            isString = function isString(obj) {
	            return typeof obj == "string";
	        },
	            handlers = {},
	            specialEvents = {},
	            focusinSupported = ("onfocusin" in window),
	            focus = { focus: "focusin", blur: "focusout" },
	            hover = { mouseenter: "mouseover", mouseleave: "mouseout" };

	        specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = "MouseEvents";

	        function zid(element) {
	            return element._zid || (element._zid = _zid++);
	        }
	        function findHandlers(element, event, fn, selector) {
	            event = parse(event);
	            if (event.ns) var matcher = matcherFor(event.ns);
	            return (handlers[zid(element)] || []).filter(function (handler) {
	                return handler && (!event.e || handler.e == event.e) && (!event.ns || matcher.test(handler.ns)) && (!fn || zid(handler.fn) === zid(fn)) && (!selector || handler.sel == selector);
	            });
	        }
	        function parse(event) {
	            var parts = ("" + event).split(".");
	            return { e: parts[0], ns: parts.slice(1).sort().join(" ") };
	        }
	        function matcherFor(ns) {
	            return new RegExp("(?:^| )" + ns.replace(" ", " .* ?") + "(?: |$)");
	        }

	        function eventCapture(handler, captureSetting) {
	            return handler.del && (!focusinSupported && handler.e in focus) || !!captureSetting;
	        }

	        function realEvent(type) {
	            return hover[type] || focusinSupported && focus[type] || type;
	        }

	        function add(element, events, fn, data, selector, delegator, capture) {
	            var id = zid(element),
	                set = handlers[id] || (handlers[id] = []);
	            events.split(/\s/).forEach(function (event) {
	                if (event == "ready") return $(document).ready(fn);
	                var handler = parse(event);
	                handler.fn = fn;
	                handler.sel = selector;
	                // emulate mouseenter, mouseleave
	                if (handler.e in hover) fn = function (e) {
	                    var related = e.relatedTarget;
	                    if (!related || related !== this && !$.contains(this, related)) return handler.fn.apply(this, arguments);
	                };
	                handler.del = delegator;
	                var callback = delegator || fn;
	                handler.proxy = function (e) {
	                    e = compatible(e);
	                    if (e.isImmediatePropagationStopped()) return;
	                    e.data = data;
	                    var result = callback.apply(element, e._args == undefined ? [e] : [e].concat(e._args));
	                    if (result === false) e.preventDefault(), e.stopPropagation();
	                    return result;
	                };
	                handler.i = set.length;
	                set.push(handler);
	                if ("addEventListener" in element) element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture));
	            });
	        }
	        function remove(element, events, fn, selector, capture) {
	            var id = zid(element);(events || "").split(/\s/).forEach(function (event) {
	                findHandlers(element, event, fn, selector).forEach(function (handler) {
	                    delete handlers[id][handler.i];
	                    if ("removeEventListener" in element) element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture));
	                });
	            });
	        }

	        $.event = { add: add, remove: remove };

	        $.proxy = function (fn, context) {
	            var args = 2 in arguments && slice.call(arguments, 2);
	            if (isFunction(fn)) {
	                var proxyFn = function proxyFn() {
	                    return fn.apply(context, args ? args.concat(slice.call(arguments)) : arguments);
	                };
	                proxyFn._zid = zid(fn);
	                return proxyFn;
	            } else if (isString(context)) {
	                if (args) {
	                    args.unshift(fn[context], fn);
	                    return $.proxy.apply(null, args);
	                } else {
	                    return $.proxy(fn[context], fn);
	                }
	            } else {
	                throw new TypeError("expected function");
	            }
	        };

	        $.fn.bind = function (event, data, callback) {
	            return this.on(event, data, callback);
	        };
	        $.fn.unbind = function (event, callback) {
	            return this.off(event, callback);
	        };
	        $.fn.one = function (event, selector, data, callback) {
	            return this.on(event, selector, data, callback, 1);
	        };

	        var returnTrue = function returnTrue() {
	            return true;
	        },
	            returnFalse = function returnFalse() {
	            return false;
	        },
	            ignoreProperties = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
	            eventMethods = {
	            preventDefault: "isDefaultPrevented",
	            stopImmediatePropagation: "isImmediatePropagationStopped",
	            stopPropagation: "isPropagationStopped"
	        };

	        function compatible(event, source) {
	            if (source || !event.isDefaultPrevented) {
	                source || (source = event);

	                $.each(eventMethods, function (name, predicate) {
	                    var sourceMethod = source[name];
	                    event[name] = function () {
	                        this[predicate] = returnTrue;
	                        return sourceMethod && sourceMethod.apply(source, arguments);
	                    };
	                    event[predicate] = returnFalse;
	                });

	                event.timeStamp || (event.timeStamp = Date.now());

	                if (source.defaultPrevented !== undefined ? source.defaultPrevented : "returnValue" in source ? source.returnValue === false : source.getPreventDefault && source.getPreventDefault()) event.isDefaultPrevented = returnTrue;
	            }
	            return event;
	        }

	        function createProxy(event) {
	            var key,
	                proxy = { originalEvent: event };
	            for (key in event) if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = event[key];

	            return compatible(proxy, event);
	        }

	        $.fn.delegate = function (selector, event, callback) {
	            return this.on(event, selector, callback);
	        };
	        $.fn.undelegate = function (selector, event, callback) {
	            return this.off(event, selector, callback);
	        };

	        $.fn.live = function (event, callback) {
	            $(document.body).delegate(this.selector, event, callback);
	            return this;
	        };
	        $.fn.die = function (event, callback) {
	            $(document.body).undelegate(this.selector, event, callback);
	            return this;
	        };

	        $.fn.on = function (event, selector, data, callback, one) {
	            var autoRemove,
	                delegator,
	                $this = this;
	            if (event && !isString(event)) {
	                $.each(event, function (type, fn) {
	                    $this.on(type, selector, data, fn, one);
	                });
	                return $this;
	            }

	            if (!isString(selector) && !isFunction(callback) && callback !== false) callback = data, data = selector, selector = undefined;
	            if (callback === undefined || data === false) callback = data, data = undefined;

	            if (callback === false) callback = returnFalse;

	            return $this.each(function (_, element) {
	                if (one) autoRemove = function (e) {
	                    remove(element, e.type, callback);
	                    return callback.apply(this, arguments);
	                };

	                if (selector) delegator = function (e) {
	                    var evt,
	                        match = $(e.target).closest(selector, element).get(0);
	                    if (match && match !== element) {
	                        evt = $.extend(createProxy(e), { currentTarget: match, liveFired: element });
	                        return (autoRemove || callback).apply(match, [evt].concat(slice.call(arguments, 1)));
	                    }
	                };

	                add(element, event, callback, data, selector, delegator || autoRemove);
	            });
	        };
	        $.fn.off = function (event, selector, callback) {
	            var $this = this;
	            if (event && !isString(event)) {
	                $.each(event, function (type, fn) {
	                    $this.off(type, selector, fn);
	                });
	                return $this;
	            }

	            if (!isString(selector) && !isFunction(callback) && callback !== false) callback = selector, selector = undefined;

	            if (callback === false) callback = returnFalse;

	            return $this.each(function () {
	                remove(this, event, callback, selector);
	            });
	        };

	        $.fn.trigger = function (event, args) {
	            event = isString(event) || $.isPlainObject(event) ? $.Event(event) : compatible(event);
	            event._args = args;
	            return this.each(function () {
	                // handle focus(), blur() by calling them directly
	                if (event.type in focus && typeof this[event.type] == "function") this[event.type]();else if ("dispatchEvent" in this) this.dispatchEvent(event);else $(this).triggerHandler(event, args);
	            });
	        };

	        // triggers event handlers on current element just as if an event occurred,
	        // doesn't trigger an actual event, doesn't bubble
	        $.fn.triggerHandler = function (event, args) {
	            var e, result;
	            this.each(function (i, element) {
	                e = createProxy(isString(event) ? $.Event(event) : event);
	                e._args = args;
	                e.target = element;
	                $.each(findHandlers(element, event.type || event), function (i, handler) {
	                    result = handler.proxy(e);
	                    if (e.isImmediatePropagationStopped()) return false;
	                });
	            });
	            return result;
	        }

	        // shortcut methods for `.bind(event, fn)` for each event type
	        ;("focusin focusout focus blur load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select keydown keypress keyup error").split(" ").forEach(function (event) {
	            $.fn[event] = function (callback) {
	                return 0 in arguments ? this.bind(event, callback) : this.trigger(event);
	            };
	        });

	        $.Event = function (type, props) {
	            if (!isString(type)) props = type, type = props.type;
	            var event = document.createEvent(specialEvents[type] || "Events"),
	                bubbles = true;
	            if (props) for (var name in props) name == "bubbles" ? bubbles = !!props[name] : event[name] = props[name];
	            event.initEvent(type, bubbles, true);
	            return compatible(event);
	        };
	    })(Zepto);(function ($) {
	        var jsonpID = +new Date(),
	            document = window.document,
	            key,
	            name,
	            rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
	            scriptTypeRE = /^(?:text|application)\/javascript/i,
	            xmlTypeRE = /^(?:text|application)\/xml/i,
	            jsonType = "application/json",
	            htmlType = "text/html",
	            blankRE = /^\s*$/,
	            originAnchor = document.createElement("a");

	        originAnchor.href = window.location.href;

	        // trigger a custom event and return false if it was cancelled
	        function triggerAndReturn(context, eventName, data) {
	            var event = $.Event(eventName);
	            $(context).trigger(event, data);
	            return !event.isDefaultPrevented();
	        }

	        // trigger an Ajax "global" event
	        function triggerGlobal(settings, context, eventName, data) {
	            if (settings.global) {
	                return triggerAndReturn(context || document, eventName, data);
	            }
	        }

	        // Number of active Ajax requests
	        $.active = 0;

	        function ajaxStart(settings) {
	            if (settings.global && $.active++ === 0) triggerGlobal(settings, null, "ajaxStart");
	        }
	        function ajaxStop(settings) {
	            if (settings.global && ! --$.active) triggerGlobal(settings, null, "ajaxStop");
	        }

	        // triggers an extra global event "ajaxBeforeSend" that's like "ajaxSend" but cancelable
	        function ajaxBeforeSend(xhr, settings) {
	            var context = settings.context;
	            if (settings.beforeSend.call(context, xhr, settings) === false || triggerGlobal(settings, context, "ajaxBeforeSend", [xhr, settings]) === false) {
	                return false;
	            }triggerGlobal(settings, context, "ajaxSend", [xhr, settings]);
	        }
	        function ajaxSuccess(data, xhr, settings, deferred) {
	            var context = settings.context,
	                status = "success";
	            settings.success.call(context, data, status, xhr);
	            if (deferred) deferred.resolveWith(context, [data, status, xhr]);
	            triggerGlobal(settings, context, "ajaxSuccess", [xhr, settings, data]);
	            ajaxComplete(status, xhr, settings);
	        }
	        // type: "timeout", "error", "abort", "parsererror"
	        function ajaxError(error, type, xhr, settings, deferred) {
	            var context = settings.context;
	            settings.error.call(context, xhr, type, error);
	            if (deferred) deferred.rejectWith(context, [xhr, type, error]);
	            triggerGlobal(settings, context, "ajaxError", [xhr, settings, error || type]);
	            ajaxComplete(type, xhr, settings);
	        }
	        // status: "success", "notmodified", "error", "timeout", "abort", "parsererror"
	        function ajaxComplete(status, xhr, settings) {
	            var context = settings.context;
	            settings.complete.call(context, xhr, status);
	            triggerGlobal(settings, context, "ajaxComplete", [xhr, settings]);
	            ajaxStop(settings);
	        }

	        function ajaxDataFilter(data, type, settings) {
	            if (settings.dataFilter == empty) {
	                return data;
	            }var context = settings.context;
	            return settings.dataFilter.call(context, data, type);
	        }

	        // Empty function, used as default callback
	        function empty() {}

	        $.ajaxJSONP = function (options, deferred) {
	            if (!("type" in options)) return $.ajax(options);

	            var _callbackName = options.jsonpCallback,
	                callbackName = ($.isFunction(_callbackName) ? _callbackName() : _callbackName) || "Zepto" + jsonpID++,
	                script = document.createElement("script"),
	                originalCallback = window[callbackName],
	                responseData,
	                abort = function abort(errorType) {
	                $(script).triggerHandler("error", errorType || "abort");
	            },
	                xhr = { abort: abort },
	                abortTimeout;

	            if (deferred) deferred.promise(xhr);

	            $(script).on("load error", function (e, errorType) {
	                clearTimeout(abortTimeout);
	                $(script).off().remove();

	                if (e.type == "error" || !responseData) {
	                    ajaxError(null, errorType || "error", xhr, options, deferred);
	                } else {
	                    ajaxSuccess(responseData[0], xhr, options, deferred);
	                }

	                window[callbackName] = originalCallback;
	                if (responseData && $.isFunction(originalCallback)) originalCallback(responseData[0]);

	                originalCallback = responseData = undefined;
	            });

	            if (ajaxBeforeSend(xhr, options) === false) {
	                abort("abort");
	                return xhr;
	            }

	            window[callbackName] = function () {
	                responseData = arguments;
	            };

	            script.src = options.url.replace(/\?(.+)=\?/, "?$1=" + callbackName);
	            document.head.appendChild(script);

	            if (options.timeout > 0) abortTimeout = setTimeout(function () {
	                abort("timeout");
	            }, options.timeout);

	            return xhr;
	        };

	        $.ajaxSettings = {
	            // Default type of request
	            type: "GET",
	            // Callback that is executed before request
	            beforeSend: empty,
	            // Callback that is executed if the request succeeds
	            success: empty,
	            // Callback that is executed the the server drops error
	            error: empty,
	            // Callback that is executed on request complete (both: error and success)
	            complete: empty,
	            // The context for the callbacks
	            context: null,
	            // Whether to trigger "global" Ajax events
	            global: true,
	            // Transport
	            xhr: function xhr() {
	                return new window.XMLHttpRequest();
	            },
	            // MIME types mapping
	            // IIS returns Javascript as "application/x-javascript"
	            accepts: {
	                script: "text/javascript, application/javascript, application/x-javascript",
	                json: jsonType,
	                xml: "application/xml, text/xml",
	                html: htmlType,
	                text: "text/plain"
	            },
	            // Whether the request is to another domain
	            crossDomain: false,
	            // Default timeout
	            timeout: 0,
	            // Whether data should be serialized to string
	            processData: true,
	            // Whether the browser should be allowed to cache GET responses
	            cache: true,
	            //Used to handle the raw response data of XMLHttpRequest.
	            //This is a pre-filtering function to sanitize the response.
	            //The sanitized response should be returned
	            dataFilter: empty
	        };

	        function mimeToDataType(mime) {
	            if (mime) mime = mime.split(";", 2)[0];
	            return mime && (mime == htmlType ? "html" : mime == jsonType ? "json" : scriptTypeRE.test(mime) ? "script" : xmlTypeRE.test(mime) && "xml") || "text";
	        }

	        function appendQuery(url, query) {
	            if (query == "") {
	                return url;
	            }return (url + "&" + query).replace(/[&?]{1,2}/, "?");
	        }

	        // serialize payload and append it to the URL for GET requests
	        function serializeData(options) {
	            if (options.processData && options.data && $.type(options.data) != "string") options.data = $.param(options.data, options.traditional);
	            if (options.data && (!options.type || options.type.toUpperCase() == "GET" || "jsonp" == options.dataType)) options.url = appendQuery(options.url, options.data), options.data = undefined;
	        }

	        $.ajax = function (options) {
	            var settings = $.extend({}, options || {}),
	                deferred = $.Deferred && $.Deferred(),
	                urlAnchor,
	                hashIndex;
	            for (key in $.ajaxSettings) if (settings[key] === undefined) settings[key] = $.ajaxSettings[key];

	            ajaxStart(settings);

	            if (!settings.crossDomain) {
	                urlAnchor = document.createElement("a");
	                urlAnchor.href = settings.url;
	                // cleans up URL for .href (IE only), see https://github.com/madrobby/zepto/pull/1049
	                urlAnchor.href = urlAnchor.href;
	                settings.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
	            }

	            if (!settings.url) settings.url = window.location.toString();
	            if ((hashIndex = settings.url.indexOf("#")) > -1) settings.url = settings.url.slice(0, hashIndex);
	            serializeData(settings);

	            var dataType = settings.dataType,
	                hasPlaceholder = /\?.+=\?/.test(settings.url);
	            if (hasPlaceholder) dataType = "jsonp";

	            if (settings.cache === false || (!options || options.cache !== true) && ("script" == dataType || "jsonp" == dataType)) settings.url = appendQuery(settings.url, "_=" + Date.now());

	            if ("jsonp" == dataType) {
	                if (!hasPlaceholder) settings.url = appendQuery(settings.url, settings.jsonp ? settings.jsonp + "=?" : settings.jsonp === false ? "" : "callback=?");
	                return $.ajaxJSONP(settings, deferred);
	            }

	            var mime = settings.accepts[dataType],
	                headers = {},
	                setHeader = function setHeader(name, value) {
	                headers[name.toLowerCase()] = [name, value];
	            },
	                protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
	                xhr = settings.xhr(),
	                nativeSetHeader = xhr.setRequestHeader,
	                abortTimeout;

	            if (deferred) deferred.promise(xhr);

	            if (!settings.crossDomain) setHeader("X-Requested-With", "XMLHttpRequest");
	            setHeader("Accept", mime || "*/*");
	            if (mime = settings.mimeType || mime) {
	                if (mime.indexOf(",") > -1) mime = mime.split(",", 2)[0];
	                xhr.overrideMimeType && xhr.overrideMimeType(mime);
	            }
	            if (settings.contentType || settings.contentType !== false && settings.data && settings.type.toUpperCase() != "GET") setHeader("Content-Type", settings.contentType || "application/x-www-form-urlencoded");

	            if (settings.headers) for (name in settings.headers) setHeader(name, settings.headers[name]);
	            xhr.setRequestHeader = setHeader;

	            xhr.onreadystatechange = function () {
	                if (xhr.readyState == 4) {
	                    xhr.onreadystatechange = empty;
	                    clearTimeout(abortTimeout);
	                    var result,
	                        error = false;
	                    if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304 || xhr.status == 0 && protocol == "file:") {
	                        dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader("content-type"));

	                        if (xhr.responseType == "arraybuffer" || xhr.responseType == "blob") result = xhr.response;else {
	                            result = xhr.responseText;

	                            try {
	                                // http://perfectionkills.com/global-eval-what-are-the-options/
	                                // sanitize response accordingly if data filter callback provided
	                                result = ajaxDataFilter(result, dataType, settings);
	                                if (dataType == "script") (1, eval)(result);else if (dataType == "xml") result = xhr.responseXML;else if (dataType == "json") result = blankRE.test(result) ? null : $.parseJSON(result);
	                            } catch (e) {
	                                error = e;
	                            }

	                            if (error) return ajaxError(error, "parsererror", xhr, settings, deferred);
	                        }

	                        ajaxSuccess(result, xhr, settings, deferred);
	                    } else {
	                        ajaxError(xhr.statusText || null, xhr.status ? "error" : "abort", xhr, settings, deferred);
	                    }
	                }
	            };

	            if (ajaxBeforeSend(xhr, settings) === false) {
	                xhr.abort();
	                ajaxError(null, "abort", xhr, settings, deferred);
	                return xhr;
	            }

	            var async = "async" in settings ? settings.async : true;
	            xhr.open(settings.type, settings.url, async, settings.username, settings.password);

	            if (settings.xhrFields) for (name in settings.xhrFields) xhr[name] = settings.xhrFields[name];

	            for (name in headers) nativeSetHeader.apply(xhr, headers[name]);

	            if (settings.timeout > 0) abortTimeout = setTimeout(function () {
	                xhr.onreadystatechange = empty;
	                xhr.abort();
	                ajaxError(null, "timeout", xhr, settings, deferred);
	            }, settings.timeout);

	            // avoid sending empty string (#319)
	            xhr.send(settings.data ? settings.data : null);
	            return xhr;
	        };

	        // handle optional data/success arguments
	        function parseArguments(url, data, success, dataType) {
	            if ($.isFunction(data)) dataType = success, success = data, data = undefined;
	            if (!$.isFunction(success)) dataType = success, success = undefined;
	            return {
	                url: url,
	                data: data,
	                success: success,
	                dataType: dataType
	            };
	        }

	        $.get = function () {
	            return $.ajax(parseArguments.apply(null, arguments));
	        };

	        $.post = function () {
	            var options = parseArguments.apply(null, arguments);
	            options.type = "POST";
	            return $.ajax(options);
	        };

	        $.getJSON = function () {
	            var options = parseArguments.apply(null, arguments);
	            options.dataType = "json";
	            return $.ajax(options);
	        };

	        $.fn.load = function (url, data, success) {
	            if (!this.length) return this;
	            var self = this,
	                parts = url.split(/\s/),
	                selector,
	                options = parseArguments(url, data, success),
	                callback = options.success;
	            if (parts.length > 1) options.url = parts[0], selector = parts[1];
	            options.success = function (response) {
	                self.html(selector ? $("<div>").html(response.replace(rscript, "")).find(selector) : response);
	                callback && callback.apply(self, arguments);
	            };
	            $.ajax(options);
	            return this;
	        };

	        var escape = encodeURIComponent;

	        function serialize(params, obj, traditional, scope) {
	            var type,
	                array = $.isArray(obj),
	                hash = $.isPlainObject(obj);
	            $.each(obj, function (key, value) {
	                type = $.type(value);
	                if (scope) key = traditional ? scope : scope + "[" + (hash || type == "object" || type == "array" ? key : "") + "]";
	                // handle data in serializeArray() format
	                if (!scope && array) params.add(value.name, value.value);else if (type == "array" || !traditional && type == "object") serialize(params, value, traditional, key);else params.add(key, value);
	            });
	        }

	        $.param = function (obj, traditional) {
	            var params = [];
	            params.add = function (key, value) {
	                if ($.isFunction(value)) value = value();
	                if (value == null) value = "";
	                this.push(escape(key) + "=" + escape(value));
	            };
	            serialize(params, obj, traditional);
	            return params.join("&").replace(/%20/g, "+");
	        };
	    })(Zepto);(function ($) {
	        $.fn.serializeArray = function () {
	            var name,
	                type,
	                result = [],
	                add = (function (_add) {
	                var _addWrapper = function add(_x) {
	                    return _add.apply(this, arguments);
	                };

	                _addWrapper.toString = function () {
	                    return _add.toString();
	                };

	                return _addWrapper;
	            })(function (value) {
	                if (value.forEach) return value.forEach(add);
	                result.push({ name: name, value: value });
	            });
	            if (this[0]) $.each(this[0].elements, function (_, field) {
	                type = field.type, name = field.name;
	                if (name && field.nodeName.toLowerCase() != "fieldset" && !field.disabled && type != "submit" && type != "reset" && type != "button" && type != "file" && (type != "radio" && type != "checkbox" || field.checked)) add($(field).val());
	            });
	            return result;
	        };

	        $.fn.serialize = function () {
	            var result = [];
	            this.serializeArray().forEach(function (elm) {
	                result.push(encodeURIComponent(elm.name) + "=" + encodeURIComponent(elm.value));
	            });
	            return result.join("&");
	        };

	        $.fn.submit = function (callback) {
	            if (0 in arguments) this.bind("submit", callback);else if (this.length) {
	                var event = $.Event("submit");
	                this.eq(0).trigger(event);
	                if (!event.isDefaultPrevented()) this.get(0).submit();
	            }
	            return this;
	        };
	    })(Zepto);(function () {
	        // getComputedStyle shouldn't freak out when called
	        // without a valid element as argument
	        try {
	            getComputedStyle(undefined);
	        } catch (e) {
	            var nativeGetComputedStyle = getComputedStyle;
	            window.getComputedStyle = function (element, pseudoElement) {
	                try {
	                    return nativeGetComputedStyle(element, pseudoElement);
	                } catch (e) {
	                    return null;
	                }
	            };
	        }
	    })();
	    return Zepto;
	});
	// Safari DocumentFragment doesn't have getElementById

	// items in the collection might not be DOM elements
	/* url, data, success, dataType */ /* url, data, success, dataType */ /* url, data, success */
	// recurse into nested objects

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/hill/works/ipe/ipe-airindex/node_modules/css-loader/index.js!/Users/hill/works/ipe/ipe-airindex/node_modules/autoprefixer-loader/index.js!/Users/hill/works/ipe/ipe-airindex/src/css/normalize.css", function() {
			var newContent = require("!!/Users/hill/works/ipe/ipe-airindex/node_modules/css-loader/index.js!/Users/hill/works/ipe/ipe-airindex/node_modules/autoprefixer-loader/index.js!/Users/hill/works/ipe/ipe-airindex/src/css/normalize.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, "/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\nhtml {\n    font-family: sans-serif; /* 1 */\n    line-height: 1.15; /* 2 */\n    -ms-text-size-adjust: 100%; /* 3 */\n    -webkit-text-size-adjust: 100%; /* 3 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n    margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n    display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n    display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n    margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n    background-color: transparent; /* 1 */\n    -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n    outline-width: 0;\n}\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n    font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n    font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n    font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n    background-color: #ff0;\n    color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n    font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n}\n\nsub {\n    bottom: -0.25em;\n}\n\nsup {\n    top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n    display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n    display: none;\n    height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n    border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n    overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    font-family: sans-serif; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n    overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n    text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n    -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n    border: 1px solid #c0c0c0;\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n    display: inline-block; /* 1 */\n    vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n    overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n    display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n    display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n    display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n    display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n    display: none;\n}", ""]);

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function() {
		var list = [];
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
		return list;
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isIE9 = memoize(function() {
			return /msie 9\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isIE9();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function () {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	function replaceText(source, id, replacement) {
		var boundaries = ["/** >>" + id + " **/", "/** " + id + "<< **/"];
		var start = source.lastIndexOf(boundaries[0]);
		var wrappedReplacement = replacement
			? (boundaries[0] + replacement + boundaries[1])
			: "";
		if (source.lastIndexOf(boundaries[0]) >= 0) {
			var end = source.lastIndexOf(boundaries[1]) + boundaries[1].length;
			return source.slice(0, start) + wrappedReplacement + source.slice(end);
		} else {
			return source + wrappedReplacement;
		}
	}

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(styleElement.styleSheet.cssText, index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap && typeof btoa === "function") {
			try {
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
				css = "@import url(\"data:text/css;base64," + btoa(css) + "\")";
			} catch(e) {}
		}

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	exports.urlGet = urlGet;
	exports.requestAnimationFrame = requestAnimationFrame;
	exports.noop = noop;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function urlGet() {
	    var aQuery = window.location.href.split("?"); //取得Get参数
	    var aGET = new Array();
	    if (aQuery.length > 1) {
	        var aBuf = aQuery[1].split("&");
	        for (var i = 0, iLoop = aBuf.length; i < iLoop; i++) {
	            var aTmp = aBuf[i].split("="); //分离key与Value
	            aGET[aTmp[0]] = aTmp[1];
	        }
	    }
	    return aGET;
	}

	function requestAnimationFrame() {
	    return typeof window !== "undefined" && (window.requestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function (func) {
	        setTimeout(func, 16);
	    };
	}

	function noop() {}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	/**
	 * 动画主类
	 */

	var _util = __webpack_require__(7);

	var requestAnimationFrame = _util.requestAnimationFrame;
	var noop = _util.noop;

	var easing = _interopRequire(__webpack_require__(9));

	/**
	 * @typedef {Object} IZRenderStage
	 * @property {Function} update
	 */

	var Animation = function Animation(options) {
	    options = options || {};
	    this.onframe = options.onframe || noop;
	    this._totalTime = options.totalTime;
	    this._easyFunc = options.easeFunc || easing.linear;
	    this._doneBack = options.doneBack || noop;
	    this._running = false;
	    this._time = null;
	};

	Animation.prototype = {

	    _update: function _update() {
	        var now = new Date().getTime();
	        var delta = now - this._time;
	        var percent = delta / this._totalTime;
	        this.onframe(this._easyFunc(percent));
	        if (percent >= 1) {
	            this.stop();
	            this._doneBack();
	        }
	    },

	    _startLoop: function _startLoop() {
	        var self = this;
	        this._running = true;
	        function step() {
	            if (self._running) {
	                requestAnimationFrame()(step);
	                self._update();
	            }
	        }

	        requestAnimationFrame()(step);
	    }

	    /**
	     * 开始运行动画
	     */
	    , start: function start() {
	        this._time = new Date().getTime();
	        this._startLoop();
	    }

	    /**
	     * 停止运行动画
	     */
	    , stop: function stop() {
	        this._running = false;
	    }
	};

	module.exports = Animation;

/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * 缓动
	 */
	"use strict";

	module.exports = {
	    /**
	     * @param {number} k
	     * @return {number}
	     */
	    linear: function linear(k) {
	        return k;
	    },

	    /**
	     * @param {number} k
	     * @return {number}
	     */
	    quadraticIn: function quadraticIn(k) {
	        return k * k;
	    },
	    /**
	     * @param {number} k
	     * @return {number}
	     */
	    quadraticOut: function quadraticOut(k) {
	        return k * (2 - k);
	    },
	    /**
	     * @param {number} k
	     * @return {number}
	     */
	    quadraticInOut: function quadraticInOut(k) {
	        if ((k *= 2) < 1) {
	            return 0.5 * k * k;
	        }
	        return -0.5 * (--k * (k - 2) - 1);
	    },

	    // 三次方的缓动（t^3）
	    /**
	     * @param {number} k
	     * @return {number}
	     */
	    cubicIn: function cubicIn(k) {
	        return k * k * k;
	    },
	    /**
	     * @param {number} k
	     * @return {number}
	     */
	    cubicOut: function cubicOut(k) {
	        return --k * k * k + 1;
	    },
	    /**
	     * @param {number} k
	     * @return {number}
	     */
	    cubicInOut: function cubicInOut(k) {
	        if ((k *= 2) < 1) {
	            return 0.5 * k * k * k;
	        }
	        return 0.5 * ((k -= 2) * k * k + 2);
	    },

	    // 四次方的缓动（t^4）
	    /**
	     * @param {number} k
	     * @return {number}
	     */
	    quarticIn: function quarticIn(k) {
	        return k * k * k * k;
	    },
	    /**
	     * @param {number} k
	     * @return {number}
	     */
	    quarticOut: function quarticOut(k) {
	        return 1 - --k * k * k * k;
	    },
	    /**
	     * @param {number} k
	     * @return {number}
	     */
	    quarticInOut: function quarticInOut(k) {
	        if ((k *= 2) < 1) {
	            return 0.5 * k * k * k * k;
	        }
	        return -0.5 * ((k -= 2) * k * k * k - 2);
	    },

	    // 五次方的缓动（t^5）
	    /**
	     * @param {number} k
	     * @return {number}
	     */
	    quinticIn: function quinticIn(k) {
	        return k * k * k * k * k;
	    },
	    /**
	     * @param {number} k
	     * @return {number}
	     */
	    quinticOut: function quinticOut(k) {
	        return --k * k * k * k * k + 1;
	    },
	    /**
	     * @param {number} k
	     * @return {number}
	     */
	    quinticInOut: function quinticInOut(k) {
	        if ((k *= 2) < 1) {
	            return 0.5 * k * k * k * k * k;
	        }
	        return 0.5 * ((k -= 2) * k * k * k * k + 2);
	    },

	    // 正弦曲线的缓动（sin(t)）
	    /**
	     * @param {number} k
	     * @return {number}
	     */
	    sinusoidalIn: function sinusoidalIn(k) {
	        return 1 - Math.cos(k * Math.PI / 2);
	    },
	    /**
	     * @param {number} k
	     * @return {number}
	     */
	    sinusoidalOut: function sinusoidalOut(k) {
	        return Math.sin(k * Math.PI / 2);
	    },
	    /**
	     * @param {number} k
	     * @return {number}
	     */
	    sinusoidalInOut: function sinusoidalInOut(k) {
	        return 0.5 * (1 - Math.cos(Math.PI * k));
	    },

	    // 指数曲线的缓动（2^t）
	    /**
	     * @param {number} k
	     * @return {number}
	     */
	    exponentialIn: function exponentialIn(k) {
	        return k === 0 ? 0 : Math.pow(1024, k - 1);
	    },
	    /**
	     * @param {number} k
	     * @return {number}
	     */
	    exponentialOut: function exponentialOut(k) {
	        return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
	    },
	    /**
	     * @param {number} k
	     * @return {number}
	     */
	    exponentialInOut: function exponentialInOut(k) {
	        if (k === 0) {
	            return 0;
	        }
	        if (k === 1) {
	            return 1;
	        }
	        if ((k *= 2) < 1) {
	            return 0.5 * Math.pow(1024, k - 1);
	        }
	        return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
	    },

	    // 圆形曲线的缓动（sqrt(1-t^2)）
	    /**
	     * @param {number} k
	     * @return {number}
	     */
	    circularIn: function circularIn(k) {
	        return 1 - Math.sqrt(1 - k * k);
	    },
	    /**
	     * @param {number} k
	     * @return {number}
	     */
	    circularOut: function circularOut(k) {
	        return Math.sqrt(1 - --k * k);
	    },
	    /**
	     * @param {number} k
	     * @return {number}
	     */
	    circularInOut: function circularInOut(k) {
	        if ((k *= 2) < 1) {
	            return -0.5 * (Math.sqrt(1 - k * k) - 1);
	        }
	        return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
	    },

	    // 创建类似于弹簧在停止前来回振荡的动画
	    /**
	     * @param {number} k
	     * @return {number}
	     */
	    elasticIn: function elasticIn(k) {
	        var s;
	        var a = 0.1;
	        var p = 0.4;
	        if (k === 0) {
	            return 0;
	        }
	        if (k === 1) {
	            return 1;
	        }
	        if (!a || a < 1) {
	            a = 1;
	            s = p / 4;
	        } else {
	            s = p * Math.asin(1 / a) / (2 * Math.PI);
	        }
	        return -(a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
	    },
	    /**
	     * @param {number} k
	     * @return {number}
	     */
	    elasticOut: function elasticOut(k) {
	        var s;
	        var a = 0.1;
	        var p = 0.4;
	        if (k === 0) {
	            return 0;
	        }
	        if (k === 1) {
	            return 1;
	        }
	        if (!a || a < 1) {
	            a = 1;
	            s = p / 4;
	        } else {
	            s = p * Math.asin(1 / a) / (2 * Math.PI);
	        }
	        return a * Math.pow(2, -10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1;
	    },
	    /**
	     * @param {number} k
	     * @return {number}
	     */
	    elasticInOut: function elasticInOut(k) {
	        var s;
	        var a = 0.1;
	        var p = 0.4;
	        if (k === 0) {
	            return 0;
	        }
	        if (k === 1) {
	            return 1;
	        }
	        if (!a || a < 1) {
	            a = 1;
	            s = p / 4;
	        } else {
	            s = p * Math.asin(1 / a) / (2 * Math.PI);
	        }
	        if ((k *= 2) < 1) {
	            return -0.5 * (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
	        }
	        return a * Math.pow(2, -10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;
	    },

	    // 在某一动画开始沿指示的路径进行动画处理前稍稍收回该动画的移动
	    /**
	     * @param {number} k
	     * @return {number}
	     */
	    backIn: function backIn(k) {
	        var s = 1.70158;
	        return k * k * ((s + 1) * k - s);
	    },
	    /**
	     * @param {number} k
	     * @return {number}
	     */
	    backOut: function backOut(k) {
	        var s = 1.70158;
	        return --k * k * ((s + 1) * k + s) + 1;
	    },
	    /**
	     * @param {number} k
	     * @return {number}
	     */
	    backInOut: function backInOut(k) {
	        var s = 1.70158 * 1.525;
	        if ((k *= 2) < 1) {
	            return 0.5 * (k * k * ((s + 1) * k - s));
	        }
	        return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
	    },

	    // 创建弹跳效果
	    /**
	     * @param {number} k
	     * @return {number}
	     */
	    bounceIn: function bounceIn(k) {
	        return 1 - easing.bounceOut(1 - k);
	    },
	    /**
	     * @param {number} k
	     * @return {number}
	     */
	    bounceOut: function bounceOut(k) {
	        if (k < 1 / 2.75) {
	            return 7.5625 * k * k;
	        } else if (k < 2 / 2.75) {
	            return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
	        } else if (k < 2.5 / 2.75) {
	            return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
	        } else {
	            return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
	        }
	    },
	    /**
	     * @param {number} k
	     * @return {number}
	     */
	    bounceInOut: function bounceInOut(k) {
	        if (k < 0.5) {
	            return easing.bounceIn(k * 2) * 0.5;
	        }
	        return easing.bounceOut(k * 2 - 1) * 0.5 + 0.5;
	    }
	};

/***/ }
/******/ ]);