import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';
import 'react-id-swiper/lib/styles/css/swiper.css';
import CarouselButton from './components/CarouselButton';
import styles from './style';

/**
 * @param {Object} settings Widget settings
 * @returns {JSX}
 */
const VideoCarousel = ({
  settings,
}) => {
  const {
    backgroundColor,
    buttonBackground,
    buttonBorder,
    buttonBorderRadius,
    buttonBoxShadow,
    buttonFontColor,
    buttonPadding,
    buttonSize,
    buttonType,
    buttonWrapperWidth,
    numberSlidesPerView,
    spaceBetweenSlides,
    slideInfo,
    widgetWidth,
  } = settings || {};
  const swiperInstance = useRef(null);

  /**
   * Updates swiper state
   */
  const goNext = () => {
    if (swiperInstance && swiperInstance.current !== null) {
      swiperInstance.current.slideNext();
    }
  };

  /**
  * Updates swiper state
  */
  const goPrev = () => {
    if (swiperInstance && swiperInstance.current !== null) {
      swiperInstance.current.slidePrev();
    }
  };

  /**
  * Updates the swiper instance reference.
  * @param {Object} instance A Swiper instance.
  */
  const updateSwiper = (instance) => {
    if (instance !== null && instance !== swiperInstance.current) {
      swiperInstance.current = instance;
    }
  };

  const params = {
    autoHeight: true,
    lazy: true,
    spaceBetween: spaceBetweenSlides,
    slidesPerView: numberSlidesPerView,
    loop: true,
    autoplay: false,
    noSwipeing: true,
    getSwiper: updateSwiper,
  };

  const slides = slideInfo.map((slide, index) => {
    if (slide.type === 'video') {
      return (
        <div
          className={styles.videoWrapper(backgroundColor)}
          key={index.toString()}
        >
          <div className={styles.videoResponsive}>
            <iframe className="swiper-lazy" title={slide.alt} data-src={slide.src} />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-black" />
          </div>
        </div>
      );
    }
    return (
      <div
        key={index.toString()}
      >
        <img
          src={slide.src}
          alt={slide.alt}
        />
      </div>
    );
  });

  return (
    <div className={styles.wrapper(widgetWidth)}>
      <Swiper {...params}>
        {slides}
      </Swiper>
      <div className={styles.buttonWrapper(buttonWrapperWidth)}>
        <CarouselButton
          buttonBackground={buttonBackground}
          buttonBorder={buttonBorder}
          buttonBorderRadius={buttonBorderRadius}
          buttonBoxShadow={buttonBoxShadow}
          buttonFontColor={buttonFontColor}
          buttonPadding={buttonPadding}
          buttonSize={buttonSize}
          buttonType={buttonType}
          direction="prev"
          onClick={goPrev}
        />
        <CarouselButton
          buttonBackground={buttonBackground}
          buttonBorder={buttonBorder}
          buttonBorderRadius={buttonBorderRadius}
          buttonBoxShadow={buttonBoxShadow}
          buttonFontColor={buttonFontColor}
          buttonPadding={buttonPadding}
          buttonSize={buttonSize}
          buttonType={buttonType}
          direction="next"
          onClick={goNext}
        />
      </div>
    </div>
  );
};

VideoCarousel.propTypes = {
  settings: PropTypes.shape({
    buttonFontColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    buttonBackground: PropTypes.string,
    buttonBorder: PropTypes.string,
    buttonBorderRadius: PropTypes.string,
    buttonBoxShadow: PropTypes.string,
    buttonPadding: PropTypes.string,
    buttonSize: PropTypes.number,
    buttonType: PropTypes.string,
    buttonWrapperWidth: PropTypes.string,
    numberSlidesPerView: PropTypes.number,
    spaceBetweenSlides: PropTypes.number,
    slideInfo: PropTypes.arrayOf(PropTypes.shape()),
    widgetWidth: PropTypes.string,
  }).isRequired,
};

export default VideoCarousel;
