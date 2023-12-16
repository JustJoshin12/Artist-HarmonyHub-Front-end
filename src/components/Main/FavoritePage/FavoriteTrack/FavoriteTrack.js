import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import TrackCard from "../../SearchArtistPage/TrackCard/TrackCard";

function FavoriteTrack({ favoriteTracks, favoriteProps, loggedIn }) {
  return (
    <section className="mb-16">
      <h3 className="text-3xl mb-8 font-[Poppins] font-bold xl:text-4xl">
        Favorite Tracks
      </h3>
      {favoriteTracks.length === 0 ? (
        <p className="text-3xl text-gray-800/80 font-bold min-h-[150px] text-center pt-14 font-[Poppins] md:text-4xl lg:text-5xl xl:text-6xl">No Favorite Tracks</p>
      ) : (
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            650: {
              slidesPerView: 3,
              spaceBetween: 12,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 10,
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
          {favoriteTracks.map((track) => {
            return (
              <SwiperSlide>
                <TrackCard
                  data={track}
                  buttonText="Unfavorite"
                  section="favorite"
                  favoriteProps={favoriteProps}
                  loggedIn={loggedIn}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </section>
  );
}

export default FavoriteTrack;
