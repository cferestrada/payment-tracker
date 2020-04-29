/**
 * Theme variables to be used for styling throughout the app to maintain consistency and provide
 * an easier interface for global updates.
 */
const bp = {
  xxs: '320px',
  xs: '480px',
  s: '600px',
  m: '980px',
  sticky_header: '720px',
  header_m_l: '880px',
  l: '1025px',
  xl: '1280px',
  xxl: '1440px',
};

const colors = {
  black: '#000',
  primary: '#3e3f40',
  graydivider: '#dcddde',
  graydark: '#747576',
  graymedium: '#949596',
  graylight: '#bebfc0',
  ice: '#f1f2f3',
  white: '#fff',
  red_red: '#d0021b',
  monsoon: '#5d6d86',
  powder_blue: '#d2d9df',
};

const ease = {
  default: 'cubic-bezier(.51,.01,.37,.98)',
};

const fonts = {
  primary: '"Maison Neue", sans-serif',
  secondary: '"Genath", serif',
};

const fontsize = {
  xlarge: '46px',
  large: '32px',
  medium: '22px',
  small: '18px',
  xsmall: '13px',
  xxsmall: '10px',
  std: '16px',
  headline: '20px',
  iframe_card: '20px',
  header_mobile: '28px',
};

const fontweight = {
  bold: 700,
  regular: 400,
};

const gridWidth = '1168px';

const timer = {
  default: '250ms',
  slow: '1.1s',
  modalTimer: 240,
};

const zIndex = {
  modal: 1000,
  modalBg: 4,
  stickyBar: 3,
  headerNav: 2,
  zoom: 10000,
  modalCloseButtons: 1001,
};

export {
  bp,
  colors,
  ease,
  fonts,
  fontsize,
  fontweight,
  gridWidth,
  timer,
  zIndex,
};
