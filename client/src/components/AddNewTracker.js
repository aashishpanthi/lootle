import PlusIcon from "@mui/icons-material/Add";
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
} from "@mui/material";

import { LoadingButton } from "@mui/lab";

import SearchIcon from "@mui/icons-material/SearchSharp";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";

import { useState, useContext } from "react";
import PromptModal from "./PromptModal";
import { UserContext } from "../UserContext";

const AddNewTracker = ({ className }) => {
  const user = useContext(UserContext);

  const [allSubmitLoading, setAllSubmitLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);

  const [openModal, setOpenModal] = useState(false);
  const [isURLSupported, setIsURLSupported] = useState(false);
  const [details, setDetails] = useState({
    url: "",
    demandPrice: 0,
  });

  const handleDetails = (e) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //check state
    if (isURLSupported) {
      setAllSubmitLoading(true);

      //check the demand price and validate
      if (details.demandPrice < 1) {
        //Notify user about their wrong price input
        alert("Please enter the valid amount");
      } else {
        //make a final object
        const finalObject = {
          ...details,
          user: user.email,
        };

        //save the data
        //axios.post(finalObject)

        alert(
          `You will be notified via email when price of your ${details.type} drops below $${details.demandPrice}`
        );
        handleCloseModal();
      }
    } else {
      //show button loading
      setSearchLoading(true);

      //check URL
      let match = details.url.match(
        /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/im
      );

      let site = match[1];

      console.log(site);

      if (
        site == "amazon.com" ||
        site == "alibaba.com" ||
        site == "daraz.com.np" ||
        site == "flipkart.com"
      ) {
        //update state
        setIsURLSupported(true);
        setDetails({ ...details, site, type: "product" });
      } else if (site == "marketwatch.com" || site == "bloomberg.com") {
        //update state
        setIsURLSupported(true);
        setDetails({ ...details, site, type: "stock" });
      } else {
        alert("Site not supported");
      }

      //turnoff button loading
      setSearchLoading(false);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setIsURLSupported(false);
    setDetails({
      url: "",
      demandPrice: 0,
    });
    setSearchLoading(false);
    setAllSubmitLoading(false);
  };

  return (
    <div className={`new-tracker ${className}`}>
      <PromptModal
        title="Track the price"
        openModal={openModal}
        handleCloseModal={handleCloseModal}
      >
        <form onSubmit={handleSubmit}>
          <FormControl sx={{ my: 1 }} fullWidth disabled={isURLSupported}>
            <InputLabel htmlFor="product-url">Link of the product</InputLabel>
            <OutlinedInput
              style={{ flex: 1, minWidth: "300px", marginRight: "10px" }}
              id="product-url"
              name="url"
              value={details.url}
              onChange={handleDetails}
              type="url"
              pattern="https://.*"
              required
              endAdornment={
                <LoadingButton
                  loading={searchLoading}
                  disabled={isURLSupported}
                  startIcon={<SearchIcon />}
                  variant="text"
                  type="submit"
                  size="large"
                ></LoadingButton>
              }
              label="Link of the product"
            />
          </FormControl>

          {isURLSupported && (
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              my={2}
            >
              <FormControl sx={{ mr: 2 }} fullWidth>
                <InputLabel htmlFor="product-new-price">
                  Price below which you will buy it
                </InputLabel>
                <OutlinedInput
                  id="product-new-price"
                  name="demandPrice"
                  type="number"
                  value={details.demandPrice}
                  onChange={handleDetails}
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  label="Amount below which you will buy"
                />
              </FormControl>
              <LoadingButton
                loading={allSubmitLoading}
                startIcon={<ContentPasteSearchIcon />}
                variant="contained"
                type="submit"
                style={{ padding: "15px 30px" }}
                color="primary"
              >
                Track
              </LoadingButton>
            </Stack>
          )}
        </form>
      </PromptModal>

      <Button
        variant="outlined"
        size="large"
        startIcon={<PlusIcon fontSize="inherit" />}
        color="secondary"
        onClick={() => setOpenModal(true)}
      >
        Add new tracker
      </Button>
    </div>
  );
};

export default AddNewTracker;
