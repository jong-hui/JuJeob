import { css } from "styled-components";

export default {
  centering: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flex: css`
    display: flex;
  `,
  flexRow: css`
    display: flex;
    flex-direction: row;
  `,
  flexColumn: css`
    display: flex;
    flex-direction: column;
  `,
  fixed: css`
    position: fixed;
  `,
  relative: css`
    position: relative;
  `,
  absolute: css`
    position: absolute;
  `,
  fulfilledInWindow: css`
    width: 100vw;
    height: 100vh;
  `,
  fulfilledAbsolute: css`
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  `
}