import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Ripple, ArrowIcon } from '@shopgate/engage/components';
import I18n from '@shopgate/pwa-common/components/I18n';
import styles from './style';

/**
 * @returns {JSX}
 */
const CarouselButton = ({
  buttonBackground,
  buttonBorder,
  buttonBorderRadius,
  buttonBoxShadow,
  buttonFontColor,
  buttonPadding,
  buttonSize,
  buttonType,
  direction,
  onClick,
}) => {
  const buttonClassName = classNames(
    styles.button(
      buttonBackground,
      buttonBorder,
      buttonBorderRadius,
      buttonBoxShadow,
      buttonFontColor,
      buttonPadding,
      buttonSize,
      buttonType
    ),
    { [styles.nextButton]: direction === 'next' && buttonType === 'arrow' }
  );

  const interior = buttonType === 'text' ?
    (
      <I18n.Text string={direction === 'prev' ? 'videoCarousel.prev' : 'videoCarousel.next'} />
    ) :
    (
      <ArrowIcon />
    );

  return (
    <button
      className={buttonClassName}
      type="button"
      onClick={onClick}
    >
      <Ripple className={styles.ripple}>
        {interior}
      </Ripple>
    </button>
  );
};

CarouselButton.propTypes = {
  buttonBackground: PropTypes.string.isRequired,
  buttonBorder: PropTypes.string.isRequired,
  buttonBorderRadius: PropTypes.string.isRequired,
  buttonBoxShadow: PropTypes.string.isRequired,
  buttonFontColor: PropTypes.string.isRequired,
  buttonPadding: PropTypes.string.isRequired,
  buttonSize: PropTypes.number.isRequired,
  buttonType: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CarouselButton;
