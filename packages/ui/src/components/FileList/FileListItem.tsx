import Delete from "@mui/icons-material/Delete";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

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
    <Stack direction="row" alignItems="center" spacing={2}>
      <InsertDriveFileIcon color="primary" />
      <Box sx={{ width: "100%" }}>
        <Typography>{file.name}</Typography>
        <Typography fontSize="0.875rem" color="grey">
          {sizeStr}
        </Typography>
      </Box>
      <IconButton onClick={deleteAction} disabled={uploading}>
        {uploading ? <CircularProgress size={24} /> : <Delete />}
      </IconButton>
    </Stack>
  );
};

export default FileListItem;
