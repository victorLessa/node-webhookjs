# Dependências 

* [Axios](https://github.com/axios/axios)

# Instalação


# Exemplo

```js
const { teams } = require('webhook')
// const Webhook = require('webhook')({url: '<URL_WEB_HOOK>'})
// Instance.<method>
```



## Enviar mensagem de texto

```js
function methodName(req, res) {
    try{
    	...
    }catch(error) {
        Webhooks.notifyText(error, method, packageName) // method = nome da função
          .then(result => {...})
          .catch(error => {...})
     }
}
```