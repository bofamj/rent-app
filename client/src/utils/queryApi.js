import axios from "axios";

export const generalUrl = "https://bayut.p.rapidapi.com";

export const queryData = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      /* "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": "3cace6a128msh3b60c4110624461p16e8f0jsna4e59d6640d6", */
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": "d113ae3111mshd2054838d1cc694p1361f5jsna939c245ff91",
    },
  });

  return data;
};
