const Contender = require('../models/polling.model');


module.exports.findOneContender = (req, res) => {
    Vote.findById(req.params.id )
        .then(result => {
            res.json({result})
        })
        .catch(err => response.status(400).json(err))

    }

// grab one JSON object by the id key
// update object
module.exports.updateContender = (req,res) => {
    Contender.updateOne({_id: req.params.id}, req.body, {runValidators: true},{new: true})
        .then((result) => res.json(result))
        .catch(err => response.status(400).json(err))
    }


module.exports.deleteAnExistingContender= ( req, res) => {
    Contender.deleteOne( {_id : req.params.id} )
    .then( result=> res.json(result) )
    .catch(err => response.status(400).json(err))
}

module.exports.findAllContenders = (req, res) => {
    Vote.find()
    .then((result) => {
            res.json({ result})
        })
    .catch(err => response.status(400).json(err));
}


module.exports = {
    create: (request, response) => {
        const { name, pastTermStartDate, pastTermEndDate, party,stance, experience } = request.body;
        Contender.create({
            name: name,
            pastTermStartDate: pastTermStartDate,
            pastTermEndDate: pastTermEndDate,
            party: party,
            stance: stance,
            experience: experience
        })
            .then(user => response.json(contender))
            .catch(err => response.status(400).json(err))
    }
}

