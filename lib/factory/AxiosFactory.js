const Axios = require('axios')

class Requests {
  static get(url) {
    return Axios.get(url)
  }
  static post(url, options) {
    return Axios.post(url, options)

  }
}

module.exports = Requests