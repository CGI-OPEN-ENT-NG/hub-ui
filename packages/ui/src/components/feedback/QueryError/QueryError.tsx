import Typography from "@mui/material/Typography";
import type { SerializedError } from "@reduxjs/toolkit";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

import { isErrorWithMessage, isFetchBaseQueryError } from "./helpers";

export interface QueryErrorProps {
  error: FetchBaseQueryError | SerializedError | undefined;
  statusPrefix?: string;
}

const QueryError: React.FunctionComponent<QueryErrorProps> = ({
  error,
  statusPrefix = "Erreur ",
}: QueryErrorProps) => {
  if (isFetchBaseQueryError(error)) {
    const errMsg =
      "error" in error
        ? error.error
        : error.data
          ? JSON.stringify(error.data)
          : null;

    return (
      <Typography>
        <Typography fontWeight="bold">{`${statusPrefix}${error.status}`}</Typography>
        {errMsg}
      </Typography>
    );
  }

  if (isErrorWithMessage(error)) {
    return <Typography>{error.message}</Typography>;
  }

  return <Typography>Une erreur est survenue.</Typography>;
};

export default QueryError;
