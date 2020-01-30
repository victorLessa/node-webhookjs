'use strict'
const Axios = require('axios')

class Telegram {
  constructor(options) {
    this.token = options.token
    this.chatId = options.chatId
    this._axios = Axios.create({
      baseUrl: 'https://api.telegram.org/'
    })
  }
  
  static request(text) {
    let config = {
      method: 'get',
      url:
        `${this.token}/sendMessage?chat_id=${this.chatId}&text=` + JSON.stringify(text)
    }
    return this._axios.request(config)
  }

  async send(text) {
    try {
      return await Telegram.request(text)
    } catch(err) {
      return err
    }
  }
}

module.exports.telegram = function(options) {
  return new Telegram(options)
}