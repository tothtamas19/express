const Router = require('express');
const router = Router();

router.get('/employees', (req, res) => {
    res.json({uzenet: 'Változtatva'})
});

router.post('/employees', (req, res) => {
    res.json({uzenet: 'Post metódus működik'})
});

router.put('/employees/:id', (req, res) => {
    res.json({uzenet: 'Put metódus működik'})
});

router.delete('/employees/:id', (req, res) => {
    res.json({uzenet: 'Delete metódus működik'})
});

module.exports = router;