import mongoose from 'mongoose';

const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        default: ''
    }
});

export const Product = mongoose.model('Product', productsSchema);