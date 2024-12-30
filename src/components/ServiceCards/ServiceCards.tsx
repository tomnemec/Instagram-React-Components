import { IoCodeSlashOutline, IoPerson } from "react-icons/io5";
import ServiceCard from "./ServiceCard";
import { IconType } from "react-icons";

export interface ServiceCardData {
  name: string;
  description: string;
  icon: IconType;
  isFeatured: boolean;
  link: string;
}

const ServiceCards = () => {
  const services: ServiceCardData[] = [
    {
      name: "Service 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: IoPerson,
      isFeatured: false,
      link: "/service1",
    },
    {
      name: "Service 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: IoCodeSlashOutline,
      isFeatured: true,
      link: "/service2",
    },
    {
      name: "Service 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: IoCodeSlashOutline,
      isFeatured: false,
      link: "/service3",
    },
    {
      name: "Service 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: IoCodeSlashOutline,
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
