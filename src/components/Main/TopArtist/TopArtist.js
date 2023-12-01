import { topArtist } from "../../../utils/constant";
import ArtistIcon from "./ArtistIcon/ArtistIcon";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

function TopArtist() {
  return (
    <section className=" px-6 py-5 rounded-lg">
      <h3 className="text-3xl font-semibold text-white font-['Poppins'] tracking-wide pl-4">
        Top Artist <span className="text-sm font-light ml-7">This week:</span>
      </h3>
      <ul className="flex items-center justify-center flex-col h-[330px]">
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1100: {
              slidesPerView: 4,
              spaceBetween: 11,
            },
          }}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className="max-w-[90%] lg:max-w-[80%]"
        >
          {topArtist.map((artist) => {
            return (
              <SwiperSlide key={artist.name} className="w-[190px]">
                <ArtistIcon data={artist} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </ul>
    </section>
  );
}

export default TopArtist;
