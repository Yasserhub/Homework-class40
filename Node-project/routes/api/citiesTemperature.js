
import express from'express';

import { main } from ('./api/api.js')
const router = express.Router();

// const members = require('../../Members');

const cities = main();

console.log("Hello Cities");
console.log(cities);

const nameFilter = req => city => city.name === req.params.name;

// Gets All cities
router.get('/', (req, res) => res.json(cities));

// Get Single cities
router.get('/:name', (req, res) => {
  const found = cities.some(nameFilter(req));

  if (found) {
    res.json(cities.filter(nameFilter(req)));
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.name}` });
  }
});
const app = express();
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'public')));
module.exports = router;