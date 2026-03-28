import React from 'react'

const Contact = () => {
  return (
   <div className="flex h-screen items-center justify-center bg-fuchsia-200">
  <div className="flex h-[90vh] w-[90vw] items-center justify-center gap-1.5 bg-fuchsia-100">
    <div className="flex h-40 w-60 items-center rounded-2xl bg-cyan-200">
      <div className="h-40 w-1/2 rounded-s-2xl">
        <img className="h-40 w-full rounded-s-2xl" src="https://mooddp.com/wp-content/uploads/2025/12/cartoon-moment-dp-whatsapp.jpg" alt="" />
      </div>
      <div className="h-40 w-1/2 rounded-e-2xl bg-white">
        <div className="p-2.5">
          <h1 className="font-medium">Lorem Ipsum</h1>
          <p className="mt-0.5 text-justify text-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <button className="mt-2 rounded bg-blue-600 p-1 text-xs text-white">Follow</button>
        </div>
      </div>
    </div>
    <div className="flex h-40 w-60 items-center justify-center rounded-2xl bg-emerald-200">
      <div className="h-40 w-1/2 rounded-s-2xl bg-white">
        <div className="p-2.5">
          <h1 className="font-medium">Lorem Ipsum</h1>
          <p className="text-justify text-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <button className="mt-2 rounded bg-blue-600 p-1 text-xs text-white">Follow</button>
        </div>
      </div>
      <div className="h-40 w-1/2 rounded-e-2xl bg-amber-600">
        <img className="h-40 w-full rounded-e-2xl" src="https://mooddp.com/wp-content/uploads/2025/12/playful-cartoon-dp-whatsapp.jpg" alt="" />
      </div>
    </div>
  </div>
</div>

  )
}

export default Contact