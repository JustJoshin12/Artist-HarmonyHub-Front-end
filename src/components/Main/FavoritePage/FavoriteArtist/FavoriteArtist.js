import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import ArtistIcon from "../../HomePage/TopArtist/ArtistIcon/ArtistIcon";

function FavoriteArtist({ favoriteArtists, favoriteProps, loggedIn }) {
  

  return (
    <section className="mb-16">
      <h3 className="mb-8 text-3xl font-[Poppins] font-bold xl:text-4xl">
        Favorite Artists
      </h3>
      {favoriteArtists.length === 0 ? (
        <p className="text-3xl text-gray-800/80 font-bold min-h-[150px] text-center pt-14 font-[Poppins] md:text-4xl lg:text-5xl xl:text-6xl">
          No Favorite Artist
        </p>
      ) : (
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            425: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },

            800: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className="ml-7 "
        >
          {favoriteArtists.map((artist) => {
            return (
              <SwiperSlide key={artist.name}>
                <ArtistIcon
                  key={artist.id}
                  data={artist}
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

export default FavoriteArtist;
