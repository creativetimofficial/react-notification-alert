"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactstrap = require("reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var NotificationAlert = /*#__PURE__*/function (_React$Component) {
  _inherits(NotificationAlert, _React$Component);

  var _super = _createSuper(NotificationAlert);

  function NotificationAlert(props) {
    var _this;

    _classCallCheck(this, NotificationAlert);

    _this = _super.call(this, props);
    _this.state = {
      notifyTL: [],
      notifyTC: [],
      notifyTR: [],
      notifyBL: [],
      notifyBC: [],
      notifyBR: [],
      notifyID: []
    };
    _this.onDismiss = _this.onDismiss.bind(_assertThisInitialized(_this));
    _this.notificationAlert = _this.notificationAlert.bind(_assertThisInitialized(_this));
    _this.refNotification = /*#__PURE__*/_react["default"].createRef();
    return _this;
  } // to stop the warning of calling setState of unmounted component


  _createClass(NotificationAlert, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      for (var i = 0; i < this.state.notifyID.length; i++) {
        window.clearTimeout(this.state.notifyID[i]);
      }
    }
  }, {
    key: "onDismiss",
    value: function onDismiss(nNumber, place, noAnimate) {
      var notify = [];
      var sNotify = this.state["notify" + place.toUpperCase()];
      var dNotify;

      for (var i = 0; i < sNotify.length; i++) {
        if (sNotify[i].key !== nNumber + "") {
          if (sNotify[i].props.className.indexOf("fadeOutUp") !== -1) {
            dNotify = /*#__PURE__*/_react["default"].cloneElement(sNotify[i]);
          } else {
            if (noAnimate === undefined) {
              var animation;

              if (place.indexOf("b") !== -1) {
                animation = sNotify[i].key > nNumber + "" ? " animated moveDown" : "";
              } else {
                animation = sNotify[i].key > nNumber + "" ? " animated moveUp" : "";
              }

              dNotify = /*#__PURE__*/_react["default"].cloneElement(sNotify[i], {
                className: "alert-with-icon" + animation
              });
            } else {
              dNotify = /*#__PURE__*/_react["default"].cloneElement(sNotify[i], {
                className: "alert-with-icon"
              });
            }
          }

          notify.push(dNotify);
        } else {
          if (noAnimate === undefined) {
            dNotify = /*#__PURE__*/_react["default"].cloneElement(sNotify[i], {
              className: "alert-with-icon animated fadeOutUp"
            });
            notify.push(dNotify);
          }
        }
      }

      if (noAnimate === undefined) {
        var id = setTimeout(function () {
          this.onDismiss(nNumber, place, "noAnimate");
        }.bind(this), 800);
        this.setState({
          notifyID: [id].concat(this.state.notifyID)
        });
      }

      sNotify = {};
      sNotify["notify" + place.toUpperCase()] = notify;
      this.setState(sNotify);
    }
  }, {
    key: "notificationAlert",
    value: function notificationAlert(options) {
      var _this2 = this;

      var notify = this.state["notify" + options.place.toUpperCase()];
      var nNumber = notify.length;

      if (notify.length > 0) {
        if (options.place.indexOf("b") !== -1) {
          nNumber = parseInt(notify[0].key, 10) + 1;
        } else {
          nNumber = parseInt(notify[notify.length - 1].key, 10) + 1;
        }
      }

      var toggle;

      if (options.closeButton !== false) {
        toggle = function toggle() {
          return _this2.onDismiss(nNumber, options.place);
        };
      }

      var notification = /*#__PURE__*/_react["default"].createElement(_reactstrap.Alert, {
        color: options.type,
        className: "alert-with-icon animated fadeInDown",
        toggle: toggle,
        key: nNumber,
        onClick: this.props.onClick
      }, options.icon !== undefined && /*#__PURE__*/_react["default"].createElement("span", {
        "data-notify": "icon",
        className: options.icon
      }), /*#__PURE__*/_react["default"].createElement("span", {
        "data-notify": "message"
      }, options.message));

      if (options.place.indexOf("b") !== -1) {
        notify.unshift(notification);
      } else {
        notify.push(notification);
      }

      var sNotify = {};
      sNotify["notify" + options.place.toUpperCase()] = notify; // aici pui notify[notify.length-1].key

      if (options.autoDismiss > 0) {
        var id = setTimeout(function () {
          this.onDismiss(nNumber, options.place);
        }.bind(this), options.autoDismiss * 1000 + (notify.length - 1) * 1000);
        this.setState({
          notifyID: [id].concat(this.state.notifyID)
        });
      }

      this.setState(sNotify);
    }
  }, {
    key: "showAllNotifications",
    value: function showAllNotifications(place) {
      if (this.state["notify" + place.toUpperCase()].length > 0) {
        var style = {
          display: "inline-block",
          margin: "0px auto",
          position: "fixed",
          transition: "all 0.5s ease-in-out",
          zIndex: this.props.zIndex
        };

        if (place.indexOf("t") !== -1) {
          style["top"] = "20px";

          switch (place) {
            case "tl":
              style["left"] = "20px";
              break;

            case "tc":
              style["left"] = "0px";
              style["right"] = "0px";
              break;

            case "tr":
              style["right"] = "20px";
              break;

            default:
              break;
          }
        } else {
          style["bottom"] = "20px";

          switch (place) {
            case "bl":
              style["left"] = "20px";
              break;

            case "bc":
              style["left"] = "0px";
              style["right"] = "0px";
              break;

            case "br":
              style["right"] = "20px";
              break;

            default:
              break;
          }
        }

        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactstrap.Col, {
          xs: "11",
          sm: "4",
          style: style
        }, this.state["notify" + place.toUpperCase()].map(function (prop, key) {
          return prop;
        })));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.refNotification
      }, this.showAllNotifications("tl"), this.showAllNotifications("tc"), this.showAllNotifications("tr"), this.showAllNotifications("bl"), this.showAllNotifications("bc"), this.showAllNotifications("br")));
    }
  }]);

  return NotificationAlert;
}(_react["default"].Component);

NotificationAlert.defaultProps = {
  zIndex: 9999,
  onClick: function onClick() {}
};
NotificationAlert.propTypes = {
  zIndex: _propTypes["default"].number,
  onClick: _propTypes["default"].func
};
var _default = NotificationAlert;
exports["default"] = _default;
