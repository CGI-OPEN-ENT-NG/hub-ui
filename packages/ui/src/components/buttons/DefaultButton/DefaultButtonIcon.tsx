import type { SvgIconComponent } from "@mui/icons-material";
import Icon from "@mui/material/Icon";
import type {} from "@mui/material/themeCssVarsAugmentation";
import "react";

export interface DefaultButtonIconProps {
  position: "left" | "right";
  Component?: SvgIconComponent;
  name?: string;
}

const DefaultButtonIcon: React.FunctionComponent<DefaultButtonIconProps> = ({
  Component,
  name,
}: DefaultButtonIconProps) => {
  return name ? <Icon>{name}</Icon> : <Component />;
};

export default DefaultButtonIcon;
