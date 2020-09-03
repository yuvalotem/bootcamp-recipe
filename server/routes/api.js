const express = require('express')
const urllib = require('urllib')
const router = express.Router()

router.get("/sanity", function (req, res) {
    res.send("ok")
})

router.get("/recipes/:ingredient", function (req, res) {
    const ingred = req.params.ingredient
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingred}`, function (err, response) {
        const data = JSON.parse(response).results.map(r=>{  
            return {
            ingredients: r.ingredients,
            title: r.title,
            thumbnail: r.thumbnail,
            href: r.href
          }} )
        res.send(data)
    })
})

module.exports = router