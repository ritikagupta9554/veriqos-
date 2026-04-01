import React from 'react'
import image from "../image/UserApp/UAimg.png"


const MultiplePlatfom = () => {
  const multiple = [
    {
      "img":image,
      "title":"Mobile Banking Experience",
      "subtitle":"Intuitive interface for seamless customer interactions",
      "p1":"Track application status in real time",
      "p2":"Submit documents securely with a tap",
      "p3":"Instant notifications and updates",
      "p4":"Biometric authentication",

    },
  ]
  return (
    <>
   {
     multiple.map((value,index)=>
    {
      return(
        <>
        <div className="h-[70vh] w-screen  flex justify-center items-center">
            <div className="h-[50vh] w-[50vw] flex justify-center items-center">
              <img
                className="h-80 w-80"
                src={value.img}
                alt=""
              />
            </div>
            <div className="h-[50vh] w-[50vw]">
              <h2 className="font-black text-2xl">{value.title}</h2>
              <p className="font-light">
                {value.subtitle}
              </p>

              <div className="mt-1.5">
                <div className="flex items-center">
                  <img
                    className="h-5 w-5"
                    src="src\Components\image\UserApp\icon.png"
                    alt=""
                  />
                  <p className="text-sm ">
                    {value.p1}
                  </p>
                </div>

    

                <div className="flex items-center">
                  <img
                    className="h-5 w-5"
                    src="src\Components\image\UserApp\icon.png"
                    alt=""
                  />
                  <p className="text-sm ">
                     {value.p2}
                  </p>
                </div>

                <div className="flex items-center">
                  <img
                    className="h-5 w-5"
                    src="src\Components\image\UserApp\icon.png"
                    alt=""
                  />
                  <p className="text-sm ">
                    {value.p3}
                  </p>
                </div>
                <div className="flex items-center">
                  <img
                    className="h-5 w-5"
                    src="src\Components\image\UserApp\icon.png"
                    alt=""
                  />
                  <p className="text-sm ">
                    {value.p4}
                  </p>
                </div>
              </div>
              <div className="mt-3"><button className="border-teal-500 border rounded-4xl py-2.5 px-3.5 text-sm ">
              try Demo
            </button>
            <button className="bg-teal-500 border-teal-500 border rounded-full h-12 w-12 me-0.5 ">
              /
            </button></div>
            </div>

             
          </div>
        </>
      )
      
    })
   }
    </>
  )
}

export default MultiplePlatfom