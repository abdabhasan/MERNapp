const axios = require("axios");

exports.getAutocompleteSuggestions = async (req, res) => {
  try {
    const { data } = await axios.get(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json`,
      {
        params: {
          input: req.query.address,
          components: "country:us",
          key: process.env.GOOGLE_PLACES_API_KEY,
        },
      }
    );
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
