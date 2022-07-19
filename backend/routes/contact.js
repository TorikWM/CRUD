const express=require('express');
const { getAllContacts, updateContact, getOneContacts,addContact,deleteContact } = require('../controllers/contactController');
const router=express.Router();


// add new  contact
// method post
// req.body
router.post('/addcontact', addContact);
// get all contacts
// method get
router.get('/allcontacts', getAllContacts)
// remove contacts
// method delete
//req.params
router.delete('/deleteContact/:id', deleteContact);
// update contact
// method put
// req.body
// req.params
router.put('/updateContact/:id', updateContact)
// get one contact
// method get
//req.params
router.get('/getOneContact/:id', getOneContacts)
module.exports = router;
