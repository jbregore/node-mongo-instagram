import Posts from "../models/postsModel.js";

const reqPath = "http://localhost:5000/posts/";

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new Posts(
        {
            ...post,
            creator: req.body.userId,
            createdAt: new Date().toISOString()
        }
    );

    try {
        await newPost.save();
        res.status(201).json({ data: newPost });
    } catch (e) {
        res.status(409).json({ message: e.message });
    }
}

export const getAllPost = async (req, res) => {
    try {
        // const LIMIT = 2;
        // const startIndex = (Number(page) - 1) * LIMIT;
        // const total = await PostMessage.countDocuments({});

        // const posts = await PostMessage.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);
        // const posts = await Posts.find();

        // res.status(200).json({ data: posts });

        res.status(201).json({ data: users });

    } catch (e) {
        res.status(404).json({ message: e.message });
    }
}

export const imgUpload = async (req, res) => {
    try {

        // image upload 
        var imgUrl = "";
        if (req.file) var imgUrl = `storage/images/${req.file.filename}`;

        let getImageName = imgUrl.match(/\/([^\/?#]+)[^\/]*$/);
        res.status(201).json({
            photoUrl: `${reqPath}${getImageName[1]}`
        });
    } catch (e) {
        res.status(404).json({ message: e.message });
    }
}

