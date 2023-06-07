import styled, { css } from "styled-components";

import Alert from "@mui/material/Alert";

const CustomAlert = styled(Alert)`
  ${(props) =>
    props.severity &&
    props.severity === "success" &&
    css`
      color: #fff !important;
    `}

  ${(props) =>
    props.severity &&
    props.severity === "error" &&
    css`
      color: #fff !important;
    `}

	${(props) =>
    props.severity &&
    props.severity === "warning" &&
    css`
      color: #fff !important;
    `}

  ${(props) =>
    props.severity &&
    props.severity === "info" &&
    css`
    `}
`;

export { CustomAlert };
