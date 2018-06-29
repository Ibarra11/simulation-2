module.exports = {
    getAllHouses: (req,res) =>{
        req.app.get('db').getAllHouses()
        .then(houses => res.send(houses))
        .catch((err) => res.status(500).send(err))
    },
    addHouse: (req,res) =>{
        let {name, address, city, state, zip, img, mortgage, rent} = req.body;
        req.app.get('db').addHouse([name, address, city, state, zip, img, mortgage, rent])
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    },
    deleteHouse: (req, res) =>{
        let {id} = req.params;
        req.app.get('db').deleteHouse([id])
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    }
}