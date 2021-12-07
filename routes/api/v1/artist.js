const router = require('express').Router();

const ArtistController = require('../../../controllers/artist');

router.get('/:artist_name/:file_name', ArtistController.getArtistsByName);

module.exports = router;
