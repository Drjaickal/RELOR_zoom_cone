import MeetingTypeList from '@/components/MeetingTypeList';
import React from 'react'

const Home = () => {
  const now = new Date();

  // 1. Use the Date object's getTimezoneOffset() method to get the offset in minutes from UTC
  const offsetInMinutes = now.getTimezoneOffset();

  // 2. Calculate the offset in hours (IST is +5:30 from UTC)
  const offsetInHours = offsetInMinutes / 60 + 5.5;

  // 3. Create a new Date object adjusted to IST
  const istDate = new Date(now.getTime() + offsetInHours * 60 * 60 * 1000);

  // 4. Format the time and date using toLocaleTimeString and Intl.DateTimeFormat
  const time = istDate.toLocaleTimeString('en-india', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-india', { dateStyle: 'full' })).format(istDate);
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">Upcoming Meeting at: 12:30 AM</h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">
              {time}
            </h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  )
}

export default Home