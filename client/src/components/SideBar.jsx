import { Drawer, styled } from "@mui/material";
import Sidebarcontent from "./sidebarcontent";
const StyledDrawer = styled(Drawer)`
    margin-top: 54px;
`

const SideBar = ({ toggleDrawer, openDrawer }) => {

    return (
        <StyledDrawer
            anchor='left'
            open={openDrawer}
            onClose={toggleDrawer}
            hideBackdrop={true}
            ModalProps={{
                keepMounted: true,
            }}
            variant="persistent"
            sx={{
                '& .MuiDrawer-paper': { 
                    width: 250,
                    borderRight: 'none',
                    background: '#f5F5F5',
                    marginTop: '64px',
                    height: 'calc(100vh - 64px)'
                },
            }}
          >
            <Sidebarcontent />
        </StyledDrawer>
    )
}

export default SideBar;