import Image from "next/image"
import Arrow from '../../../public/Product/Arrow.png'
import Shirt1 from '../../../public/Product/Shirt1.png'
import Shirt2 from '../../../public/Product/Shirt2.png'
import Shirt3 from '../../../public/Product/Shirt3.png'
import HeroShirt from '../../../public/Product/HeroShirt.png'
import ProductRating from '../../../public/Product/ProductRating.png'
import Colors from '../../../public/Product/Colors.png'
import PlusIcon from '../../../public/Product/Plus.png'
import MinusIcon from '../../../public/Product/Minus.png'
import '@/app/css/satoshi.css'

export default function ProductHero() {
  return (
    <main className="w-auto h-auto bg-white">
        <h1 style={{ fontFamily: "Satoshi-variable" }} className="flex font-normal text-[14px] md:text-[16px] ml-[20px] gap-3 md:ml-[100px] mt-[40px] items-center ">Home<Image src={Arrow} alt=">" height={3.5} width={7.5} /> Shop <Image src={Arrow} alt=">" height={3.5} width={7.5} /> Men <Image src={Arrow} alt=">" height={3.5} width={7.5} /> T-shirts</h1>
      <div className="md:flex">
        <div className="md:flex md:flex-row-reverse">
         <div className="h-[290px] w-[358px] mt-[20px] mx-auto md:w-[444px] md:h-[530px] md:flex md:flex-row md:ml-[10px] md:mt-[40px]"><Image src={HeroShirt} alt="Hero Product" /></div>
         <div className="w-[112px] h-[106px] mt-[150px] gap-2 justify-center mx-auto flex flex-row-reverse md:mx-0 md:justify-normal md:flex md:flex-col-reverse md:h-[168px] md:w-[152px] md:mt-[400px] md:ml-[100px] md:gap-3">
            <Image src={Shirt1} alt="Product" />
            <Image src={Shirt2} alt="Product" />
            <Image src={Shirt3} alt="Product" />
          </div>


          </div>
          <div className="mx-[28px] md:mx-[40px]">
      <div style={{ fontFamily: 'integral' }} className="font-bold text-[24px] leading-[28px] w-[267px] mt-[20px] md:h-[48px]  md:text-[40px] md:leading-[48px] md:w-[600px] ">One Life Graphic T-shirt</div>
          <Image src={ProductRating} alt="Rating" className="h-19[px] w-[154px] md:h-[24.71px] md:w-[193px] mt-[12px] md:mt-[15px] " />
          <div style={{ fontFamily: "Satoshi-variable" }} className="flex mt-[10px] flex-row items-center gap-[10px]">
          <h1 className="w-[63px] h-[34px] font-bold text-[24px] leading-[32.4px] md:w-[83px] md:h-[45px] md:text-[32px] md:leading-[43.2px] ">
          $260
          </h1>
          <h1 className="w-[63px] h-[34px] font-bold text-[24px] leading-[32.4px]  opacity-50 line-through md:w-[83px] md:h-[45px] md:text-[32px] md:leading-[43.2px] ">
          $300
          </h1>
          <div className="h-[31px] w-[62px] bg-[#FF3333] bg-opacity-10 rounded-full flex justify-center items-center md:w-[72px] md:h-[34px]">
          <p className="text-[#FF3333] w-[38px] h-[19px] text-[14px] font-medium md:w-[44px] md:h-[22px] md:text-[16px] ">
            -40%
          </p>
          </div>
        </div>
        <p style={{ fontFamily: "Satoshi-variable" }} className="text-[#00000099] mt-[12px] font-normal text-[14px] w-[360px] leading-[20x] md:w-[590px] md:text-[16px]">This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
        <hr className=' mt-[20px] mb-[20px] w-[358] md:[590px] h-[3px] bg-black opacity-10 flex justify-center' />
        <p style={{ fontFamily: "Satoshi-variable" }} className="font-normal text-[#00000099]  text-[14px] md:text-[16px] " >Select Colors</p>
        <Image src={Colors} alt="Colors" className="mt-[22px] w-[142px] h-[39.2]"/>
        <hr className=' mt-[20px] mb-[20px] w-[358] md:[590px] h-[3px] bg-black opacity-10 flex justify-center' />
        <p style={{ fontFamily: "Satoshi-variable" }} className="font-normal text-[#00000099]  text-[14px] md:text-[16px] " >Choose Size</p>
        <div style={{ fontFamily: "Satoshi-variable" }} className="flex gap-3 text-[14px] mt-[15px] leading-[19px] md:text-[16px] md:leading-[21.6px] ">
          <button className="w-[74px] h-[39px] md:h-[46px] md:w-[86px] text-[#00000099] bg-[#F0F0F0] rounded-[64px] hover:bg-black hover:text-white ">Small</button>
          <button className="w-[90px] h-[39px] md:h-[46px] md:w-[105px] text-[#00000099] bg-[#F0F0F0] rounded-[64px] hover:bg-black hover:text-white  ">Medium</button>
          <button className="w-[76px] h-[39px] md:h-[46px] md:w-[89px] text-[#00000099] bg-[#F0F0F0] rounded-[64px] hover:bg-black hover:text-white ">Large</button>
          <button className="w-[89px] h-[39px] md:h-[46px] md:w-[104px] text-[#00000099] bg-[#F0F0F0] rounded-[64px] hover:bg-black hover:text-white ">X-Large</button>
        </div>
        <hr className=' mt-[20px] mb-[20px] w-[358] md:[590px] h-[3px] bg-black opacity-10 flex justify-center' />
        <div style={{ fontFamily: "Satoshi-variable" }} className="flex gap-3 text-[14px] mt-[15px] leading-[19px] md:text-[16px] md:leading-[21.6px] font-medium " >
        <button className="w-[110px] h-[44px] justify-around items-center flex md:h-[52px] md:w-[170px] text-[#00000099] bg-[#F0F0F0] font-extrabold rounded-[64px] ">  <Image src={PlusIcon} alt="+" className="w-[16px] h-[16px] md:h-[20px] md:w-[20px]"/> 1 <Image src={MinusIcon} alt="-" className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]"/> </button>
          <button className="w-[236px] h-[44px] md:h-[52px] md:w-[400px] bg-[#000000] rounded-[64px] text-white  ">Add to Cart </button>
          </div>
        </div>
  
      </div>
      

    </main>
  )
}
