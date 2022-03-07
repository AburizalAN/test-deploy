import { generateMedia, pxToRem } from 'styled-media-query';

const ratio = 16;

// copying from https://ionicframework.com/docs/layout/css-utilities#ionic-breakpoints
const breakpoints = pxToRem(
  {
    xs: '0px',
    screen320: '320px',
    screen360: '360px',
    screen375: '376px',
    screen425: '425px',
    screen414: '414px',
    screen411: '411px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  ratio
);

export default generateMedia(breakpoints);
