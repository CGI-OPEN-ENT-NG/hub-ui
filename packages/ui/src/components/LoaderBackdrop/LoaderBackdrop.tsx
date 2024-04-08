import React from "react";
import "./styles.css";

export interface LoaderBackdropProps {}

const LoaderBackdrop: React.FunctionComponent<LoaderBackdropProps> = ({}) => {
  return (
    <div className="cs-loader">
      <div className="cs-loader-inner">
        <label>●</label>
        <label>●</label>
        <label>●</label>
        <label>●</label>
      </div>
    </div>
  );
};

export default LoaderBackdrop;
