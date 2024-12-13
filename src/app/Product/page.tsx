import Footer from "../Components/Footer";
import ProductHero from "../Components/ProductHero";
import ProductReview from "../Components/ProductReview";
import ProductsBar from "../Components/ProductsBar";

export default function page() {
  return (
    <div>
      <ProductHero/>
      <ProductReview/>
      <ProductsBar/>
      <Footer/>
    </div>
  )
}
