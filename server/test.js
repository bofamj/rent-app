require("dotenv").config();
const axios = require("axios");

const connectDB = require("./db/connect");

const property = require("./models/property");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    //await product.deleteMany()
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
          property.create(
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

    console.log("success ");
  } catch (error) {
    console.log(error);
  }
};
start();
