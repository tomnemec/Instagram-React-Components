import { CiCreditCard1 } from "react-icons/ci"

const ShopppingDialog = () => {
  return (
    <div className="bg-white shadow-md flex flex-col gap-2 p-5 w-72 h-56 rounded-3xl ">
        <span className="font-semibold text-2xl">Vitamins AllRounder</span>
        <span className="text-slate-400">250mg</span>
        <span className="font-semibold text-lg">$25.00</span>
        <button><CiCreditCard1 />Buy Now</button>
    </div>
  )
}

export default ShopppingDialog