import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({
    
    name: {
        type: String,
        require: true,
    }
    
});

export const User = mongoose.model('User', UserSchema);