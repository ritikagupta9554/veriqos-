import React from 'react'
import i1 from "../image/FInn/div1 (2).png"
import i2 from "../image/FInn/div2 (2).png"
import i3 from "../image/FInn/div3.png"

const EFinInnovation = () => {
  const innovation = [
    {
      "img":i1,
      "title":"Digital Lending(Banks & NBFCs)",
      "des":"Streamline loan origination, KYC/AML, and credit decisioning.",
    },
    {
      "img":i2,
      "title":"Insurance Tech",
      "des":"Automate policy issuance, claim processing, and regulatory compliance.",
    },
    {
      "img":i3,
      "title":"Investment Platforms",
      "des":"Secure onboarding for users with PAN, Aadhaar, eKYC, and SEBI compliance.",
    },
    {
      "img":i1,
      "title":"Digital Lending (Banks & NBFCs)",
      "des":"Streamline loan origination, KYC/AML, and credit decisioning.",
    },
    {
      "img":i2,
      "title":"Insurance Tech",
      "des":"Automate policy issuance, claim processing, and regulatory compliance.",
    },
    {
      "img":i3,
      "title":"Investment Platforms",
      "des":"Secure onboarding for users with PAN, Aadhaar, eKYC, and SEBI compliance.",
    },
    
  ]
  return (
    <>
    {
      innovation.map((value,index)=>{
        return (
          <>
          <div className="sm:h-[60vh] lg:h-[50vh] w-[20vw] border-2 border-cyan-200  rounded-2xl justify-center items-center flex flex-wrap flex-col ">
            <div className=" ">
              
              <img src={value.img} alt="" />
            </div>
            <h3 className="justify-center text-center mt-4">
              {value.title}
            </h3>
            <p className="text-center mt-2 ">
             {value.des}
            </p>
          </div>
          </>
        )
      })
    }
    </>
  )
}

export default EFinInnovation