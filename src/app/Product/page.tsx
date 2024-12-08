import Image from "next/image"
import Arrow from '../../../public/Product/Arrow.png'
import Shirt1 from '../../../public/Product/Shirt1.png'
import Shirt2 from '../../../public/Product/Shirt2.png'
import Shirt3 from '../../../public/Product/Shirt3.png'
import HeroShirt from '../../../public/Product/HeroShirt.png'
import ProductRating from '../../../public/Product/ProductRating.png'
export default function Product() {
    return (
        <main className="w-auto h-auto bg-white">
            <h1 style={{ fontFamily: "Satoshi-variable" }} className="flex font-normal text-[14px] md:text-[16px] ml-[20px] gap-3 md:ml-[100px] mt-[40px] items-center ">Home<Image src={Arrow} alt=">" height={3.5} width={7.5} /> Shop <Image src={Arrow} alt=">" height={3.5} width={7.5} /> Men <Image src={Arrow} alt=">" height={3.5} width={7.5} /> T-shirts</h1>
            <div className="md:flex md:flex-row-reverse">
                <div className="h-[290px] w-[358px] mt-[20px] mx-auto md:w-[444px] md:h-[530px] md:flex md:flex-row md:ml-[10px] md:mt-[40px]"><Image src={HeroShirt} alt="Hero Product" /></div>
                <div className="w-[112px] h-[106px] gap-2 justify-center mx-auto flex flex-row-reverse md:mx-0 md:justify-normal md:flex md:flex-col-reverse md:h-[168px] md:w-[152px] md:mt-[400px] md:ml-[100px] md:gap-3">
                    <Image src={Shirt1} alt="Product" />
                    <Image src={Shirt2} alt="Product" />
                    <Image src={Shirt3} alt="Product" />
                </div>

            </div>
            <div style={{ fontFamily: "integral" }} className="font-bold  h-[48px] text-[40px] leading-[48px] mt-[40px] ml-[30px] ">One Life Graphic T-shirt</div>
        <Image src={ProductRating} alt="Rating" className="h-[24.71px] w-[193px] mt-[15px] ml-[30px]"/>
            <div style={{ fontFamily: "Satoshi-variable" }} className="flex ml-[30px] mt-[8px] flex-row items-center gap-[10px]">
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
              <div></div>
            </div>

            
        </main>
    )
}
