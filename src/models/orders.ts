import mongoose from 'mongoose';
import { Category } from './category';
import { orderItem } from './orderItem';
import { User } from './user';

const orderSchema = new mongoose.Schema({
    
    name: {
        type: String,
        require: true,
    },
    orderItems: {
        type: orderItem,
        require: true,
    },
    shippingAdress1: {
        type: String,
        require: true,
    },
    shippingAdress2: {
        type: String,
        require: true,
    },
    city: {
        type: String,
        require: true,
    },
    zip: {
        type: String,
        require: true,
    },
    country: {
        type: String,
        require: true,
    },
    phone: {
        type: Number,
        require: true,
    },
    status: {
        type: String,
        require: true,
    },
    totalPrice: {
        type: Number,
        require: true,
    },
    user: {
        type: User,
        require: true,
    },
    dateOrdered: {
        type: Date,
        require: true,
    }
});

export const Orders = mongoose.model('Orders', orderSchema);