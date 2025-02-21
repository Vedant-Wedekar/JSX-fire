import React from 'react'
// import myImage from './assets/myimage.jpg'; // Adjust path accordingly
const Con = () => {
  return (
    <div className='flex justify-center items-center gap-[100px]'>  
        {/* <div className="image">   <img src={myImage} alt="My Image" width="300" /></div> */}
        <img className='rounded-4xl mt-[70px] ml-[-300px]' src="https://miro.medium.com/v2/resize:fit:1400/1*y1KgG2cuZQXCjf-tFy2psQ.png" alt="Online Image" width="540" />

        <div className="detail">
          <div className="text">Mastering Web Development</div>
          <div className="two">
            <div className="text">By-Vedant Wedekar</div>
            <div className="text"><h2>(6950 review)</h2></div>
          </div>
          <div className="text">Select Learning Mode</div>

          <div className="c2 flex justify-between items-center gap-3">
        <div className="w-[60px] h-[35px] border-zinc-400 border-1 pb-0.5 text-sm font-medium   rounded-4xl bg-zinc-100 flex justify-center items-center">Home</div>
        <div className="w-[75px] h-[35px] border-zinc-400 border-1 pb-0.5    text-sm font-medium rounded-4xl bg-zinc-100 flex justify-center items-center">Courses</div>
        <div className="w-[100px] h-[35px] border-zinc-400 border-1 pb-0.5   text-sm font-medium rounded-4xl bg-zinc-100 flex justify-center items-center">Mentorship</div>
        <div className="w-[65px] h-[35px] border-zinc-400 border-1 pb-0.5    text-sm font-medium rounded-4xl bg-zinc-100 flex justify-center items-center">About</div>
          </div>

          <div className="text"></div>
          <div className="c2 flex justify-between items-center gap-3">
        <div className="w-[60px] h-[35px] border-zinc-400 border-1 pb-0.5 text-sm font-medium   rounded-4xl bg-zinc-100 flex justify-center items-center">Home</div>
        <div className="w-[75px] h-[35px] border-zinc-400 border-1 pb-0.5    text-sm font-medium rounded-4xl bg-zinc-100 flex justify-center items-center">Courses</div>
        <div className="w-[100px] h-[35px] border-zinc-400 border-1 pb-0.5   text-sm font-medium rounded-4xl bg-zinc-100 flex justify-center items-center">Mentorship</div>
        <div className="w-[65px] h-[35px] border-zinc-400 border-1 pb-0.5    text-sm font-medium rounded-4xl bg-zinc-100 flex justify-center items-center">About</div>
          </div>

          <div className="text"></div>
          <div className="text"></div>
          <div className="c2 flex justify-between items-center gap-3">
        <div className="w-[60px] h-[35px] border-zinc-400 border-1 pb-0.5 text-sm font-medium   rounded-4xl bg-zinc-100 flex justify-center items-center">Home</div>
        <div className="w-[75px] h-[35px] border-zinc-400 border-1 pb-0.5    text-sm font-medium rounded-4xl bg-zinc-100 flex justify-center items-center">Courses</div>
          </div>


        </div>
    </div>
  )
}

export default Con
