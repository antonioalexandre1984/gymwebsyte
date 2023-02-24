import './Plans.css';
import { plansData } from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';


export function Plans() {
  return (
    <div className="plans-container">
      <div className="programs-header">
        <span className='stroke-text'>READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className='stroke-text'>NOW WITHUS</span>
      </div>
      {/* plans card */}
      <div className="plans">
        {plansData.map((plans, i) => {
          return (
            <div className="plan" key={i}>
              {plans.icon}
              <span>{plans.name}</span>
              <span>$ {plans.price}</span>

              <div className='features'>
                {plans.features.map((feature, i) => {
                  return (
                    <div className="feature" key={i}>
                      <img src={whiteTick} alt='' />
                      <span>{feature}</span>
                    </div>
                  )
                })}
              </div>
              <div className="">
                <span>See More Benefits</span>
              </div>
              <button className='btnPlan'>JOIN US</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}
