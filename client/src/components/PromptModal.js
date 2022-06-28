import React from "react";
import { Modal, Box, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  boxShadow: 15,
  p: 4,
  borderRadius: 1,
  maxWidth: "95%",
  color: "#222",
};

function PromptModal({ title, openModal, setOpenModal, children }) {
  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography variant="h4" component="h2" textAlign="center">
          {title}
        </Typography>
        {children}
      </Box>
    </Modal>
  );
}

export default PromptModal;
