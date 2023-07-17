import mongoose from 'mongoose';
import { Product } from './product';


const orderItemSchema = new mongoose.Schema({
    
    product: {
        type: Product,
        require: true,
    },
    quality: {
        type: Number,
        require: true,
    }
    
});

export const orderItem = mongoose.model('orderItem', orderItemSchema);