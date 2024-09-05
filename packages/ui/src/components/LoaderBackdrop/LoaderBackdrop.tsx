import Box from "@mui/material/Box";
import "./styles.css";

export interface LoaderBackdropProps {}

const LoaderBackdrop: React.FunctionComponent<LoaderBackdropProps> = ({}) => {
  return (
    <Box className="cs-loader-backdrop" color="primary.main">
      <Box className="cs-loader-backdrop-inner">
        <label>●</label>
        <label>●</label>
        <label>●</label>
        <label>●</label>
      </Box>
    </Box>
  );
};

export default LoaderBackdrop;
