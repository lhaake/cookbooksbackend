//Import connection
const mongoose = require("../db/connection.js")

// IMPORT THE SCHEMA CLASS
const Schema = mongoose.Schema

// INSTANTIATE A NEW INSTANCE OF THE SCHEMA CLASS
const authorSchema = new Schema(
    {
		firstName: { type: String, required: true},
        lastName: { type: String, required: true},
        cookbooks: [
            {
                ref: "Cookbook",
                type: mongoose.Schema.Types.ObjectId
            }
        ]
	}
)

// CREATE THE MODEL AND ASSOCIATE IT WITH A SCHEMA
const Author = mongoose.model("Author", authorSchema)

/* Create Author as new schema
    properties:
    firstName (string),
    lastName (string),
    cookbooks[] (reference to Cookbook model by id)
*/

//export model named "Author"
module.exports = Author