webpackHotUpdate("cms",{

/***/ "./src/components/ContactUS.js":
/*!*************************************!*\
  !*** ./src/components/ContactUS.js ***!
  \*************************************/
/*! exports provided: ContactUs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUs", function() { return ContactUs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emailjs-com */ "./node_modules/emailjs-com/es/index.js");
var _this = undefined,
    _jsxFileName = "/Users/sultanforwork/Downloads/personalItem/kpainting/Code/yellowcake-gatsby/src/components/ContactUS.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



var ContactUs = function ContactUs() {
  var form = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var sendEmail = function sendEmail(e) {
    e.preventDefault();
    emailjs_com__WEBPACK_IMPORTED_MODULE_1__["default"].sendForm('service_zx3r63r', 'template_d3zzh4o', form.current, 'user_9j9DE40Kp30fTz8EeyiGG').then(function (result) {
      console.log(result.text);
    }, function (error) {
      console.log(error.text);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    ref: form,
    onSubmit: sendEmail,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "user_name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "email",
    name: "user_email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, "Message"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    name: "message",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "submit",
    value: "Send",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  })));
};

__signature__(ContactUs, "useRef{form}");

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ContactUs, "ContactUs", "/Users/sultanforwork/Downloads/personalItem/kpainting/Code/yellowcake-gatsby/src/components/ContactUS.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.bc97f3699eb06418776e.hot-update.js.map