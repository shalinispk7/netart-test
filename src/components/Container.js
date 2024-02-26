import React from 'react'
import logo from '../assets/logo.png'
import award from '../assets/1.png'
import person from '../assets/2.png'
import pumps from '../assets/3.png'

const Container = () => {
  return (
    <>
      {/* logo */}
      <div className=' row'>
        <div className='col-lg-12 col-md-12 col-sm-12'>
          <div className='w-25'>
            <img src={logo} alt='logo' className='w-100 ' />
          </div>
        </div>
      </div>
      {/* award */}
      <div className='row'>
        <div className='col-lg-4 col-md-12 col-sm-12 w-25'>
          <img src={award} alt='award' className='w-100' />
        </div>
        <div className='col-lg-8 col-md-12 col-sm-12'>
          <h2 className='fs-5'>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h2>
          <ul>
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
          <div className='w-75'>
            <img src={person} alt='person' className='w-100' />
          </div>
          <p>
            Government of India has awarded the{' '}
            <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj,
            Joint Managing Director of C.R.I. Group received the award from Smt.
            Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh,
            Honorable Minister of State.
          </p>
        </div>
      </div>

      {/* pumps */}
      <div className='row'>
        <div className='col-lg-12 d-flex align-items-center flex-column'>
          <p className='fs-6'>
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
            RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
            POWER FOR THE NATION.
          </p>

          <div className='w-75'>
            <img src={pumps} alt='pumps' className='w-100' />
          </div>
          <p>
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems - Motors
          </p>
        </div>
      </div>
    </>
  )
}

export default Container