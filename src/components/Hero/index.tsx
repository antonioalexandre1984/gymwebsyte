import { Header } from '../Header';
import './Hero.css';
import NumberCounter from 'number-counter';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import heart from '../../assets/heart.png';
import calories from '../../assets/calories.png';
import { motion } from 'framer-motion';

export function Hero() {
  const transition = {
    type: 'spring',
    duration: 3,
  };
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "178px" : "238px" }}
            animate={{ left: '8px' }}
            transition={{ ...transition, type: "tween" }}
          >
          </motion.div>
          {/*  <div className=""></div> */}
          <span>The Best fitness club in the town</span>
        </div>
        <div className="hero-text">
          <div className=''>
            <span className='stroke-text'>Shape</span>
            <span> Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div className="">
            <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
          </div>
        </div>
        { /* figures */}
        <div className="figures">
          <div>
            <span className="">
              <NumberCounter end={140} start={100} delay='4' prefix="+" />
            </span>
            <span className="">expert coachs</span>
          </div>
          <div>
            <span className=""><NumberCounter end={978} start={700} delay='4' prefix="+" /></span>
            <span className="">members joined</span>
          </div>
          <div>
            <span className=""><NumberCounter end={50} start={0} delay='2' prefix="+" /></span>
            <span className="">fitness programs</span>
          </div>
        </div>
        { /* hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div
          initial={{ right: '-1rem' }}
          whileInView={{ right: '4rem' }}
          transition={transition}
          className="heart-rate">
          <img src={heart} alt="" />
          <span className="span">Heart Rate</span>
          <span className="span">116 bpm</span>
        </motion.div>

        {/* hero images */}
        <img src={hero_image} alt="" className='hero_image' />
        {/* hero image back */}
        <motion.img
          initial={{ right: '11rem' }}
          whileInView={{ right: '20rem' }}
          transition={transition}
          src={hero_image_back} alt="" className="hero_image_back" />


        {/* calories */}
        <motion.div
          initial={{ right: '37rem' }}
          whileInView={{ right: '28rem' }}
          transition={transition}
          className="calories">
          <img src={calories} alt="" />
          <div>
            <span className="span">Calories Burned</span>
            <span className="span">1,200 kcal</span>
          </div>
        </motion.div>


      </div>
    </div>
  );
}
