import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FileUpload from "@mui/icons-material/FileUpload";
import UploadFile from "@mui/icons-material/UploadFile";
import { styled } from "@mui/material/styles";
import type {} from "@mui/material/themeCssVarsAugmentation";
import React from "react";
import {
  useDropzone,
  type DropzoneProps as ReactDropzoneProps,
  type FileWithPath,
} from "react-dropzone";

export interface File extends FileWithPath {}

export interface DropzoneProps extends ReactDropzoneProps {
  information?: string;
}

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.5rem",
  width: "20rem",
  height: "10rem",
  border: "1px dashed",
  borderColor: theme.palette.grey[500],
  borderRadius: 4,
  cursor: "pointer",
}));

const Dropzone: React.FunctionComponent<DropzoneProps> = (
  props: DropzoneProps
) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: props.onDrop,
  });
  const { information } = props;

  return (
    <StyledBox {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <>
          <FileUpload color="primary" />
          <Typography>Déposer les fichiers ici</Typography>
        </>
      ) : (
        <>
          <UploadFile color="primary" />
          <Typography>
            Glisser et déposer des fichiers ici, ou cliquer pour sélectionner
            des fichiers
          </Typography>
          {information ? (
            <Typography fontSize="0.875rem" color="grey">
              {information}
            </Typography>
          ) : null}
        </>
      )}
    </StyledBox>
  );
};

export default Dropzone;
