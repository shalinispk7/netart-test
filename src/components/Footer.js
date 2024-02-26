import React from 'react'
import { Telephone, Facebook, Globe2 } from 'react-bootstrap-icons'

const Footer = () => {
  return (
    <>
      <div className='row'>
        <h2 className='fs-5'>
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </h2>
        <p>
          CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS
          & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD &
          BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING
          AGRICULTURE & RESIDENTIAL
        </p>
      </div>
      <div className='d-flex justify-content-evenly bg-danger text-light py-4 row'>
        <p className='col-sm-12 col-md-12 col-lg-4'>
          <Telephone className='pe-2 fs-3' />
          Toll Free:1800 200 1234
        </p>
        <p className='col-sm-12 col-md-12 col-lg-4'>
          <Facebook className='pe-2 fs-3' />
          www.facebook.com/cripumps
        </p>
        <p className='col-sm-12 col-md-12 col-lg-4'>
          <Globe2 className='pe-2 fs-3' />
          www.crigroups.com
        </p>
      </div>
    </>
  )
}

export default Footer
