const Property = require("../models/property");
const axios = require("axios");
// const getAllBlogs = async (req, res) => {
//const property = await Property.find();
//res.status(200).json(property);
//};

const getAllBlogs = async (req, res) => {
  axios
    .get("https://bayut.p.rapidapi.com/properties/detail?externalID=5834066", {
      headers: {
        "X-RapidAPI-Host": "bayut.p.rapidapi.com",
        "X-RapidAPI-Key": "3cace6a128msh3b60c4110624461p16e8f0jsna4e59d6640d6",
      },
    })
    .then(
      ({ data }) => {
        res.status(200).json(
          data
          /* data.hits.map((items) => {
            return {
              price: items.url,
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
          } )*/
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

/*let item = null;
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
        
        res.status(200).json(
          data.hits.map((items) => {
            return {
              price: items.url,
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
    );*/
