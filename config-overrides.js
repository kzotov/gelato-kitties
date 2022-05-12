const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@': 'src',
    '@components': 'src/components',
    '@store' : 'src/store'
  })(config)

  return config
}