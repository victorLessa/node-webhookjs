'use strict'
const Axios = require('axios').default

class Telegram {
  constructor(options) {
    this.token = options.token
    this.chatId = options.chatId
  }
  
  request(text) {
    let config = {
      method: 'get',
      url:
        `https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId}&text=` + text
    }
    return Axios.request(config)
  }

  async send(text) {
    try {
      return await this.request(text)
    } catch(err) {
      return err
    }
  }
}

module.exports.telegram = function(options) {
  return new Telegram(options)
}