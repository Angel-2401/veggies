
import { BiSupport } from "react-icons/bi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiRefund2Fill, RiSecurePaymentLine } from "react-icons/ri";
import ServicesCard from "./ServicesCard";

const ServicesData = [
  {
    icon: <LiaShippingFastSolid size={36} />,
    title: "Free Shipping",
    desc: "Free Shipping For all US orders",
  },
  {
    icon: <BiSupport size={36} />,
    title: "Support 24/7",
    desc: "We support 24/7",
  },
  {
    icon: <RiRefund2Fill size={36} />,
    title: "100% Money Back",
    desc: "You have 30 days to return",
  },
  {
    icon: <RiSecurePaymentLine size={36} />,
    title: "Secure Payment",
    desc: "We ensure secure payment",
  },
];

const Services = () => {
  return ( 
  <section className="container mt-[100px]">
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols3 lg:grid-cols-4">

  {ServicesData.map((items) => (
    <ServicesCard
    key={items.title}
    icon={items.icon}
    title={items.title}
    desc={items.desc}
    />
))}
    </div>
        </section> 
)
};


export default Services;
