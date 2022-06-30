import { useEffect, useState } from "react";
import PreviewWindow from "./PreviewWindow";
import PromptModal from "./PromptModal";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import axios from "axios";

const columns = [
  {
    id: "name",
    label: "Name",
    minWidth: 170,
  },
  { id: "site", label: "Site", minWidth: 100 },
  {
    id: "type",
    label: "Type",
    minWidth: 100,
  },
  {
    id: "informed",
    label: "Informed",
    minWidth: 70,
  },
  {
    id: "action",
    label: "Action",
    minWidth: 170,
    align: "center",
  },
];

function createData(name, site, type, informStatus) {
  const informed = informStatus ? `Yes` : `No`;
  return { name, site, type, informed };
}

const AllTracks = ({ items, toast, setItems }) => {
  const [previewItem, setPreviewItem] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const data = items.map(({ name, site, type, informed }) =>
      createData(name, site, type, informed)
    );

    setRows(data);
  }, [items]);

  const handleItemPreview = (item) => {
    setPreviewItem(item);
    setOpenModal(true);
  };

  const handleDeleteItem = async (item) => {
    try {
      await axios.delete(`/api/tracks/${item._id}`);
      console.log(items);

      toast({
        open: true,
        message: "Deleted the tracker",
      }); // open a toast

      setItems(items.filter((i) => i !== item));
    } catch (error) {
      console.log(error);
    }
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <PromptModal
        title={`Tracks of ${previewItem?.name.substring(0, 15)}...`}
        openModal={openModal}
        handleCloseModal={handleCloseModal}
      >
        <PreviewWindow item={previewItem} />
      </PromptModal>
      <Paper
        sx={{ maxWidth: "1000px", padding: "10px 20px", overflow: "hidden" }}
      >
        <Typography component="h1" variant="h5" marginY={5} textAlign="center">
          Your all tracks
        </Typography>
        <TableContainer sx={{ maxHeight: 540 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, rowIndex) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.name}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id === "action" ? (
                              <>
                                <IconButton
                                  aria-label="delete"
                                  size="large"
                                  onClick={() =>
                                    handleDeleteItem(items[rowIndex])
                                  }
                                >
                                  <DeleteIcon fontSize="inherit" />
                                </IconButton>
                                <IconButton
                                  aria-label="info"
                                  size="large"
                                  onClick={() =>
                                    handleItemPreview(items[rowIndex])
                                  }
                                >
                                  <InfoIcon fontSize="inherit" />
                                </IconButton>
                              </>
                            ) : (
                              value
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default AllTracks;
