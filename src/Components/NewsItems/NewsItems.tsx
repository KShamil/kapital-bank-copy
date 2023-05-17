import React from "react";
import { NewsItemsProps } from "./NewsItems.props";
import styles from "./NewsItems.module.scss";
import { newsCardData } from "../../data/data";
import { NewsCard } from "../NewsCard/NewsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SlideNextButton } from "../SlideNextButton/SlideNextButton";

export const NewsItems = ({ ...props }: NewsItemsProps): JSX.Element => {
  return (
    <>
      <div {...props} className={styles.wrapper}>
        <Swiper
          navigation={false}
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={3}
          slidesPerGroup={3}
          loop={true}
          className={styles.swiper}
          speed={800}
          breakpoints={{
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 1,
            },
            1150: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
          }}
        >
          {newsCardData &&
            newsCardData.map((item) => (
              <SwiperSlide key={item.id}>
                <NewsCard data={item} />
              </SwiperSlide>
            ))}
          <div className={styles.btns}>
            <SlideNextButton className={styles.nextBtn} />
          </div>
        </Swiper>
      </div>
    </>
  );
};
