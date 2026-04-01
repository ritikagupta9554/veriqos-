import React from "react";
import cta from "../image/cta.png";
import ServicesCard from "./ServicesCard";
import CardServices from "./CardServices";
import PlatformCard from "./PlatformCard";
import MultiplePlatfom from "./MultiplePlatfom";

const Home = () => {

 const handleClick =() => {
  return ( 
  <MultiplePlatfom/>)
 }

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
            <button className="bg-teal-500 border-teal-500 border rounded-full h-12 w-12 me-0.5 ">
              /
            </button>
          </div>
        </div>
        <div className=" h-100 w-2/5 me-5 place-content-center  ">
          <img className="h-2/3 place--center" src={cta} alt="cta" />
        </div>
      </div>

      {/* services */}

      <div className=" flex flex-col items-center justify-center ">
        <h1 className="font-bold text-2xl">
          Powerful Features for Modern Finance
        </h1>
        <p className="text-sm text-center">
          Comprehensive solutions designed to transform your <br /> financial
          operations with cutting-edge technology
        </p>
      </div>

      {/* card */}
      <div className="mt-5 w-full flex justify-center">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10">
          <ServicesCard />
        </div>
      </div>

      <div className="mt-10  w-screen flex justify-center items-center text-center flex-col">
        <h1 className="font-bold text-2xl ">Our Services</h1>
        <p className="">
          Comprehensive financial technology solutions tailored to <br /> your
          business needs
        </p>
        <div className=" w-screen  flex  justify-center  ">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
            <CardServices />
          </div>
        </div>
      </div>

      {/* Why Choose Our Platform? */}

      <div className="h-[90vh]   flex items-center justify-center ">
        <div className="flex-wrap  justify-center items-center  ">
          <h1 className=" font-bold text-2xl text-center">
            Why Choose Our Platform?
          </h1>
          <p className="text-sm text-center">
            Trusted by leading financial institutions worldwide for our proven
            track record <br /> and innovative solutions
          </p>
          <div className="h-[70vh] w-screen flex  items-center justify-center gap-5 mt-4">
            <PlatformCard />
          </div>
        </div>
      </div>
      <div className="items-center justify-center flex mt-5">
        <button className="border-teal-500 border rounded-4xl py-2.5 px-3.5 text-sm">
          Get Started Today
        </button>
        <button className="bg-teal-500 border-teal-500 border rounded-full h-12 w-12 me-0.5 ">
          /
        </button>
      </div>

      {/* Multi-Platform Solution */}
      <div className="h-[90vh] w-screen ">
        <div>
          <h1 className="font-bold text-2xl justify-center text-center mt-2.5">
            Multi-Platform Solution
          </h1>
          <p className="text-sm text-center mt-1">
            Comprehensive applications designed for every stakeholder in your
            financial ecosystem{" "}
          </p>
        </div>
        <div className="h-[79vh] w-screen ">
          <div className="h-[15vh] w-screen flex gap-2 justify-center ">
            <div className="h-[10vh] bg-teal-400 rounded-s-2xl w-[30vw] mt-3  justify-center flex items-center ">
              <button onClick={() => handleClick("user")} className="text-xl font-medium text-white">User App</button>
            </div>
            <div className="h-[10vh] border border-teal-400  w-[30vw] mt-3 justify-center flex items-center">
              <button onClick={() => handleClick("agent")} className="text-xl font-medium ">Agent App</button>
            </div>
            <div className="h-[10vh] border border-teal-400 rounded-e-2xl w-[30vw] mt-3 justify-center items-center flex">
              <button onClick={() => handleClick("admin")} className="text-xl font-medium">Admin Dashboard</button>
            </div>
          </div>
          {/* User App */}
         {/* <MultiplePlatfom/> */}
          
        </div>

      </div>

    </>
  );
};

export default Home;
