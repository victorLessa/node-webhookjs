'use strict'
const Request = require('./factory/AxiosFactory')
class Telegram extends Request {
  constructor(options) {
    super()
    this.token = options.token
    this.chatId = options.chatId
    this.baseUrl = "https://api.telegram.org/bot"
  }

  async send(text) {
    try {
      return await Telegram.get(`${this.baseUrl}${this.token}/sendMessage?chat_id=${this.chatId}&text=` + text)
    } catch(err) {
      return err
    }
  }
}

module.exports.telegram = function(options) {
  return new Telegram(options)
}