const { messageModel, dateInputModel, textInput, MultichoiceModel } = require('./models/models')
const axios = require('axios')

class ValidationError extends Error {
  constructor(err) {
    super(err.message);
    this.stack = err.stack
    this.name = "ValidationError";
  }
}

class Teams {
  constructor({ url }) {
    this.url = url
  }

  sendRequest(data) {
    return axios.post(this.url, {
      method: 'post',
      data
    })
  }

  // Ja ja sai esse metodo
  notifyCard(err) {
    return {
      dateInput(config) {
        return Teams.sendRequest(dateInputModel(err, config))
      },
      textInput(config) {
        return Teams.sendRequest(textInput(err, config))
      },
      MultichoiceInput(config) {
        return Teams.sendRequest(MultichoiceModel(err, config))
      }
    }
  }

  async notifyText(err, method, nameProject) {
    try {
      err = typeof err != "object" ? {message: err} : err
      return await this.sendRequest(messageModel(err, method, nameProject))
    } catch (err) {
      throw new ValidationError(err)
    }
  }

}

module.exports.teams = function (options) {
  return new Teams(options);
}