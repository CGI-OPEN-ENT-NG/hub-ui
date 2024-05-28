import React from "react";
import "./styles.css";

export interface LoaderBackdropProps {}

const LoaderBackdrop: React.FunctionComponent<LoaderBackdropProps> = ({}) => {
  return (
    <div className="cs-loader-backdrop">
      <div className="cs-loader-backdrop-inner">
        <label>●</label>
        <label>●</label>
        <label>●</label>
        <label>●</label>
      </div>
    </div>
  );
};

export default LoaderBackdrop;
