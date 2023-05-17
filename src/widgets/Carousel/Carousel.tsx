import React from "react";
import { CarouselProps } from "./Carousel.props";
import { sliderData } from "../../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  CarouselItems,
  SlideNextButton,
  SlidePrevButton,
} from "../../Components";
import styles from "./Carousel.module.scss";

export const Carousel = ({ ...props }: CarouselProps): JSX.Element => {
  return (
    <>
      <section {...props} className={styles.carousel}>
        <Swiper
          navigation={false}
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          loop={true}
          className={styles.swiper}
          speed={800}
        >
          {sliderData &&
            sliderData.map((item) => (
              <SwiperSlide key={item.id}>
                <CarouselItems data={item} />
              </SwiperSlide>
            ))}
          <div className={styles.btns}>
            <SlidePrevButton className={styles.prevBtn} />
            <SlideNextButton className={styles.nextBtn} />
          </div>
        </Swiper>
      </section>
    </>
  );
};
