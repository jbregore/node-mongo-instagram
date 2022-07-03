import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    photo: String,
    createdAt: {
        type: Date,
        default: new Date()
    },

})

userSchema.statics.register = async function (username, password) {

    const isExisting = await this.findOne({ username });
    if (isExisting) {
        throw Error("Username is already registered");
    }

    const salt = await bcrypt.genSalt();
    const profilePhoto = "https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png";

    const hashedPassword = await bcrypt.hash(password, salt);

    const result = await this.create(
        { username, password: hashedPassword, photo: profilePhoto }
    );
    return result;
}

userSchema.statics.login = async function (username, password) {
    const user = await this.findOne({ username });
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw Error("Incorrect password");
    }
    throw Error("Incorrect username");
}

const Users = mongoose.model("Users", userSchema);

export default Users;