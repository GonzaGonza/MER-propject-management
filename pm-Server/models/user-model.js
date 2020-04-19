const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {type: String, required: true, unique:true},
    password: {type: String, required: true },
    email: {type: String, required:true, unique: true },
    projects: [{ type: Schema.Types.ObjectId, ref: "Project" }]
  }, 
  {
    timestamps: {
      createAt: "created_at",
      updated_at: "updated_at"
    }
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;