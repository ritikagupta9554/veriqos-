import React from 'react'

const FinancialInnovation = () => {
  const financial =[
    {
      "img":"",
      "title":"Digital Lending (Banks & NBFCs)",
      "des":"Streamline loan origination, KYC/AML, and credit decisioning.",
    },
    {
      "img":"",
      "title":"Insurance Tech",
      "des":"Automate policy issuance, claim processing, and regulatory compliance.",
    },
    {
      "img":"",
      "title":"Investment Platforms",
      "des":"Secure onboarding for users with PAN, Aadhaar, eKYC, and SEBI compliance.",
    },
    {
      "img":"",
      "title":"Digital Lending (Banks & NBFCs)",
      "des":"Streamline loan origination, KYC/AML, and credit decisioning.",
    },
    {
      "img":"",
      "title":"Insurance Tech",
      "des":"Automate policy issuance, claim processing, and regulatory compliance.",
    },
    {
      "img":"",
      "title":"Investment Platforms",
      "des":"Secure onboarding for users with PAN, Aadhaar, eKYC, and SEBI compliance.",
    },

  ]
  return (
    <>
    {
      financial.map(()=>{
        return(
          <>
          <div className="sm:h-[60vh] lg:h-[50vh] w-[20vw] bg-cyan-200 rounded-2xl justify-center items-center flex flex-wrap flex-col ">
            <div className="h-[12vh] w-[6vw] bg-amber-500 rounded-xl ">
              {" "}
              <img src="" alt="" />
            </div>
            <h3 className="justify-center text-center mt-4">
              Digital Lending <br />
              (Banks & NBFCs)
            </h3>
            <p className="text-center mt">
              Streamline loan origination, KYC/AML, and credit decisioning.
            </p>
          </div>
          </>
        )
      })
    }
    </>
  )
}

export default FinancialInnovation