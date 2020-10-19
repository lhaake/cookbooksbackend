// import express
const express = require('express')
const router = express.Router()

// import the db connection
const mongoose = require("../db/connection")

// import the Author model
const Author = require("../models/Author")

// Write the route to list all authors
// index 
router.get('/', async (req, res) => {
   const allAuthors = await Author.find({})
    res.json({
            status: 200,
            data: allAuthors
        })
})

// Write the route to get authors by firstname
// show - returns a single thing
router.get('/:firstname', async (req, res) => {
    const authorFirstName = await Author.find({firstName: req.params.firstname })
        res.json({
			status: 200,
			data: authorFirstName 
        })
})

// Write the route to create an author:
// create - create a single thing
router.post('/', async (req, res) => {
    const author = await Author.create(req.body)
            res.json({
                status: 200,
                data: author
            })
         console.log("post-author", author)
})

// Write the route to update an author
// put - update a single thing
router.put('/:id', async (req, res) => {
   const author = await Author.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json({
            status: 200,
            msg: 'item update',
            data: author
        })
})

// Update the cookbook using Postman.

// Bonus: Write the route to delete cookbooks by author name. (hint: There are a couple on different ways to do this and you may have to change/add code in other files)


module.exports = router