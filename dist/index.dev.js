"use strict";

var _inquirer = _interopRequireDefault(require("inquirer"));

var _qrImage = _interopRequireDefault(require("qr-image"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_inquirer["default"].prompt([{
  message: "Type your URL:",
  name: "URL"
}]).then(function (answer) {
  var url = answer.URL;

  var qr_svg = _qrImage["default"].image(url);

  qr_svg.pipe(_fs["default"].createWriteStream('qr_img.png'));

  _fs["default"].writeFile('URL.txt', url, function (err) {
    if (err) throw err;
    console.log('The file has been saved!');
  });
})["catch"](function (error) {
  if (error.isTtyError) {} else {}
});