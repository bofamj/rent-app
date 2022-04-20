const axios = require("axios");
const getAllBlogs = (req, res) => {
  let item = null;
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
      ({ data }) => {
        /* data.hits.map((items) => {
          item = { ...items };
        }); */
        item = { ...data.hits };
        res.status(200).json(
          data.hits.map((items) => {
            return {
              price: items.price,
              rooms: items.rooms,
              coverPhoto: items.coverPhoto,
              rentFrequency: items.rentFrequency,
              title: items.title,
              baths: items.baths,
              agency: items.agency,
              isVerified: items.isVerified,
              externalID: items.externalID,
              area: items.area,
            };
          })
        );
      },
      (error) => {
        console.log(error);
      }
    );
};

module.exports = {
  getAllBlogs,
};
/*res.status(200).json({
            price: item.price,
            rooms: item.rooms,
            coverPhoto: item.coverPhoto,
            rentFrequency: item.rentFrequency,
            title: item.title,
            baths: item.baths,
            agency: item.agency,
            isVerified: item.isVerified,
            externalID: item.externalID,
            area: item.area,
          });*/
