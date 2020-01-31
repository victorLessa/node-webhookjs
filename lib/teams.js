const { messageModel, dateInputModel, textInput, MultichoiceModel } = require('./models/models')
const Request = require('./factory/AxiosFactory')
class ValidationError extends Error {
  constructor(err) {
    super(err.message);
    this.stack = err.stack
    this.name = "ValidationError";
  }
}

class Teams extends Request {
  constructor({ url }) {
    super()
    this.url = url
  }

  // Ja ja sai esse metodo
  notifyCard(err) {
    return {
      dateInput(config) {
        return Teams.post(that.url, dateInputModel(err, config))
      },
      textInput(config) {
        return Teams.post(that.url, textInput(err, config))
      },
      MultichoiceInput(config) {
        return Teams.post(that.url, MultichoiceModel(err, config))
      }
    }
  }

  async send(err, method, nameProject) {
    try { 
      err = typeof err != "object" ? { message: err } : err
      return await Teams.post(this.url, messageModel(err, method, nameProject))
    } catch (err) {
      throw new ValidationError(err)
    }
  }

}

module.exports.teams = function (options) {
  return new Teams(options);
}