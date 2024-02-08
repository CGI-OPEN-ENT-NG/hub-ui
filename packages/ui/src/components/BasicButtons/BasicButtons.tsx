import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styled, useTheme } from "@mui/material/styles";
import type {} from "@mui/material/themeCssVarsAugmentation";
import "react";

const StyledButton = styled("button")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

const BasicButtons = () => {
  const theme = useTheme();

  return (
    <Stack spacing={2} direction="row">
      <StyledButton>Styled</StyledButton>
      <Button
        variant="text"
        style={{ backgroundColor: theme.palette.primary.main }}
      >
        Text
      </Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
};

export default BasicButtons;
