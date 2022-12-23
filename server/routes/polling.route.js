const UserController = require('../controllers/user.controller');
const {authenticate} = require('../config/jwt.config')

module.exports = (app) => {
    app.post('/api/register', UserController.registerUser);
    app.post('/api/login', UserController.loginUser);
    app.get('/api/logout', UserController.logoutUser);

}

const ContenderController = require('../controllers/contender.controller');
 
module.exports = (app) => {
    app.get('/api/view', authenticate, ContenderController.findAllContenders);
    app.post('/api/contender',authenticate,  ContenderController.createContender);
    app.get('/api/selected/contender/:id',authenticate,  ContenderController.findOneContender);
    app.put('/api/:id', authenticate, ContenderController.updateContender);
    app.delete('/api/:id',authenticate, ContenderController.deleteAnExistingContender);
}