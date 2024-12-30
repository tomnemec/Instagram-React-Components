import { IoCodeSlashOutline, IoPerson } from "react-icons/io5";
import ServiceCard from "./ServiceCard";
import { FaGlobe } from "react-icons/fa";
import { GrWorkshop } from "react-icons/gr";
import { ServiceCardData } from "./models";

const ServiceCards = () => {
  const services: ServiceCardData[] = [
    {
      name: "1:1 Coaching",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: IoPerson,
      isFeatured: false,
      link: "/service1",
    },
    {
      name: "Coding Bootcamp",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: IoCodeSlashOutline,
      isFeatured: true,
      link: "/service2",
    },
    {
      name: "Online Courses",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: FaGlobe ,
      isFeatured: false,
      link: "/service3",
    },
    {
      name: "Workshops",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: GrWorkshop ,
      isFeatured: false,
      link: "/service4",
    },
  ];

  return (
    <div className="flex gap-10">
      {services.map((service) => (
        <ServiceCard serviceCardData={service} key={service.name} />
      ))}
    </div>
  );
};

export default ServiceCards;
