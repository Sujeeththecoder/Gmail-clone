import { useEffect } from "react";
import { autocompleteClasses } from "@mui/material";
// import { useOutletContext } from "react-router-dom";
import { Params, useParams } from "react-router-dom";
import { API_URLS } from "../services/api.urls";
import useApi from "../hooks/useApi";
import {Checkbox,Box,List,ListItem} from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Email from "./Email";
const Emails = ({openDrawer}) => {
  // const {openDrawer} = useOutletContext();
  const {type} = useParams();
  const getEmailsService = useApi(API_URLS.getEmailFromType);
  useEffect(()=>{
    getEmailsService.call({},type);
  }, [type])
  return (
    <Box style={ openDrawer ? { marginLeft: 147, marginTop: -51, width: "100%" } : { width: "100%" }}>
      <Box style = {{padding: '-11px 10px 0 10px', display: 'flex', alignItems: 'center' }}>
        <Box>
         <Checkbox size="small"/>
          <DeleteOutlineIcon style = {{padding: '-11px 10px 0 10px'}}/>
        </Box>
      </Box>
      <List>{
        getEmailsService?.response?.map(email => (
          <Email
          key={email._id}
          email={email}/>
        ))
}
      </List>
    </Box>
  );
};
export default Emails;
