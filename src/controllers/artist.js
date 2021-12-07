const axios = require('axios');
const common = require('../utils/common');


/**
 * Fetch artists
 * @param {string} artist_name 
 * @returns {Promise<[]>}
 */
const fetchArtists = async (artist_name) => {
  try {
    const params = {
      method: 'artist.search',
      artist: artist_name,
      api_key: process.env.API_KEY,
      format: 'json',
    };
    const { data : { results: { artistmatches: { artist: artists } } } } = await axios.get(`http://ws.audioscrobbler.com/2.0/?`, { params });
    return artists;
  } catch (err) {
    return `Something went wrong during fetching artists: ${err}`;
  }
};

exports.getArtistsByName = async (req, res) => {
  try {
    const { artist_name, file_name } = req.params;

    const artists = await fetchArtists(artist_name);
    if (!artists.length) {
      const readFile = common.readAndParseJSONFile('./src/utils/mockArtistData.json');
      return res.status(200).json({ message: 'OK', data: readFile });
    }
    await common.convertArtistsJSONToCSV(artists, file_name);
    return res.status(200).json({ message: 'OK', data: artists });
  } catch (err) {
    return res.status(400).json({ message: `Something went wrong during getting artists by name: ${err}` });
  }
};
