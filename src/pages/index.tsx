import React, { Suspense, lazy } from "react"
const Heavy = lazy(() => import('./components/Heavy'))


export default function Home() {
  return (
    <div className="bg-gradient-to-r p-20 mx-auto w-full from-blue-500 to-pink-400 h-screen">
      <Suspense fallback="Loading">
        <Heavy />
      </Suspense>
    </div>
  )
}
