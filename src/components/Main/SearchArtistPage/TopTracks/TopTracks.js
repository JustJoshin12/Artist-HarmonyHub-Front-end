import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import TrackCard from "../TrackCard/TrackCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { useState, useEffect } from "react";
import { getArtistTopTracks } from "../../../../utils/SpotifyAPI/SpotifyAPI";

function TopTracks({ id, token }) {
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
    getArtistTopTracks({ token, id }).then((data) => {
      setTopTracks(data.tracks);
    });
  }, [token, id]);

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
        {topTracks.map((track) => {
          return (
            <SwiperSlide key={track.id}>
              <TrackCard data={track} buttonText="favorite" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default TopTracks;
