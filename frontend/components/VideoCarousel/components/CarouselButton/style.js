import { css } from 'glamor';
/**
 * @param {string} buttonBackground width for button
 * @param {string} buttonBorder border for button
 * @param {string} buttonBorderRadius width for button
 * @param {string} buttonBoxShadow width for button
 * @param {string} buttonFontColor width for button
 * @param {string} buttonPadding padding for button
 * @param {number} buttonSize button size
 * @returns {StyleAttribute}
 */
const button = (
  buttonBackground,
  buttonBorder,
  buttonBorderRadius,
  buttonBoxShadow,
  buttonFontColor,
  buttonPadding,
  buttonSize
) => css({
  margin: '0 auto',
  position: 'relative',
  background: buttonBackground,
  border: buttonBorder,
  borderRadius: buttonBorderRadius,
  padding: buttonPadding,
  fontSize: buttonSize,
  lineHeight: 1,
  color: buttonFontColor,
  outline: 0,
  boxShadow: buttonBoxShadow,
}).toString();

/**
 * @param {string} buttonBoxShadow width of button wraper
 * @returns {StyleAttribute}
 */
const nextButton = css({
  transform: 'rotateY(180deg)',
}).toString();

const ripple = css({
  padding: 6,
}).toString();

export default {
  button,
  nextButton,
  ripple,
};
