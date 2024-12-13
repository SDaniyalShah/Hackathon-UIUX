import Image from 'next/image'
import Product1 from '../../../public/Product/Product1.png'
import Product2 from '../../../public/Product/Product2.png'
import Product3 from '../../../public/Product/Product3.png'
import Product4 from '../../../public/Product/Product4.png'
import Rating1 from '../../../public/Product/rating1.png'
import Rating2 from '../../../public/Product/rating2.png'
import Rating3 from '../../../public/Product/rating3.png'
import Rating4 from '../../../public/Product/rating4.png'

export default function ProductsBar() {
  return (
    <main>
      <h1 className='font-bold text-[32px] mx-auto leading-[36px] w-[284px]  mt-[40px] mb-[28px] items-center flex justify-center text-center md:w-[687px] md:mb-[60px] md:h-[58px] md:text-5xl md:leading-[57.6px] md:mx-auto md:mt-[70px]' style={{fontFamily:"integral"}}>You might also like</h1>
        {/* Products */}
        <div  style={{fontFamily:"Satoshi-variable"}} className="grid grid-cols-2 md:mb-[180px] justify-around items-center mt-[30px] mx-[16px] gap-2 md:mx-[100px] md:gap-4 md:grid-cols-4 ">
        {/* Item 1 */}
        <div className="flex flex-col justify-start md:gap-1">
            <Image
              src={Product1}
              alt="Product"
              className="w-[158px] h-[170.01px] rounded-[20px] md:w-[295px] md:h-[298px]"
            />
            <h1 className="h-[22px] w-[190px] font-bold text-[14px] leading-[21.6px] md:w-[235px] md:text-[20px] md:h-[27px]">
            Polo with Contrast Trims
            </h1>
            <Image
              src={Rating1}
              alt="rating"
              className="w-[127px] h-[16px] md:w-[138px] md:h-[19px]"
            />
            <div className="flex flex-row justify-start items-center gap-[5px]">
              <h1 className="w-[46px] h-[27px] font-bold text-[20px] leading-[27px] md:w-[55px] md:h-[32px] md:text-[24px] md:leading-[32.4px] ">
                $212
              </h1>
              <h1 className="w-[46px] h-[27px] font-bold text-[20px] leading-[27px] opacity-50 line-through md:w-[55px] md:h-[32px] md:text-[24px] md:leading-[32.4px] ">
                $242
              </h1>
              <div className="h-[20px] w-[42px] bg-[#FF3333] bg-opacity-10 rounded-full flex justify-center items-center md:w-[58px] md:h-[28px]">
                <p className="text-[#FF3333] w-[26px] h-[14px] text-[10px] font-medium md:w-[32px] md:h-[16px] ">
                  -20%
                </p>
              </div>
              </div>
              </div>
              {/* Item 2 */}
          <div className="flex flex-col justify-start md:gap-1">
            <Image
              src={Product2}
              alt="Product"
              className="w-[158px] h-[170.01px] rounded-[20px] md:w-[295px] md:h-[298px]"
            />
            <h1 className="h-[22px] w-[180px] font-bold text-[14px]  leading-[21.6px] md:text-[20px] md:w-[255px] md:h-[27px]">
            Gradient Graphic T-shirt
            </h1>
            <Image
              src={Rating2}
              alt="rating"
              className="w-[127px] h-[16px] md:w-[127px] md:h-[19px]"
            />
            <div className="flex flex-row justify-start items-center gap-[10px]">
              <h1 className="w-[46px] h-[27px] font-bold text-[20px] leading-[27px] md:w-[55px] md:h-[32px] md:text-[24px] md:leading-[32.4px] ">
                $145
              </h1>
              
            </div>
          </div>
          {/* Item 3 */}
          <div className="hidden md:flex flex-col justify-start md:gap-1">
            <Image
              src={Product3}
              alt="Product"
              className="w-[198px] h-[200.01px] rounded-[20px] md:w-[295px] md:h-[298px]"
            />
            <h1 className="h-[22px] w-[180px] font-bold text-[16px] leading-[21.6px] md:w-[255px] md:text-[20px] md:h-[27px]">
            Polo with Tipping Details
            </h1>
            <Image
              src={Rating3}
              alt="rating"
              className="w-[127px] h-[16px] md:w-[150px] md:h-[19px]"
            />
            <h1 className="w-[46px] h-[27px] font-bold text-[20px] leading-[27px] md:w-[55px] md:h-[32px] md:text-[24px] md:leading-[32.4px]" >
              $180
            </h1>
          </div>

          {/* Item 4 */}
          <div className=" hidden md:flex flex-col justify-start md:gap-1">
            <Image
              src={Product4}
              alt="Product"
              className="w-[158px] h-[170.01px] rounded-[20px] md:w-[295px] md:h-[298px]"
            />
            <h1 className="h-[22px] w-[180px] font-bold text-[14px] leading-[21.6px] md:text-[20px] md:w-[225px] md:h-[27px]">
              Black Striped T-shirt
            </h1>
            <Image
              src={Rating4}
              alt="rating"
              className="w-[127px] h-[16px] md:w-[161px] md:h-[19px]"
            />
            <div className="flex flex-row justify-start items-center gap-[5px]">
              <h1 className="w-[46px] h-[27px] font-bold text-[20px] leading-[27px] md:w-[55px] md:h-[32px] md:text-[24px] md:leading-[32.4px] ">
                $120
              </h1>
              <h1 className="w-[46px] h-[27px] font-bold text-[20px] leading-[27px] opacity-50 line-through md:w-[55px] md:h-[32px] md:text-[24px] md:leading-[32.4px] ">
                $150
              </h1>
              <div className="h-[20px] w-[42px] bg-[#FF3333] bg-opacity-10 rounded-full flex justify-center items-center md:w-[58px] md:h-[28px]">
                <p className="text-[#FF3333] w-[26px] h-[14px] text-[10px] font-medium md:w-[32px] md:h-[16px] ">
                  -30%
                </p>
              </div>
            </div>
          </div>
          </div>
          
        
      
    </main>
  )
}
