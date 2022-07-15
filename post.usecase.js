const post = require('../models/post.model')



const create = (postData) => { 
  const newPost = post.create(postData)
  return newPost
}


module.exports = { create }
