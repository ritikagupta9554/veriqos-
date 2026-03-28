import React from 'react'

const Industries = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-blue-300">
  <div className="flex h-[90vh] w-[90vw] items-center justify-center gap-3 bg-blue-200">
    <div className="flex h-40 w-50 items-center justify-center rounded-2xl">
      <div className="h-40 w-1/2 rounded-s-2xl bg-white p-3">
        <h1 className="mt-1 font-black">Lorem</h1>
        <p className="text-justify text-xs">At vero eos et accusamus et iusto odio dignissimos ducimus.</p>
        <button className="mt-1.5 rounded bg-blue-900 p-1 text-sm text-white">Follow</button>
      </div>
      <div className="h-40 w-1/2 rounded">
        <img className="h-40 w-full rounded-e-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST2TxJFyKS8koLbrXz_g92HNYJkx4EnoGm2Q&s" alt="" />
      </div>
    </div>
    <div className="flex h-40 w-50 items-center justify-center rounded-2xl">
      <div className="h-40 w-1/2 rounded-s-2xl">
        <img className="h-40 w-full rounded-s-2xl" src="https://mooddp.com/wp-content/uploads/2025/12/cartoon-vibe-picture.jpg" alt="" />
      </div>
      <div className="h-40 w-1/2 rounded-e-2xl bg-white p-3">
        <h1 className="mt-1 font-black">Lorem</h1>
        <p className="text-justify text-xs">At vero eos et accusamus et iusto odio dignissimos ducimus.</p>
        <button className="mt-1.5 rounded bg-blue-900 p-1 text-sm text-white">Follow</button>
      </div>
    </div>
  </div>
</div>

  )
}

export default Industries