import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { topArtist } from "../../../../utils/constant";
import ArtistIcon from "../../HomePage/TopArtist/ArtistIcon/ArtistIcon";


function FavoriteArtist () {
    return(
        <section className="mb-16">
        <h3 className="mb-8 text-3xl font-[Poppins] font-bold xl:text-4xl">
          Favorite Artists
        </h3>

        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 90,
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
              <SwiperSlide>
                <ArtistIcon data={artist} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    )
}

export default FavoriteArtist