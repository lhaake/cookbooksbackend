//import connection
const mongoose = require("../db/connection.js")

// IMPORT THE SCHEMA CLASS
const Schema = mongoose.Schema

// INSTANTIATE A NEW INSTANCE OF THE SCHEMA CLASS
const cookbookSchema = new Schema(
    {
		title: { type: String, required: true},
        yearPublished: { type: Number, required: true}
	}
)

// CREATE THE MODEL AND ASSOCIATE IT WITH A SCHEMA
const Cookbook = mongoose.model("Cookbook", cookbookSchema)

/* Create Cookbook as new schema
    Properties:
    title (string),
    yearPublished (integer),
*/

//export model
module.exports = Cookbook