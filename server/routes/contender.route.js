const ContenderController = require('../controllers/contender.controller');
const {authenticate} = require('../config/jwt.config')

module.exports = (app) => {
    app.post('/api/contender',authenticate, ContenderController.createContender);
    app.get('/api/selected/contender/:id', authenticate, ContenderController.findOneContender);
    app.get('/api/contender', ContenderController.findAllContenders);
    app.put('/api/vote/:id', authenticate, ContenderController.updateContender);
    app.delete('/api/:id', authenticate, ContenderController.deleteAnExistingContender);

}