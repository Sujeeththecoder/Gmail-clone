import { useState } from "react";
import { Box, Button, styled, List, ListItem } from "@mui/material";
import { CreateOutlined } from "@mui/icons-material"; // Corrected import statement
import { sidebar_data } from "../config/sidebar.config"; // Corrected import statement
import ComposeMail from "./ComposeMail";
import { useParams, NavLink } from "react-router-dom";
import {routes} from '../routes/routes';

const ComposeButton = styled(Button)({
  background: "#c2e7ff", // Added missing single quotes
  color: "#001d35", // Added missing single quotes
  padding: 15,
  borderRadius: 16,
  minWidth: 140, // Corrected property name
  textTransform: "none",
});
const Container = styled(Box)({
  padding: 8,
  '& > ul': {
    padding: '10px 0 0 5px',
    fontSize: 14,
    fontWeight: 500, 
    cursor: 'pointer',
    '& > a': {
      textDecoration: 'none',
      color: 'inherit'
    },
    '& > ul > a > li > svg':{
      marginRight: 20
    },
  }
})





const SidebarContent = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const {type} = useParams();
  const onComposeClick = () => {
    setOpenDialog(true);
  };
  return (
    <Container>
      <ComposeButton onClick={() => onComposeClick()}>
        <CreateOutlined />
        Compose
      </ComposeButton>
      <List>
        {sidebar_data.map((data) => (
          <NavLink key={data.name} to={`${routes.emails.path}/${data.name}`}>
          <ListItem style={type === data.name.toLowerCase() ? {
            backgroundColor: '#d3e3fd',
            borderRadius: '0 16px 16px 0'
          } : {}}>
            <data.icon fontSize="small" />
            {data.title}
            {/* Added key prop for optimization */}
          </ListItem>
          </NavLink>
        ))}
      </List>
      <ComposeMail openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </Container>
  );
};

export default SidebarContent;
