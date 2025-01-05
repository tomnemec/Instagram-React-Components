import { IGalleryItem } from "./models";
import GalleryItem from "./GalleryItem";

interface Props {
  galleryItems: IGalleryItem[];
}

const Gallery = ({ galleryItems }: Props) => {
  return (
    <div className="scrollbar flex gap-4 max-w-screen-md overflow-x-auto">
      {galleryItems.map((item, index) => (
        <GalleryItem key={index} galleryItem={item} />
      ))}
    </div>
  );
};

export default Gallery;
