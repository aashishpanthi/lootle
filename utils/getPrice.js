import axios from "axios";
import * as cheerio from "cheerio";

export const getPrice = async (URL, priceLocation) => {
  try {
    const response = await axios.get(URL);

    const html = response.data;

    const $ = cheerio.load(html);

    const price = $(priceLocation)
      .text()
      .replace(/([$,])/g, "");

    return price;
  } catch (error) {
    throw error;
  }
};
