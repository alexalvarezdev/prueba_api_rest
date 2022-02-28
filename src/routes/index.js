const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  const data = {
    "name": "App",
    "website": "website.com"
  };

  res.json(data);
});

module.exports = router;
