import React from "react";
import Check from '../images/check-solid.svg';


function Pricelist() {
  return (
    <div className="container">
      <div className="col-33">
          <div className="price-list">
            <h2>Freelancer</h2>
            <h4>$24 <span>/month</span></h4>
            <p>The essentials to provide your best work for clients</p>
            <div className="features">
            <h6> <img src={Check} alt="Check" /> 5 products</h6>
            <h6> <img src={Check} alt="Check" /> Up to 1,000 subscribers</h6>
            <h6> <img src={Check} alt="Check" /> Basic analytics</h6>
            <h6> <img src={Check} alt="Check" /> 48-hour support response time</h6>
            </div>
            <button className="btn-monthly">Monthly billing</button>
          </div>

      </div>
      <div className="col-33">
          <div className="price-list">
            <h2>Startup</h2>
            <h4>$32 <span>/month</span></h4>
            <p> A plan that scales with your rapidly growing business. </p>
            <div className="features">
            <h6> <img src={Check} alt="Check" /> 25 products</h6>
            <h6> <img src={Check} alt="Check" /> Up to 10,000 subscribers</h6>
            <h6> <img src={Check} alt="Check" /> Advanced analytics</h6>
            <h6> <img src={Check} alt="Check" /> 24-hour support response time</h6>
            <h6> <img src={Check} alt="Check" /> Marketing automations</h6>
            </div>
            <button className="btn-monthly-primary">Monthly billing</button>
          </div>

      </div>
      <div className="col-33">
          <div className="price-list">
            <h2>Enterprise</h2>
            <h4>$48 <span>/month</span></h4>
            <p>Dedicated support and infrastructure for your company.</p>
            <div className="features">
            <h6> <img src={Check} alt="Check" /> Unlimited  products</h6>
            <h6> <img src={Check} alt="Check" /> Unlimited  subscribers</h6>
            <h6> <img src={Check} alt="Check" /> Advanced analytics</h6>
            <h6> <img src={Check} alt="Check" /> 1-hour, dedicated support response time</h6>
            <h6> <img src={Check} alt="Check" /> Marketing automations</h6>
            <h6> <img src={Check} alt="Check" /> Custom integrations</h6>
            </div>
            <button className="btn-monthly">Monthly billing</button>

          </div>

      </div>
    </div>
  );
}

export default Pricelist;
