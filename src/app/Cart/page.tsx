import Image from "next/image"
import Arrow from '../../../public/Product/Arrow.png'
import Item1 from '../../../public/Cart/Product2.png'
import Item2 from '../../../public/Cart/arrival3.png'
import Item3 from '../../../public/Cart/arrival2.png'
import DeleteIcon from '../../../public/Cart/DeleteIcon.png'
import PlusIcon from '../../../public/Product/Plus.png'
import MinusIcon from '../../../public/Product/Minus.png'
import Footer from "../Components/Footer"

export default function page() {
  return (
    <main>
      <div>
        <div>
            <div>
            <h1 style={{ fontFamily: "Satoshi-variable" }} className="flex font-normal text-[14px] md:text-[16px] ml-[20px] gap-3 md:ml-[100px] mt-[40px] items-center ">Home<Image src={Arrow} alt=">" height={3.5} width={7.5} /> Cart </h1>
            <h1 style={{ fontFamily: "Integral" }} className=" font-bold text-[32px] ml-[20px] mt-[10px] md:ml-[100px] md:text-[40px] md:mt-[20px] " >YOUR CART</h1>
            </div>
            <div className="md:flex">
        <div style={{ fontFamily: "Satoshi-variable" }} className="w-[358px] h-[410px] mx-auto md:w-[715px] md:h-[508px] border-[#0000001A] border-[2px] rounded-[20px] md:ml-[100px] mt-[20px] ">
        <div>
            {/* Products */}
            {/* Product1 */}
            <div className="flex  ">
                <Image src={Item1} alt="Product" className="rounded-[9px] mt-[20px] ml-[10px] h-[100px] w-[100px] md:h-[124px] md:w-[124px] " />
                <div className="mt-[25px] ml-[20px]">
                    <div className="flex justify-between w-[217px] md:w-[525px]">
                <h1 className="font-bold text-[16px] md:text-[20px]">Gradient Graphic T-shirt</h1>
                <Image src={DeleteIcon} alt="Delete" className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"/>
                   </div>
                <p className="text-[12px] md:text-[14px]">Size: Large</p>
                <p className="text-[12px] md:text-[14px]" >Color: White</p>
                <div className="flex justify-between w-[217px] md:w-[525px] mt-[10px]">
                    <div className="font-bold text-[20px] md:text-[24px]" >$145</div>
                    <button className="w-[105px] h-[31px] justify-around items-center flex md:h-[44px] md:w-[126px] text-[#00000099] bg-[#F0F0F0] font-extrabold rounded-[64px] ">  <Image src={PlusIcon} alt="+" className="w-[16px] h-[16px] md:h-[20px] md:w-[20px]"/> 1 <Image src={MinusIcon} alt="-" className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]"/> </button>
                </div>
                
                </div>
                
            </div>
            <hr className=' mt-[5px] md:mt-[15px] mx-auto w-[330px] md:w-[667px] h-[3px] bg-black opacity-10 flex justify-center' />
            {/* Product2 */}
            <div className="flex  ">
                <Image src={Item2} alt="Product" className="rounded-[9px] mt-[20px] ml-[10px] h-[100px] w-[100px] md:h-[124px] md:w-[124px] " />
                <div className="mt-[25px] ml-[20px]">
                    <div className="flex justify-between w-[217px] md:w-[525px] mt-[10px]">
                <h1 className="font-bold text-[16px] md:text-[20px]">Checkered Shirt</h1>
                <Image src={DeleteIcon} alt="Delete" className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"/>
                   </div>
                <p className="text-[12px] md:text-[14px]">Size: Medium</p>
                <p className="text-[12px] md:text-[14px]" >Color: Red</p>
                <div className="flex justify-between w-[217px] md:w-[525px] mt-[10px]">
                    <div className="font-bold text-[20px] md:text-[24px]" >$180</div>
                    <button className="w-[105px] h-[31px] justify-around items-center flex md:h-[44px] md:w-[126px] text-[#00000099] bg-[#F0F0F0] font-extrabold rounded-[64px] ">  <Image src={PlusIcon} alt="+" className="w-[16px] h-[16px] md:h-[20px] md:w-[20px]"/> 1 <Image src={MinusIcon} alt="-" className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]"/> </button>
                </div>
                
                </div>
                
            </div>
            <hr className='mt-[5px] md:mt-[15px] mx-auto w-[330px] md:w-[667px] h-[3px] bg-black opacity-10 flex justify-center' />
            {/* Product3 */}
            <div className="flex  ">
                <Image src={Item3} alt="Product" className="rounded-[9px] mt-[20px] ml-[10px] h-[100px] w-[100px] md:h-[124px] md:w-[124px] " />
                <div className="mt-[25px] ml-[20px]">
                    <div className="flex justify-between w-[217px] md:w-[525px] mt-[10px]">
                <h1 className="font-bold text-[16px] md:text-[20px]">Skinny Fit Jeans</h1>
                <Image src={DeleteIcon} alt="Delete" className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"/>
                   </div>
                <p className="text-[12px] md:text-[14px]">Size: Large</p>
                <p className="text-[12px] md:text-[14px]" >Color: Blue</p>
                <div className="flex justify-between w-[217px] md:w-[525px] mt-[10px]">
                    <div className="font-bold text-[20px] md:text-[24px]">$240</div>
                    <button className="w-[105px] h-[31px] justify-around items-center flex md:h-[44px] md:w-[126px] text-[#00000099] bg-[#F0F0F0] font-extrabold rounded-[64px] ">  <Image src={PlusIcon} alt="+" className="w-[16px] h-[16px] md:h-[20px] md:w-[20px]"/> 1 <Image src={MinusIcon} alt="-" className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]"/> </button>
                </div>
                
                </div>
                
            </div>
        
        
        </div>
        </div>
        
        
        <div style={{ fontFamily: "Satoshi-variable" }} className="mx-auto w-[358px] h-[420px] md:w-[505px] md:h-[458px] border-[#0000001A] border-[2px] rounded-[20px] md:ml-[24px] mt-[20px] ">
            <h1 className="font-bold text-[20px] md:text-[24px] mt-[20px] ml-[20px]">Order Summary</h1>
            <div className="w-[318px] md:w-[457px] mt-[20px] flex justify-between mx-auto">
                <h1 className="font-normal text-[#00000099] text-[16px] md:text-[20px]">Subtotal</h1>
                <h1 className="font-bold text-[16px] md:text-[20px]">$565</h1>
            </div>
            <div className="w-[318px] md:w-[457px] mt-[20px] flex justify-between mx-auto">
                <h1 className="font-normal text-[#00000099] text-[16px] md:text-[20px]">Discount (-20%)</h1>
                <h1 className="font-bold text-[16px] md:text-[20px] text-[#FF3333]">-$113</h1>
            </div>
            <div className="w-[318px] md:w-[457px] mt-[20px] flex justify-between mx-auto">
                <h1 className="font-normal text-[#00000099] text-[16px] md:text-[20px]">Delivery Fee</h1>
                <h1 className="font-bold text-[16px] md:text-[20px]">$15</h1>
            </div>
            <hr className=' mt-[20px] mb-[20px] mx-auto w-[318px] md:w-[457px] h-[3px] bg-black opacity-10 flex justify-center' />
            <div className="w-[318px] md:w-[457px] mt-[20px] flex justify-between mx-auto">
                <h1 className="font-normal text-[#000000] text-[16px] md:text-[20px]">Total</h1>
                <h1 className="font-bold text-[20px] md:text-[24px]">$467</h1>
                
            </div>
            <div className="flex justify-center gap-[12px]">
                <button className="bg-[#F0F0F0] text-[#00000066] h-[48px] w-[218px] md:w-[326px] text-[14px] md:text-[16px] mt-[25px] rounded-[62px] flex items-center justify-center font-normal">Add promo code</button>
                <button className="bg-black text-white h-[48px] w-[88px] md:w-[119px] text-[14px] md:text-[16px] mt-[25px] rounded-[62px] flex items-center justify-center font-medium">Apply</button>
                </div>
                <button className="bg-black text-white h-[48px] mx-auto w-[318px] md:w-[457px] text-[14px] md:text-[16px] mt-[25px] rounded-[62px] flex items-center justify-center font-medium">Go to Checkout</button>
        
        </div>

    
        
        
        
        </div>
        </div>
      </div>
      <div className="mt-[200px]">
      <Footer/>
      </div>
    </main>
  )
}
