import Box from "@mui/material/Box";
import type {} from "@mui/material/themeCssVarsAugmentation";
import "react";
import FileListItem, { type File } from "./FileListItem";

export interface FileListProps<T extends File> {
  files: T[];
  onDelete?: (file: T) => void;
}

const FileList = <T extends File>({
  files = [],
  ...otherProps
}: FileListProps<T>) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", rowGap: "0.5rem" }}>
      {files.map((file, index) => (
        <FileListItem
          key={index}
          file={file}
          uploading={index % 2 === 0}
          {...otherProps}
        />
      ))}
    </Box>
  );
};

export default FileList;
