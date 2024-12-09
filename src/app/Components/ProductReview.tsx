import Image from 'next/image'
import '@/app/css/satoshi.css'
import ProductFilter from '../../../public/Product/ProductFilter.png'
import DownArr from '../../../public/Product/DownArr.png'
import ThreeHalfStar from '../../../public/Product/3.5Star.png'
import FourStar from '../../../public/Product/4Star.png'
import FourHalfStar from '../../../public/Product/4.5Star.png'
import Verified from '../../../public/Product/verified.png'
import Product1 from '../../../public/Product/Product1.png'
import Product2 from '../../../public/Product/Product2.png'
import Product3 from '../../../public/Product/Product3.png'
import Product4 from '../../../public/Product/Product4.png'
import Rating1 from '../../../public/Product/rating1.png'
import Rating2 from '../../../public/Product/rating2.png'
import Rating3 from '../../../public/Product/rating3.png'
import Rating4 from '../../../public/Product/rating4.png'



export default function ProductReview() {
  return (
    <main>
        <div>
            <div>
                <ul style={{fontFamily : 'Satoshi-Variable'}} className="flex flex-row text-[#00000099]  justify-around text-[16px] mt-[60px] md:text-[20px] " >
                    <li>Product Details</li>
                    <li className='font-medium mr-[70px] text-black' >Rating & Reviews</li>
                    <li>FAQs</li>
                </ul>
                <hr className=' mt-[20px] mb-[px] mx-auto w-[123px] md:w-[414px] h-[3px] bg-black flex ' />
                <hr className=' mt-[px] mb-[20px]  w-[358] md:w-[1240px] h-[3px] bg-black opacity-10 flex justify-center' />
                
            </div>
            <div style={{fontFamily : 'Satoshi-variable'}} className='mt-[40px] mx-4 justify-between flex items-center' >
              <div className='flex gap-2 md:gap-3'>
              <h1 className='text-[20px] font-bold leading-[27px] md:text-[24px] md:leading-[33px] md:ml-[100px] '>All Reviews</h1>
              <p className='text-[#00000099] font-normal text-[14px] mt-[5px] md:mt-[10px]'>(451)</p>
              </div>

              <div className='flex gap-3'>
              <button className='bg-[#F0F0F0] w-[40px] h-[40px] rounded-full flex md:w-[48px] md:h-[48px] '><Image src={ProductFilter} alt='Filter' className='h-[24px] w-[24px] m-[10px]'/> </button>
              <button className=' hidden bg-[#F0F0F0] w-[120px] h-[48px] rounded-full text-[16px] font-medium items-center justify-center md:flex '> Latest <Image src={DownArr} alt='Filter' className='h-[20px] w-[20px] ml-[15px]'/> </button>
              <button className='text-white bg-[#000000] h-[40px] w-[113px] text-[12px] font-normal rounded-full md:h-[48px] md:w-[166px] md:text-[16px] md:font-medium '>Write a Review</button>
              
             </div>
             
            </div>
            <div>
              {/* reviews */}
                <div className='grid grid-row-col grid-rows-3 md:grid-cols-2 justify-center items-center gap-5 mt-[24px]  md:mt-[40px] md:mx-[84px]' style={{fontFamily:"Satoshi-variable"}} >
            <div className='w-[358px] h-[225px] flex flex-col justify-start items-start p-6 border-2 rounded-[20px] md:w-[610px] md:h-[242px]'>
            <div className='w-[310px] h-[138.19px] md:w-[336px] md:h-[183.58px]'>
            <Image src={FourHalfStar} alt='Rating' className='w-[108px] h-[19.2px] md:w-[127px] md:h-[22.58px]'/>
            <h1 className='flex items-center gap-[5.78px] pt-4 font-bold text-[16px] w-[120px] h-[19px] md:w-[150px] md:h-[24px] md:text-xl md:pt-5'>Samantha D. <span><Image src={Verified} alt='varified' className='w-[15.44px] h-[15.44px] md:w-[19.5px] md:h-[19.5px]'/></span></h1>
            <p className='pt-2 w-[310px] h-[80px] font-normal text-[14px] opacity-60 md:text-[16px] md:w-[522px] md:h-[88px] md:leading-[22px] md:pt-4'>"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
            <p className='font-normal text-[14px] mt-[40px] opacity-60 md:text-[16px] md:mt-[25px] '>Posted on August 14, 2023</p>
            </div>
            </div>

            
            
            <div className=' w-[358px] h-[245px] flex flex-col justify-start items-start p-6 border-2 rounded-[20px] md:w-[610px] md:h-[242px]'>
            <div className='w-[310px] h-[138.19px] md:w-[336px] md:h-[183.58px]'>
            <Image src={FourStar} alt='Rating' className='w-[93.3px] h-[19.2px] md:w-[110px] md:h-[22.58px] '/>
            <h1 className='flex items-center gap-[5.78px] pt-4 font-bold text-[16px] w-[120px] h-[19px] md:w-[150px] md:h-[24px] md:text-xl md:pt-5'>Alex M. <span><Image src={Verified} alt='varified' className='w-[15.44px] h-[15.44px] md:w-[19.5px] md:h-[19.5px]'/></span></h1>
            <p className='pt-2 w-[310px] h-[80px] font-normal text-[14px] opacity-60 md:text-[16px] md:w-[522px] md:h-[88px] md:leading-[22px] md:pt-4'>"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."</p>
            <p className='font-normal text-[14px] mt-[60px] opacity-60 md:text-[16px] md:mt-[25px] '>Posted on August 15, 2023</p>
            </div>
            </div>

            <div className='w-[358px] h-[245px] flex flex-col justify-start items-start p-6 border-2 rounded-[20px] md:w-[610px] md:h-[242px]'>
            <div className='w-[310px] h-[138.19px] md:w-[336px] md:h-[183.58px]'>
            <Image src={ThreeHalfStar} alt='Rating' className=' w-[83.23px] h-[19.2] md:w-[98px] md:h-[22.58px] '/>
            <h1 className='flex items-center gap-[5.78px] pt-4 font-bold text-[16px] w-[120px] h-[19px] md:w-[150px] md:h-[24px] md:text-xl md:pt-5'>Ethan R. <span><Image src={Verified} alt='varified' className='w-[15.44px] h-[15.44px] md:w-[19.5px] md:h-[19.5px]'/></span></h1>
            <p className='pt-2 w-[310px] h-[80px] font-normal text-[14px] opacity-60 md:text-[16px] md:w-[522px] md:h-[88px] md:leading-[22px] md:pt-4'>"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."</p>
            <p className='font-normal text-[14px] mt-[60px] opacity-60 md:text-[16px] md:mt-[25px] '>Posted on August 16, 2023</p>
            </div>
            </div>


            <div className='hidden w-[358px] h-[225px] md:flex flex-col justify-start items-start p-6 border-2 rounded-[20px] md:w-[610px] md:h-[242px]'>
            <div className='w-[310px] h-[138.19px] md:w-[336px] md:h-[183.58px]'>
            <Image src={FourStar} alt='Rating' className='w-[110px] h-[22.58px] '/>
            <h1 className='flex items-center gap-[5.78px] pt-4 font-bold text-[16px] w-[120px] h-[19px] md:w-[150px] md:h-[24px] md:text-xl md:pt-5'>Olivia P. <span><Image src={Verified} alt='varified' className='w-[15.44px] h-[15.44px] md:w-[19.5px] md:h-[19.5px]'/></span></h1>
            <p className='pt-2 w-[310px] h-[80px] font-normal text-[14px] opacity-60 md:text-[16px] md:w-[522px] md:h-[88px] md:leading-[22px] md:pt-4'>"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."</p>
            <p className='font-normal text-[14px] opacity-60 md:text-[16px] mt-[25px] '>Posted on August 17, 2023</p>
            </div>
            </div>

            <div className='hidden w-[358px] h-[225px] md:flex flex-col justify-start items-start p-6 border-2 rounded-[20px] md:w-[610px] md:h-[242px]'>
            <div className='w-[310px] h-[138.19px] md:w-[336px] md:h-[183.58px]'>
            <Image src={FourStar} alt='Rating' className=' w-[110px] h-[22.58px]'/>
            <h1 className='flex items-center gap-[5.78px] pt-4 font-bold text-[16px] w-[120px] h-[19px] md:w-[150px] md:h-[24px] md:text-xl md:pt-5'>Liam K. <span><Image src={Verified} alt='varified' className='w-[15.44px] h-[15.44px] md:w-[19.5px] md:h-[19.5px]'/></span></h1>
            <p className='pt-2 w-[310px] h-[80px] font-normal text-[14px] opacity-60 md:text-[16px] md:w-[522px] md:h-[88px] md:leading-[22px] md:pt-4'>"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."</p>
            <p className='font-normal text-[14px] opacity-60 md:text-[16px] mt-[25px] '>Posted on August 18, 2023</p>
            </div>
            </div>


            <div className='hidden w-[358px] h-[225px] md:flex flex-col justify-start items-start p-6 border-2 rounded-[20px] md:w-[610px] md:h-[242px]'>
            <div className='w-[310px] h-[138.19px] md:w-[336px] md:h-[183.58px]'>
            <Image src={FourHalfStar} alt='Rating' className='w-[127px] h-[22.58px] '/>
            <h1 className='flex items-center gap-[5.78px] pt-4 font-bold text-[16px] w-[120px] h-[19px] md:w-[150px] md:h-[24px] md:text-xl md:pt-5'>Ava H. <span><Image src={Verified} alt='varified' className='w-[15.44px] h-[15.44px] md:w-[19.5px] md:h-[19.5px]'/></span></h1>
            <p className='pt-2 w-[310px] h-[80px] font-normal text-[14px] opacity-60 md:text-[16px] md:w-[522px] md:h-[88px] md:leading-[22px] md:pt-4'>"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."</p>
            <p className='font-normal text-[14px] opacity-60 md:text-[16px] mt-[25px] '>Posted on August 19, 2023</p>
            </div>
           </div>
            
        </div>
        <div className='mt-[40px] mx-auto flex justify-center'>
        <button className=' w-[195px] h-[47px] rounded-full text-[#000000] font-medium text-[14px] md:text-[16px] border-[#0000001A] border-[1px] hover:cursor-pointer hover:bg-blue-400 md:w-[230px] md:h-[52px]'>Load More Reviews</button>
        </div>
        <h1 className='font-bold text-[32px] mx-auto leading-[36px] w-[284px]  mt-[40px] mb-[28px] items-center flex justify-center text-center md:w-[687px] md:h-[58px] md:text-5xl md:leading-[57.6px] md:mx-auto md:mt-[70px]' style={{fontFamily:"integral"}}>You might also like</h1>
        </div>
        
        {/* Products */}
        
        <div  style={{fontFamily:"Satoshi-variable"}} className="grid grid-cols-2 justify-around items-center mx-[16px] gap-2 md:mx-[100px] md:gap-4 md:grid-cols-4">
        <div className=''>
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
            <h1 className="h-[22px] w-[180px] font-bold text-[14px] leading-[21.6px] md:text-[20px
            ] md:w-[225px] md:h-[27px]">
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



              
              </div>
          </div>
        </div>
        
        
    </main>
  )
}
