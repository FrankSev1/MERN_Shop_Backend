import mongoose from 'mongoose';
import { Category } from './category';

const productsSchema = new mongoose.Schema({
    
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    richDescription: {
        type: String,
        require: true,
    },
    images: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    },
    brand: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    category: {
        type: Category,
        require: true,
    },
    countinStock: {
        type: Number,
        require: true,
    },
    rating: {
        type: Number,
        require: true,
    },
    isFeatured: {
        type: Boolean,
        require: true,
    },
    dateCreated: {
        type: Date,
        require: true,
    },
});

export const Product = mongoose.model('Product', productsSchema);