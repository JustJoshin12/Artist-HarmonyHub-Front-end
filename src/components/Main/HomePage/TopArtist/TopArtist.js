import { topArtist } from "../../../../utils/constant";
import ArtistIcon from "./ArtistIcon/ArtistIcon";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

function TopArtist() {
  return (
    <div className=" px-6 py-5 rounded-lg mx-20px">
      <h3 className="text-3xl font-semibold text-white font-['Poppins'] tracking-wide pl-4 mb-5">
        Top Artist <span className="text-sm font-light ml-7">This week:</span>
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
        className="ml-7 "
      >
        {topArtist.map((artist) => {
          return (
            <SwiperSlide key={artist.name} >
              <ArtistIcon data={artist}/>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default TopArtist;
