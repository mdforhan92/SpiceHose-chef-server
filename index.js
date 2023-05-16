const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const recipes = require('./data/chefData.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('Recipes server is Runing')
  });
  
app.get('/chefData', (req, res) =>{
    res.send(recipes);
})
//specific id data
app.get('/chefData/:id', (req, res) =>{
    const id = req.params.id;
    const selectedChef = recipes.find(n => n.id === id);
    res.send(selectedChef)
})

app.listen(port, () => {
    console.log(`Recipes API is running on Port: ${port}`)
})