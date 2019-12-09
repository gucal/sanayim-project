"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _intn = _interopRequireDefault(require("./intn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TinyInt = {
  id: 0x30,
  type: 'INT1',
  name: 'TinyInt',
  declaration: function declaration() {
    return 'tinyint';
  },
  writeTypeInfo: function writeTypeInfo(buffer) {
    buffer.writeUInt8(_intn.default.id);
    buffer.writeUInt8(1);
  },
  writeParameterData: function writeParameterData(buffer, parameter, options, cb) {
    if (parameter.value != null) {
      buffer.writeUInt8(1);
      buffer.writeUInt8(parseInt(parameter.value));
    } else {
      buffer.writeUInt8(0);
    }

    cb();
  },
  validate: function validate(value) {
    if (value == null) {
      return null;
    }

    value = parseInt(value);

    if (isNaN(value)) {
      return new TypeError('Invalid number.');
    }

    if (value < 0 || value > 255) {
      return new TypeError('Value must be between 0 and 255.');
    }

    return value;
  }
};
var _default = TinyInt;
exports.default = _default;
module.exports = TinyInt;