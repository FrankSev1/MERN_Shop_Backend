import mongoose from 'mongoose';
import { Products } from './product';


const orderItemSchema = new mongoose.Schema({
    
    product: {
        type: Products,
        require: true,
    },
    quality: {
        type: Number,
        require: true,
    }
    
});

export const orderItem = mongoose.model('orderItem', orderItemSchema);