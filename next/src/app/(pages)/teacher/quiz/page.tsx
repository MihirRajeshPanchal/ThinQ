// List quizzes

/*
* Quiz Name
* No of Questions
* No of Responses
* Time Generated
* */

import React from 'react'

const Page = () => {
  return (
	<div>
    <h1 className='text-4xl text-black font-medium'>Quizzes</h1>
    <p className='text-xl mt-4'>Questions generated by our model</p>
    <div className='quizCardWrapper | mt-3 grid gap-10 grid-cols-[repeat(auto-fill,minmax(350px,1fr))]'>
      <div className='quizCard | rounded-[0.625rem] border border-[#A0A0A0] text-center px-6 py-7'>
        <h1 className='text-xl text-black'>What is the Capital of Universe?</h1>
        <p className='mt-3'>Tap to reveal answers</p>
        <div className='mt-3 flex gap-3 flex-wrap justify-center'>
          <p className='text-sm text-[#0039C6] border border-[#5462DF] bg-[#CCE0FF] font-medium py-[0.375rem] px-3 rounded-full'>Questions: 12</p>
          <p className='text-sm text-[#00802B] border border-[#00B833] bg-[#CCFFE0] font-medium py-[0.375rem] px-3 rounded-full'>Responses: 12</p>
        </div>
      </div>
    </div>
	</div>
  )
}

export default Page
