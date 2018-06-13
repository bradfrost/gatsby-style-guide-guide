webpackJsonp([197443006584227],{

/***/ "./ds-components/Button/Button.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__("./node_modules/react/index.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Button = function Button(_ref) {
		var text = _ref.text,
		    styleModifier = _ref.styleModifier;
	
		return _react2.default.createElement(
			"button",
			{ className: "c-btn " + styleModifier },
			text
		);
	};
	
	exports.default = Button;
	module.exports = exports["default"];

/***/ }),

/***/ "./ds-components/Button/examples/ButtonExamplePrimary.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__("./node_modules/react/index.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Button = __webpack_require__("./ds-components/Button/Button.js");
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ButtonExamplePrimary = function ButtonExamplePrimary() {
		return _react2.default.createElement(
			"div",
			null,
			_react2.default.createElement(_Button2.default, { text: "Button Text" })
		);
	};
	
	exports.default = ButtonExamplePrimary;
	module.exports = exports["default"];

/***/ }),

/***/ "./ds-components/Button/examples/ButtonExampleSmall.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__("./node_modules/react/index.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Button = __webpack_require__("./ds-components/Button/Button.js");
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ButtonExampleSmall = function ButtonExampleSmall() {
		return _react2.default.createElement(
			"div",
			null,
			_react2.default.createElement(_Button2.default, { text: "Button Text", styleModifier: "c-btn--small" })
		);
	};
	
	exports.default = ButtonExampleSmall;
	module.exports = exports["default"];

/***/ }),

/***/ "./ds-components/Card/Card.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__("./node_modules/react/index.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Card = function Card(_ref) {
		var header = _ref.header,
		    href = _ref.href,
		    title = _ref.title,
		    description = _ref.description,
		    cardImg = _ref.cardImg,
		    cardImgAlt = _ref.cardImgAlt,
		    footer = _ref.footer;
	
		return _react2.default.createElement(
			"a",
			{ href: href, className: "c-card" },
			header && _react2.default.createElement(
				"header",
				{ className: "c-card__header" },
				header
			),
			_react2.default.createElement(
				"div",
				{ className: "c-card__body" },
				_react2.default.createElement(
					"h2",
					{ className: "c-card__title" },
					_react2.default.createElement(
						"span",
						{ className: "c-card__title-text" },
						title
					)
				),
				description && _react2.default.createElement(
					"div",
					{ className: "c-card__desc" },
					" ",
					description,
					" "
				)
			),
			footer && _react2.default.createElement(
				"div",
				{ className: "c-card__footer" },
				footer
			)
		);
	};
	
	exports.default = Card;
	module.exports = exports["default"];

/***/ }),

/***/ "./ds-components/Card/examples/CardExample.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__("./node_modules/react/index.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Card = __webpack_require__("./ds-components/Card/Card.js");
	
	var _Card2 = _interopRequireDefault(_Card);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CardExample = function CardExample() {
		return _react2.default.createElement(
			"div",
			null,
			_react2.default.createElement(_Card2.default, {
				header: "Card Header",
				href: "#",
				title: "Card Title",
				description: "Lorem ipsum dolo sit amet, consectetur adipiscing elit. Praesent lobrtis neque in quam tempus aliquam.",
				key: "card-1",
				footer: "Card Footer"
			})
		);
	};
	
	exports.default = CardExample;
	module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-element-to-jsx-string/dist/cjs/index.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }
	
	var React = __webpack_require__("./node_modules/react/index.js");
	var React__default = _interopDefault(React);
	
	var spacer = (function (times, tabStop) {
	  if (times === 0) {
	    return '';
	  }
	
	  return new Array(times * tabStop).fill(' ').join('');
	});
	
	/*!
	 * isobject <https://github.com/jonschlinkert/isobject>
	 *
	 * Copyright (c) 2014-2017, Jon Schlinkert.
	 * Released under the MIT License.
	 */
	
	var isobject = function isObject(val) {
	  return val != null && typeof val === 'object' && Array.isArray(val) === false;
	};
	
	function isObjectObject(o) {
	  return isobject(o) === true
	    && Object.prototype.toString.call(o) === '[object Object]';
	}
	
	var isPlainObject = function isPlainObject(o) {
	  var ctor,prot;
	
	  if (isObjectObject(o) === false) return false;
	
	  // If has modified constructor
	  ctor = o.constructor;
	  if (typeof ctor !== 'function') return false;
	
	  // If has modified prototype
	  prot = ctor.prototype;
	  if (isObjectObject(prot) === false) return false;
	
	  // If constructor does not have an Object-specific method
	  if (prot.hasOwnProperty('isPrototypeOf') === false) {
	    return false;
	  }
	
	  // Most likely a plain Object
	  return true;
	};
	
	var isRegexp = function (re) {
		return Object.prototype.toString.call(re) === '[object RegExp]';
	};
	
	var isObj = function (x) {
		var type = typeof x;
		return x !== null && (type === 'object' || type === 'function');
	};
	
	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}
	
	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}
	
	var lib = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = function (object) { return Object
	    .getOwnPropertySymbols(object)
	    .filter(function (keySymbol) { return object.propertyIsEnumerable(keySymbol); }); };
	
	});
	
	unwrapExports(lib);
	
	const getOwnEnumPropSymbols = lib.default;
	
	var stringifyObject = (val, opts, pad) => {
		const seen = [];
	
		return (function stringify(val, opts, pad) {
			opts = opts || {};
			opts.indent = opts.indent || '\t';
			pad = pad || '';
	
			let tokens;
	
			if (opts.inlineCharacterLimit === undefined) {
				tokens = {
					newLine: '\n',
					newLineOrSpace: '\n',
					pad,
					indent: pad + opts.indent
				};
			} else {
				tokens = {
					newLine: '@@__STRINGIFY_OBJECT_NEW_LINE__@@',
					newLineOrSpace: '@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@',
					pad: '@@__STRINGIFY_OBJECT_PAD__@@',
					indent: '@@__STRINGIFY_OBJECT_INDENT__@@'
				};
			}
	
			const expandWhiteSpace = string => {
				if (opts.inlineCharacterLimit === undefined) {
					return string;
				}
	
				const oneLined = string
					.replace(new RegExp(tokens.newLine, 'g'), '')
					.replace(new RegExp(tokens.newLineOrSpace, 'g'), ' ')
					.replace(new RegExp(tokens.pad + '|' + tokens.indent, 'g'), '');
	
				if (oneLined.length <= opts.inlineCharacterLimit) {
					return oneLined;
				}
	
				return string
					.replace(new RegExp(tokens.newLine + '|' + tokens.newLineOrSpace, 'g'), '\n')
					.replace(new RegExp(tokens.pad, 'g'), pad)
					.replace(new RegExp(tokens.indent, 'g'), pad + opts.indent);
			};
	
			if (seen.indexOf(val) !== -1) {
				return '"[Circular]"';
			}
	
			if (val === null ||
				val === undefined ||
				typeof val === 'number' ||
				typeof val === 'boolean' ||
				typeof val === 'function' ||
				typeof val === 'symbol' ||
				isRegexp(val)) {
				return String(val);
			}
	
			if (val instanceof Date) {
				return `new Date('${val.toISOString()}')`;
			}
	
			if (Array.isArray(val)) {
				if (val.length === 0) {
					return '[]';
				}
	
				seen.push(val);
	
				const ret = '[' + tokens.newLine + val.map((el, i) => {
					const eol = val.length - 1 === i ? tokens.newLine : ',' + tokens.newLineOrSpace;
					let value = stringify(el, opts, pad + opts.indent);
					if (opts.transform) {
						value = opts.transform(val, i, value);
					}
					return tokens.indent + value + eol;
				}).join('') + tokens.pad + ']';
	
				seen.pop(val);
	
				return expandWhiteSpace(ret);
			}
	
			if (isObj(val)) {
				let objKeys = Object.keys(val).concat(getOwnEnumPropSymbols(val));
	
				if (opts.filter) {
					objKeys = objKeys.filter(el => opts.filter(val, el));
				}
	
				if (objKeys.length === 0) {
					return '{}';
				}
	
				seen.push(val);
	
				const ret = '{' + tokens.newLine + objKeys.map((el, i) => {
					const eol = objKeys.length - 1 === i ? tokens.newLine : ',' + tokens.newLineOrSpace;
					const isSymbol = typeof el === 'symbol';
					const isClassic = !isSymbol && /^[a-z$_][a-z$_0-9]*$/i.test(el);
					const key = isSymbol || isClassic ? el : stringify(el, opts);
					let value = stringify(val[el], opts, pad + opts.indent);
					if (opts.transform) {
						value = opts.transform(val, el, value);
					}
					return tokens.indent + String(key) + ': ' + value + eol;
				}).join('') + tokens.pad + '}';
	
				seen.pop(val);
	
				return expandWhiteSpace(ret);
			}
	
			val = String(val).replace(/[\r\n]/g, x => x === '\n' ? '\\n' : '\\r');
	
			if (opts.singleQuotes === false) {
				val = val.replace(/"/g, '\\"');
				return `"${val}"`;
			}
	
			val = val.replace(/\\?'/g, '\\\'');
			return `'${val}'`;
		})(val, opts, pad);
	};
	
	function sortObject(value) {
	  // return non-object value as is
	  if (value === null || (typeof value === 'undefined' ? 'undefined' : babelHelpers.typeof(value)) !== 'object') {
	    return value;
	  }
	
	  // return date and regexp values as is
	  if (value instanceof Date || value instanceof RegExp) {
	    return value;
	  }
	
	  // make a copy of array with each item passed through sortObject()
	  if (Array.isArray(value)) {
	    return value.map(sortObject);
	  }
	
	  // make a copy of object with key sorted
	  return Object.keys(value).sort().reduce(function (result, key) {
	    // eslint-disable-next-line no-param-reassign
	    result[key] = sortObject(value[key]);
	    return result;
	  }, {});
	}
	
	/* eslint-disable no-use-before-define */
	
	var createStringTreeNode = function createStringTreeNode(value) {
	  return {
	    type: 'string',
	    value: value
	  };
	};
	
	var createNumberTreeNode = function createNumberTreeNode(value) {
	  return {
	    type: 'number',
	    value: value
	  };
	};
	
	var createReactElementTreeNode = function createReactElementTreeNode(displayName, props, defaultProps, childrens) {
	  return {
	    type: 'ReactElement',
	    displayName: displayName,
	    props: props,
	    defaultProps: defaultProps,
	    childrens: childrens
	  };
	};
	
	var createReactFragmentTreeNode = function createReactFragmentTreeNode(key, childrens) {
	  return {
	    type: 'ReactFragment',
	    key: key,
	    childrens: childrens
	  };
	};
	
	var supportFragment = Boolean(React.Fragment);
	
	var getReactElementDisplayName = function getReactElementDisplayName(element) {
	  return element.type.displayName || element.type.name || ( // function name
	  typeof element.type === 'function' // function without a name, you should provide one
	  ? 'No Display Name' : element.type);
	};
	
	var noChildren = function noChildren(propsValue, propName) {
	  return propName !== 'children';
	};
	
	var onlyMeaningfulChildren = function onlyMeaningfulChildren(children) {
	  return children !== true && children !== false && children !== null && children !== '';
	};
	
	var filterProps = function filterProps(originalProps, cb) {
	  var filteredProps = {};
	
	  Object.keys(originalProps).filter(function (key) {
	    return cb(originalProps[key], key);
	  }).forEach(function (key) {
	    return filteredProps[key] = originalProps[key];
	  });
	
	  return filteredProps;
	};
	
	var parseReactElement = function parseReactElement(element, options) {
	  var _options$displayName = options.displayName,
	      displayNameFn = _options$displayName === undefined ? getReactElementDisplayName : _options$displayName;
	
	
	  if (typeof element === 'string') {
	    return createStringTreeNode(element);
	  } else if (typeof element === 'number') {
	    return createNumberTreeNode(element);
	  } else if (!React__default.isValidElement(element)) {
	    throw new Error('react-element-to-jsx-string: Expected a React.Element, got `' + (typeof element === 'undefined' ? 'undefined' : babelHelpers.typeof(element)) + '`');
	  }
	
	  var displayName = displayNameFn(element);
	
	  var props = filterProps(element.props, noChildren);
	  if (element.ref !== null) {
	    props.ref = element.ref;
	  }
	
	  var key = element.key;
	  if (typeof key === 'string' && key.search(/^\./)) {
	    // React automatically add key=".X" when there are some children
	    props.key = key;
	  }
	
	  var defaultProps = filterProps(element.type.defaultProps || {}, noChildren);
	  var childrens = React__default.Children.toArray(element.props.children).filter(onlyMeaningfulChildren).map(function (child) {
	    return parseReactElement(child, options);
	  });
	
	  if (supportFragment && element.type === React.Fragment) {
	    return createReactFragmentTreeNode(key, childrens);
	  }
	
	  return createReactElementTreeNode(displayName, props, defaultProps, childrens);
	};
	
	function noRefCheck() {}
	
	var formatComplexDataStructure = (function (value, inline, lvl, options) {
	  var normalizedValue = sortObject(value);
	
	  var stringifiedValue = stringifyObject(normalizedValue, {
	    transform: function transform(currentObj, prop, originalResult) {
	      var currentValue = currentObj[prop];
	
	      if (currentValue && React.isValidElement(currentValue)) {
	        return formatTreeNode(parseReactElement(currentValue, options), true, lvl, options);
	      }
	
	      if (typeof currentValue === 'function') {
	        return noRefCheck;
	      }
	
	      return originalResult;
	    }
	  });
	
	  if (inline) {
	    return stringifiedValue.replace(/\s+/g, ' ').replace(/{ /g, '{').replace(/ }/g, '}').replace(/\[ /g, '[').replace(/ ]/g, ']');
	  }
	
	  // Replace tabs with spaces, and add necessary indentation in front of each new line
	  return stringifiedValue.replace(/\t/g, spacer(1, options.tabStop)).replace(/\n([^$])/g, '\n' + spacer(lvl + 1, options.tabStop) + '$1');
	});
	
	var noRefCheck$1 = function noRefCheck() {};
	var escape = function escape(s) {
	  return s.replace(/"/g, '&quot;');
	};
	
	var defaultFunctionValue = function defaultFunctionValue(fn) {
	  return fn;
	};
	
	var formatPropValue = function formatPropValue(propValue, inline, lvl, options) {
	  if (typeof propValue === 'number') {
	    return '{' + String(propValue) + '}';
	  }
	
	  if (typeof propValue === 'string') {
	    return '"' + escape(propValue) + '"';
	  }
	
	  // > "Symbols (new in ECMAScript 2015, not yet supported in Flow)"
	  // @see: https://flow.org/en/docs/types/primitives/
	  // $FlowFixMe: Flow does not support Symbol
	  if ((typeof propValue === 'undefined' ? 'undefined' : babelHelpers.typeof(propValue)) === 'symbol') {
	    var symbolDescription = propValue.valueOf().toString().replace(/Symbol\((.*)\)/, '$1');
	
	    if (!symbolDescription) {
	      return '{Symbol()}';
	    }
	
	    return '{Symbol(\'' + symbolDescription + '\')}';
	  }
	
	  if (typeof propValue === 'function') {
	    var _options$functionValu = options.functionValue,
	        functionValue = _options$functionValu === undefined ? defaultFunctionValue : _options$functionValu,
	        showFunctions = options.showFunctions;
	
	    if (!showFunctions && functionValue === defaultFunctionValue) {
	      return '{' + functionValue(noRefCheck$1) + '}';
	    }
	
	    return '{' + functionValue(propValue) + '}';
	  }
	
	  if (React.isValidElement(propValue)) {
	    return '{' + formatTreeNode(parseReactElement(propValue, options), true, lvl, options) + '}';
	  }
	
	  if (propValue instanceof Date) {
	    return '{new Date("' + propValue.toISOString() + '")}';
	  }
	
	  if (isPlainObject(propValue) || Array.isArray(propValue)) {
	    return '{' + formatComplexDataStructure(propValue, inline, lvl, options) + '}';
	  }
	
	  return '{' + String(propValue) + '}';
	};
	
	var formatProp = (function (name, hasValue, value, hasDefaultValue, defaultValue, inline, lvl, options) {
	  if (!hasValue && !hasDefaultValue) {
	    throw new Error('The prop "' + name + '" has no value and no default: could not be formatted');
	  }
	
	  var usedValue = hasValue ? value : defaultValue;
	
	  var useBooleanShorthandSyntax = options.useBooleanShorthandSyntax,
	      tabStop = options.tabStop;
	
	
	  var formattedPropValue = formatPropValue(usedValue, inline, lvl, options);
	
	  var attributeFormattedInline = ' ';
	  var attributeFormattedMultiline = '\n' + spacer(lvl + 1, tabStop);
	  var isMultilineAttribute = formattedPropValue.includes('\n');
	
	  if (useBooleanShorthandSyntax && formattedPropValue === '{false}' && !hasDefaultValue) {
	    // If a boolean is false and not different from it's default, we do not render the attribute
	    attributeFormattedInline = '';
	    attributeFormattedMultiline = '';
	  } else if (useBooleanShorthandSyntax && formattedPropValue === '{true}') {
	    attributeFormattedInline += '' + name;
	    attributeFormattedMultiline += '' + name;
	  } else {
	    attributeFormattedInline += name + '=' + formattedPropValue;
	    attributeFormattedMultiline += name + '=' + formattedPropValue;
	  }
	
	  return {
	    attributeFormattedInline: attributeFormattedInline,
	    attributeFormattedMultiline: attributeFormattedMultiline,
	    isMultilineAttribute: isMultilineAttribute
	  };
	});
	
	var mergeSiblingPlainStringChildrenReducer = (function (previousNodes, currentNode) {
	  var nodes = previousNodes.slice(0, previousNodes.length > 0 ? previousNodes.length - 1 : 0);
	  var previousNode = previousNodes[previousNodes.length - 1];
	
	  if (previousNode && (currentNode.type === 'string' || currentNode.type === 'number') && (previousNode.type === 'string' || previousNode.type === 'number')) {
	    nodes.push(createStringTreeNode(String(previousNode.value) + String(currentNode.value)));
	  } else {
	    if (previousNode) {
	      nodes.push(previousNode);
	    }
	
	    nodes.push(currentNode);
	  }
	
	  return nodes;
	});
	
	var propNameSorter = (function (sortProps) {
	  return function (a, b) {
	    if (a === b) {
	      return 0;
	    }
	
	    if (['key', 'ref'].includes(a)) {
	      return -1;
	    } else if (['key', 'ref'].includes(b)) {
	      return 1;
	    }
	
	    if (!sortProps) {
	      return 0;
	    }
	
	    return a < b ? -1 : 1;
	  };
	});
	
	var compensateMultilineStringElementIndentation = function compensateMultilineStringElementIndentation(element, formattedElement, inline, lvl, options) {
	  var tabStop = options.tabStop;
	
	
	  if (element.type === 'string') {
	    return formattedElement.split('\n').map(function (line, offset) {
	      if (offset === 0) {
	        return line;
	      }
	
	      return '' + spacer(lvl, tabStop) + line;
	    }).join('\n');
	  }
	
	  return formattedElement;
	};
	
	var formatOneChildren = function formatOneChildren(inline, lvl, options) {
	  return function (element) {
	    return compensateMultilineStringElementIndentation(element, formatTreeNode(element, inline, lvl, options), inline, lvl, options);
	  };
	};
	
	var onlyPropsWithOriginalValue = function onlyPropsWithOriginalValue(defaultProps, props) {
	  return function (propName) {
	    var haveDefaultValue = Object.keys(defaultProps).includes(propName);
	    return !haveDefaultValue || haveDefaultValue && defaultProps[propName] !== props[propName];
	  };
	};
	
	var isInlineAttributeTooLong = function isInlineAttributeTooLong(attributes, inlineAttributeString, lvl, tabStop, maxInlineAttributesLineLength) {
	  if (!maxInlineAttributesLineLength) {
	    return attributes.length > 1;
	  }
	
	  return spacer(lvl, tabStop).length + inlineAttributeString.length > maxInlineAttributesLineLength;
	};
	
	var shouldRenderMultilineAttr = function shouldRenderMultilineAttr(attributes, inlineAttributeString, containsMultilineAttr, inline, lvl, tabStop, maxInlineAttributesLineLength) {
	  return (isInlineAttributeTooLong(attributes, inlineAttributeString, lvl, tabStop, maxInlineAttributesLineLength) || containsMultilineAttr) && !inline;
	};
	
	var formatReactElementNode = (function (node, inline, lvl, options) {
	  var type = node.type,
	      _node$displayName = node.displayName,
	      displayName = _node$displayName === undefined ? '' : _node$displayName,
	      childrens = node.childrens,
	      _node$props = node.props,
	      props = _node$props === undefined ? {} : _node$props,
	      _node$defaultProps = node.defaultProps,
	      defaultProps = _node$defaultProps === undefined ? {} : _node$defaultProps;
	
	
	  if (type !== 'ReactElement') {
	    throw new Error('The "formatReactElementNode" function could only format node of type "ReactElement". Given:  ' + type);
	  }
	
	  var filterProps = options.filterProps,
	      maxInlineAttributesLineLength = options.maxInlineAttributesLineLength,
	      showDefaultProps = options.showDefaultProps,
	      sortProps = options.sortProps,
	      tabStop = options.tabStop;
	
	
	  var out = '<' + displayName;
	
	  var outInlineAttr = out;
	  var outMultilineAttr = out;
	  var containsMultilineAttr = false;
	
	  var visibleAttributeNames = [];
	
	  Object.keys(props).filter(function (propName) {
	    return filterProps.indexOf(propName) === -1;
	  }).filter(onlyPropsWithOriginalValue(defaultProps, props)).forEach(function (propName) {
	    return visibleAttributeNames.push(propName);
	  });
	
	  Object.keys(defaultProps).filter(function (defaultPropName) {
	    return filterProps.indexOf(defaultPropName) === -1;
	  }).filter(function () {
	    return showDefaultProps;
	  }).filter(function (defaultPropName) {
	    return !visibleAttributeNames.includes(defaultPropName);
	  }).forEach(function (defaultPropName) {
	    return visibleAttributeNames.push(defaultPropName);
	  });
	
	  var attributes = visibleAttributeNames.sort(propNameSorter(sortProps));
	
	  attributes.forEach(function (attributeName) {
	    var _formatProp = formatProp(attributeName, Object.keys(props).includes(attributeName), props[attributeName], Object.keys(defaultProps).includes(attributeName), defaultProps[attributeName], inline, lvl, options),
	        attributeFormattedInline = _formatProp.attributeFormattedInline,
	        attributeFormattedMultiline = _formatProp.attributeFormattedMultiline,
	        isMultilineAttribute = _formatProp.isMultilineAttribute;
	
	    if (isMultilineAttribute) {
	      containsMultilineAttr = true;
	    }
	
	    outInlineAttr += attributeFormattedInline;
	    outMultilineAttr += attributeFormattedMultiline;
	  });
	
	  outMultilineAttr += '\n' + spacer(lvl, tabStop);
	
	  if (shouldRenderMultilineAttr(attributes, outInlineAttr, containsMultilineAttr, inline, lvl, tabStop, maxInlineAttributesLineLength)) {
	    out = outMultilineAttr;
	  } else {
	    out = outInlineAttr;
	  }
	
	  if (childrens && childrens.length > 0) {
	    var newLvl = lvl + 1;
	
	    out += '>';
	
	    if (!inline) {
	      out += '\n';
	      out += spacer(newLvl, tabStop);
	    }
	
	    out += childrens.reduce(mergeSiblingPlainStringChildrenReducer, []).map(formatOneChildren(inline, newLvl, options)).join(!inline ? '\n' + spacer(newLvl, tabStop) : '');
	
	    if (!inline) {
	      out += '\n';
	      out += spacer(newLvl - 1, tabStop);
	    }
	    out += '</' + displayName + '>';
	  } else {
	    if (!isInlineAttributeTooLong(attributes, outInlineAttr, lvl, tabStop, maxInlineAttributesLineLength)) {
	      out += ' ';
	    }
	
	    out += '/>';
	  }
	
	  return out;
	});
	
	var REACT_FRAGMENT_TAG_NAME_SHORT_SYNTAX = '';
	var REACT_FRAGMENT_TAG_NAME_EXPLICIT_SYNTAX = 'React.Fragment';
	
	var toReactElementTreeNode = function toReactElementTreeNode(displayName, key, childrens) {
	  var props = {};
	  if (key) {
	    props = { key: key };
	  }
	
	  return {
	    type: 'ReactElement',
	    displayName: displayName,
	    props: props,
	    defaultProps: {},
	    childrens: childrens
	  };
	};
	
	var isKeyedFragment = function isKeyedFragment(_ref) {
	  var key = _ref.key;
	  return Boolean(key);
	};
	var hasNoChildren = function hasNoChildren(_ref2) {
	  var childrens = _ref2.childrens;
	  return childrens.length === 0;
	};
	
	var formatReactFragmentNode = (function (node, inline, lvl, options) {
	  var type = node.type,
	      key = node.key,
	      childrens = node.childrens;
	
	
	  if (type !== 'ReactFragment') {
	    throw new Error('The "formatReactFragmentNode" function could only format node of type "ReactFragment". Given: ' + type);
	  }
	
	  var useFragmentShortSyntax = options.useFragmentShortSyntax;
	
	
	  var displayName = void 0;
	  if (useFragmentShortSyntax) {
	    if (hasNoChildren(node) || isKeyedFragment(node)) {
	      displayName = REACT_FRAGMENT_TAG_NAME_EXPLICIT_SYNTAX;
	    } else {
	      displayName = REACT_FRAGMENT_TAG_NAME_SHORT_SYNTAX;
	    }
	  } else {
	    displayName = REACT_FRAGMENT_TAG_NAME_EXPLICIT_SYNTAX;
	  }
	
	  return formatReactElementNode(toReactElementTreeNode(displayName, key, childrens), inline, lvl, options);
	});
	
	var jsxStopChars = ['<', '>', '{', '}'];
	var shouldBeEscaped = function shouldBeEscaped(s) {
	  return jsxStopChars.some(function (jsxStopChar) {
	    return s.includes(jsxStopChar);
	  });
	};
	
	var escape$1 = function escape(s) {
	  if (!shouldBeEscaped(s)) {
	    return s;
	  }
	
	  return '{`' + s + '`}';
	};
	
	var preserveTrailingSpace = function preserveTrailingSpace(s) {
	  var result = s;
	  if (result.endsWith(' ')) {
	    result = result.replace(/^(\S*)(\s*)$/, "$1{'$2'}");
	  }
	
	  if (result.startsWith(' ')) {
	    result = result.replace(/^(\s*)(\S*)$/, "{'$1'}$2");
	  }
	
	  return result;
	};
	
	var formatTreeNode = (function (node, inline, lvl, options) {
	  if (node.type === 'number') {
	    return String(node.value);
	  }
	
	  if (node.type === 'string') {
	    return node.value ? '' + preserveTrailingSpace(escape$1(String(node.value))) : '';
	  }
	
	  if (node.type === 'ReactElement') {
	    return formatReactElementNode(node, inline, lvl, options);
	  }
	
	  if (node.type === 'ReactFragment') {
	    return formatReactFragmentNode(node, inline, lvl, options);
	  }
	
	  throw new TypeError('Unknow format type "' + node.type + '"');
	});
	
	var formatTree = (function (node, options) {
	  return formatTreeNode(node, false, 0, options);
	});
	
	var reactElementToJsxString = function reactElementToJsxString(element) {
	  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	      _ref$filterProps = _ref.filterProps,
	      filterProps = _ref$filterProps === undefined ? [] : _ref$filterProps,
	      _ref$showDefaultProps = _ref.showDefaultProps,
	      showDefaultProps = _ref$showDefaultProps === undefined ? true : _ref$showDefaultProps,
	      _ref$showFunctions = _ref.showFunctions,
	      showFunctions = _ref$showFunctions === undefined ? false : _ref$showFunctions,
	      functionValue = _ref.functionValue,
	      _ref$tabStop = _ref.tabStop,
	      tabStop = _ref$tabStop === undefined ? 2 : _ref$tabStop,
	      _ref$useBooleanShorth = _ref.useBooleanShorthandSyntax,
	      useBooleanShorthandSyntax = _ref$useBooleanShorth === undefined ? true : _ref$useBooleanShorth,
	      _ref$useFragmentShort = _ref.useFragmentShortSyntax,
	      useFragmentShortSyntax = _ref$useFragmentShort === undefined ? true : _ref$useFragmentShort,
	      _ref$sortProps = _ref.sortProps,
	      sortProps = _ref$sortProps === undefined ? true : _ref$sortProps,
	      maxInlineAttributesLineLength = _ref.maxInlineAttributesLineLength,
	      displayName = _ref.displayName;
	
	  if (!element) {
	    throw new Error('react-element-to-jsx-string: Expected a ReactElement');
	  }
	
	  var options = {
	    filterProps: filterProps,
	    showDefaultProps: showDefaultProps,
	    showFunctions: showFunctions,
	    functionValue: functionValue,
	    tabStop: tabStop,
	    useBooleanShorthandSyntax: useBooleanShorthandSyntax,
	    useFragmentShortSyntax: useFragmentShortSyntax,
	    sortProps: sortProps,
	    maxInlineAttributesLineLength: maxInlineAttributesLineLength,
	    displayName: displayName
	  };
	
	  return formatTree(parseReactElement(element, options), options);
	};
	
	module.exports = reactElementToJsxString;
	//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/react-icon-base/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__("./node_modules/react/index.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var IconBase = function IconBase(_ref, _ref2) {
	  var children = _ref.children;
	  var color = _ref.color;
	  var size = _ref.size;
	  var style = _ref.style;
	
	  var props = _objectWithoutProperties(_ref, ['children', 'color', 'size', 'style']);
	
	  var _ref2$reactIconBase = _ref2.reactIconBase;
	  var reactIconBase = _ref2$reactIconBase === undefined ? {} : _ref2$reactIconBase;
	
	  var computedSize = size || reactIconBase.size || '1em';
	  return _react2.default.createElement('svg', _extends({
	    children: children,
	    fill: 'currentColor',
	    preserveAspectRatio: 'xMidYMid meet',
	    height: computedSize,
	    width: computedSize
	  }, reactIconBase, props, {
	    style: _extends({
	      verticalAlign: 'middle',
	      color: color || reactIconBase.color
	    }, reactIconBase.style || {}, style)
	  }));
	};
	
	IconBase.propTypes = {
	  color: _propTypes2.default.string,
	  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
	  style: _propTypes2.default.object
	};
	
	IconBase.contextTypes = {
	  reactIconBase: _propTypes2.default.shape(IconBase.propTypes)
	};
	
	exports.default = IconBase;
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-icons/lib/fa/chevron-left.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__("./node_modules/react/index.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactIconBase = __webpack_require__("./node_modules/react-icon-base/lib/index.js");
	
	var _reactIconBase2 = _interopRequireDefault(_reactIconBase);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var FaChevronLeft = function FaChevronLeft(props) {
	    return _react2.default.createElement(
	        _reactIconBase2.default,
	        _extends({ viewBox: '0 0 40 40' }, props),
	        _react2.default.createElement(
	            'g',
	            null,
	            _react2.default.createElement('path', { d: 'm31.1 6.7l-11.8 11.9 11.8 11.8q0.5 0.4 0.5 1t-0.5 1l-3.7 3.7q-0.4 0.5-1 0.5t-1-0.5l-16.5-16.5q-0.5-0.4-0.5-1t0.5-1l16.5-16.6q0.5-0.4 1-0.4t1 0.4l3.7 3.7q0.5 0.4 0.5 1t-0.5 1z' })
	        )
	    );
	};
	
	exports.default = FaChevronLeft;
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-icons/lib/fa/chevron-right.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__("./node_modules/react/index.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactIconBase = __webpack_require__("./node_modules/react-icon-base/lib/index.js");
	
	var _reactIconBase2 = _interopRequireDefault(_reactIconBase);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var FaChevronRight = function FaChevronRight(props) {
	    return _react2.default.createElement(
	        _reactIconBase2.default,
	        _extends({ viewBox: '0 0 40 40' }, props),
	        _react2.default.createElement(
	            'g',
	            null,
	            _react2.default.createElement('path', { d: 'm31.2 19.6l-16.6 16.5q-0.4 0.5-1 0.5t-1-0.5l-3.7-3.7q-0.4-0.4-0.4-1t0.4-1l11.9-11.8-11.9-11.9q-0.4-0.4-0.4-1t0.4-1l3.7-3.7q0.5-0.4 1-0.4t1 0.4l16.6 16.6q0.4 0.4 0.4 1t-0.4 1z' })
	        )
	    );
	};
	
	exports.default = FaChevronRight;
	module.exports = exports['default'];

/***/ }),

/***/ "./src/components/Breadcrumbs.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__("./node_modules/react/index.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _gatsbyLink = __webpack_require__("./node_modules/gatsby-link/index.js");
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Breadcrumbs = function Breadcrumbs(_ref) {
		var group = _ref.group,
		    subgroup = _ref.subgroup;
	
		return _react2.default.createElement(
			"ol",
			{ className: "c-breadcrumbs" },
			_react2.default.createElement(
				"li",
				{ className: "c-breadcrumbs__item" },
				_react2.default.createElement(
					_gatsbyLink2.default,
					{ className: "c-breadcrumbs__link", to: "/" + group },
					group
				)
			),
			subgroup && _react2.default.createElement(
				"li",
				{ className: "c-breadcrumbs__item" },
				_react2.default.createElement(
					_gatsbyLink2.default,
					{ className: "c-breadcrumbs__link", to: "/" + group + "/" + subgroup },
					subgroup
				)
			)
		);
	};
	
	exports.default = Breadcrumbs;
	module.exports = exports["default"];

/***/ }),

/***/ "./src/components/ButtonLink.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__("./node_modules/react/index.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ButtonLink = function ButtonLink(_ref) {
		var text = _ref.text,
		    onClickHandler = _ref.onClickHandler,
		    styleModifier = _ref.styleModifier,
		    target = _ref.target,
		    props = _ref.props,
		    href = _ref.href,
		    image = _ref.image;
		return _react2.default.createElement(
			"a",
			_extends({ href: href, target: target, className: "c-btn " + styleModifier, onClick: onClickHandler }, props),
			image && _react2.default.createElement(
				"svg",
				{ className: "c-btn__icon", viewBox: "0 0 80 80", version: "1.1" },
				_react2.default.createElement(
					"title",
					null,
					"download"
				),
				_react2.default.createElement(
					"defs",
					null,
					_react2.default.createElement(
						"linearGradient",
						{ x1: "11.5517976%", y1: "88.9160154%", x2: "117.786458%", y2: "-28.3463542%", id: "linearGradient-1" },
						_react2.default.createElement("stop", { stopColor: "#008ED1", offset: "0%" }),
						_react2.default.createElement("stop", { stopColor: "#4300A3", offset: "42.0400571%" }),
						_react2.default.createElement("stop", { stopColor: "#FF00CF", offset: "100%" })
					),
					_react2.default.createElement("path", { d: "M54.5605469,24.2421875 C57.3860818,24.3789069 60.0178915,25.0055283 62.4560547,26.1220703 C64.8942179,27.2386124 67.0247305,28.7425036 68.8476562,30.6337891 C70.670582,32.5250746 72.1175077,34.7239458 73.1884766,37.2304688 C74.2594455,39.7369917 74.8632806,42.4029807 75,45.2285156 C75,48.19077 74.4417374,50.9706901 73.3251953,53.5683594 C72.2086533,56.1660286 70.6819758,58.4332585 68.7451172,60.3701172 C66.8082585,62.3069758 64.5524217,63.8336533 61.9775391,64.9501953 C59.4026564,66.0667374 56.6341294,66.625 53.671875,66.625 L22.3632812,66.625 C19.9934777,66.5338537 17.749034,65.9983773 15.6298828,65.0185547 C13.5107316,64.0387321 11.6650469,62.7627032 10.0927734,61.1904297 C8.52049995,59.6181562 7.27865039,57.7952578 6.3671875,55.7216797 C5.45572461,53.6481016 5,51.4720166 5,49.1933594 C5,47.188141 5.33040034,45.308277 5.99121094,43.5537109 C6.65202153,41.7991449 7.56347075,40.1927156 8.72558594,38.734375 C9.88770112,37.2760344 11.2662681,36.0227917 12.8613281,34.9746094 C14.4563882,33.9264271 16.1881417,33.128909 18.0566406,32.5820312 C18.2845063,29.9387889 18.9339139,27.5006622 20.0048828,25.2675781 C21.0758517,23.034494 22.488598,21.0976645 24.2431641,19.4570312 C25.9977301,17.816398 28.0143115,16.528976 30.2929688,15.5947266 C32.571626,14.6604771 35.0097526,14.1933594 37.6074219,14.1933594 C41.2988466,14.1933594 44.6142431,15.1048086 47.5537109,16.9277344 C50.4931788,18.7506602 52.8287674,21.1887868 54.5605469,24.2421875 Z", id: "path-2" }),
					_react2.default.createElement(
						"filter",
						{ x: "-34.3%", y: "-26.7%", width: "168.6%", height: "191.5%", filterUnits: "objectBoundingBox", id: "filter-3" },
						_react2.default.createElement("feOffset", { dx: "0", dy: "2", "in": "SourceAlpha", result: "shadowOffsetOuter1" }),
						_react2.default.createElement("feGaussianBlur", { stdDeviation: "4", "in": "shadowOffsetOuter1", result: "shadowBlurOuter1" }),
						_react2.default.createElement("feColorMatrix", { values: "0 0 0 0 0.239215686   0 0 0 0 0.443137255   0 0 0 0 0.764705882  0 0 0 0.08 0", type: "matrix", "in": "shadowBlurOuter1", result: "shadowMatrixOuter1" }),
						_react2.default.createElement("feOffset", { dx: "0", dy: "8", "in": "SourceAlpha", result: "shadowOffsetOuter2" }),
						_react2.default.createElement("feGaussianBlur", { stdDeviation: "4", "in": "shadowOffsetOuter2", result: "shadowBlurOuter2" }),
						_react2.default.createElement("feColorMatrix", { values: "0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.08 0", type: "matrix", "in": "shadowBlurOuter2", result: "shadowMatrixOuter2" }),
						_react2.default.createElement(
							"feMerge",
							null,
							_react2.default.createElement("feMergeNode", { "in": "shadowMatrixOuter1" }),
							_react2.default.createElement("feMergeNode", { "in": "shadowMatrixOuter2" })
						)
					)
				),
				_react2.default.createElement(
					"g",
					{ id: "Icon/Resources", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
					_react2.default.createElement(
						"g",
						{ id: "Path", opacity: "0.800000012" },
						_react2.default.createElement("use", { fill: "black", fillOpacity: "1", filter: "url(#filter-3)", xlinkHref: "#path-2" }),
						_react2.default.createElement("use", { fill: "url(#linearGradient-1)", fillRule: "evenodd", xlinkHref: "#path-2" })
					),
					_react2.default.createElement("path", { d: "M53.671875,62.25 C55.9505322,62.25 58.1152241,61.8626341 60.1660156,61.0878906 C62.2168071,60.3131472 64.0169193,59.2194081 65.5664062,57.8066406 C67.1158932,56.3938731 68.3463496,54.696299 69.2578125,52.7138672 C70.1692754,50.7314354 70.625,48.5325642 70.625,46.1171875 C70.625,43.7018108 70.1692754,41.4573671 69.2578125,39.3837891 C68.3463496,37.310211 67.1158932,35.5100988 65.5664062,33.9833984 C64.0169193,32.4566981 62.2168071,31.2490279 60.1660156,30.3603516 C58.1152241,29.4716752 55.9505322,29.0273438 53.671875,29.0273438 L51.484375,29.0273438 C51.3020824,28.161454 51.0058614,27.3867222 50.5957031,26.703125 C50.1855448,26.0195278 49.7753927,25.3587271 49.3652344,24.7207031 C48.2714789,22.7154848 46.6878359,21.1888073 44.6142578,20.140625 C42.5406797,19.0924427 40.2050911,18.5683594 37.6074219,18.5683594 C35.1920452,18.5683594 33.0501396,19.0468702 31.1816406,20.0039062 C29.3131417,20.9609423 27.7294987,22.2483643 26.4306641,23.8662109 C25.1318294,25.4840576 24.1292353,27.3411354 23.4228516,29.4375 C22.7164678,31.5338646 22.3632812,33.744129 22.3632812,36.0683594 C18.6718565,36.2962251 15.5843223,37.7203645 13.1005859,40.3408203 C10.6168496,42.9612761 9.375,45.912093 9.375,49.1933594 C9.375,52.1100406 10.0471938,54.4342361 11.3916016,56.1660156 C12.7360093,57.8977951 14.2285074,59.2193965 15.8691406,60.1308594 C17.5097738,61.0423223 19.0022719,61.6233711 20.3466797,61.8740234 L22.3632812,62.25 L53.671875,62.25 Z", id: "Path", fill: "#FFFFFF" }),
					_react2.default.createElement("polygon", { id: "Path", fill: "url(#linearGradient-1)", opacity: "0.800000012", points: "41.7673716 46.9546828 46.6072508 41.734139 49 44.1812689 40.0271903 53.5891239 31 44.1812689 33.4471299 41.734139 38.2870091 46.9546828 38.2870091 32 41.7673716 32" })
				)
			),
			_react2.default.createElement(
				"span",
				{ className: "c-btn__text" },
				text
			)
		);
	};
	
	exports.default = ButtonLink;
	module.exports = exports["default"];

/***/ }),

/***/ "./src/components/ComponentExample.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__("./node_modules/react/index.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ButtonExamplePrimary = __webpack_require__("./ds-components/Button/examples/ButtonExamplePrimary.js");
	
	var _ButtonExamplePrimary2 = _interopRequireDefault(_ButtonExamplePrimary);
	
	var _ButtonExampleSmall = __webpack_require__("./ds-components/Button/examples/ButtonExampleSmall.js");
	
	var _ButtonExampleSmall2 = _interopRequireDefault(_ButtonExampleSmall);
	
	var _CardExample = __webpack_require__("./ds-components/Card/examples/CardExample.js");
	
	var _CardExample2 = _interopRequireDefault(_CardExample);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ComponentExample = function ComponentExample(_ref) {
	    var component = _ref.component;
	
	    switch (component) {
	        case 'button':
	            return _react2.default.createElement(_ButtonExamplePrimary2.default, null);
	        case 'button-small':
	            return _react2.default.createElement(_ButtonExampleSmall2.default, null);
	        case 'card':
	            return _react2.default.createElement(_CardExample2.default, null);
	        default:
	            return null;
	    }
	};
	
	exports.default = ComponentExample;
	module.exports = exports["default"];

/***/ }),

/***/ "./src/components/ContentBlock.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__("./node_modules/react/index.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__("./node_modules/classnames/index.js");
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _markdownIt = __webpack_require__("./node_modules/markdown-it/index.js");
	
	var _markdownIt2 = _interopRequireDefault(_markdownIt);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ContentBlock = function ContentBlock(_ref) {
		var title = _ref.title,
		    description = _ref.description,
		    styleModifier = _ref.styleModifier;
	
	
		var contentBlockClass = (0, _classnames2.default)({
			"c-content-block": true,
			"c-content-block--success": styleModifier === "c-content-block--success",
			"c-content-block--error": styleModifier === "c-content-block--error"
		});
	
		var md = (0, _markdownIt2.default)({
			html: true,
			linkify: true
		});
	
		return _react2.default.createElement(
			'div',
			{ className: contentBlockClass },
			_react2.default.createElement(
				'h4',
				{ className: 'c-content-block__title' },
				title
			),
			_react2.default.createElement('div', { className: 'c-content-block__desc c-text-passage', dangerouslySetInnerHTML: { __html: md.render(description) } })
		);
	};
	
	exports.default = ContentBlock;
	module.exports = exports['default'];

/***/ }),

/***/ "./src/components/Section.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__("./node_modules/react/index.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _markdownIt = __webpack_require__("./node_modules/markdown-it/index.js");
	
	var _markdownIt2 = _interopRequireDefault(_markdownIt);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Section = function Section(_ref) {
	    var headingLevel = _ref.headingLevel,
	        title = _ref.title,
	        description = _ref.description,
	        children = _ref.children;
	
	
	    var md = (0, _markdownIt2.default)({
	        html: true,
	        linkify: true
	    });
	
	    return _react2.default.createElement(
	        "section",
	        { className: "c-section" },
	        _react2.default.createElement(
	            "header",
	            { className: "c-section__header" },
	            _react2.default.createElement("h2", { className: "c-section__title", dangerouslySetInnerHTML: { __html: title } }),
	            description && _react2.default.createElement("div", { className: "c-section__description", dangerouslySetInnerHTML: { __html: md.render(description) } })
	        ),
	        _react2.default.createElement(
	            "div",
	            { className: "c-section__body" },
	            children
	        )
	    );
	};
	
	exports.default = Section;
	module.exports = exports["default"];

/***/ }),

/***/ "./src/components/Tab.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__("./node_modules/react/index.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Tab = function (_React$Component) {
	    _inherits(Tab, _React$Component);
	
	    function Tab() {
	        _classCallCheck(this, Tab);
	
	        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	    }
	
	    Tab.prototype.render = function render() {
	        return _react2.default.createElement(
	            "div",
	            { role: "tabpanel" },
	            this.props.children
	        );
	    };
	
	    return Tab;
	}(_react2.default.Component);
	
	exports.default = Tab;
	module.exports = exports["default"];

/***/ }),

/***/ "./src/components/Table.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__("./node_modules/react/index.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Table = function Table(_ref) {
	    var tableHeaderColumns = _ref.tableHeaderColumns,
	        data = _ref.data,
	        tbody = _ref.tbody,
	        styleModifier = _ref.styleModifier;
	
	
	    return _react2.default.createElement(
	        "table",
	        { className: "c-table " + styleModifier },
	        _react2.default.createElement(
	            "thead",
	            { className: "c-table__header" },
	            _react2.default.createElement(
	                "tr",
	                { className: "c-table__header-row" },
	                tableHeaderColumns.map(function (tableHeaderColumn) {
	                    return _react2.default.createElement(
	                        "th",
	                        { className: "c-table__header-cell" },
	                        tableHeaderColumn
	                    );
	                })
	            )
	        ),
	        _react2.default.createElement(
	            "tbody",
	            { className: "c-table__body" },
	            tbody
	        )
	    );
	};
	
	exports.default = Table;
	module.exports = exports["default"];

/***/ }),

/***/ "./src/components/Tabs.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__("./node_modules/react/index.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Tabs = function (_React$Component) {
	    _inherits(Tabs, _React$Component);
	
	    function Tabs(props) {
	        _classCallCheck(this, Tabs);
	
	        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	        _this.state = {
	            currentTab: 0
	        };
	        _this.setCurrentTab.bind(_this);
	        return _this;
	    }
	
	    Tabs.prototype.setCurrentTab = function setCurrentTab(currentTab) {
	        this.setState({
	            currentTab: currentTab
	        });
	    };
	
	    Tabs.prototype.render = function render() {
	        var _this2 = this;
	
	        return _react2.default.createElement(
	            "div",
	            { className: "c-tabs " + this.props.styleModifier },
	            _react2.default.createElement(
	                "ul",
	                { className: "c-tabs__list", role: "tablist" },
	                _react2.default.Children.map(this.props.children, function (item, index) {
	                    return _react2.default.createElement(
	                        "li",
	                        { className: 'c-tabs__list-item ' + (_this2.state.currentTab == index ? 'is-active' : ''), key: "tab-" + index },
	                        _react2.default.createElement(
	                            "a",
	                            {
	                                className: "c-tabs__link",
	                                onClick: function onClick(e) {
	                                    _this2.setCurrentTab(index);
	                                    if (typeof window !== 'undefined') {
	                                        if (document.readyState !== "loading") {
	                                            setTimeout(Prism.highlightAll, 0);
	                                        } else {
	                                            document.addEventListener('DOMContentLoaded', Prism.highlightAll);
	                                        }
	                                    }
	                                },
	                                href: "#tabs-" + index },
	                            item.props.label
	                        )
	                    );
	                })
	            ),
	            _react2.default.createElement(
	                "div",
	                { className: "c-tabs__body" },
	                this.props.children[this.state.currentTab]
	            )
	        );
	    };
	
	    return Tabs;
	}(_react2.default.Component);
	
	;
	
	exports.default = Tabs;
	module.exports = exports["default"];

/***/ }),

/***/ "./src/components/Tags.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = Tags;
	
	var _react = __webpack_require__("./node_modules/react/index.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _gatsbyLink = __webpack_require__("./node_modules/gatsby-link/index.js");
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Tags(_ref) {
	    var _ref$list = _ref.list,
	        list = _ref$list === undefined ? [] : _ref$list;
	
	    return _react2.default.createElement(
	        "ul",
	        { className: "c-tag-list" },
	        list.map(function (tag) {
	            return _react2.default.createElement(
	                "li",
	                { className: "c-tag-list__item", key: tag },
	                _react2.default.createElement(
	                    _gatsbyLink2.default,
	                    { to: "/tags/" + tag },
	                    tag
	                )
	            );
	        })
	    );
	}
	module.exports = exports["default"];

/***/ }),

/***/ "./src/components/Well.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__("./node_modules/react/index.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Well = function Well(_ref) {
	    var children = _ref.children;
	
	
	    return _react2.default.createElement(
	        "div",
	        { className: "c-well" },
	        children
	    );
	};
	
	exports.default = Well;
	module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"plugins\":[\"/Users/ian/Sites/gatsby-style-guide-guide/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\",\"/Users/ian/Sites/gatsby-style-guide-guide/node_modules/babel-plugin-add-module-exports/lib/index.js\",\"/Users/ian/Sites/gatsby-style-guide-guide/node_modules/babel-plugin-transform-object-assign/lib/index.js\"],\"presets\":[[\"/Users/ian/Sites/gatsby-style-guide-guide/node_modules/babel-preset-env/lib/index.js\",{\"loose\":true,\"uglify\":true,\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"IE >= 9\"]},\"exclude\":[\"transform-regenerator\",\"transform-es2015-typeof-symbol\"]}],\"/Users/ian/Sites/gatsby-style-guide-guide/node_modules/babel-preset-stage-0/lib/index.js\",\"/Users/ian/Sites/gatsby-style-guide-guide/node_modules/babel-preset-react/lib/index.js\"],\"cacheDirectory\":true}!./src/templates/component-detail.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.pageQuery = exports.ComponentDetail = undefined;
	
	var _react = __webpack_require__("./node_modules/react/index.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactHelmet = __webpack_require__("./node_modules/react-helmet/lib/Helmet.js");
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _reactElementToJsxString = __webpack_require__("./node_modules/react-element-to-jsx-string/dist/cjs/index.js");
	
	var _reactElementToJsxString2 = _interopRequireDefault(_reactElementToJsxString);
	
	var _server = __webpack_require__("./node_modules/react-dom/server.browser.js");
	
	var _server2 = _interopRequireDefault(_server);
	
	var _chevronLeft = __webpack_require__("./node_modules/react-icons/lib/fa/chevron-left.js");
	
	var _chevronLeft2 = _interopRequireDefault(_chevronLeft);
	
	var _chevronRight = __webpack_require__("./node_modules/react-icons/lib/fa/chevron-right.js");
	
	var _chevronRight2 = _interopRequireDefault(_chevronRight);
	
	var _Link = __webpack_require__("./src/components/Link.js");
	
	var _Link2 = _interopRequireDefault(_Link);
	
	var _Tags = __webpack_require__("./src/components/Tags.js");
	
	var _Tags2 = _interopRequireDefault(_Tags);
	
	var _PageHeader = __webpack_require__("./src/components/PageHeader.js");
	
	var _PageHeader2 = _interopRequireDefault(_PageHeader);
	
	var _Breadcrumbs = __webpack_require__("./src/components/Breadcrumbs.js");
	
	var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);
	
	var _Tab = __webpack_require__("./src/components/Tab.js");
	
	var _Tab2 = _interopRequireDefault(_Tab);
	
	var _Tabs = __webpack_require__("./src/components/Tabs.js");
	
	var _Tabs2 = _interopRequireDefault(_Tabs);
	
	var _Section = __webpack_require__("./src/components/Section.js");
	
	var _Section2 = _interopRequireDefault(_Section);
	
	var _Well = __webpack_require__("./src/components/Well.js");
	
	var _Well2 = _interopRequireDefault(_Well);
	
	var _Table = __webpack_require__("./src/components/Table.js");
	
	var _Table2 = _interopRequireDefault(_Table);
	
	var _ContentBlock = __webpack_require__("./src/components/ContentBlock.js");
	
	var _ContentBlock2 = _interopRequireDefault(_ContentBlock);
	
	var _ButtonLink = __webpack_require__("./src/components/ButtonLink.js");
	
	var _ButtonLink2 = _interopRequireDefault(_ButtonLink);
	
	var _Button = __webpack_require__("./src/components/Button.js");
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _ComponentExample = __webpack_require__("./src/components/ComponentExample.js");
	
	var _ComponentExample2 = _interopRequireDefault(_ComponentExample);
	
	var _markdownIt = __webpack_require__("./node_modules/markdown-it/index.js");
	
	var _markdownIt2 = _interopRequireDefault(_markdownIt);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ComponentDetail = exports.ComponentDetail = function (_Component) {
	    _inherits(ComponentDetail, _Component);
	
	    function ComponentDetail() {
	        _classCallCheck(this, ComponentDetail);
	
	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	    }
	
	    ComponentDetail.prototype.componentDidMount = function componentDidMount() {
	        var script = document.createElement("script");
	        script.src = "../../vendor/clipboard.min.js";
	        document.body.appendChild(script);
	
	        var scriptCopy = document.createElement("script");
	        scriptCopy.src = "../../vendor/copy.js";
	        document.body.appendChild(scriptCopy);
	    };
	
	    ComponentDetail.prototype.render = function render() {
	        var md = (0, _markdownIt2.default)({
	            html: true,
	            linkify: true
	        });
	        var post = this.props.data.markdownRemark;
	        var _props$pathContext = this.props.pathContext,
	            next = _props$pathContext.next,
	            prev = _props$pathContext.prev;
	
	        var variations = post.frontmatter.variations;
	
	        return _react2.default.createElement(
	            "div",
	            { className: "l-container" },
	            _react2.default.createElement(_reactHelmet2.default, { title: "" + post.frontmatter.title }),
	            _react2.default.createElement(_Breadcrumbs2.default, { group: post.frontmatter.group, subgroup: post.frontmatter.subgroup }),
	            _react2.default.createElement(_PageHeader2.default, {
	                title: post.frontmatter.title,
	                description: post.frontmatter.description,
	                status: post.frontmatter.status
	            }),
	            post.frontmatter.variations && post.frontmatter.variations.length > 1 && _react2.default.createElement(
	                _Tabs2.default,
	                null,
	                post.frontmatter.variations.map(function (item) {
	                    return _react2.default.createElement(
	                        _Tab2.default,
	                        { label: item.title },
	                        _react2.default.createElement(
	                            _Well2.default,
	                            null,
	                            _react2.default.createElement(
	                                _Section2.default,
	                                { title: item.title + " <code>" + item.styleModifier + "</code>", description: item.description },
	                                _react2.default.createElement(_ComponentExample2.default, { component: item.component })
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _Tabs2.default,
	                            { styleModifier: "ads-u-margin-bottom-large" },
	                            _react2.default.createElement(
	                                _Tab2.default,
	                                { label: "React" },
	                                _react2.default.createElement(
	                                    "div",
	                                    { className: "pattern-code" },
	                                    _react2.default.createElement(_Button2.default, { styleModifier: "pattern-code-copy-btn", text: "Copy", dataClipboardTarget: "#pattern-code-" + item.component }),
	                                    _react2.default.createElement(
	                                        "pre",
	                                        { className: "highlight pattern-code-block language-markup" },
	                                        _react2.default.createElement(
	                                            "code",
	                                            { className: "code language-markup", id: "pattern-code-" + item.component },
	                                            "\n                " + (0, _reactElementToJsxString2.default)(_react2.default.createElement(_ComponentExample2.default, { component: item.component })) + "\n                                        "
	                                        )
	                                    )
	                                )
	                            ),
	                            _react2.default.createElement(
	                                _Tab2.default,
	                                { label: "HTML" },
	                                _react2.default.createElement(
	                                    "div",
	                                    { className: "pattern-code" },
	                                    _react2.default.createElement(_Button2.default, { styleModifier: "pattern-code-copy-btn", text: "Copy", dataClipboardTarget: "#pattern-code-" + item.component }),
	                                    _react2.default.createElement(
	                                        "pre",
	                                        { className: "highlight pattern-code-block language-markup" },
	                                        _react2.default.createElement(
	                                            "code",
	                                            { className: "code language-markup", id: "pattern-code-" + item.component },
	                                            "\n                " + _server2.default.renderToStaticMarkup(_react2.default.createElement(_ComponentExample2.default, { component: item.component })) + "\n                                        "
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    );
	                })
	            ),
	            (post.frontmatter.variations && post.frontmatter.variations.length) === 1 && post.frontmatter.variations.map(function (item) {
	                return _react2.default.createElement(
	                    "div",
	                    null,
	                    _react2.default.createElement(
	                        _Well2.default,
	                        null,
	                        _react2.default.createElement(_ComponentExample2.default, { component: item.component })
	                    ),
	                    _react2.default.createElement(
	                        _Tabs2.default,
	                        { styleModifier: "ads-u-margin-bottom-large" },
	                        _react2.default.createElement(
	                            _Tab2.default,
	                            { label: "React" },
	                            _react2.default.createElement(
	                                "div",
	                                { className: "pattern-code" },
	                                _react2.default.createElement(_Button2.default, { styleModifier: "pattern-code-copy-btn", text: "Copy", dataClipboardTarget: "#pattern-code-" + item.component }),
	                                _react2.default.createElement(
	                                    "pre",
	                                    { className: "highlight pattern-code-block language-markup" },
	                                    _react2.default.createElement(
	                                        "code",
	                                        { className: "code language-markup", id: "pattern-code-" + item.component },
	                                        "\n            " + (0, _reactElementToJsxString2.default)(_react2.default.createElement(_ComponentExample2.default, { component: item.component })) + "\n                                    "
	                                    )
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _Tab2.default,
	                            { label: "HTML" },
	                            _react2.default.createElement(
	                                "div",
	                                { className: "pattern-code" },
	                                _react2.default.createElement(_Button2.default, { styleModifier: "pattern-code-copy-btn", text: "Copy", dataClipboardTarget: "#pattern-code-" + item.component }),
	                                _react2.default.createElement(
	                                    "pre",
	                                    { className: "highlight pattern-code-block language-markup" },
	                                    _react2.default.createElement(
	                                        "code",
	                                        { className: "code language-markup", id: "pattern-code-" + item.component },
	                                        "\n            " + _server2.default.renderToStaticMarkup(_react2.default.createElement(_ComponentExample2.default, { component: item.component })) + "\n                                    "
	                                    )
	                                )
	                            )
	                        )
	                    )
	                );
	            }),
	            (post.frontmatter.usage || post.frontmatter.use || post.frontmatter.altUse) && _react2.default.createElement(
	                _Section2.default,
	                { title: "Usage" },
	                _react2.default.createElement(
	                    "div",
	                    { className: "c-text-passage" },
	                    post.frontmatter.usage && post.frontmatter.usage.map(function (item) {
	                        return _react2.default.createElement(
	                            "div",
	                            null,
	                            _react2.default.createElement(
	                                "h3",
	                                null,
	                                item.title
	                            ),
	                            _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: md.render(item.description) } })
	                        );
	                    })
	                ),
	                _react2.default.createElement(
	                    "ul",
	                    { className: "l-grid" },
	                    _react2.default.createElement(
	                        "li",
	                        { className: "l-grid__item" },
	                        post.frontmatter.use && post.frontmatter.use.map(function (item, index) {
	                            return _react2.default.createElement(_ContentBlock2.default, { key: index, title: item.title, description: item.description, styleModifier: "c-content-block--success" });
	                        })
	                    ),
	                    _react2.default.createElement(
	                        "li",
	                        { className: "l-grid__item" },
	                        post.frontmatter.altUse && post.frontmatter.altUse.map(function (item, index) {
	                            return _react2.default.createElement(_ContentBlock2.default, { key: index, title: item.title, description: item.description, styleModifier: "c-content-block--error" });
	                        })
	                    )
	                )
	            ),
	            post.frontmatter.classes && _react2.default.createElement(_Table2.default, {
	                tableHeaderColumns: ["Class Name", "Description"],
	                tbody: post.frontmatter.classes.map(function (item) {
	                    return _react2.default.createElement(
	                        "tr",
	                        { className: "c-table__row" },
	                        _react2.default.createElement(
	                            "td",
	                            { className: "c-table__cell" },
	                            _react2.default.createElement(
	                                "code",
	                                null,
	                                item.className
	                            )
	                        ),
	                        _react2.default.createElement("td", { className: "c-table__cell",
	                            dangerouslySetInnerHTML: { __html: md.render(item.description) }
	                        })
	                    );
	                })
	            }),
	            _react2.default.createElement("div", {
	                className: "c-text-passage",
	                dangerouslySetInnerHTML: { __html: post.html }
	            }),
	            _react2.default.createElement(_Tags2.default, { list: post.frontmatter.tags || [] }),
	            _react2.default.createElement(
	                "div",
	                { className: "c-pagination" },
	                prev && _react2.default.createElement(
	                    _Link2.default,
	                    {
	                        className: "c-pagination__link",
	                        to: prev.frontmatter.path
	                    },
	                    _react2.default.createElement(_chevronLeft2.default, null),
	                    " ",
	                    prev.frontmatter.title
	                ),
	                next && _react2.default.createElement(
	                    _Link2.default,
	                    {
	                        className: "c-pagination__link",
	                        to: next.frontmatter.path
	                    },
	                    next.frontmatter.title,
	                    " ",
	                    _react2.default.createElement(_chevronRight2.default, null)
	                )
	            ),
	            post.frontmatter.finePrint && _react2.default.createElement(
	                _Section2.default,
	                { title: "Fine print" },
	                post.frontmatter.finePrint.map(function (item) {
	                    return _react2.default.createElement(
	                        "div",
	                        { className: "c-text-passage" },
	                        _react2.default.createElement(
	                            "ul",
	                            null,
	                            _react2.default.createElement(
	                                "li",
	                                null,
	                                "Version: ",
	                                item.version
	                            ),
	                            _react2.default.createElement(
	                                "li",
	                                null,
	                                "Last Updated: ",
	                                item.update
	                            ),
	                            _react2.default.createElement(
	                                "li",
	                                null,
	                                "Owner: ",
	                                item.owner
	                            )
	                        )
	                    );
	                }),
	                _react2.default.createElement(_ButtonLink2.default, { href: "#", text: "Discuss this component" })
	            )
	        );
	    };
	
	    return ComponentDetail;
	}(_react.Component);
	
	exports.default = ComponentDetail;
	var pageQuery = exports.pageQuery = "** extracted graphql fragment **";

/***/ })

});
//# sourceMappingURL=component---src-templates-component-detail-js-333a7345b876ff2ab17c.js.map