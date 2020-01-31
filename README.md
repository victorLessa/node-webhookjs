# Dependências 

* [Axios](https://github.com/axios/axios)

# Instalação
```js
  npm i webhook
```

# Exemplo

```js
const { telegram, teams } = require('node-webhookjs')
// Instance.<method>
```

## Enviar mensagem de texto usando o telegram

```js
function methodName(req, res) {
    try{
    	...
    }catch(error) {
        telegram({
          token: '<TOKEN>', 
          chatId: '<CHAT_ID>'})
          .send('Message')
          .then(() => {...})
          .catch(() => {...})
     }
}
```

## Enviar mensagem de texto usando o teams

```js
function methodName(req, res) {
    try{
    	...
    }catch(error) {
        telegram({ url: '<URL>' })
          .send({message: "Teste"}, "nameMethod", "nameProject")
          .then(() => {...})
          .catch(() => {...})
     }
}
```

