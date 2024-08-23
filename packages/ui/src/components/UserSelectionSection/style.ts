import { styled } from "@mui/material";


import { ChipBoxProps } from "./types";

export const wrapperBoxStyle = { width: "100%", display: "flex", flexDirection: "column", gap: ".3rem" ,padding:"1rem",alignItems: "center"};


 
export const paperStyle = {
  position: "absolute",
  marginTop: "0.5rem",
  left: 0,
  right: 0,
  zIndex: 1,
};

export const searchBoxStyle = {
  width: "100%",
  position: "relative",
};

export const seeMoreButtonStyle = {
  fontSize: "0.75rem",
  padding: ".2rem .5rem",
  width: "fit-content",
};

export const ChipBox = styled("div")<ChipBoxProps>(({ theme, isScrollable, isEmpty }) => ({
  boxSizing: "border-box",
  display: "flex",
  flexWrap: "wrap",
  height: "5rem",
  width: "100%",
  gap: ".5rem",
  padding: theme.spacing(1),
  justifyContent: isEmpty ? "center" : "flex-start",
  alignItems: isEmpty ? "center" : "flex-start",
  overflowY: isScrollable ? "auto" : "hidden",
  "&::-webkit-scrollbar": {
    width: "0.4em",
  },
  "&::-webkit-scrollbar-track": {
    boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "rgba(0,0,0,.1)",
    outline: "1px solid slategrey",
  }
}));

