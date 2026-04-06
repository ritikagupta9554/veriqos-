import React from 'react'
import a1 from "../image/AddPlatform/a1.png"
import a2 from "../image/AddPlatform/a2.png"
import a3 from "../image/AddPlatform/a3.png"
import a4 from "../image/AddPlatform/a4.png"

const AddPlatfrom = () => {
  const additional = [
    {
      "img":a1,
      "title":"eMandate & UPI Integration",
    },
    {
      "img":a2,
      "title":"Credit Scoring Tools",
    },
    {
      "img":a3,
      "title":"Document Verification via OCR",
    },
    {
      "img":a4,
      "title":"PAN, Aadhaar, API Integrations",
    },
  ]
  return (
    <>
  {
    additional.map((value,index)=> {
      return(
        <>
         <div className="h-[15vh] w-[30vw] bg-teal-400 rounded-2xl flex items-center gap-4 ps-4 ">
              <div className="h-15 w-15 rounded-4xl bg-white  ">
                <img src={value.img} alt="" />
              </div>
              <h2 className="text-center">{value.title}</h2>
            </div>
        </>
      )
    })
  }
    </>
  )
}

export default AddPlatfrom