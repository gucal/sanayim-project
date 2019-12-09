"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _intn = _interopRequireDefault(require("./intn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BigInt = {
  id: 0x7F,
  type: 'INT8',
  name: 'BigInt',
  declaration: function declaration() {
    return 'bigint';
  },
  writeTypeInfo: function writeTypeInfo(buffer) {
    buffer.writeUInt8(_intn.default.id);
    buffer.writeUInt8(8);
  },
  writeParameterData: function writeParameterData(buffer, parameter, _options, cb) {
    const value = parameter.value;

    if (value != null) {
      const val = typeof value !== 'number' ? parseInt(value) : value;
      buffer.writeUInt8(8);
      buffer.writeInt64LE(val);
    } else {
      buffer.writeUInt8(0);
    }

    cb();
  },
  validate: function validate(value) {
    if (value == null) {
      return null;
    }

    if (isNaN(value)) {
      return new TypeError('Invalid number.');
    }

    if (value < -9007199254740991 || value > 9007199254740991) {
      // Number.MIN_SAFE_INTEGER = -9007199254740991
      // Number.MAX_SAFE_INTEGER = 9007199254740991
      // 9007199254740991 = (2**53) - 1
      // Can't use Number.MIN_SAFE_INTEGER and Number.MAX_SAFE_INTEGER directly though
      // as these constants are not available in node 0.10.
      return new TypeError('Value must be between -9007199254740991 and 9007199254740991, inclusive.' + ' For bigger numbers, use VarChar type.');
    }

    return value;
  }
};
var _default = BigInt;
exports.default = _default;
module.exports = BigInt;