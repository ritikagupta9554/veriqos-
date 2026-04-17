import React from 'react'
import pimg1 from "../image/Pimg/p1.png"
import pimg2 from "../image/Pimg/p2.png"
import pimg3 from "../image/Pimg/p3.png"

const PlatformCard = () => {
  const Platform = [
    {
      "img":pimg1,
      "h1":"100%",
      "h2":"Compliance First",
      "des":"Successfully processed millions of customer applications with 99.9% accuracy",
    },
    {
      "img":pimg2,
      "h1":"99%",
      "h2":"Data Accuracy",
      "des":"Industry-leading precision in document verification and data extraction",
    },
    {
      "img":pimg3,
      "h1":"20+",
      "h2":"Banking Integrations",
      "des":"Seamless connections with major financial institutions and payment processors",
    },
  ]
  return (
    <>
    {
      Platform.map((value,index) => {
        return(
          <>
          <div className="h-[65vh] w-[27vw] border-2 border-amber-400 rounded-2xl p-3  ">
              <div className="h-[30vh]  bg-white rounded-2xl ">
                <img src={value.img} alt="" />
              </div>
              <div className=""><h1 className="font-black text-2xl text-center mt-3 ">{value.h1}</h1>
              <h2 className="font-medium text-xl text-center mt-2">{value.h2}</h2>
              <p className="text-sm text-center mt-3">{value.des}</p>
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

export default PlatformCard