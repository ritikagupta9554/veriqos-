import React from 'react'

const About = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-blue-300">
  <div className="flex h-50 w-100 rounded-2xl bg-white">
    <div className="h-50 w-1/2 rounded-s-2xl p-4">
      <h1 className="mb-1 font-bold">What is Lorem Ipsum?</h1>
      <p className="text-justify text-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
    <div className="h-50 w-1/2 rounded-e-2xl">
      <img className="h-50 w-full rounded-e-2xl" src="https://mooddp.com/wp-content/uploads/2025/12/cartoon-style-avatar-whatsapp.jpg" alt="" />
    </div>
  </div>
</div>

  )
}

export default About