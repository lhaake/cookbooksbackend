const express = require('express')
const router = express.Router()

// import the db connection
const mongoose = require("../db/connection")

// import the Cookbook model
const Cookbook = require("../models/Cookbook")

// Require the Cookbook controller. ?? Confused by this - maybe require Cookbook model?

// Write the route to list all cookbooks
router.get('/', async (req, res) => {
   const allCookbooks = await Cookbook.find({})
    res.json({
            status: 200,
            data: allCookbooks
        })
})

// Write the route to get cookbook by title
// show - returns a single thing
router.get('/:title', async (req, res) => {
    const title = await Cookbook.find( {title: req.params.title } )
        res.json({
			status: 200,
			data: title
        })
})

// Write the route to get cookbook by year published
router.get('/year/:year', async (req, res) => {
        const publishYear = await Cookbook.find({ yearPublished: req.params.year })   
        res.json({
			status: 200,
			data: publishYear
        })
})

// Write the route to create a cookbook
router.post('/', async (req, res) => {
    const cookbook = await Cookbook.create(req.body)
            res.json({
                status: 200,
                data: cookbook
            })
         console.log("post- cookbook", cookbook)
})

// Write the route to update a cookbook
router.put('/:id', async (req, res) => {
   const cookbook = await Cookbook.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json({
            status: 200,
            msg: 'item update',
            data: cookbook
        })
})

// Write the route to delete the cookbook by title
router.delete('/:title', async (req, res) => {
    const cookbook = await Cookbook.deleteOne({title: req.params.title})
            res.json({
                status: 200,
                msg: 'item deleted'
            })
})

module.exports = router;