import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    color: {
        type: String,
        default: ''
    },
    icons: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    }
});

export const Category = mongoose.model('Category', productSchema);