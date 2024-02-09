import { useState } from 'react';
import { Box, Button, styled, List, ListItem } from '@mui/material';
import { CreateOutlined } from '@mui/icons-material'; // Corrected import statement
import { sidebar_data } from '../config/sidebar.config'; // Corrected import statement
import ComposeMail from './ComposeMail';

const ComposeButton = styled(Button)({
  background: '#c2e7ff', // Added missing single quotes
  color: '#001d35', // Added missing single quotes
  padding: 15,
  borderRadius: 16,
  minWidth: 140, // Corrected property name
  textTransform: 'none',
});

const SidebarContent = () => {
const [openDialog, setOpenDialog] = useState(false);
const onComposeClick = () =>  {
  setOpenDialog(true);
}  
return (
    <Box>
      <ComposeButton onClick={() => onComposeClick()}>
        <CreateOutlined />
        Compose
      </ComposeButton>
      <List>
        {sidebar_data.map((data) => (
          <ListItem> 
            <data.icon fontSize='small' />{data.title}{/* Added key prop for optimization */}
          </ListItem>
        ))}
      </List>
      <ComposeMail openDialog={openDialog} setOpenDialog= {setOpenDialog}/>
    </Box>
  );
};

export default SidebarContent;
