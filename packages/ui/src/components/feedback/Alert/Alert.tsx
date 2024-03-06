import React from "react";

import {
    AlertTitle, Alert as MUIAlert,
    AlertProps as MUIAlertProps,
    styled
} from '@mui/material'

type AlertProps = {
    title: string
} & Omit<MUIAlertProps, "variant" | "color">

const StyledAlert = styled(MUIAlert)(({ theme }) => {
    const hubTheme = theme as any;
    return {
        "&.MuiAlert-standard.MuiAlert-colorInfo, &.MuiAlert-standardInfo, &.MuiAlert-standard.MuiAlert-colorInfo .MuiAlert-icon, &.MuiAlert-standardInfo .MuiAlert-icon": {
            backgroundColor: hubTheme.palette.blue.light,
            color: hubTheme.palette.blue.dark
        },
        "&.MuiAlert-standard.MuiAlert-colorSuccess, &.MuiAlert-standardSuccess, &.MuiAlert-standard.MuiAlert-colorSuccess .MuiAlert-icon, &.MuiAlert-standardSuccess .MuiAlert-icon": {
            backgroundColor: hubTheme.palette.green.light,
            color: hubTheme.palette.green.dark
        },
        "&.MuiAlert-standard.MuiAlert-colorWarning, &.MuiAlert-standardWarning, &.MuiAlert-standard.MuiAlert-colorWarning .MuiAlert-icon, &.MuiAlert-standardWarning .MuiAlert-icon": {
            backgroundColor: hubTheme.palette.yellow.light,
            color: hubTheme.palette.yellow.dark
        },
        "&.MuiAlert-standard.MuiAlert-colorError, &.MuiAlert-standardError, &.MuiAlert-standard.MuiAlert-colorError .MuiAlert-icon, &.MuiAlert-standardError .MuiAlert-icon": {
            backgroundColor: hubTheme.palette.red.light,
            color: hubTheme.palette.red.dark
        },
        "& .MuiAlertTitle-root": {
            fontWeight: 600
        }
    }
})

const Alert: React.FunctionComponent<AlertProps> = (props) => {
    return <StyledAlert {...props} severity={props.severity} color={props.severity} variant="standard">
        {props.title && <AlertTitle>{props.title}</AlertTitle>}
        {props.children}
    </StyledAlert>
}

export default Alert;