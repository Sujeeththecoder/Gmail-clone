import { useOutletContext } from "react-router-dom";

const ViewEmail = () => {
    const {openDrawer} = useOutletContext();
    return (
        <div style={
            openDrawer
              ? { marginLeft: 147, marginTop: -51, width: "100%" }
              : { width: "100%" }
          }> Viewemail</div>
    )
    }
export default ViewEmail;