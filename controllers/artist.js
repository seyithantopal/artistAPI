const axios = require('axios');

exports.getArtistsByName = async (req, res) => {
  try {
    const { name } = req.params;
    const params = {
      method: 'artist.search',
      artist: name,
      api_key: process.env.API_KEY,
      format: 'json',
    };
    console.log('process.env.API_KEY: ', process.env.API_KEY);
    const { data : { results: { artistmatches: artists } } } = await axios.get(`http://ws.audioscrobbler.com/2.0/?`, { params });
    return res.status(200).json({ message: 'OK', artists });
  } catch (err) {
    return res.status(400).json({ message: `Something went wrong during fetching artists: ${err}` });
  }
};
