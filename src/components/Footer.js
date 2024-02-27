import React from 'react'
import { Telephone, Facebook, Globe2 } from 'react-bootstrap-icons'

const Footer = () => {
  return (
    <div className='my-2 border-top border-danger border-2'>
      <div className='row'>
        <h2 className='fs-5 mt-4 pb-3 text-center'>
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </h2>
        <p>
          CHEMICALS & PROCESS
          <span className='border-end border-danger border-2 ps-1'></span> POWER
          <span className='border-end border-danger border-2 ps-1'></span> WATER
          & WASTE WATER
          <span className='border-end border-danger border-2 ps-1'></span> OILS
          & GAS<span className='border-end border-danger border-2 ps-1'></span>{' '}
          PHARMA<span className='border-end border-danger border-2 ps-1'></span>{' '}
          SUGARS & DISTILLERIES
          <span className='border-end border-danger border-2 ps-1'></span> PAPER
          & PULP<span className='border-end border-danger border-2 ps-1'></span>{' '}
          MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE
          <span className='border-end border-danger border-2 ps-1'></span>{' '}
          PETROCHEMICAL & REFINERIES
          <span className='border-end border-danger border-2 ps-1'></span> SOLAR
          <span className='border-end border-danger border-2 ps-1'></span>{' '}
          BUILDING
          <span className='border-end border-danger border-2 ps-1'></span> HVAC
          <span className='border-end border-danger border-2 ps-1'></span> FIRE
          FIGHTING
          <span className='border-end border-danger border-2 ps-1'></span>{' '}
          AGRICULTURE & RESIDENTIAL
        </p>
      </div>
      <div className='d-flex justify-content-evenly bg-danger text-light py-4 row mt-2'>
        <p className='col-sm-12 col-md-12 col-lg-4 text-center'>
          <Telephone className='pe-2 fs-3' />
          Toll Free:1800 200 1234
        </p>
        <p className='col-sm-12 col-md-12 col-lg-4 text-center'>
          <Facebook className='pe-2 fs-3' />
          www.facebook.com/cripumps
        </p>
        <p className='col-sm-12 col-md-12 col-lg-4 text-center'>
          <Globe2 className='pe-2 fs-3' />
          www.crigroups.com
        </p>
      </div>
    </div>
  )
}

export default Footer
