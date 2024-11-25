import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from 'react';
import {
  useDropzone,
  type DropzoneProps as ReactDropzoneProps,
} from "react-dropzone";

export type ImagePickerProps = {
  defaultLabel?: string;
  dragLabel?: string;
  information?: string;
  onFileChange?: (file: File | null) => void;
} & ReactDropzoneProps;

const ImagePicker: React.FunctionComponent<ImagePickerProps> = ({
  defaultLabel = "Glissez-déposez ou cliquez pour choisir une image",
  dragLabel = "Glissez une image",
  information = "PNG, JPEG, GIF, JPG",
  onFileChange = (file: File | null) => {},
  ...otherProps
}) => {
  const [currentFile, setCurrentFile] = useState<File | null>(null);

  const handleDrop = (acceptedFiles: File[]) => {
    const selectedFile = acceptedFiles[0] || null;
    setCurrentFile(selectedFile);
    onFileChange(selectedFile);
  };

  const handleDelete = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setCurrentFile(null);
    onFileChange(null);
  };

  const handleEdit = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    open();
  }

  const { open, getRootProps, getInputProps, isDragActive } = useDropzone({
    ...otherProps,
    maxFiles: 1, 
    onDropAccepted: handleDrop, 
    accept: {
      "image/*": [".png", ".jpeg", ".jpg", ".gif"],
    },
    noClick: true,
  });

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      width="100%"
      minWidth="200px"
      padding={1}
      border="1px dashed"
      borderColor="grey.main"
      borderRadius={1}
      sx={{
        cursor: "pointer",
      }}
      {...getRootProps({
        onClick: open
      })}
    >
      <input {...getInputProps()} />
      {!currentFile ? (
        <>
          {isDragActive ? (
            <>
              <AddPhotoAlternateIcon color="primary" />
              <Typography textAlign="center">{dragLabel}</Typography>
            </>
          ) : (
            <Box sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "0.5rem",
              gap: "0.5rem"
            }}>
              <AddPhotoAlternateIcon color="primary" style={{
                width: "2.5rem",
                height: "2.5rem",
              }}/>
              <Typography textAlign="center">{defaultLabel}</Typography>
              {information && (
                <Typography textAlign="center" fontSize="0.875rem" color="grey">
                  {information}
                </Typography>
              )}
            </Box>
          )}
        </>
      ) : (
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              top: "0.5rem",
              right: "0.5rem",
              display: "flex",
              gap: "0.5rem",
            }}
          >
            <Box
              onClick={handleEdit}
              sx={{
                backgroundColor: "white",
                display: "flex",
                borderRadius: "3px",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: 1,
                width: "2rem",
                height: "2rem",
                cursor: "pointer",
              }}
            >
              <CreateIcon fontSize="small"/>
            </Box>
            <Box
              onClick={handleDelete}
              sx={{
                backgroundColor: "white",
                display: "flex",
                borderRadius: "3px",
                alignItems: "center",
                boxShadow: 1,
                justifyContent: "center",
                width: "2rem",
                height: "2rem",
                cursor: "pointer",
              }}
            >
              <DeleteIcon fontSize="small" />
            </Box>
          </Box>
          <img
            src={URL.createObjectURL(currentFile)}
            alt={currentFile.name}
            style={{
              width: "100%",
              height: "auto",
              minWidth: "100px",
              maxWidth: "300px",
              maxHeight: "300px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </Box>
      )}
    </Stack>
  );
};

export default ImagePicker;
