import { FaLongArrowAltRight } from "react-icons/fa";
import { ServiceCardData } from "./ServiceCards";

interface Props {
  serviceCardData: ServiceCardData;
}

const ServiceCard = ({ serviceCardData }: Props) => {
  return (
    <>
      <div
        className={`shadow-md rounded-xl p-5 h-60 ${
          serviceCardData.isFeatured ? "bg-yellow-200 " : "bg-white "
        }`}
        key={serviceCardData.name}
      >
        <div className=" w-10 h-10 flex items-center justify-center text-xl bg-slate-100  rounded-full text-gray-500">
          <serviceCardData.icon />
        </div>
        <h2 className="text-xl font-bold">{serviceCardData.name}</h2>
        <p className="text-gray-500 mt-2">{serviceCardData.description}</p>
        <button className="flex items-center justify-center gap-2 ">
          Test <FaLongArrowAltRight />
        </button>
      </div>
    </>
  );
};

export default ServiceCard;
