import Image from "next/image"
import UpArrow from '../../../public/Casual/UpArrow.png'
import Arrow from '../../../public/Product/Arrow.png'
import Filter from '../../../public/Casual/FilterIcon.png'
import Price from '../../../public/Casual/Price.png'
import Colors from '../../../public/Casual/Colors.png'
import DownArrow from '../../../public/Casual/dropDownIcon.png'
import Product2 from '../../../public/Product/Product2.png'
import Product3 from '../../../public/Product/Product3.png'
import Product4 from '../../../public/Product/Product4.png'
import Rating2 from '../../../public/Product/rating2.png'
import Rating3 from '../../../public/Product/rating3.png'
import Rating4 from '../../../public/Product/rating4.png'
import Arrival2 from "../../../public/Home/arrival2.png";
import Arrival3 from "../../../public/Home/arrival3.png";
import Arrival4 from "../../../public/Home/arrival4.png";
import rating2 from "../../../public/Home/rating2.png";
import rating3 from "../../../public/Home/rating3.png";
import rating4 from "../../../public/Home/rating4.png";
import rating5 from "../../../public/Home/rating5.png";
import rating6 from "../../../public/Home/rating6.png";
import rating7 from "../../../public/Home/rating7.png";
import sell1 from "../../../public/Home/sell1.png";
import sell2 from "../../../public/Home/sell2.png";
import sell3 from "../../../public/Home/sell3.png";
import PagesBar from "../../../public/Casual/PagesBar.png"
import Footer from "../Components/Footer"
import FilterIcon from "../../../public/Casual/CasualFilter.png"

export default function page() {
  return (
    <main className="w-auto h-auto bg-white">
      <h1 style={{ fontFamily: "Satoshi-variable" }} className="flex font-normal text-[14px] md:text-[16px] ml-[20px] gap-3 md:ml-[100px] mt-[40px] items-center ">Home<Image src={Arrow} alt=">" height={3.5} width={7.5} /> Casual </h1>
      <div>
        <div className="flex">
          <div className="hidden md:flex">
            <div style={{ fontFamily: "Satoshi-variable" }} className="h-[1220px] w-[295px] border-[#0000001A] border-2 rounded-[20px] mt-[20px] ml-[100px]">
              <div className="flex items-center justify-between">
                <h1 style={{ fontFamily: "Satoshi-variable" }} className="flex font-bold text-[20px] pt-[15px] pl-[25px]" >Filter </h1>
                <Image src={Filter} alt="Filter" className="w-[20px] h-[18px] mt-[15px] mr-[25px] " />
              </div>
              <hr className=' mt-[15px] mb-[15px] mx-auto w-[247px] h-[3px] bg-black opacity-10 flex justify-center' />
              <ul className="pl-[25px] gap-[px] space-y-5 font-normal text-[16px] leading-[22px] text-[#00000099]">
                <div className="flex items-center justify-between "><li>T-shirts</li> <Image src={Arrow} alt=">" className="w-[6.5px] h-[11.5px] mr-[25px]" /></div>
                <div className="flex items-center justify-between "><li>Shorts</li><Image src={Arrow} alt=">" className="w-[6.5px] h-[11.5px] mr-[25px]" /></div>
                <div className="flex items-center justify-between "><li>Shirts</li><Image src={Arrow} alt=">" className="w-[6.5px] h-[11.5px] mr-[25px]" /></div>
                <div className="flex items-center justify-between "><li>Hoodie</li><Image src={Arrow} alt=">" className="w-[6.5px] h-[11.5px] mr-[25px]" /></div>
                <div className="flex items-center justify-between "><li>Jeans</li><Image src={Arrow} alt=">" className="w-[6.5px] h-[11.5px] mr-[25px]" /></div>
              </ul>
              <hr className=' mt-[15px] mb-[15px] mx-auto w-[247px] h-[3px] bg-black opacity-10 flex justify-center' />
              <div className="flex items-center justify-between">
                <h1 style={{ fontFamily: "Satoshi-variable" }} className="flex font-bold text-[20px] pl-[25px]" >Price </h1>
                <Image src={UpArrow} alt=">" className="w-[16px] h-[14px] mr-[25px] " />
              </div>
              <Image src={Price} alt="Price" className="w-[247px] h-[43px] mx-auto mt-[20px]" />
              <hr className=' mt-[15px] mb-[15px] mx-auto w-[247px] h-[3px] bg-black opacity-10 flex justify-center' />
              <div className="flex items-center justify-between">
                <h1 style={{ fontFamily: "Satoshi-variable" }} className="flex font-bold text-[20px] pl-[25px]" >Colors </h1>
                <Image src={UpArrow} alt=">" className="w-[16px] h-[14px] mr-[25px] " />
              </div>
              <Image src={Colors} alt="Colors" className="w-[247px] h-[90px] mx-auto mt-[20px]" />
              <hr className=' mt-[15px] mb-[15px] mx-auto w-[247px] h-[3px] bg-black opacity-10 flex justify-center' />
              <div className="flex items-center justify-between">
                <h1 style={{ fontFamily: "Satoshi-variable" }} className="flex font-bold text-[20px] pl-[25px]" >Size </h1>
                <Image src={UpArrow} alt=">" className="w-[16px] h-[14px] mr-[25px] " />
              </div>
              <div className="font-normal text-[#00000099] space-x-3 space-y-3 ml-[13px] w-[240px]">
                <button className="hover:bg-black hover:text-white rounded-[62px] bg-[#F0F0F0] h-[39px] w-[96px] ml-3">XX-Small</button>
                <button className="hover:bg-black hover:text-white rounded-[62px] bg-[#F0F0F0] h-[39px] w-[88px]">X-Small</button>
                <button className="hover:bg-black hover:text-white rounded-[62px] bg-[#F0F0F0] h-[39px] w-[73px]">Small</button>
                <button className="hover:bg-black hover:text-white rounded-[62px] bg-[#F0F0F0] h-[39px] w-[90px]">Medium</button>
                <button className="hover:bg-black hover:text-white rounded-[62px] bg-[#F0F0F0] h-[39px] w-[76px]">Large</button>
                <button className="hover:bg-black hover:text-white rounded-[62px] bg-[#F0F0F0] h-[39px] w-[89px]">X-Large</button>
                <button className="hover:bg-black hover:text-white rounded-[62px] bg-[#F0F0F0] h-[39px] w-[98px]">XX-Large</button>
                <button className="hover:bg-black hover:text-white rounded-[62px] bg-[#F0F0F0] h-[39px] w-[97px]">3X-Large</button>
                <button className="hover:bg-black hover:text-white rounded-[62px] bg-[#F0F0F0] h-[39px] w-[98px]">4X-Large</button>
              </div>
              <hr className=' mt-[15px] mb-[15px] mx-auto w-[247px] h-[3px] bg-black opacity-10 flex justify-center' />
              <div className="flex items-center justify-between">
                <h1 style={{ fontFamily: "Satoshi-variable" }} className="flex font-bold text-[20px] pl-[25px]" >Dress Style </h1>
                <Image src={UpArrow} alt=">" className="w-[16px] h-[14px] mr-[25px] " />
              </div>
              <ul className="pl-[25px] mt-[20px] gap-[px] space-y-5 font-normal text-[16px] leading-[22px] text-[#00000099]">
                <div className="flex items-center justify-between "><li>Casual</li> <Image src={Arrow} alt=">" className="w-[6.5px] h-[11.5px] mr-[25px]" /></div>
                <div className="flex items-center justify-between "><li>Formal</li> <Image src={Arrow} alt=">" className="w-[6.5px] h-[11.5px] mr-[25px]" /></div>
                <div className="flex items-center justify-between "><li>Party</li> <Image src={Arrow} alt=">" className="w-[6.5px] h-[11.5px] mr-[25px]" /></div>
                <div className="flex items-center justify-between "><li>Gym</li> <Image src={Arrow} alt=">" className="w-[6.5px] h-[11.5px] mr-[25px]" /></div>
              </ul>
              <button className="bg-black text-white h-[48px] w-[247px] text-[14px] mt-[25px] rounded-[62px] flex items-center mx-auto justify-center font-medium">Apply Filter</button>

            </div>
          </div>

          <div style={{ fontFamily: "Satoshi-variable" }} className="mt-[15px] ml-[20px]" >
            <div className="flex items-center w-[360px] md:w-[940px] justify-between">
              <h1 className="font-bold flex text-[24px] md:text-[32px]">Casual</h1>
              <h1 className="flex text-[#00000099] text-[14px] items-center md:text-[16px]  ">
                <p >Showing 1-10 of 100 Products</p>
                <p className="hidden md:flex pl-[12px]">Sort by:</p>
                <p className="hidden md:flex font-medium pl-[6px]">Most Popular</p>
                <Image src={DownArrow} alt="v" className="hidden md:flex h-[6.5px] w-[11.5px] ml-[6px]" />
                <Image src={FilterIcon} alt="Filter" className="md:hidden h-[32px] w-[32px] ml-[60px]"/>
              </h1>
            </div>







            {/* Products */}
            <div className=" space-y-10 grid-cols-2 grid md:grid-cols-3 md:grid-rows-3 grid-flow-row  mt-[10px]">
              <div className="">
                {/* Item 1 */}
                <div className="flex flex-col justify-start mt-[40px] md:gap-1">
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
              </div>
              {/* Item 2 */}
              <div className="flex flex-col justify-start md:gap-1">
                <Image
                  src={Product3}
                  alt="Product"
                  className="w-[158px] h-[170.01px] rounded-[20px] md:w-[295px] md:h-[298px]"
                />
                <h1 className="h-[22px] w-[185px] font-bold text-[16px] leading-[21.6px] md:w-[255px] md:text-[20px] md:h-[27px]">
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
              {/* Item 3 */}
              <div className="flex flex-col justify-start md:gap-1">
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




              {/* Item 4 */}
            <div className="flex flex-col justify-start md:gap-1">
              <Image
                src={Arrival2}
                alt="Product"
                className="w-[158px] h-[170.01px] rounded-[13.42] md:w-[295px] md:h-[298px]"
              />
              <h1 className="h-[22px] w-[180px] font-bold text-[14px]  leading-[21.6px] md:text-[20px] md:w-[225px] md:h-[27px]">
                Skinny Fit Jeans
              </h1>
              <Image
                src={rating2}
                alt="rating"
                className="w-[127px] h-[16px] md:w-[127px] md:h-[19px]"
              />
              <div className="flex flex-row justify-start items-center gap-[10px]">
                <h1 className="w-[46px] h-[27px] font-bold text-[20px] leading-[27px] md:w-[55px] md:h-[32px] md:text-[24px] md:leading-[32.4px] ">
                  $240
                </h1>
                <h1 className="w-[46px] h-[27px] font-bold text-[20px] leading-[27px] opacity-50 line-through md:w-[55px] md:h-[32px] md:text-[24px] md:leading-[32.4px] ">
                  $260
                </h1>
                <div className="h-[20px] w-[42px] bg-[#FF3333] bg-opacity-10 rounded-full flex justify-center items-center md:w-[58px] md:h-[28px]">
                  <p className="text-[#FF3333] w-[26px] h-[14px] text-[10px] font-medium md:w-[32px] md:h-[16px] ">
                    -20%
                  </p>
                </div>
              </div>
            </div>
              {/* Item 5 */}
              <div className="flex flex-col justify-start md:gap-1">
                <Image
                  src={Arrival3}
                  alt="Product"
                  className="w-[158px] h-[170.01px] rounded-[13.42] md:w-[295px] md:h-[298px]"
                />
                <h1 className="h-[22px] w-[180px] font-bold text-[16px] leading-[21.6px] md:w-[225px] md:text-[20px] md:h-[27px]">
                  Checkered Shirt
                </h1>
                <Image
                  src={rating3}
                  alt="rating"
                  className="w-[127px] h-[16px] md:w-[150px] md:h-[19px]"
                />
                <h1 className="w-[46px] h-[27px] font-bold text-[20px] leading-[27px] md:w-[55px] md:h-[32px] md:text-[24px] md:leading-[32.4px] ">
                  $180
                </h1>
              </div>
              {/* Item 6 */}
              <div className="flex flex-col justify-start md:gap-1">
                <Image
                  src={Arrival4}
                  alt="Product"
                  className="w-[158px] h-[170.01px] rounded-[13.42] md:w-[295px] md:h-[298px]"
                />
                <h1 className="h-[22px] w-[180px] font-bold text-[16px] leading-[21.6px] md:w-[225px] md:text-[20px] md:h-[27px]">
                  Sleeve Striped T-shirt
                </h1>
                <Image
                  src={rating4}
                  alt="rating"
                  className="w-[127px] h-[16px] md:w-[150px] md:h-[19px]"
                />
                <div className="flex flex-row justify-start items-center gap-[5px]">
                  <h1 className="w-[46px] h-[27px] font-bold text-[20px] leading-[27px] md:w-[55px] md:h-[32px] md:text-[24px] md:leading-[32.4px] ">
                    $130
                  </h1>
                  <h1 className="w-[46px] h-[27px] font-bold text-[20px] leading-[27px] opacity-50 line-through md:w-[55px] md:h-[32px] md:text-[24px] md:leading-[32.4px] ">
                    $160
                  </h1>
                  <div className="h-[20px] w-[42px] bg-[#FF3333] bg-opacity-10 rounded-full flex justify-center items-center md:w-[58px] md:h-[28px]">
                    <p className="text-[#FF3333] w-[26px] h-[14px] text-[10px] font-medium md:w-[32px] md:h-[16px] ">
                      -30%
                    </p>
                  </div>
                </div>
                </div>
                {/* Item 7 */}
          <div className="hidden md:flex flex-col justify-start md:gap-1">
            <Image
              src={sell1}
              alt="Product"
              className="w-[158px] h-[170.01px] rounded-[13.42] md:w-[295px] md:h-[298px]"
            />
            <h1 className="h-[22px] w-[180px] font-bold text-[14px] leading-[21.6px] md:text-[20px] md:w-[225px] md:h-[27px]">
              Vertical Striped Shirt
            </h1>
            <Image
              src={rating5}
              alt="rating"
              className="w-[127px] h-[16px] md:w-[161px] md:h-[19px]"
            />
            <div className="flex flex-row justify-start items-center gap-[5px]">
              <h1 className="w-[46px] h-[27px] font-bold text-[20px] leading-[27px] md:w-[55px] md:h-[32px] md:text-[24px] md:leading-[32.4px] ">
                $212
              </h1>
              <h1 className="w-[46px] h-[27px] font-bold text-[20px] leading-[27px] opacity-50 line-through md:w-[55px] md:h-[32px] md:text-[24px] md:leading-[32.4px] ">
                $232
              </h1>
              <div className="h-[20px] w-[42px] bg-[#FF3333] bg-opacity-10 rounded-full flex justify-center items-center md:w-[58px] md:h-[28px]">
                <p className="text-[#FF3333] w-[26px] h-[14px] text-[10px] font-medium md:w-[32px] md:h-[16px] ">
                  -20%
                </p>
              </div>
            </div>
          </div>
          {/* Item 8 */}
          <div className="hidden md:flex flex-col justify-start md:gap-1">
            <Image
              src={sell2}
              alt="Product"
              className="w-[158px] h-[170.01px] rounded-[13.42] md:w-[295px] md:h-[298px]"
            />
            <h1 className="h-[22px] w-[190px] font-bold text-[14px] leading-[21.6px] md:w-[235px] md:text-[20px] md:h-[27px]">
              Courage Graphic T-shirt
            </h1>
            <Image
              src={rating6}
              alt="rating"
              className="w-[127px] h-[16px] md:w-[138px] md:h-[19px]"
            />
            <h1 className="w-[46px] h-[27px] font-bold text-[20px] leading-[27px] md:w-[55px] md:h-[32px] md:text-[24px] md:leading-[32.4px] ">
              $145
            </h1>
          </div>
          {/* Item 9 */}
          <div className="hidden md:flex flex-col justify-start md:gap-1">
            <Image
              src={sell3}
              alt="Product"
              className="w-[198px] h-[200.01px] rounded-[13.42] md:w-[295px] md:h-[298px]"
            />
            <h1 className="h-[22px] w-[180px] font-bold text-[16px] leading-[21.6px] md:w-[255px] md:text-[20px] md:h-[27px]">
              Loose Fit Bermuda Shorts
            </h1>
            <Image
              src={rating7}
              alt="rating"
              className="w-[127px] h-[16px] md:w-[113px] md:h-[19px]"
            />
            <h1 className="w-[46px] h-[27px] font-bold text-[20px] leading-[27px] md:w-[55px] md:h-[32px] md:text-[24px] md:leading-[32.4px] ">
              $80
            </h1>
          </div>
          </div>
            {/* Products end */}
            <hr className=' w-[358] mt-[30px] mb-[30px]  mx-auto md:w-[925px] h-[3px] bg-black opacity-10 flex justify-center' />

            <div className="md:mb-[210px] h-[36px] w-[360px] md:h-[40px] md:w-[920px]">
              <Image src={PagesBar} alt="Pages"/>
            </div>
              
            </div>
            </div>
            </div>
            <Footer/>
            
    </main>
  )
}
