import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { topTracks } from "../../../../utils/constant";
import TrackCard from "../../SearchArtistPage/TrackCard/TrackCard";

function FavoriteTrack() {
  return (
    <section className="mb-16">
      <h3 className="text-3xl mb-8 font-[Poppins] font-bold xl:text-4xl">
        Favorite Tracks
      </h3>
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
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="md:ml-7 mb-16"
      >
        {topTracks.map((track) => {
          return (
            <SwiperSlide>
              <TrackCard data={track} buttonText="Unfavorite" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default FavoriteTrack;
