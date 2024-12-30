import ServiceCards from "./components/ServiceCards/ServiceCards";
import ShopppingDialog from "./components/ShoppingDialog/ShopppingDialog";

function App() {
  const dialogData = {
    name: "Product Name",
    quantity: 2,
    price: 100,
  };
  return (
    <div className="bg-slate-100 h-dvh flex flex-col gap-10 items-center justify-center">
      <ServiceCards />
      <ShopppingDialog data={dialogData}/>
    </div>
  );
}

export default App;
