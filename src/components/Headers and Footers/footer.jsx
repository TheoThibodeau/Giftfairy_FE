import ProgressBar from "react-bootstrap/ProgressBar";
import { progressValues } from "../Data and Functions/data";


const Footer = ({ activeElement }) => {
    return (

    <ProgressBar
        now={progressValues[activeElement]}
        label={``}
        style={{
        backgroundColor: "white",
        width: "100%",
        opacity: ".75",
        height: "8px",
        }}
    >
    <ProgressBar
        variant="success"
        now={progressValues[activeElement]}
        label={``}
        style={{ background: "#ffa514", height: "8px" }}
        />
    </ProgressBar>

    )
};

export default Footer;