const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let prices = []; // دیتای نمونه

app.get('/prices', (req, res) => {
  res.json(prices);
});

app.post('/prices', (req, res) => {
  prices.push(req.body);
  res.status(201).json({ message: 'Price added' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));