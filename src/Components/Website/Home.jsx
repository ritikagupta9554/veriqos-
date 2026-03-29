import React from "react";
import cta from "../image/cta.png";
const Home = () => {
  const services = [
    {
      img: "",
      title: "Digital KYC Automation",
      des: "Streamline customer verification with AI-powered document processing and biometric authentication.",
    },
    {
      img: "",
      title: "Smart Document Verification",
      des: "Intelligent document analysis with real-time fraud detection and automated data extraction.",
    },
    {
      img: "",
      title: "AI-Powered Risk Assessment",
      des: "Advanced machine learning algorithms for comprehensive risk evaluation and scoring.",
    },
    {
      img: "",
      title: "Secure Onboarding APIs",
      des: "Enterprise-grade APIs with robust security protocols and seamless integration capabilities.",
    },
  ];

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
      <div className="mt-5 w-screen  justify-center gap-10 items-center flex">
        {services.map((index , item) => (
          <div key={index} className="h-50 w-100 rounded-2xl p-3  border shadow-2xl ">
            <div className="h-15 w-15 bg-black rounded-4xl mt-1">
              <img src="" alt="" />
            </div>
            <div className="">
              <h1 className="font-bold mt-1">{item.title}</h1>
              <p className="mt-1">{item.des}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10"></div>
    </>
  );
};

export default Home;
