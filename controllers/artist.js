exports.getArtistsByName = (req, res) => {
  const { name } = req.params;
  console.log('name: ', name);
  return res.status(200).json({ message: 'OK' });
};
