import { useOutletContext } from "react-router-dom";
import { Box, Typography, styled } from '@mui/material';
import { ArrowBack, Delete } from "@mui/icons-material";

// Styled component for the icon wrapper
const IconWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center'
});

const ViewEmail = () => {
    const { openDrawer } = useOutletContext();
    return (
        <Box style={openDrawer ? { marginLeft: 250, width: 'calc(100% - 250px)' } : { width: '100%' } }>
           
            <IconWrapper>
                <ArrowBack fontSize='small' color="action" onClick={() => window.history.back()} />
                <Delete fontSize='small' color="action" style={{ marginLeft: 40 }} />
            </IconWrapper>
            
        </Box>
    );
}

export default ViewEmail;
