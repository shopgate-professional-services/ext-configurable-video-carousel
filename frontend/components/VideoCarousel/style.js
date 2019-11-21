import { css } from 'glamor';

/**
 * @param {string} buttonWrapperWidth width of button wrapper
 * @returns {StyleAttribute}
 */
const buttonWrapper = buttonWrapperWidth => css({
  display: 'flex',
  width: buttonWrapperWidth,
  margin: '0 auto',
  marginTop: '10',
  marginBottom: '10',
}).toString();

/**
 * @param {string} backgroundColor displayed when video is loading
 * @returns {StyleAttribute}
 */
const videoWrapper = backgroundColor => css({
  backgroundColor,
}).toString();

const videoResponsive = css({
  position: 'relative',
  overflow: 'hidden',
});

/**
 * @param {string} widgetWidth width for swiper widget and buttons
 * @returns {StyleAttribute}
 */
const wrapper = widgetWidth => css({
  margin: '0 auto',
  width: widgetWidth,
}).toString();

export default {
  buttonWrapper,
  videoWrapper,
  videoResponsive,
  wrapper,
};
