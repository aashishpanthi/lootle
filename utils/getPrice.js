import axios from "axios";
import * as cheerio from "cheerio";

export const getPNI = async (URL, site) => {
  const { priceLocation, nameLocation, imageLocation, type } = site;

  try {
    const { data } = await axios.get(URL);

    const $ = cheerio.load(data);
    let image;

    let name = $(nameLocation)
      .text()
      .trim()
      .replace(/(<([^>]+)>)/gi, "");

    console.log(name);

    let price = Number(
      $(priceLocation)
        .text()
        .replace(/([$,₹])/g, "")
    );

    console.log(price);

    if (site.name == "flipkart.com") {
      try {
        const { data } = await axios.get(
          "https://api.exchangerate.host/convert?from=INR&to=USD"
        );

        price = price * data.result;
      } catch (error) {
        console.log(error);
      }
    }

    if (type === "product") {
      image = $(imageLocation).attr("src");

      console.log(image);
    }

    return { price, name, image };
  } catch (error) {
    throw error;
  }
};
