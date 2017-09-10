const mongoose = require('mongoose');
const User = require('./server/models/userModel');
const Post = require('./server/models/postModel');

const userNames = ['mroma', 'jwan', 'kdog', 'musty', 'jongy', 'petey'];
const fnames = ['Mark', 'Janelle', 'Ksenia', 'Mustafa', 'Jerry', 'Peter'];
const lnames = ['Romano', 'Wong', 'Babushka', 'Kozh', 'Khan', 'Jong', 'Reyes'];

let post = {
    "category":"scholarship",
    "fields": { 
      "body":  `TheDream.US is the nation’s largest college access and success program for DREAMers.
      We believe that all that DREAMers need is an opportunity. And all we need to do is provide\ them with financial support to attend one of our Partner Colleges, committed to their college completion.`,
      "daca": true,
      "undaca": false,
      "deadline":"3/17/2017",
      "region":"nationwide",
      "school":null,
      "gpa": 2.5,
      "field": "null",
      "link":"www.thedream.us/about-us/",
      "title":"TheDream.US Scholarship",
      "amount": 29000,
      "apply":"http://www.thedream.us/scholarships/national-scholarship/apply/"
    },
    "tags": ['daca', 'nationwide']
  }

mongoose.connect('mongodb://localhost/undocu', () => {
    let _id = "59b4c09dbde98cddf9be5ef1"

    User.findById({ _id  }, (err, user) => {

        if (err) {
            console.log('ERROR CREATING ');
        } else {
            Post.create({ ...post, user:_id}, function (err, post) {
                if (err) return console.log('error!!!!!!!!!!')
                console.log(`created post!`)
                user.posts.push(post._id)
                user.save((err, user) => {
                    return err ? console.log('error!') : console.log(user);
                })

            })
        }
    });

});





