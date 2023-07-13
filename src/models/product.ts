import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        default: ''
    }
});

export const Product = mongoose.model('Product', productSchema);