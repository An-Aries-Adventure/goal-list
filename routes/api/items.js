const express = require('express');
const router = express.Router();


const Item = require("../../models/Item");

//route get request to API/Items//
// get all items//
// Access Public//

router.get('/', (req, res) => {
 Item.find()
 .sort({date: -1})
 .then(items => res.json(items))
}  );


//route post request to API/Items//
// post to items//
// Access Public//

router.post('/', (req, res) => {
   const newItem = new Item({
       name: req.body.name
   });
   newItem.save().then(item => res.json(item));

});

//route delete request to api/Items/:id/
//delete items//
// Access Public//

router.delete('/:id', (req, res) => {
   Item.findById(req.params.id)
   .then(item => item.remove().then(() => res.json({sucsess: true})))
   .catch(err => res.status(404).json({success: false})); 
});

module.exports = router