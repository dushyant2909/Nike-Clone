import Button from '../Components/Button'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constants'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../Components/ShoeCard'
import { useState } from 'react'

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section id='home' className="w-full flex xl:flex-row flex-col justify-center gap-10 p-2 max-container min-h-screen">
      <div className="relative xl:w-2/5  xl:pl-8 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className='mt-10 font-palanquin text-[42px] xl:text-8xl font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pt-0 pr-0 xl:pr-10'>The New Arrival</span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>Discover stylish Nike arrivals, quality comfort, and innovate for your active life.</p>
        <Button label="Shop Now" iconUrl={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-10 xl:mt-20 gap-16">
          {statistics.map((stats, index) => (
            <div>
              <p className='text-2xl xl:text-4xl font-palanquin font-bold'>{stats.value}</p>
              <p className='font-monteserrat text-slate-gray leading-7'>{stats.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex-1 flex-col relative flex justify-center items-center xl:min-h-screen xl:py-20 py-10 bg-primary bg-hero bg-cover bg-center'>
        <img src={bigShoeImg} alt="Shoe Collection" className='object-contain relative z-10' width={610} height={500} />
        <div className="xl:absolute bottom-[10px] flex mt-3 gap-3">
          {shoes.map((image,index) => (
            <div key={index}><ShoeCard imgUrl={image} changeBigShoeImage={(shoe) => { setBigShoeImg(shoe) }} bigShoeImage={bigShoeImg} /></div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero