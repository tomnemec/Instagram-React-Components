import Gallery from "./components/Gallery/Gallery";
import ServiceCards from "./components/ServiceCards/ServiceCards";
import ShopppingDialog from "./components/ShoppingDialog/ShopppingDialog";
import  "./App.css";
function App() {
  const dialogData = {
    name: "Product Name",
    quantity: 2,
    price: 100,
  };
  const galleryItems = [
    {
      id: 1,
      title: "First Item",
      description: "This is the first item",
      imageUrl: "/birds.jpg",
    },
    {
      id: 2,
      title: "Second Item",
      description: "This is the second item",
      imageUrl: "/family.png",
    },
    {
      id: 3,
      title: "Third Item",
      description: "This is the third item",
      imageUrl: "/flower.jpg",
    },
    {
      id: 4,
      title: "Fourth Item",
      description: "This is the fourth item",
      imageUrl: "/family.png",
    },
    {
      id: 5,
      title: "Fifth Item",
      description: "This is the fifth item",
      imageUrl: "/flower.jpg",
    }
    ,
    {
      id: 6,
      title: "Sixth Item",
      description: "This is the sixth item",
      imageUrl: "/flower.jpg",
    },
    {
      id: 7,
      title: "Seventh Item",
      description: "This is the seventh item",
      imageUrl: "/family.png",
    }
  ];
  return (
    <div className="bg-slate-100 p-20 h-dvh flex flex-col gap-10 items-center justify-center">
      {/* <ServiceCards /> */}
      {/* <ShoppingDialog data={dialogData} /> */}
      <Gallery galleryItems={galleryItems}/>
    </div>
  );
}

export default App;
