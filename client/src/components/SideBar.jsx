
import { Drawer, styled} from '@mui/material';
import Sidebarcontent from './Sidebarcontent';

const StyledDrawer = styled(Drawer)`
    margin-top: 54px;
`
const SideBar = ({toggleDrawer, openDrawer}) => {
  return (
   <StyledDrawer 
   anchor= 'left'
   open={openDrawer}
   onClose={toggleDrawer}
   hideBackdrop={true}
   ModalProps={{
    keepMounted: true
   }}
   variant="persistent"
   sx={{
    '& .MuiDrawer-paper': {
      marginTop: '64px',
      width: '140px',
      background: '#F5F5F5',
      borderRights: 'none',
      height: 'calc(100vh - 64px)'
    }
   }}
   >
   <Sidebarcontent />
   </StyledDrawer>
  )
}

export default SideBar;
