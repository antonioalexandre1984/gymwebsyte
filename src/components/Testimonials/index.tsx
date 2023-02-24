import './Testimonials.css';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import { testimonialsData } from '../../data/testimonialsData';
import { useState } from 'react';

export function Testimonials() {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  return (
    <div className='Testimonials'>
      <div className='left-t'>
        <span>Testimonials</span>
        <span className='stroke-text'>What they</span>
        <span>say about us</span>
        <span>
          {testimonialsData[selected].review}
        </span>
        <span>
          <span style={{ color: 'var(--orange)' }}>
            {testimonialsData[selected].name}
          </span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className='right-t'>
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="" />
        <div className='arrows'>
          <img src={leftArrow} alt=""
            onClick={() => setSelected((selected + tLength - 1) % tLength)} />
          <img src={rightArrow} alt=""
            onClick={() => setSelected((selected + 1) % tLength)} />
        </div>
      </div>
    </div >
  );
}
