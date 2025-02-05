const mongoose = require('mongoose');
const connectDb = async() => {
    try {
        let conn = await mongoose.connect('mongodb://localhost:27017');
        console.log('Database connected successfully')
    } catch (error) {
        console.log(error, 'could not be onnected to the dataBase')
    }
}
module.exports = connectDb;