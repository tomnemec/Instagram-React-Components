import { CiCreditCard1 } from "react-icons/ci";

const ShopppingDialog = () => {
  return (
    <div className="bg-white shadow-md flex flex-col gap-2 p-5 w-72 h-56 rounded-3xl ">
      <span className="font-semibold text-2xl">Vitamins AllRounder</span>
      <span className="text-slate-400">250mg</span>
      <span className="font-semibold text-2xl">$25.00</span>
      <button className="flex gap-1 items-center justify-center bg-yellow-400 rounded-full p-2 font-semibold mt-4 hover:scale-105 transition-all cursor-pointer">
        <CiCreditCard1 className="text-2xl" />
        Buy Now
      </button>
    </div>
  );
};

export default ShopppingDialog;
