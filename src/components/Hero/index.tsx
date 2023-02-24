import { Header } from '../Header';
import './Hero.css';
//import images from '../../assets/images';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import heart from '../../assets/heart.png';
import calories from '../../assets/calories.png';

export function Hero() {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <div className=""></div>
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
            <span className="">+140</span>
            <span className="">expert coachs</span>
          </div>
          <div>
            <span className="">+978</span>
            <span className="">members joined</span>
          </div>
          <div>
            <span className="">+50</span>
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

        <div className="heart-rate">
          <img src={heart} alt="" />
          <span className="span">Heart Rate</span>
          <span className="span">116 bpm</span>
        </div>

        {/* hero images */}
        <img src={hero_image} alt="" className='hero_image' />
        {/* hero image back */}
        <img src={hero_image_back} alt="" className="hero_image_back" />
        {/* calories */}
        <div className="calories">
          <img src={calories} alt="" />
          <div>
            <span className="span">Calories Burned</span>
            <span className="span">1,200 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
}
