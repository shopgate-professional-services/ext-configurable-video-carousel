import React from 'react';
import PropTypes from 'prop-types';
import VideoCarousel from '../../components/VideoCarousel';

/**
 * @param {Object} settings Widget settings
 * @returns {JSX}
 */
const ConfigurableCarousel = ({ settings }) => {
  if (!settings) {
    return null;
  }

  return (
    <VideoCarousel settings={settings} />
  );
};

ConfigurableCarousel.propTypes = {
  settings: PropTypes.shape(),
};

ConfigurableCarousel.defaultProps = {
  settings: null,
};

export default ConfigurableCarousel;
