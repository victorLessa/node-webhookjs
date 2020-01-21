const { messageModel, dateInputModel, textInput, MultichoiceModel } = require('./models/models')
const Axios = require('axios')

class ValidationError extends Error {
  constructor(err) {
    super(err.message);
    this.stack = err.stack
    this.name = "ValidationError";
  }
}

class Teams {
  constructor(options) {
    this._axios = Axios.create({
      baseURL: options.url
    })
  }

  static sendRequest(data) {
    return new Promise((resolve, reject) => {
      this.axios.request({
        method: 'post',
        data
      })
        .then(success => resolve(success))
        .catch(error => reject(error))
    })
  }

  // Ja ja sai esse metodo
  notifyCard(err) {

    let that = this

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

  notifyText(err, method, nameProject) {
    try {
      return Teams.sendRequest(messageModel(err, method, nameProject))
    } catch (err) {
      throw new ValidationError(err)
    }
  }

}

module.exports.teams = function (options) {
  return new Teams(options);
}