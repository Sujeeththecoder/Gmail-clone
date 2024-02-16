import { autocompleteClasses } from "@mui/material";
// import { useOutletContext } from "react-router-dom";

const Emails = ({openDrawer}) => {
  // const {openDrawer} = useOutletContext();
  return (
    <div
      style={
        openDrawer
          ? { marginLeft: 147, marginTop: -51, width: "100%" }
          : { width: "100%" }
      }
    >
      Emails
    </div>
  );
};
export default Emails;
