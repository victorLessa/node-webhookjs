
jest.mock('axios');
const axios = require('axios');

const {teams} = require('../../lib/teams')

const Teams = teams({url: "https://outlook.office.com/webhook/37599f65-a861-4e92-967e-8c0344e66e98@3e3b727e-1a2f-4771-8553-f7dfb8aaeda5/IncomingWebhook/af3ffd11493143d6a5bfd8e03b6532b2/d83ef4ee-7c6e-463e-9f1f-bf90682d77d5"})

test("envio de mensagem", async () => {
  axios.post.mockImplementation(() => Promise.resolve(1))
  await expect(Teams.notifyText('mensagem de erro', 'Name Metodo', 'Name projeto')).resolves.toEqual(1);
})