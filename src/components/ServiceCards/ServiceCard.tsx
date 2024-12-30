import { FaLongArrowAltRight } from "react-icons/fa";
import { ServiceCardData } from "./models";


interface Props {
  serviceCardData: ServiceCardData;
}

const ServiceCard = ({ serviceCardData }: Props) => {
  return (
    <>
      <div
        className={`shadow-md rounded-xl p-5 h-60 relative hover:scale-105 cursor-pointer transition-all ${
          serviceCardData.isFeatured ? "bg-blue-300 " : "bg-white "
        }`}
        key={serviceCardData.name}
      >
        <div
          className={`mb-4 w-10 h-10 flex items-center justify-center text-xl bg-slate-100  rounded-full text-gray-700 ${
            serviceCardData.isFeatured ? "bg-white " : "bg-blue-300 "
          }`}
        >
          <serviceCardData.icon />
        </div>
        <h2 className="text-xl font-bold">{serviceCardData.name}</h2>
        <p className="text-gray-700 ">{serviceCardData.description}</p>
        <button className="absolute bottom-4 left-5 flex items-center justify-center gap-2 ">
          More <FaLongArrowAltRight />
        </button>
      </div>
    </>
  );
};

export default ServiceCard;
