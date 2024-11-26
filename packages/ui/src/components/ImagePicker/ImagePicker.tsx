import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FC, ReactNode, useState } from 'react';
import {
  useDropzone,
  type DropzoneProps as ReactDropzoneProps,
} from "react-dropzone";

export type ImagePickerProps = {
  defaultLabel?: ReactNode;
  dragLabel?: ReactNode;
  information?: string;
  onFileChange?: (file: File | null) => void;
  width?: string;
  height?: string;
} & ReactDropzoneProps;

const ImagePickerDefaultLabel: FC = () => (
  <Typography textAlign="center">
    <Box component="span" fontWeight="bold">Glissez-déposez</Box> ou <Box component="span" fontWeight="bold">cliquez</Box> pour choisir une image
  </Typography>
)

const ImagePickerDefaultDragLabel: FC = () => (
  <Typography textAlign="center">
    <Box component="span" fontWeight="bold">Glissez</Box> une image
  </Typography>
)

const ImagePicker: React.FunctionComponent<ImagePickerProps> = ({
  defaultLabel = <ImagePickerDefaultLabel />,
  dragLabel = <ImagePickerDefaultDragLabel />,
  information,
  onFileChange = (file: File | null) => {},
  width = "100%",
  height = "400px",
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
      width={width}
      minWidth="200px"
      minHeight="200px"
      height={height}
      padding={1}
      border="1px dashed"
      borderColor="grey.main"
      borderRadius={1}
      sx={{
        cursor: "pointer",
        position: "relative",
        background: `${!currentFile && "linear-gradient(180deg, #F5F7F9 0%, #FFF 100%)"}`,
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
              <AddPhotoAlternateIcon color="primary" style={{
                width: "4rem",
                height: "4rem",
              }}/>
              {dragLabel}
              {information && (
                <Typography textAlign="center" fontSize="0.875rem" color="grey">
                  {information}
                </Typography>
              )}
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
                width: "4rem",
                height: "4rem",
              }}/>
              {defaultLabel}
              {information && (
                <Typography textAlign="center" fontSize="0.875rem" color="grey">
                  {information}
                </Typography>
              )}
            </Box>
          )}
        </>
      ) : (
        <>
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
                backgroundColor: "common.white",
                display: "flex",
                borderRadius: "3px",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: 1,
                width: "2rem",
                height: "2rem",
                cursor: "pointer",
                '&:hover': {
                  backgroundColor: "common.black",
                  '& .MuiSvgIcon-root': {
                    fill: (theme) => theme.palette.common.white,
                  }
                }
              }}
            >
              <CreateIcon fontSize="small"/>
            </Box>
            <Box
              onClick={handleDelete}
              sx={{
                backgroundColor: "common.white",
                display: "flex",
                borderRadius: "3px",
                alignItems: "center",
                boxShadow: 1,
                justifyContent: "center",
                width: "2rem",
                height: "2rem",
                cursor: "pointer",
                '&:hover': {
                  backgroundColor: "common.black",
                  '& .MuiSvgIcon-root': {
                    fill: (theme) => theme.palette.common.white,
                  }
                }
              }}
            >
              <DeleteIcon fontSize="small" />
            </Box>
          </Box>
          <img
            src={URL.createObjectURL(currentFile)}
            alt={currentFile.name}
            style={{
              width: "auto",
              height: "100%",
              maxWidth: "100%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </>
      )}
    </Stack>
  );
};

export default ImagePicker;
