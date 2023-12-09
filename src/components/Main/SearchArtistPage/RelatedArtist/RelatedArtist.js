import { Swiper, SwiperSlide } from "swiper/react";
import { topArtist } from "../../../../utils/constant";
import ArtistIcon from "../../HomePage/TopArtist/ArtistIcon/ArtistIcon";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

function RelatedArtists() {
  return (
    <div className="">
      <p className="text-4xl font-[Poppins] font-semibold mb-10">
        Related Artist
      </p>
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween:20,
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
           slidesPerView: 4,
           spaceBetween: 40,
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="md:ml-7 mb-16"
      >
      {topArtist.map((artist) => {
        return (
            <SwiperSlide className="w-[200px] lg:max-w-[230px]">
             <ArtistIcon data={artist}/>
            </SwiperSlide>
        )
      })}
      </Swiper>
    </div>
  );
}

export default RelatedArtists;
