import React from "react";

export interface LoaderBackdropProps {}

const LoaderBackdrop: React.FunctionComponent<LoaderBackdropProps> = ({}) => {
  return (
    <div className="cs-loader">
      <div className="cs-loader-inner">
        <label>●</label>
        <label>●</label>
        <label>●</label>
        <label>●</label>
        <label>●</label>
        <label>●</label>
      </div>
    </div>
  );
};

export default LoaderBackdrop;
