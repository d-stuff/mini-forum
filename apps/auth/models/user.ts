import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = model('User', UserSchema);

export default User;