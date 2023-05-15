import React from "react";
import { CardsCarouselProps } from "./CardsCarousel.props";
import styles from "./CardsCarousel.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation,EffectFlip } from "swiper";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-flip";
import { CardsCarouselItems, SlideNextButton, SlidePrevButton } from '../../Components';
import { cardsCarouselData } from '../../data/data';

export const CardsCarousel = ({
  ...props
}: CardsCarouselProps): JSX.Element => {
  return (
    <section {...props} className={styles.cardsCarousel}>
      <Swiper
        navigation={false}
        modules={[Navigation, Pagination, Autoplay,EffectFlip]}
        slidesPerView={1}
        loop={true}
        className={styles.swiper}
        effect={"flip"}
        grabCursor={true}
        speed={900}
        // autoplay={{
        //   delay: 4000,
        // }}
      >
        {cardsCarouselData &&
          cardsCarouselData.map((item) => (
            <SwiperSlide key={item.id}>
              <CardsCarouselItems data={item} />
            </SwiperSlide>
          ))}
        <div className={styles.btns}>
          <SlidePrevButton className={styles.prevBtn} />
          <SlideNextButton className={styles.nextBtn} />
        </div>
      </Swiper>
    </section>
  );
};
