import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import TrackCard from "../TrackCard/TrackCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { useState, useEffect } from "react";
import { getArtistTopTracks } from "../../../../utils/SpotifyAPI/SpotifyAPI";

function TopTracks({ id, token, favoriteProps, loggedIn, popupMessage }) {
  const [topTracks, setTopTracks] = useState([]);
  

  useEffect(() => {
    getArtistTopTracks({ token, id }).then((data) => {
      setTopTracks(data.tracks);
    });
  }, [token, id]);

  return (
    <div className="mt-[100px]">
      <p className="text-4xl font-[Poppins] font-semibold mb-10">Top Tracks</p>
      {topTracks.length === 0 ? (
        <div className="mt-4">
          <p className="text-3xl text-gray-800/80 font-bold min-h-[150px] text-center pt-14 font-[Poppins] md:text-4xl lg:text-5xl xl:text-6xl">
            No Top Tracks
          </p>
        </div>
      ) : (
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 1,
            },
            425: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            650: {
              slidesPerView: 3,
              spaceBetween: 12,
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
          className="md:ml-7 mb-16"
        >
          {topTracks.map((track) => {
            return (
              <SwiperSlide key={track.id}>
                <TrackCard
                  data={track}
                  buttonText="favorite"
                  favoriteProps={favoriteProps}
                  loggedIn={loggedIn}
                  popupMessage={popupMessage}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
}

export default TopTracks;
