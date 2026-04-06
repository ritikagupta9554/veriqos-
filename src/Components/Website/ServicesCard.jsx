import React from 'react'
import ps1 from "../image/card/1.png"
import ps2 from "../image/card/2.png"
import ps3 from "../image/card/3.png"
import ps4 from "../image/card/4.png"

const ServicesCard = () => {
  const services = [
    {
      img: ps1,
      title: "Digital KYC Automation",
      des: "Streamline customer verification with AI-powered document processing and biometric authentication.",
    },
    {
      img: ps2,
      title: "Smart Document Verification",
      des: "Intelligent document analysis with real-time fraud detection and automated data extraction.",
    },
    {
      img: ps3,
      title: "AI-Powered Risk Assessment",
      des: "Advanced machine learning algorithms for comprehensive risk evaluation and scoring.",
    },
    {
      img: ps4,
      title: "Secure Onboarding APIs",
      des: "Enterprise-grade APIs with robust security protocols and seamless integration capabilities.",
    },
  ];
  return (
    <>
    {
      services.map(
        (value,index)=>{
          return(
            <>
            <div key={index}
                className="rounded-2xl p-5 border shadow-2xl w-72"
              >
                <div className="h-14 w-14 bg-black rounded-full flex items-center justify-center">
                  <img
                   src={value.img}
                    className=""
                  />
                </div>

                <div className='mt-2'>
                  <h1 className="font-bold mt-3">{value.title}</h1>
                  <p className="mt-2 text-sm text-gray-600">{value.des}</p>
                </div>
              </div>
            </>
          )
        }
      )
    }
    </>
  )
}

export default ServicesCard