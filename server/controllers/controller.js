const User = require('../models/userModel');
const Post = require('../models/postModel');

const controller = {};

controller.postsFeed = (req, res) => {

    Post.find({})
        .populate('user')
        .exec((err, posts) => {
            if (err) return handleError(err);
            return res.json(posts);
        });


};

controller.test2 = (req, res) => {
    Post.findById({ _id: "59b49c85d9118cce447c0110" })
        .populate('user')
        .exec((err, post) => {
            if (err) return handleError(err);
            console.log('The user fname is ', post.user.fname);
        });
};

module.exports = controller;