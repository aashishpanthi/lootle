import { Divider, Stack, Typography } from "@mui/material";
import React from "react";

function PreviewWindow({ item }) {
  const { name, site, image, url, type, history, demandPrice, informed } = item;

  return (
    <div className="preview-window">
      <Stack direction="row" alignItems="center" my={2}>
        {type === "product" && (
          <img
            src={image}
            alt={name}
            style={{ maxWidth: "400px", minWidth: "300px", width: "75%" }}
          />
        )}

        <div style={{ minWidth: "300px", marginLeft: "25px", flex: 1 }}>
          <Typography component="h2" variant="h4">
            {name}
          </Typography>

          <Typography component="p" variant="h6" color="Highlight">
            <strong>Your budget: </strong>${demandPrice}
          </Typography>

          <Typography component="h6" variant="body1">
            <strong>Notified: </strong> {informed ? `Yes` : `No`}
          </Typography>

          <Typography component="h6" variant="body1">
            <strong>Site: </strong> {site}
          </Typography>

          <Typography component="p" variant="body2">
            <strong>Link: </strong> <a href={url}>{url}</a>
          </Typography>
        </div>
      </Stack>

      <Divider>
        <Typography component="h2" variant="h4">
          History of price
        </Typography>
      </Divider>
    </div>
  );
}

export default PreviewWindow;
