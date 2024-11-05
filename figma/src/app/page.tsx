export default function page(){
  return <div className="bg-[#252B42] h-[1132px] w=[1440px]">
   <nav className="h-24 w-11/12 ml-14">
     <div className="pb-4 pt-4 pl-10 flex ">
        <div className="h-12 w-48 text-white font-bold text-base tracking-wide leading-8 ">
          <h3 className="mt-2">BrandName</h3>
        </div>
        <div className="h-12 w-3/4 ml-10 flex">
            <div className="h-12 w-64">
            <ul className="flex text-white font-bold text-sm tracking-tigh leading-6 justify-between">
                <li className="mt-3">Home</li>
                <li className="mt-3">Product</li>
                <li className="mt-3">Pricing</li>
                <li className="mt-3">Contact</li>
              </ul>
            </div>
               <div className="h-12 w-40 ml-auto text-white font-bold text-sm left-5 tracking-tight">
                <button className="mt- h-12 w-20 pr-10">Login</button>
                <button className="mt- h-12 w-20 rounded bg-[#23A6F0]">JOIN US</button>
               </div>
        </div>
     </div>

                     {/* Welcome box */}
      <div className="w-9/12  mt-5 ml-32 pt-10">

        <div className="w-5/6 h-5/6 mr-10 ml-20">
          <div className="pl-80 ml-4 pt-8 pb-8"><h5 className="text-[#23A6F0] font-bold text-base leading-6 tracking-tight">Welcome</h5></div>

          <div className="w-2/3 h-32 ml-32">
          <h1 className="text-white font-bold text-6xl leading-80 tracking-tight flex text-center">Selling on the internet like a pro</h1>
          </div>

          <div className="h-14 w-2/3 text-white font-medium text-sm leading-7 tracking-normal flex text-center ml-32 mt-5">
          <p className="ml-16">We know how large objects will act, but things on a <br />
          small scale just do not act that way.</p>
          </div>
                       {/* BUTTON */}
           <div className=" h-20 w-96 ml-48 mb-4 mt-4">
            <button className="h-14 w-48 bg-[#23A6F0] text-white pl-10 pr-10 mb-3.5 mt-3.5 rounded font-bold text-sm leading-5 tracking-tight">Get Quote Now</button>
            <button className="h-14 w-40 border-2 rounded border-[#23A6F0] pl-10 pr-10 mt-3.5 mb-3.5 text-[#23A6F0] ml-2 font-bold text-sm tracking-tight leading-5 ">Learn More</button>
           </div>
   
        </div>
                         {/* Trio box sec */}
             <div className="h-72 w-full mt-28 ml-0 mr-0 flex justify-center">
                  <div className="h-72 w-80 bg-white pt-9 pb-9 pl-10 pr-10 mr-7 border-solid rounded  border-gray-700">
                    <div className="h-20 w-16 bg-[#FFDCD1] rounded"></div>
                    <div className="h-6 w-32"><h5 className="font-bold text-base leading-6 tracking-tight mt-5">trainig Courses</h5></div>
                    <div className="w-12 h-0.5 bg-[#E74040] mt-5"></div>
                    <div className="w-56 h-14 mt-5">
                    <p className="font-normal text-sm leading-5 text-[#737373] tracking-tight">The gradual accumulation of information about atomic and small-scale behaviour...</p></div>

                  </div>

                  <div className="h-72 w-80 bg-white pt-9 pb-9 pl-10 pr-10 mr-7 border-solid rounded  border-gray-700">
                    <div className="h-20 w-16 bg-[#B9EAA8] rounded"></div>
                    <div className="h-6 w-32"><h5 className="font-bold text-sm leading-6 tracking-tighter mt-5">2,769 online courses</h5></div>
                    <div className="w-12 h-0.5 bg-[#E74040] mt-5"></div>
                    <div className="w-56 h-14 mt-5">
                    <p className="font-normal text-sm leading-5 text-[#737373] tracking-tight">The gradual accumulation of information about atomic and small-scale behaviour...</p></div>

                  </div>

                  <div className="h-72 w-80 bg-[#23A6F0] pt-9 pb-9 pl-10 pr-10 border-solid rounded  border-gray-700">
                    <div className="h-20 w-16 bg-white rounded"></div>
                    <div className="h-6 w-32"><h5 className="font-bold text-base leading-6 tracking-tight mt-5 text-white">trainig Courses</h5></div>
                    <div className="w-12 h-0.5 bg-white mt-5"></div>
                    <div className="w-56 h-14 mt-5">
                    <p className="font-normal text-sm leading-5 text-white tracking-tight">The gradual accumulation of information about atomic and small-scale behaviour...</p></div>

                  </div>
             
             
             </div>
      </div>



   </nav> 
  </div>

}