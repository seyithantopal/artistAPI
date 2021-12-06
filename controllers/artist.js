const axios = require('axios');

exports.getArtistsByName = async (req, res) => {
  const { name } = req.params;
  const { data : { results: { artistmatches: artists } } } = await axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=cher&api_key=5f58053a70355a15c3bc170df9146d3e&format=json`)
  return res.status(200).json({ message: 'OK', artists });
};
