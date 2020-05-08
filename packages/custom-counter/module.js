export default function (moduleOptions) {
  const options = {
    ...moduleOptions,
    ...this.options.customCounter
  }
  console.log('options:', options)
}

module.exports.meta = require('./package.json')
