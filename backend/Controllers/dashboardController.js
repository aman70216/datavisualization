const DashboardItem = require('../model/dashboard');

exports.getAllItems = async (req, res) => {
  try {
    const items = await DashboardItem.find();
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

exports.getIntensity = async (req, res) => {
    try {
      const intensities = await DashboardItem.distinct('intensity');
      res.json(intensities);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  };

  exports.getLikelihood = async (req, res) => {
    try {
      const likelihoods = await DashboardItem.distinct('likelihood');
      res.json(likelihoods);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  };

  exports.getRelevance = async (req, res) => {
    try {
      const relevances = await DashboardItem.distinct('relevance');
      res.json(relevances);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  };

  exports.getCountry = async (req, res) => {
    try {
      const countries = await DashboardItem.distinct('country');
      res.json(countries);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  };
  
  exports.getTopics = async (req, res) => {
    try {
      const topics = await DashboardItem.distinct('topic');
      res.json(topics);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  };

  exports.getRegion = async (req, res) => {
    try {
      const regions = await DashboardItem.distinct('region');
      res.json(regions);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  };

  exports.getCity = async (req, res) => {
    try {
      const cities = await DashboardItem.distinct('city');
      res.json(cities);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  };

 // Dashboard Controller
exports.getByEndYear = async (req, res) => {
    const { endYear } = req.params;
    try {
      const items = await DashboardItem.find({ end_year: endYear });
      res.json(items);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  };
  
  exports.getBySector = async (req, res) => {
    const { sector } = req.params;
    try {
      const items = await DashboardItem.find({ sector: sector });
      res.json(items);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  };

  exports.getByRegion = async (req, res) => {
    const { region } = req.params;
    try {
      const items = await DashboardItem.find({ region });
      res.json(items);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  };  

  exports.getByTopic = async (req, res) => {
    const { topic } = req.params;
    try {
      const items = await DashboardItem.find({ topic: topic });
      res.json(items);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  };

  exports.getByPEST = async (req, res) => {
    const { pest } = req.params;
    try {
      const items = await DashboardItem.find({ pestle: pest });
      res.json(items);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  };
  exports.getBySource = async (req, res) => {
    const { source } = req.params;
    try {
      const items = await DashboardItem.find({ source: source });
      res.json(items);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  };

  exports.getBySWOT = async (req, res) => {
    const { swot } = req.params;
    try {
      const items = await DashboardItem.find({ swot: swot });
      res.json(items);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  };