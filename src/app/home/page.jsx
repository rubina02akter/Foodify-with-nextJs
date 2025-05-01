
// import Banner2 from "../Component/Banner2";
import ChooseUs from "../Component/ChooseUs";
import Card from "../food-card/page"
import Testimonial from '../../app/testimonial/page'
import Banner from "../Component/Banner";



export default function home() {

  return (
    <div className='min-h-screen'>
   <Banner />
    {/* <Banner2 /> */}
    <Card />
    <ChooseUs />
    <Testimonial />

    </div>
  )
}