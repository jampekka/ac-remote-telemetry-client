let { Parser } = require('binary-parser');

class ACRemoteTelemetryParser extends Parser {
  /**
     * @param {Buffer} buffer
     */
  fromBuffer(buffer) {
    return this.parse(buffer);
  }
}

module.exports = ACRemoteTelemetryParser;
