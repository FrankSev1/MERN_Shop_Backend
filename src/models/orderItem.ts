import mongoose from 'mongoose';
import { Category } from './category';

const orderItemSchema = new mongoose.Schema({
    
    name: {
        type: String,
        require: true,
    }
    
});

export const orderItem = mongoose.model('orderItem', orderItemSchema);