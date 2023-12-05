function ArtistHero () {
    return(
        <div className="mt-[100px]">
        <div className="hero bg-indigo-500/50 rounded-full">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://media.pitchfork.com/photos/618d8009d8d6ddc92b6fbab8/1:1/w_1922,h_1922,c_limit/Juice-WRLD.jpg"
              alt="Juice Wrld"
              className="max-w-[300px] rounded-badge shadow-2xl"
            />
            <div className="pl-10">
              <h1 className="text-5xl font-bold"> Juice Wrld</h1>
              <div className="py-6">
                <p className="text-4xl font-mono font-semibold tracking-wide text-black">
                  Popularity <span className="text-white">85 rating</span>
                </p>
                <p className="mt-[10px] font-mono text-4xl font-semibold tracking-wide text-black">
                  Followers
                  <span className="text-white ml-6">31600481 people</span>
                </p>
              </div>
              <button className="btn bg-white/40">
                Add to Favorite Artist
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ArtistHero