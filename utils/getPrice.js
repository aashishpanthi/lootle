import axios from "axios";
import * as cheerio from "cheerio";

export const getPrice = async (URL, priceLocation, site) => {
  try {
    const { data } = await axios.get(URL);

    const $ = cheerio.load(data);

    let price = $(priceLocation)
      .text()
      .replace(/([$,₹])/g, "");

    if (site === "flipkart.com") {
      try {
        const { data } = await axios.get(
          "https://api.exchangerate.host/convert?from=INR&to=USD"
        );

        return price * data.result;
      } catch (error) {
        console.log(error);
      }
    }

    return price;
  } catch (error) {
    throw error;
  }
};
