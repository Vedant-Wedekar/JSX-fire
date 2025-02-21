import React from 'react'

const Cou = () => {
  return (
    <div className='w-full h-[800px] '>
       
       <div className="flex justify-center items-center text-5xl font-medium">Courses You Might Enjoy</div>

       <div className="flex justify-evenly   items-center gap-[45px] mt-[70px]">
          
          {/* <div className="ml-10 rounded-3xl">
            <img className='pl-[20px] rounded-l-3xl rounded-b-3xl rounded-3xl  w-[850px] h-[380px]' src='javascript.jpg'></img>
           </div> */}

             <div className="rounded-3xl ml-8">
            <img className="rounded-3xl" src='javascript.jpg'></img>
                <div className="name flex justify-between items-center mt-5">
              <div className="text-xl font-medium">Javascript Courses</div>
              <div className="">from<b>&#8377;399</b></div>
              </div>
            <div className="mt-5" >Lorem ipsum  Suscipit id nam eum la voluptatem blanditiis provident molestiae ipsa distinctio vel dignissimos fugit vitae alias?</div>
            <div className="w-[120px] mt-5 py-1 h-[30px] rounded-2xl border-1 flex justify-center items-center">Quick Enroll</div>
            </div>

            <div className="rounded-3xl ">
            <img className="rounded-3xl" src='tailwind.jpg'></img>
                <div className="name flex justify-between items-center mt-5">
              <div className="text-xl font-medium">Tailwind Courses</div>
              <div className="">from<b>&#8377;399</b></div>
              </div>
            <div className="mt-5" >Lorem ipsum  Suscipit id nam eum la voluptatem blanditiis provident molestiae ipsa distinctio vel dignissimos fugit vitae alias?</div>
            <div className="w-[120px] mt-5 py-1 h-[30px] rounded-2xl border-1 flex justify-center items-center">Quick Enroll</div>
            </div>
            
             <div className="rounded-3xl ">

            <img className="rounded-3xl" src='nextjs.jpg'></img>
                <div className="name flex justify-between items-center mt-5">
              <div className="text-xl font-medium">Next.JS Courses</div>
              <div className="">from<b>&#8377;399</b></div>
              </div>
            <div className="mt-5" >Lorem ipsum  Suscipit id nam eum la voluptatem blanditiis provident molestiae ipsa distinctio vel dignissimos fugit vitae alias?</div>
            <div className="w-[120px] mt-5 py-1 h-[30px] rounded-2xl border-1 flex justify-center items-center">Quick Enroll</div>
            </div>
            <div className="rounded-3xl mr-8">

            <img className="rounded-3xl" src='reactjs.jpg'></img>
                <div className="name flex justify-between items-center mt-5">
              <div className="text-xl font-medium">React.JS Courses</div>
              <div className="">from<b>&#8377;399</b></div>
              </div>
            <div className="mt-5" >Lorem ipsum  Suscipit id nam eum la voluptatem blanditiis provident molestiae ipsa distinctio vel dignissimos fugit vitae alias?</div>
            <div className="w-[120px] mt-5 py-1 h-[30px] rounded-2xl border-1 flex justify-center items-center">Quick Enroll</div>
            </div>

            {/* <div className="rounded-3xl ">
            <img className="rounded-3xl " src='javascript.jpg'></img>
            </div>

            <div className="rounded-3xl ">
            <img className="rounded-3xl " src='javascript.jpg'></img>
            </div>

            
            <div className="rounded-3xl mr-8">
            <img className="rounded-3xl " src='javascript.jpg'></img>
            </div> */}



           {/* <div className="grid">
            <img src='javascript.jpg'></img>
            </div>
            <div className="grid">
            <img src='javascript.jpg'></img>
            </div> */}


          </div>

       </div>

  )
}

export default Cou
