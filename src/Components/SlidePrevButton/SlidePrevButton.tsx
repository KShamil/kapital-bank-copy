import React from "react";
import { SlidePrevButtonProps } from "./SlidePrevButton.props";
import { useSwiper } from "swiper/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export const SlidePrevButton = ({
  ...props
}: SlidePrevButtonProps): JSX.Element => {
  const swiper = useSwiper();
  return (
    <button {...props} onClick={() => swiper.slidePrev()}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </button>
  );
};
