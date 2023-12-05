import { Swiper, SwiperSlide } from "swiper/react";
import { topArtist } from "../../../../utils/constant";
import ArtistIcon from "../../HomePage/TopArtist/ArtistIcon/ArtistIcon";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

function RelatedArtists() {
  return (
    <div>
      <p className="text-4xl font-[Poppins] font-semibold mb-10">
        Related Artist
      </p>
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
      {topArtist.map((artist) => {
        return (
            <SwiperSlide key={artist.name}>
             <ArtistIcon data={artist}/>
            </SwiperSlide>
        )
      })}
      </Swiper>
    </div>
  );
}

export default RelatedArtists;
