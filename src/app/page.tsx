import Image from "next/image";
import Hero from "./Components/Hero";
import BrandBar from "./Components/BrandBar";
import NewArrivals from "./Components/NewArrivals";
import Browse from "./Components/Browse";
import HappyCustomer from "./Components/HappyCustomer";
import Footer from "./Components/Footer";
export default function Home() {
  return (
    <>
    <Hero/>
    <BrandBar/>
    <NewArrivals/>
    <Browse/>
    <HappyCustomer/>
    <Footer/>
    </>
  );
}

