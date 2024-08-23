const Item = require('../classes/item');
const express = require('express');

const router = express.Router();


// // // // // // // API ROUTES // // // // // // // // 
router.get('', (req, res, next) => {
    try {
        return res.json({ items: Item.all() });
    } catch (err) {
        return next(err)
    }
});




router.post('', (req, res, next) => {
    try {
        let newItem = new Item(req.body.name, req.body.price);
        return res.json({item: newItem});
    } catch (err) {
        return next(err)
    }
});




router.get('/:name', (req, res, next) => {
    try {
        let foundItem = Item.get(req.params.name);
        return res.json({ item: foundItem });
    } catch (err) {
        return next(err)
    }
});




router.patch('/:name', (req, res, next) => {
    try {
        let foundItem = Item.update(req.params.name, req.body);
        return res.json({ item: foundItem });
    } catch (err) {
        return next(err)
    }
});



router.delete('/:name', (req, res, next) => {
    try {
        let toBeDeleted = req.params.name;
        Item.delete(toBeDeleted)
        return res.json({ message: `'${toBeDeleted}' Was Deleted` })
    } catch (err) {
        return next(err)
    }   
})

module.exports = router;