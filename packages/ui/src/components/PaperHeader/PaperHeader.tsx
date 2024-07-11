import { SvgIconComponent } from "@mui/icons-material";
import { Color, SvgIconProps } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography, { TypographyProps } from "@mui/material/Typography";

export type PaperHeaderProps = {
  title: string;
  IconComponent?: SvgIconComponent;
  iconColor?: Color;
  iconProps?: SvgIconProps;
  iconSize?: number;
} & TypographyProps;

const PaperHeader: React.FunctionComponent<PaperHeaderProps> = ({
  title,
  IconComponent,
  iconColor,
  iconProps,
  iconSize = 28,
  variant = "h2",
  fontWeight = "bold",
  ...otherProps
}) => {
  return (
    <Stack direction="row" alignItems="center" gap={1}>
      {IconComponent ? (
        <IconComponent
          sx={{
            fontSize: iconSize,
            padding: "2px",
            borderRadius: 1,
            color: iconColor?.[500],
            backgroundColor: iconColor?.[50],
          }}
          {...iconProps}
        />
      ) : null}
      <Typography variant={variant} fontWeight={fontWeight} {...otherProps}>
        {title}
      </Typography>
    </Stack>
  );
};

export default PaperHeader;
