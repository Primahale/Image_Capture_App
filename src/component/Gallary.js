import React,  {useState} from "react";
import '../App.css'

const Gallary = ({images, onDelete})=>{
    const [selectedImage, setSelctedImage] = useState(null);
    const [filter, setFilter] = useState('none');

    const applyFilter = (imageUrl,filterName)=>{
         setFilter((prevFilters) => ({
            ...prevFilters,
            [imageUrl]: filterName,
          }));
        setSelctedImage(null);
    }
    const handleDelete = (index) => {
        const imageUrlToDelete = images[index];
        const updatedFilters = { ...filter };
        delete updatedFilters[imageUrlToDelete];
        setFilter(updatedFilters);
        onDelete(index);
      };

    return(
        <div className="gallery-container">
      {images.length === 0 ? (
        <p>No images captured yet.</p>
      ) : (
        images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img className="gallery-image"
                 src={image} 
                 alt={`Captured ${index}`}
                 style={{filter : filter[index] || 'none'}}
            />
            <div className="btn-div">
            <button className="delete-button" onClick={() => handleDelete(index)}>
                <span className="material-icons">delete</span>
            </button>
            <button className="edit-button" onClick={() => setSelctedImage(index)}>Edit</button>
            </div>

            {selectedImage === index && (
              <div className="filter-menu">
                <button onClick={() => applyFilter(index,'none')}>None</button>
                <button onClick={() => applyFilter(index,'grayscale(100%)')}>Grayscale</button>
                <button onClick={() => applyFilter(index,'sepia(100%)')}>Sepia</button>
                <button onClick={() => applyFilter(index,'brightness(150%)')}>Brightness</button>
              </div>
            )}

          </div>
        ))
      )}
    </div>
    )
}

export default Gallary;
