const { telegram } = require('../../lib/telegram')


const Telegram = telegram({token: "***", chatId: "***"})
test("envio de mensagem", () => {
  Telegram.send()
})