export default function page(){
  return <div className="w-[1322px] h-[91px] bg-slate-300 flex">
    <div className="flex">
         <div className="w-[187px] h-[58px] ml-[136px] mt-[17px] bg-slate-500">
            <h3 className="w-[152px] h-[32] font-bold text-sm leading-6 tracking-tighter text-white">BrandName</h3>
         </div>

         <div className="w-[815px] h-[58px] pt-[16px] ml-[18px] mt-[17px] bg-slate-500 flex">
            <div className="w-[275px] h-[24px] bg-slate-600">
              <ul className="flex justify-between text-white font-bold text-sm leading-6 tracking-tight">
                <li>Home</li>
                <li>Product</li>
                <li>Pricing</li>
                <li>Contact</li>
              </ul>
            </div>
                 
            <div className="w-[189px] h-[52px] ml-96 bg-slate-600">
                  <button className="text-sm font-bold leading-5 tracking-tight text-white text-right">Login</button>
                  <button className="h-[52px] w-[110px] bg-[#23A6F0] text-sm font-bold leading-5 tracking-tight text-white pt-[15px] pb-[15px]">JOIN US</button>
            </div>
          
         </div>
    </div>

  </div>
}