const Hero = () => {
  return <section className="container grid lg:grid-cols-2">
    <div className="grid pt-16 place-items-center">
    <div className="flex flex-col gap-2 sm:gap-6">
      <p className="text-[#0099cc] text-xl mt-8 sm:mt-0">
          Shop Our Freshest
      </p>
      <h2 className="sm:text-5xl text-3xl">Fresh Hand-Picked</h2>
      <h2 className="sm:text-5xl text-3xl"> Fruits & Vegetables <span className="text-red-600">EveryDay!</span>
      </h2>
      <button className="bg-accent hover:bg-accentDark px-8 py4 text-white rounded-md w-fit
      mt-4">SHOP NOW </button>
      </div>
    </div>

    <div className="grid place-items-center">
      <img src="/hero.jpg" alt="hero_bg" />
    </div>

  </section>
}

export default Hero
