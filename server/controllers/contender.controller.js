const Contender = require('../models/contender.model');

module.exports = {
    createContender:(req, res) => {
        Contender.create(req.body)
            .then(result => res.json(result))
            .catch(err => res.status(400).json(err))
    },
    findOneContender: (req, res) => {
        Contender.findById(req.params.id )
            .then(result => {
                res.json({result})
            })
            .catch(err => response.status(400).json(err))
    
    },
    findAllContenders: (req, res) => {
        Contender.find()
        .then(result => res.json(result))
        .catch(err => res.json(err))
    },
    updateContender: (req,res) => {
        Contender.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then((result) => res.json(result))
        .catch(err => res.status(400).json(err))
    },
    deleteAnExistingContender: (req, res) => {
        Contender.deleteOne( {_id : req.params.id} )
        .then( result=> res.json(result) )
        .catch(err => res.status(400).json(err))
    }
}
