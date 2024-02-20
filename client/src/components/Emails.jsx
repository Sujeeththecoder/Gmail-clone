import { useEffect, useState } from "react";
import { autocompleteClasses } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import { Params, useParams } from "react-router-dom";
import { API_URLS } from "../services/api.urls";
import useApi from "../hooks/useApi";
import { Checkbox, Box, List, ListItem } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Email from "./Email";

const Emails = () => {
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [refreshScreen, setRefreshScreen] = useState(false);
  const { openDrawer } = useOutletContext();
  // console.log(openDrawerr + " newt" + openDrawer);
  const { type } = useParams();
  const getEmailsService = useApi(API_URLS.getEmailFromType);
  const moveEmailsToBinService = useApi(API_URLS.moveEmailsToBin);
  useEffect(() => {
    getEmailsService.call({}, type);
  }, [type, refreshScreen]);
  const selectAllEmails = (e) => {
    if (e.target.checked) {
      const emails = getEmailsService?.response?.map((email) => email._id);
      setSelectedEmails(emails);
    } else {
      setSelectedEmails([]);
    }
  };
  const deleteSelectedEmails = (e) => {
    if (type === "bin") {
    } else {
      moveEmailsToBinService.call(selectedEmails);
    }
    setRefreshScreen((prevState) => !prevState);
  };

  return (
    <Box
      style={
        openDrawer
          ? { marginLeft: 147, marginTop: -51, width: "calc(100% - 250px)" }
          : { width: "100%" }
      }
    >
      <Box
        style={{
          padding: "-11px 10px 0 10px",

          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Checkbox size="small" onChange={(e) => selectAllEmails(e)} />
          <DeleteOutlineIcon onClick={(e) => deleteSelectedEmails(e)} />
        </Box>
      </Box>
      <List>
        {getEmailsService?.response?.map((email) => (
          <Email
            key={email._id}
            email={email}
            selectedEmails={selectedEmails}
          />
        ))}
      </List>
      {/* {getEmailsService?.response?.map((item) => (
        <div>{item._id}</div>
      ))} */}
    </Box>
  );
};
export default Emails;
