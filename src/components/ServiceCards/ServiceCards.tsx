import { IoCodeSlashOutline, IoPerson } from "react-icons/io5";
import ServiceCard from "./ServiceCard";
import { IconType } from "react-icons";

export interface ServiceCardData {
  name: string;
  description: string;
  icon: IconType;
  isFeatured: boolean;
}

const ServiceCards = () => {
  const services: ServiceCardData[] = [
    {
      name: "Service 1",
      description: "Service 1 Description",
      icon: IoPerson,
      isFeatured: false,
    },
    {
      name: "Service 2",
      description: "Service 2 Description",
      icon: IoCodeSlashOutline ,
      isFeatured: true,
    },
    {
      name: "Service 3",
      description: "Service 3 Description",
      icon: IoCodeSlashOutline ,
      isFeatured: false,
    },
    {
      name: "Service 4",
      description: "Service 4 Description",
      icon: IoCodeSlashOutline ,
      isFeatured: false,
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
