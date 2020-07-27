webpackHotUpdate(6,{

/***/ 1407:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(1404);

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = __webpack_require__(1104);

var _factory = __webpack_require__(558);

var _factory2 = _interopRequireDefault(_factory);

var _web = __webpack_require__(559);

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Adetunji Oluwaferanm\\Documents\\Adetunji Oluwaferanmi\\Crypto\\campaign\\pages\\campaigns\\new.js?entry';


var CampaignNew = function (_Component) {
	(0, _inherits3.default)(CampaignNew, _Component);

	function CampaignNew() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, CampaignNew);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			minimumContribution: '',
			errorMessage: '',
			loading: false
		}, _this.onSubmit = function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
				var accounts;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								event.preventDefault();
								_this.setState({ loading: true, errorMessage: '' });
								_context.prev = 2;
								_context.next = 5;
								return window.ethereum.enable();

							case 5:
								_context.next = 7;
								return _web2.default.eth.getAccounts();

							case 7:
								accounts = _context.sent;
								_context.next = 10;
								return _factory2.default.methods.createCampaign(_this.state.minimumContribution).send({ from: accounts[0] });

							case 10:
								_this.setState({ loading: false });
								_context.next = 17;
								break;

							case 13:
								_context.prev = 13;
								_context.t0 = _context['catch'](2);

								_this.setState({ errorMessage: _context.t0.message });
								_this.setState({ loading: false });

							case 17:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2, [[2, 13]]);
			}));

			return function (_x) {
				return _ref2.apply(this, arguments);
			};
		}(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(CampaignNew, [{
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 29
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 30
				}
			}, 'Create A campaign'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 31
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 32
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 33
				}
			}, 'Minimum Contribution'), _react2.default.createElement(_semanticUiReact.Input, {
				label: 'wei',
				labelPosition: 'right',
				value: this.state.minimumContribution,
				onChange: function onChange(event) {
					return _this3.setState({ minimumContribution: event.target.value });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 34
				}
			})), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 41
				}
			}), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 42
				}
			}, 'Create!')));
		}
	}]);

	return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXG5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJmYWN0b3J5Iiwid2ViMyIsIkNhbXBhaWduTmV3Iiwic3RhdGUiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwid2luZG93IiwiZXRoZXJldW0iLCJlbmFibGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZUNhbXBhaWduIiwic2VuZCIsImZyb20iLCJtZXNzYWdlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBTSxBQUFRLEFBQU87O0FBQzlCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVU7Ozs7Ozs7OztJLEFBRVg7Ozs7Ozs7Ozs7Ozs7OztvTixBQUNMO3dCQUFRLEFBQ2MsQUFDckI7aUJBRk8sQUFFTyxBQUNkO1ksQUFITyxBQUdFO0FBSEYsQUFDUCxXLEFBS0Q7d0ZBQVcsaUJBQUEsQUFBTyxPQUFQO1FBQUE7a0VBQUE7ZUFBQTt1Q0FBQTtZQUNWO2NBQUEsQUFBTSxBQUNOO2NBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE1BQU0sY0FGckIsQUFFVixBQUFjLEFBQStCO3dCQUZuQzt3QkFBQTtlQUlILE9BQUEsQUFBTyxTQUpKLEFBSUgsQUFBZ0I7O1lBSmI7d0JBQUE7ZUFLYyxjQUFBLEFBQUssSUFMbkIsQUFLYyxBQUFTOztZQUExQjtBQUxHLDRCQUFBO3dCQUFBO2VBTUgsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLGVBQWUsTUFBQSxBQUFLLE1BQXBDLEFBQTBDLHFCQUExQyxBQUErRCxLQUFLLEVBQUUsTUFBTSxTQU56RSxBQU1ILEFBQW9FLEFBQVEsQUFBUzs7WUFDM0Y7Y0FBQSxBQUFLLFNBQVMsRUFBRSxTQVBQLEFBT1QsQUFBYyxBQUFXO3dCQVBoQjtBQUFBOztZQUFBO3dCQUFBO3dDQVNUOztjQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsWUFBOUIsQUFBYyxBQUFvQixBQUNsQztjQUFBLEFBQUssU0FBUyxFQUFFLFNBVlAsQUFVVCxBQUFjLEFBQVc7O1lBVmhCO1lBQUE7d0JBQUE7O0FBQUE7NkJBQUE7QTs7Ozs7Ozs7OzsyQkFhRjtnQkFDUjs7MEJBQ0MsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxJQUFBLGtCQUNDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BREQsQUFDQyxBQUNBLHNDQUFBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDtlQUFuRDtpQkFBQSxBQUNDO0FBREQ7c0JBQ0UsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BREQsQUFDQyxBQUNBLHlDQUFBLEFBQUM7V0FBRCxBQUNPLEFBQ047bUJBRkQsQUFFZSxBQUNkO1dBQU8sS0FBQSxBQUFLLE1BSGIsQUFHbUIsQUFDbEI7Y0FBVSxrQkFBQSxBQUFDLE9BQUQ7WUFBVyxPQUFBLEFBQUssU0FBUyxFQUFFLHFCQUFxQixNQUFBLEFBQU0sT0FBdEQsQUFBVyxBQUFjLEFBQW9DO0FBSnhFOztlQUFBO2lCQUhGLEFBQ0MsQUFFQyxBQU9EO0FBUEM7QUFDQyx3QkFNRixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBNUMsQUFBa0Q7ZUFBbEQ7aUJBVkQsQUFVQyxBQUNBO0FBREE7dUJBQ0EsQUFBQyx5Q0FBTyxTQUFTLEtBQUEsQUFBSyxNQUF0QixBQUE0QixTQUFTLFNBQXJDO2VBQUE7aUJBQUE7QUFBQTtNQWRILEFBQ0MsQUFFQyxBQVdDLEFBTUg7Ozs7O0FBRUYsQSxBQTNDMEI7O2tCQTJDMUIsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvQWRldHVuamkgT2x1d2FmZXJhbm0vRG9jdW1lbnRzL0FkZXR1bmppIE9sdXdhZmVyYW5taS9DcnlwdG8vY2FtcGFpZ24ifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\Adetunji Oluwaferanm\\Documents\\Adetunji Oluwaferanmi\\Crypto\\campaign\\pages\\campaigns\\new.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Adetunji Oluwaferanm\\Documents\\Adetunji Oluwaferanmi\\Crypto\\campaign\\pages\\campaigns\\new.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns\\new")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi44ZDBmOTllMDFmYjg1ZDg5M2U4OC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL25ldy5qcz9lMjJlZTczIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIElucHV0LCBNZXNzYWdlIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi8uLi9ldGhlcmV1bS9mYWN0b3J5JztcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vZXRoZXJldW0vd2ViMyc7XHJcblxyXG5jbGFzcyBDYW1wYWlnbk5ldyBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0c3RhdGUgPSB7XHJcblx0XHRtaW5pbXVtQ29udHJpYnV0aW9uOiAnJyxcclxuXHRcdGVycm9yTWVzc2FnZTogJycsXHJcblx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHR9O1xyXG5cclxuXHRvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlLCBlcnJvck1lc3NhZ2U6ICcnIH0pO1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0YXdhaXQgd2luZG93LmV0aGVyZXVtLmVuYWJsZSgpO1xyXG5cdFx0XHRjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcblx0XHRcdGF3YWl0IGZhY3RvcnkubWV0aG9kcy5jcmVhdGVDYW1wYWlnbih0aGlzLnN0YXRlLm1pbmltdW1Db250cmlidXRpb24pLnNlbmQoeyBmcm9tOiBhY2NvdW50c1swXSB9KTtcclxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xyXG5cdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xyXG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8TGF5b3V0PlxyXG5cdFx0XHRcdDxoMz5DcmVhdGUgQSBjYW1wYWlnbjwvaDM+XHJcblx0XHRcdFx0PEZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9IGVycm9yPXshIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfT5cclxuXHRcdFx0XHRcdDxGb3JtLkZpZWxkPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWw+TWluaW11bSBDb250cmlidXRpb248L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8SW5wdXRcclxuXHRcdFx0XHRcdFx0XHRsYWJlbD0nd2VpJ1xyXG5cdFx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3JpZ2h0J1xyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLm1pbmltdW1Db250cmlidXRpb259XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG1pbmltdW1Db250cmlidXRpb246IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvRm9ybS5GaWVsZD5cclxuXHRcdFx0XHRcdDxNZXNzYWdlIGVycm9yIGhlYWRlcj0nT29wcyEnIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfSAvPlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IHByaW1hcnk+XHJcblx0XHRcdFx0XHRcdENyZWF0ZSFcclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvRm9ybT5cclxuXHRcdFx0PC9MYXlvdXQ+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnbk5ldztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY2FtcGFpZ25zL25ldy5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTtBQUNBOztBQUZBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUZBO0FBQUE7QUFJQTtBQUNBO0FBTEE7QUFBQTtBQUtBO0FBQ0E7QUFEQTtBQUxBO0FBQUE7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQVBBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFTQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBWEE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FBYUE7QUFDQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFKQTs7QUFBQTtBQU9BO0FBUEE7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBTUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9