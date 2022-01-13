const express = require('express');
const router = express.Router();


router.get('/', (req, res) =>{
    //res.sendFile(path.join(__dirname, 'views/index.html'));
    res.render('index.html', {tittle: 'Web Node Pract'});

});

router.get('/contact', (req, res) =>{
    //res.sendFile(path.join(__dirname, 'views/index.html'));
    res.render('contact.html', {tittle: 'contact page'});

});

module.exports = router;