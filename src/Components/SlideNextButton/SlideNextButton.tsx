import React from "react";
import { SlideNextButtonProps } from "./SlideNextButton.props";
import { useSwiper } from "swiper/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export const SlideNextButton = ({
  ...props
}: SlideNextButtonProps): JSX.Element => {
  const swiper = useSwiper();
  return (
    <button {...props} onClick={() => swiper.slideNext()}>
      <FontAwesomeIcon icon={faChevronRight} />
    </button>
  );
};
