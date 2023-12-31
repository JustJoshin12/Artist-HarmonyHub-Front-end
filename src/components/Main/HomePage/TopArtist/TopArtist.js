import ArtistIcon from "./ArtistIcon/ArtistIcon";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

function TopArtist({ topArtistData, favoriteProps, loggedIn, popupMessage }) {
  const filterArtists = (artists) => {
    // Filter artists based on criteria
    return artists.filter((artist) => {
      const hasAntiviralPop = artist.genres.includes("antiviral pop");
      const hasSocialMediaPop = artist.genres.includes("social media pop");
      const isEmptyGenre = artist.genres.length === 0;

      return !(hasAntiviralPop || hasSocialMediaPop || isEmptyGenre);
    });
  };

  const filteredArtists = filterArtists(topArtistData);

  return (
    <div className=" px-2 py-5 rounded-lg ">
      <h3 className="text-3xl font-semibold text-white font-['Poppins'] tracking-wide pl-4 mb-10">
        Top Artist
      </h3>

      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 0,
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
        {filteredArtists.map((artist) => {
          return (
            <SwiperSlide key={artist.id} className="w-[90%]">
              <ArtistIcon data={artist} favoriteProps={favoriteProps} loggedIn={loggedIn} popupMessage={popupMessage}/>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default TopArtist;
