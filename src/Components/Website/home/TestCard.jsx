import React from 'react'
import com from "../../image/testimg/comma.png"
import fed from "../../image/testimg/star.png"
import m1 from "../../image/testimg/p1.png"
import m2 from "../../image/testimg/p2.png"
import m3 from "../../image/testimg/p3.png"

const TestCard = () => {
  const tcard = [
    {
      "comma":com,
      "p":"I like getting the SMS & knowing the jobs done. I often refer to it, “hope you get a ping today!” because my product",
      "person1":m1,
      "star":fed,
      "name":"Mike Torello",
      "pos":"CEO of Initech",
    },
    {
      "comma":com,
      "p":"We have successfully sold digital product and have happy with the results & look forward to using it again this.",
      "person1":m2,
      "star":fed,
      "name":"Richards Hawkins",
      "pos":"Marketing manager of Upnow",
    },
    {
      "comma":com,
      "p":"Design Monks offers producers a cost-effective selling tool. Having the ability to post prices that you want on an exchange visible .",
      "person1":m3,
      "star":fed,
      "name":"Thomas Magnum",
      "pos":"Barellon NSW",
    },
  ]
  return (
   <>
   {
    tcard.map((value,index)=>{
      return (
        <>
        <div>
         <div key={index} className=" w-[30vw] border-teal-300 border rounded-2xl p-4 mt-5 ">
            {/* 1 */}
            <div className="h-15 w-15  ">
              <img src={value.comma} alt="" />
            </div>
          {/* 2 */}
            <div>
              {" "}
              <p className="text-justify mt-1">
              {value.p}
              </p>
            </div>
          {/* 3 */}
            <div className="flex gap-5 mt-1">
              <div ><img className='h-18 w-18 rounded-full' src={value.person1} alt="" /></div>
              <div className="">
                <div >
                  <img className='h-6 w-30 ' src={value.star} alt="" />
                </div>
                <p className="font-medium">Mike Torello</p>
                <p className="font-light">CEO of Initech</p>
              </div>
            </div>
          </div>
          </div>
        </>
      )
    })
   }
   </>
  )
}

export default TestCard