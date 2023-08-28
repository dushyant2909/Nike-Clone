import React from 'react'
import Button from '../Components/Button'
import { arrowRight } from '../assets/icons'
import { statistics } from '../constants'

const Hero = () => {
  console.log(statistics)
  return (
    <section id='home' className="w-full flex xl:flex-row flex-col justify-center gap-10 p-2 max-container min-h-screen">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="">Our Summer Collection</p>
        <h1><span>The New Arrival</span>
          <br />
          <span>Nike</span>
        </h1>
        <p>Discover stylish Nike arrivals, quality comfort, and innovate for your active life.</p>
        <Button label="Shop Now" iconUrl={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stats, index) => (
            <div>
              <p>{stats.value}</p>
              <p>{stats.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero