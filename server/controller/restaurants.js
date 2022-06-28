const axios = require('axios');

module.exports = {
  getRestaurants: function (req, res) {
    // console.log('we made it');

    // console.log('req.body', req.body);
    console.log('req.query', req.query);
    const { latitude, longitude, limit, term, attributes, price } = req.query;
    // console.log('req.params', req.params);
    // const qsq = new URLSearchParams(req.query);
    // const qsp = new URLSearchParams(req.params);
    // console.log('qsq', qsq);
    // console.log('qsp', qsp);

    // console.log(`https://api.yelp.com/v3/businesses/search?${qsq}`,     );
    // console.log(
    //   'latitude, longitude, limit, term, attributes, price',
    //   latitude,
    //   longitude,
    //   limit,
    //   term,
    //   attributes,
    //   price,
    // );

    const config = {
      headers: {
        Authorization: 'Bearer ' + process.env.YELP_API_KEY,
      },
    };

    res.header('Access-Control-Allow-Origin', '*');
    axios
      .get(
        `https://api.yelp.com/v3/businesses/search?term=${term}&latitude=${latitude}&longitude=${longitude}&limit=${limit}&price=${price}&attributes=${attributes}`,
        config,
      )
      .then((APIresponse) => {
        console.log('success');
        // console.log('APIdata', (APIresponse.data));
        res.send(APIresponse.data);
      })
      .catch((error) => {
        console.log('error', error);
        res.status(500).send(error);
      });
  },
  getTags: function (req, res) {
    // console.log('req.query', req.query);
    const { latitude, longitude, limit } = req.query;

    console.log(
      'latitude, longitude, limit',
      latitude,
      longitude,
      limit,
    );

    const config = {
      headers: {
        Authorization: 'Bearer ' + process.env.YELP_API_KEY,
      },
    };

    res.header('Access-Control-Allow-Origin', '*');
    axios
      .get(
        `https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}&limit=${limit}`,
        config,
      )
      .then((APIresponse) => {
        console.log('success');
        // console.log('APIdata', (APIresponse.data));
        res.send(APIresponse.data);
      })
      .catch((error) => {
        console.log('error', error);
        res.status(500).send(error);
      });
  },
};
