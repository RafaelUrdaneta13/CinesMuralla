const express = require('express');
const router = express.Router();
const peliculaController = require('../controllers/peliculaController');

router.get('/', (req, res) => {
    peliculaController.getPeliculas((peliculas, err) => {
        if (err){
            res.json({
                success: false,
                msg: 'ERROR'
            });
        }else{
            res.render('pelicula', {peliculas})     
        }    
    });
});

module.exports = router;