import { Divider, Stack, Typography } from "@mui/material";
import { useState } from "react";
import LineChart from "./LineChart";

function PreviewWindow({ item }) {
  const { name, site, image, url, type, history, demandPrice, informed } = item;

  const [priceHistory, setPriceHistory] = useState({
    labels: history.map((h) => new Date(h.date).toString()),
    datasets: [
      {
        label: "Price ($)",
        data: history.map((h) => h.price),
        pointBackgroundColor: "royalblue",
        borderColor: "gray",
        pointHoverBackgroundColor: "blue",
      },
    ],
  });

  return (
    <div className="preview-window">
      <Stack direction="row" alignItems="center" flexWrap="wrap" my={2}>
        {type === "product" && (
          <img
            src={image}
            alt={name}
            style={{
              maxWidth: "400px",
              minWidth: "300px",
              maxHeight: "275px",
              objectFit: "contain",
              width: "75%",
              margin: "0 auto",
              display: "block",
            }}
          />
        )}

        <div
          style={{
            minWidth: "300px",
            margin: "20px auto",
            marginTop: "20px",
            flex: 1,
          }}
        >
          <Typography component="h1" variant="h5">
            {name}
          </Typography>

          <Typography component="p" variant="h6" color="InfoText">
            <strong>Your budget: </strong>${demandPrice}
          </Typography>

          <Typography component="h6" variant="body1">
            <strong>Notified: </strong> {informed ? `Yes` : `No`}
          </Typography>

          <Typography component="h6" variant="body1">
            <strong>Site: </strong> {site}
          </Typography>

          <Typography component="p" variant="body2" maxWidth="100%">
            <strong>Link: </strong>{" "}
            <a href={url} target="_blank" style={{ maxWidth: "100%" }}>
              {url.substring(0, 100)}...
            </a>
          </Typography>
        </div>
      </Stack>

      <Divider>
        <Typography component="h2" variant="h4">
          History of price
        </Typography>
      </Divider>

      <div style={{ width: "100%", marginTop: "20px" }}>
        <LineChart data={priceHistory} />
      </div>
    </div>
  );
}

export default PreviewWindow;
