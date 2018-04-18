var idGenerator = require('./index.js')
var _ = require('lodash')

const testLengths = [0, 4, 16, 32, 42, 49, 52, 50, 64, 512, 1024, 4096, 5192, 8192, 16384, 32768, 65536]

const results = _.map(testLengths, (length) => {
  const start = Date.now()
  const result = idGenerator.generateId(length)
  const end = Date.now()

  return {
    start,
    end,
    timeTaken: (end - start),
    result,
    length
  }
})

_.forEach(results, (result) => {
  console.log(`Generated ${_.get(result, 'length')} characters in ${_.get(result, 'timeTaken')}ms`)
})
