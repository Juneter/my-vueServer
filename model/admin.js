import mongoose from 'mongoose';

const Schema = mongoose.Schema({
    username: String,
    password: String
});

const Admin = mongoose.model('Admin',Schema);

export default Admin