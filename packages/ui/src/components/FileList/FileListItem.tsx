import Delete from "@mui/icons-material/Delete";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import React from "react";

export interface File {
  name: string;
  size: number;
  uploading?: boolean;
}

export interface FileListItemProps<T extends File> {
  file: T;
  uploading?: boolean;
  onDelete?: (file: T) => void;
}

const FileListItem = <T extends File>({
  file,
  uploading,
  onDelete,
}: FileListItemProps<T>) => {
  const sizeStr = `${file.size} octets`;

  const deleteAction = () => onDelete?.(file);

  return (
    <Box sx={{ display: "flex", alignItems: "center", columnGap: "1rem" }}>
      <InsertDriveFileIcon color="primary" />
      <div className="text-start w-full">
        <Typography>{file.name}</Typography>
        <Typography fontSize="0.875rem" color="grey">
          {sizeStr}
        </Typography>
      </div>
      <IconButton onClick={deleteAction} disabled={uploading}>
        {uploading ? <CircularProgress size={24} /> : <Delete />}
      </IconButton>
    </Box>
  );
};

export default React.memo(FileListItem);
