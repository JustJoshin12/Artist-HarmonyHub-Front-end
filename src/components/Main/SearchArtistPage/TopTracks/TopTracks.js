import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import TrackCard from "../TrackCard/TrackCard";
import { topTracks } from "../../../../utils/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

function TopTracks() {
  return (
    <div className="mt-[100px]">
      <p className="text-4xl font-[Poppins] font-semibold mb-10">Top Tracks</p>
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
          },
          550: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          650: {
            slidesPerView: 3,
            spaceBetween: 12,
          },
          1300: {
            slidesPerView: 3,
            spaceBetween: 90,
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="ml-7 mb-16"
      >
        {topTracks.map((track) => {
          return (
            <SwiperSlide key={track.name}>
              <TrackCard data={track} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default TopTracks;
