import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({
    
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    passwordHash: {
        type: String,
        require: true,
    },
    street: {
        type: String,
        require: true,
    },
    apartment: {
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
    }
    
});

export const User = mongoose.model('User', UserSchema);