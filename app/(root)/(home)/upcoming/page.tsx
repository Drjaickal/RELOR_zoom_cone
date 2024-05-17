import CallList from '@/components/CallList'
import React from 'react'

const Upcoming = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="flex size-full flex-3xl font-bold">
        Upcoming
      </h1>

      <CallList type="upcoming" />
    </section>
  )
}

export default Upcoming