import { Swiper, SwiperSlide } from "swiper/react";
import ArtistIcon from "../../HomePage/TopArtist/ArtistIcon/ArtistIcon";
import { getRelatedArtist } from "../../../../utils/SpotifyAPI/SpotifyAPI";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

function RelatedArtists({ token, id, favoriteProps, loggedIn, clickSearch, popupMessage }) {
  const [relatedArtists, setRelatedArtists] = useState([]);
  useEffect(() => {
    getRelatedArtist({ token, id }).then((res) => {
      setRelatedArtists(res.artists);
    });
  }, [token, id]);


  return (
    <div className="">
      <p className="text-4xl font-[Poppins] font-semibold mb-10">
        Related Artist
      </p>
      {relatedArtists.length === 0 ? (
        <div className="mt-4">
          <p className="text-3xl text-gray-800/80 font-bold min-h-[150px] text-center pt-14 font-[Poppins] md:text-4xl lg:text-5xl xl:text-6xl">
            No Related Artists
          </p>
        </div>
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
          className="ml-7 md:ml-7 mb-16"
        >
          {relatedArtists.map((artist) => {
            return (
              <SwiperSlide key={artist.id} className="w-[190px]">
                <ArtistIcon data={artist} favoriteProps={favoriteProps} loggedIn={loggedIn} onClick={clickSearch} popupMessage={popupMessage}/>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
}

export default RelatedArtists;
