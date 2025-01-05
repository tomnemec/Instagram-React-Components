import { IGalleryItem } from './models'

interface Props{
    galleryItem: IGalleryItem
}

const GalleryItem = ({galleryItem}:Props) => {
  return (
    <div className='flex flex-col min-w-72'>
        <img className='w-72 h-72 rounded-lg shadow-sm bg-white' src={galleryItem.imageUrl} alt={galleryItem.title} />
        <h3 className='font-semibold text-2xl mt-2'>{galleryItem.title}</h3>
        <p className='mb-2'>{galleryItem.description}</p>
    </div>
  )
}

export default GalleryItem