const CandidateController = require('../controllers/candidate.controller');
const {authenticate} = require('../config/jwt.config')

module.exports = (app) => {
    app.post('/api/candidate', CandidateController.createCandidate);
    app.get('/api/candidate/:id', authenticate, CandidateController.findOneCandidate);
    app.get('/api/candidates', CandidateController.findAllCandidates);
    app.put('/api/vote/:id', authenticate, CandidateController.updateCandidate);
    app.delete('/api/:id', authenticate, CandidateController.deleteAnExistingCandidate);
    app.get('/api/winner', CandidateController.findOneWinner);

}