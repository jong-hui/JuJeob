import { css, CSSObject } from "styled-components";

export const BreakPoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}


export const mediaQuery = (breakPoint: keyof typeof BreakPoints) => (style: TemplateStringsArray | CSSObject) => css`
  @media (max-width: ${BreakPoints[breakPoint]}px) {
    ${style};
  }
`;

export const mobile = mediaQuery("sm")
export const tablet = mediaQuery("md")
export const laptop = mediaQuery("lg")
export const XLaptop = mediaQuery("xl")