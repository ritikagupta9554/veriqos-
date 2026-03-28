import React from "react";
import cta from "../image/cta.png";
const Home = () => {
  return (
    <>
    {/* CTA Section */}
      <div className=" h-100 flex">
        <div className=" h-100 w-3/5 place-content-center flex flex-col flex-wrap gap-2.5">
          <div className="text-2xl font-extrabold ">
            Transforming Finance <br /> Through Intelligent
            <br /> Automation
          </div>
          <div className="text-lg font-light place-content-center flex flex-col flex-wrap font">
            From onboarding to compliance, deliver <br /> frictionless customer
            experiences
          </div>
          <div>
            <button className="border-teal-500 border rounded-4xl py-2.5 px-3.5 text-sm">
              Get Started Today
            </button>
            <button className="bg-teal-500 border-teal-500 border rounded-full h-12 w-12 me-0.5 ">/</button>
          </div>
        </div>
        <div className=" h-100 w-2/5 me-5 place-content-center  ">
          <img className="h-2/3 place--center" src={cta} alt="cta" />
        </div>
    
      </div>

      {/* services */}
      <div>
        <div className=" place-content-center ">
        <div>Powerful Features for Modern Finance</div>
        <div>Comprehensive solutions designed to transform your <br /> financial operations with cutting-edge technology</div>
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>

      </div>
      </div>
    </>
  );
};

export default Home;
