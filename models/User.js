const mongoose = require("mongoose");

// Define the schema for users
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true, // Username is mandatory
    unique: true, // Ensure that the username is unique
  },
  password: {
    type: String,
    required: true, // Password is mandatory
  },
});

// Export the User model for use in other files
module.exports = mongoose.model("User", userSchema);
