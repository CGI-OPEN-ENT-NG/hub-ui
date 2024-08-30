import { SvgIconComponent } from "@mui/icons-material";
import { Color, SvgIconProps } from "@mui/material";
import Stack, { StackProps } from "@mui/material/Stack";
import Typography, { TypographyProps } from "@mui/material/Typography";

export type PaperHeaderProps = {
  title: string;
  IconComponent?: SvgIconComponent;
  iconColor?: Color;
  iconProps?: SvgIconProps;
  iconSize?: number;
  titleProps?: TypographyProps;
} & StackProps;

const PaperHeader: React.FunctionComponent<PaperHeaderProps> = ({
  title,
  IconComponent,
  iconColor,
  iconProps,
  iconSize = 28,
  titleProps,
  ...otherProps
}) => {
  return (
    <Stack direction="row" alignItems="center" gap={1} {...otherProps}>
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
      <Typography
        component={titleProps?.component ?? "h3"}
        variant={titleProps?.variant ?? "h2"}
        fontWeight={titleProps?.fontWeight ?? 400}
        {...titleProps}
      >
        {title}
      </Typography>
    </Stack>
  );
};

export default PaperHeader;
