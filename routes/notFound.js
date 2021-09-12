const router = require('express').Router();

router.all('*', (req, res) => res.status(404).send({ message: 'Запрашиваемая страница не найдена' }));

module.exports = router;
