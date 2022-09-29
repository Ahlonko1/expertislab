import React from 'react';
import {HiOutlineArrowNarrowDown} from "react-icons/hi";
import {Link} from "react-scroll";

const CTA = () => {
  return (
    <div className='cta'>
      <Link to="presentation" spy={true} smooth={true} offset={-100} duration={600}><HiOutlineArrowNarrowDown className='arrow'/>EN SAVOIR PLUS</Link>
    </div>
  )
}

export default CTA
