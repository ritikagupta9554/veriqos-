import React from 'react'
import card1 from "../image/ServicesImg/1card.png"
import card2 from "../image/ServicesImg/2card.png"
import card3 from "../image/ServicesImg/3card.png"
import card4 from "../image/ServicesImg/4card.png"
import card5 from "../image/ServicesImg/5card..png"
import card6 from "../image/ServicesImg/6card.png"
import card7 from '../image/ServicesImg/7card.png'
import card8 from '../image/ServicesImg/8card.png'


const CardServices = () => {
  const card = [
    {
      "img":card1,
       "title":"Digital Onboarding",
       "des":"Seamlessly onboard customers with our digital solutions",
    },
    {
      "img":card2,
       "title":"Biometric Verification",
       "des":"Seamlessly onboard customers with our digital solutions",
    },
    {
      "img":card3,
       "title":"Fraud & AML",
       "des":"Seamlessly onboard customers with our digital solutions",
    },
    {
      "img":card4,
       "title":"Document OCR",
       "des":"Seamlessly onboard customers with our digital solutions",
    },
    {
      "img":card5,
       "title":"Identity Verification",
       "des":"Seamlessly onboard customers with our digital solutions",
    },
    {
      "img":card6,
       "title":"Address Verification",
       "des":"Seamlessly onboard customers with our digital solutions",
    },
    {
      "img":card7,
       "title":"Company Validation",
       "des":"Seamlessly onboard customers with our digital solutions",
    },
    {
      "img":card8,
       "title":"Bank Validation",
       "des":"Seamlessly onboard customers with our digital solutions",
    },

  ]
  return (
    <>
    {
      card.map(
        (value,index)=> {
          return (
            <>
            <div className="h-80 w-42  ">
            <div className="h-50 w-40  rounded-2xl mt-2">
              <img src={value.img} alt="" />
            </div>
            <div className="">
              <h1 className="font-bold ">{value.title}</h1>
              <p className="text-sm">
                {value.des}
              </p>
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

export default CardServices