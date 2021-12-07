let converter = require('json-2-csv');
const fs = require('fs');

/**
 * Convert JSON object given into CSV
 * @param {*} jsonObject
 * @returns {Promise<string>}
 */
const convertJSONToCSV = async (jsonObject) => {
  try {
    const csv = await converter.json2csvAsync(jsonObject);
    return csv;
  } catch (err) {
    throw err;
  }
};

/**
 * Read a JSON file with a given path and parse it
 * @param {string} filePath
 * @returns {object}
 */
exports.readAndParseJSONFile = (filePath) => {
  const JSONFile = fs.readFileSync(filePath); 
  return JSON.parse(JSONFile);
};

/**
 * Normalize JSON object based on the details given in the test description
 * @param {*} jsonObject
 * @returns {[]}
 */
const normalizeJSON = (jsonObject) => {
  return jsonObject.reduce((acc, cur) => {
    acc.push({
      name: cur.name,
      mbid: cur.mbid,
      url: cur.url,
      image_small: cur.image.find(img => img.size === 'small')['#text'],
      image: cur.image
    });
    return acc;
  }, []);
};

/**
 * Write CSV to a file with a given file name
 * @param {string} fileName
 * @param {string} csv
 * @returns {void}
 */
const writeCSVFile = (fileName, csv) => {
  fs.writeFile(`${fileName}.csv`, csv, function(err) {
    if (err) {
      console.log('Something went wrong during saving the CSV file');
    } else {
      console.log(`${fileName}.csv saved successfully`);
    }
  });
};

/**
 * Convert normalized artists JSON object into CSV
 * @param {[]} artists 
 * @param {string} file_name
 * @returns {Promise<void>}
 */
exports.convertArtistsJSONToCSV = async (artists, fileName) => {
  const normalizedArtists = normalizeJSON(artists);
  const csv = await convertJSONToCSV(normalizedArtists, fileName);
  writeCSVFile(fileName, csv);
};
