const axios = require("axios");
const getAllBlogs = (req, res) => {
  axios
    .get(
      "https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6",
      {
        headers: {
          "X-RapidAPI-Host": "bayut.p.rapidapi.com",
          "X-RapidAPI-Key":
            "3cace6a128msh3b60c4110624461p16e8f0jsna4e59d6640d6",
        },
      }
    )
    .then(
      (response) => {
        console.log(response.data);
        res.status(200).json(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
};

module.exports = {
  getAllBlogs,
};
