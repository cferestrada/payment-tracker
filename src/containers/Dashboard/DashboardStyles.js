/** @jsx jsx */
import { css } from '@emotion/core';
import {
  colors,
  bp,
  fontsize,
} from '../../style/theme';
import { em } from '../../helpers/units';

const emptyBag = css`
  color: ${colors.primary};
  font-size: ${fontsize.std};
  margin-top: ${em('24px')};
  margin-bottom: ${em('36px')};
  line-height: ${em('24px')};
`;

const errorMessage = css`
  margin: ${em('24px')} 0;
`;

const linkStyle = css`
  text-decoration: underline;
`;

const errorLinkStyle = css`
  text-decoration: underline;
  color: ${colors.red_red} !important;
  border: none;
  margin: 0;
  padding: 0;
`;

const buttons = css`
  text-align: center;
  color: ${colors.primary};
`;

const button = css`
  width: 100%;
  margin-top: ${em('24px')};
  max-height: 49px;
`;

const hackedContainer = css`
  position: relative;
  width: 100%;
  margin-bottom: ${em('36px')};
  @media screen and (min-width: ${bp.s}) {
    margin-bottom: ${em('60px')};
  }
`;

const paypalButton = css`
  margin-top: ${em('10px')};
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: .00001;
  max-height: 49px;
`;

const paypalLogoStyles = css`
  width: ${em('102px')};
  height: auto;
`;

const gridStyles = css`
  margin: ${em('20px', fontsize.std)} 0;
  @media screen and (min-width: ${bp.s}) {
    padding: 0 ${em('18px')};
  }
`;

const buttonsGap = css`
  margin-top: ${em('10px')};
`;

const loadingBagText = css`
  padding-top: 15px;
  text-align: center;
`;

const paymentBttnssModalCloseBttn = css`
  display: none;
`;

const paymentBttnsModalContainerStyles = css`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: auto;
    width: 100%;
    background: ${colors.white};
    padding: ${em('0px 18px 0px 18px')};
`;

const paymentBttnsTitle = css`
  text-align: center;
  margin-top: ${em('40px')};
`;

const closeButtonStyles = css`
  position: absolute;
  right: 0;
  top: 0;
`;

export {
  buttons,
  button,
  emptyBag,
  linkStyle,
  errorLinkStyle,
  errorMessage,
  hackedContainer,
  paypalButton,
  paypalLogoStyles,
  gridStyles,
  buttonsGap,
  loadingBagText,
  paymentBttnssModalCloseBttn,
  paymentBttnsModalContainerStyles,
  paymentBttnsTitle,
  closeButtonStyles,
};
