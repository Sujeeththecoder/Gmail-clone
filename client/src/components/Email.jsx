

import { Box, Typography, Checkbox } from "@mui/material";
import { StarBorder, Star } from '@mui/icons-material';

const Email = ({email}) => {
    return(
       <Box>

      <StarBorder />
      <StarBorder />
      <StarBorder />
      <StarBorder />
      <StarBorder />
       <Typography>{email.name}</Typography>
       </Box>
    )
}
export default Email;