const router = require('express').Router();

const ArtistController = require('../../../controllers/artist');

router.get('/:name', ArtistController.getArtistsByName);

module.exports = router;
