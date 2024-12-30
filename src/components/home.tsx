import heroImg from '../../public/hero_img.svg'
/**
 * Home page component
 * @returns {JSX.Element} The rendered Home component
 */
const Home = (): JSX.Element => {
  return (
    <div className="text-white h-screen">
      <section className="bg-gradient-to-b md:bg-gradient-to-r from-[#2d35a2] to-transparent rounded-md lg:h-[60vh] p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 place-content-center">
          <div className='flex flex-col justify-center items-center gap-4'>
            <div className='text-center'>              
              <h1 className="text-5xl lg:text-6xl font-inter font-semibold [text-shadow:_0_4px_0_rgb(0_0_0_/_40%)]">colligence</h1>
              <p className="text-xs lg:text-base font-ubuntu-condensed opacity-60 py-1 tracking-wider">Enabling Connections ~ Inspiring Brilliance</p>
            </div>
            <div className='flex flex-col items-center justify-center text-center text-wrap max-w-md'>
              <p className='text-wrap'>Revolutionizing the way people collaborate virtually.</p>
              <p className='text-wrap'>Building the next generation of communication tools that seamlessly integrate the best features and functionalities into a unified and user-centric platform.</p>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <img src={heroImg} alt="Colligence Research Hero Image" className='h-[40vh] md:h-[50vh] lg:h-full w-auto' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
