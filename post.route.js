const { create } = require("../usecases/post.usecase");
const express = require("express");

const router = express.Router();

router.post("/crear/", async (request, response) => {
  const { body } = request;
  const post = await create(body);
  response.status(201);
  response.json({
    success: true,
    data: {
      post,
    },
  });
});

module.exports = router;
