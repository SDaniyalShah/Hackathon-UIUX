import Image from 'next/image'
import '@/app/css/satoshi.css'
import ProductFilter from '../../../public/Product/ProductFilter.png'
import DownArr from '../../../public/Product/DownArr.png'
import ThreeHalfStar from '../../../public/Product/3.5Star.png'
import FourStar from '../../../public/Product/4Star.png'
import FourHalfStar from '../../../public/Product/4.5Star.png'
import Verified from '../../../public/Product/verified.png'
import Dots from '../../../public/Product/Dots.png'



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
            <div className='flex justify-center'>
              {/* reviews */}
                <div className='grid grid-row-col grid-rows-3 md:grid-cols-2 justify-center md:justify-between md:mx-auto  gap-5 mt-[24px]  md:mt-[40px]' style={{fontFamily:"Satoshi-variable"}} >
            <div className='w-[358px] h-[245px] flex flex-col justify-start items-start p-6 border-2 rounded-[20px] md:w-[610px] md:h-[242px]'>
            <div className='w-[310px] h-[138.19px] md:w-[550px] md:h-[183.58px]'>
            <div className='flex justify-between'>
            <Image src={FourHalfStar} alt='Rating' className='w-[108px] h-[19.2px] md:w-[127px] md:h-[22.58px]'/>
            <Image src={Dots} alt='...' className='hidden md:flex w-[24px] h-[24px]' />
            </div>
            <h1 className='flex items-center gap-[5.78px] pt-4 font-bold text-[16px] w-[120px] h-[19px] md:w-[150px] md:h-[24px] md:text-xl md:pt-5'>Samantha D. <span><Image src={Verified} alt='varified' className='w-[15.44px] h-[15.44px] md:w-[19.5px] md:h-[19.5px]'/></span></h1>
            <p className='pt-2 w-[310px] h-[80px] font-normal text-[14px] opacity-60 md:text-[16px] md:w-[522px] md:h-[88px] md:leading-[22px] md:pt-4'>&quot;I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It&apos;s become my favorite go-to shirt.&quot;</p>
            <p className='font-normal text-[14px] mt-[50px] opacity-60 md:text-[16px] md:mt-[25px] '>Posted on August 14, 2023</p>
            </div>
            </div>

            
            
            <div className=' w-[358px] h-[245px] flex flex-col justify-start items-start p-6 border-2 rounded-[20px] md:w-[610px] md:h-[242px]'>
            <div className='w-[310px] h-[138.19px] md:w-[550px] md:h-[183.58px]'>
              <div className='flex justify-between'>
            <Image src={FourStar} alt='Rating' className='w-[93.3px] h-[19.2px] md:w-[110px] md:h-[22.58px] '/>
            <Image src={Dots} alt='...' className='hidden md:flex w-[24px] h-[24px]' />
            </div>
            <h1 className='flex items-center gap-[5.78px] pt-4 font-bold text-[16px] w-[120px] h-[19px] md:w-[150px] md:h-[24px] md:text-xl md:pt-5'>Alex M. <span><Image src={Verified} alt='varified' className='w-[15.44px] h-[15.44px] md:w-[19.5px] md:h-[19.5px]'/></span></h1>
            <p className='pt-2 w-[310px] h-[80px] font-normal text-[14px] opacity-60 md:text-[16px] md:w-[522px] md:h-[88px] md:leading-[22px] md:pt-4'>&quot;The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I&apos;m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.&quot;</p>
            <p className='font-normal text-[14px] mt-[60px] opacity-60 md:text-[16px] md:mt-[25px] '>Posted on August 15, 2023</p>
            </div>
            </div>

            <div className='w-[358px] h-[245px] flex flex-col justify-start items-start p-6 border-2 rounded-[20px] md:w-[610px] md:h-[242px]'>
            <div className='w-[310px] h-[138.19px] md:w-[550px] md:h-[183.58px]'>
              <div className='flex justify-between'>
            <Image src={ThreeHalfStar} alt='Rating' className=' w-[83.23px] h-[19.2] md:w-[98px] md:h-[22.58px] '/>
            <Image src={Dots} alt='...' className='hidden md:flex w-[24px] h-[24px]' />
            </div>

            <h1 className='flex items-center gap-[5.78px] pt-4 font-bold text-[16px] w-[120px] h-[19px] md:w-[150px] md:h-[24px] md:text-xl md:pt-5'>Ethan R. <span><Image src={Verified} alt='varified' className='w-[15.44px] h-[15.44px] md:w-[19.5px] md:h-[19.5px]'/></span></h1>
            <p className='pt-2 w-[310px] h-[80px] font-normal text-[14px] opacity-60 md:text-[16px] md:w-[522px] md:h-[88px] md:leading-[22px] md:pt-4'>&quot;This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer&apos;s touch in every aspect of this shirt.&quot;</p>
            <p className='font-normal text-[14px] mt-[60px] opacity-60 md:text-[16px] md:mt-[25px] '>Posted on August 16, 2023</p>
            </div>
            </div>


            <div className='hidden w-[358px] h-[225px] md:flex flex-col justify-start items-start p-6 border-2 rounded-[20px] md:w-[610px] md:h-[242px]'>
            <div className='w-[310px] h-[138.19px] md:w-[550px] md:h-[183.58px]'>
              <div className='flex justify-between'>
            <Image src={FourStar} alt='Rating' className='w-[110px] h-[22.58px] '/>
            <Image src={Dots} alt='...' className='hidden md:flex w-[24px] h-[24px]' />
            </div>
            <h1 className='flex items-center gap-[5.78px] pt-4 font-bold text-[16px] w-[120px] h-[19px] md:w-[150px] md:h-[24px] md:text-xl md:pt-5'>Olivia P. <span><Image src={Verified} alt='varified' className='w-[15.44px] h-[15.44px] md:w-[19.5px] md:h-[19.5px]'/></span></h1>
            <p className='pt-2 w-[310px] h-[80px] font-normal text-[14px] opacity-60 md:text-[16px] md:w-[522px] md:h-[88px] md:leading-[22px] md:pt-4'>&quot;As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It&apos;s evident that the designer poured their creativity into making this t-shirt stand out.&quot;</p>
            <p className='font-normal text-[14px] opacity-60 md:text-[16px] mt-[25px] '>Posted on August 17, 2023</p>
            </div>
            </div>

            <div className='hidden w-[358px] h-[225px] md:flex flex-col justify-start items-start p-6 border-2 rounded-[20px] md:w-[610px] md:h-[242px]'>
            <div className='w-[310px] h-[138.19px] md:w-[550px] md:h-[183.58px]'>
              <div className='flex justify-between'>
            <Image src={FourStar} alt='Rating' className=' w-[110px] h-[22.58px]'/>
            <Image src={Dots} alt='...' className='hidden md:flex w-[24px] h-[24px]' />
            </div>
            <h1 className='flex items-center gap-[5.78px] pt-4 font-bold text-[16px] w-[120px] h-[19px] md:w-[150px] md:h-[24px] md:text-xl md:pt-5'>Liam K. <span><Image src={Verified} alt='varified' className='w-[15.44px] h-[15.44px] md:w-[19.5px] md:h-[19.5px]'/></span></h1>
            <p className='pt-2 w-[310px] h-[80px] font-normal text-[14px] opacity-60 md:text-[16px] md:w-[522px] md:h-[88px] md:leading-[22px] md:pt-4'>&quot;This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer&apos;s skill. It&apos;s like wearing a piece of art that reflects my passion for both design and fashion.&quot;</p>
            <p className='font-normal text-[14px] opacity-60 md:text-[16px] mt-[25px] '>Posted on August 18, 2023</p>
            </div>
            </div>


            <div className='hidden w-[358px] h-[225px] md:flex flex-col justify-start items-start p-6 border-2 rounded-[20px] md:w-[610px] md:h-[242px]'>
            <div className='w-[310px] h-[138.19px] md:w-[550px] md:h-[183.58px]'>
              <div className='flex justify-between'>
            <Image src={FourHalfStar} alt='Rating' className='w-[127px] h-[22.58px] '/>
            <Image src={Dots} alt='...' className='hidden md:flex w-[24px] h-[24px]' />
            </div>
            <h1 className='flex items-center gap-[5.78px] pt-4 font-bold text-[16px] w-[120px] h-[19px] md:w-[150px] md:h-[24px] md:text-xl md:pt-5'>Ava H. <span><Image src={Verified} alt='varified' className='w-[15.44px] h-[15.44px] md:w-[19.5px] md:h-[19.5px]'/></span></h1>
            <p className='pt-2 w-[310px] h-[80px] font-normal text-[14px] opacity-60 md:text-[16px] md:w-[522px] md:h-[88px] md:leading-[22px] md:pt-4'>&quot;I&apos;m not just wearing a t-shirt; I&apos;m wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.&quot;</p>
            <p className='font-normal text-[14px] opacity-60 md:text-[16px] mt-[25px] '>Posted on August 19, 2023</p>
            </div>
           </div>
            
        </div>
        
        </div>
        
        <div style={{fontFamily : 'Satoshi-Variable'}} className='mt-[40px] mx-auto flex justify-center'>
        <button className=' w-[195px] h-[47px] rounded-full text-[#000000] font-medium text-[14px] md:text-[16px] border-[#0000001A] border-[1px] hover:cursor-pointer hover:bg-blue-400 md:w-[230px] md:h-[52px]'>Load More Reviews</button>
        </div>
        
        </div>
        
        
    </main>
  )
}
