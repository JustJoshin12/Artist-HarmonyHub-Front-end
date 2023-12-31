
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import TrackCard from "../../SearchArtistPage/TrackCard/TrackCard";

function Recommendation({ recommendations, favoriteProps, loggedIn, popupMessage, showMessage }) {
  
  return (
    <section>
      <h3 className=" text-2xl md:text-3xl font-semibold text-white font-['Poppins'] tracking-wide pl-2 md:pl-4 mb-7">
        Recommendations
      </h3>
      {loggedIn ? (
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
          className="ml-7 mb-10"
        >
          {recommendations.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <TrackCard
                  key={item.id}
                  data={item}
                  buttonText="favorite"
                  section="recommendation"
                  favoriteProps={favoriteProps}
                  loggedIn={loggedIn}
                  popupMessage={popupMessage}
                  showMessage={showMessage}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <h4 className="text-3xl text-gray-800/80 font-bold min-h-[150px] text-center pt-14 font-[Poppins] md:text-4xl lg:text-5xl xl:text-6xl">
          Sign In For Recommendations
        </h4>
      )}
    </section>
  );
}

export default Recommendation;
