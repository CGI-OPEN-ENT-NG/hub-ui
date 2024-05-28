import React from "react";
import "./styles.css";

export interface LoaderProps {}

const Loader: React.FunctionComponent<LoaderProps> = ({}) => {
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

export default Loader;
