const express = require('express');
const db = require('../database/db');
const router = express.Router();

router.get('/videojuegos', async (req, res) => {
    try {
        db.query('SELECT * FROM videojuegos', (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Server error' });
            } else {
                res.json(results);
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

router.post('/videojuegos/agregar', async (req, res) => {
    const formData = req.body;
    const values = [
        formData.fecha_lanzamiento,
        formData.nombre,
        formData.precio,
        formData.plataforma,
        formData.url_imagen,
      ];

    db.query('INSERT INTO videojuegos (fecha_lanzamiento, nombre, precio, plataforma, url_imagen) VALUES (?, ?, ?, ?, ?)', values, (err, result) => {
        if (err) {
          console.error('Error inserting data:', err);
          res.status(500).json({ error: 'Server error' });
        } else {
          res.json({ message: 'Data inserted successfully' });
        }
      });
});

module.exports = router;