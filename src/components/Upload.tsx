import { useState } from "react";
import { FaFileUpload } from "react-icons/fa";

interface ph {
  id: number;
  img: string;
}

interface photoGalleryProps {
  photos: ph[];
  setPhotos: (photos: ph[] | ((photos: ph[]) => ph[])) => void;
  upload: number;
}

const Upload = ({ photos, setPhotos, upload }: photoGalleryProps) => {
  const addPhoto = (photo: string) => {
    setPhotos((photos: ph[]) => {
      const newItem: ph = {
        id: photos.length + 1,
        img: photo,
      };
      const updatedPhotos = [...photos, newItem];
      try {
        localStorage.setItem("pictures", JSON.stringify(updatedPhotos));
      } catch {
        alert("Local Storage Limit exceeded");
      }
      return updatedPhotos;
    });
  };

  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setSelectedImages(Array.from(files)); 
    }
  };

  const handleUpload = () => {
    selectedImages.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        addPhoto(reader.result as string); // Convert the result to string and add the photo
      };
    });
    
    setIsPopupVisible(true);

    setTimeout(() => {
      setIsPopupVisible(false);
    }, 800); 
  };

  return (
    <div>
      {upload !== 0 && (
        <div className="flex flex-col items-center p-4 gap-4 text-white">
          <FaFileUpload className="text-9xl" data-aos="fade-up" />
          <div data-aos="fade-in" className="flex flex-col gap-4 items-center">
            <input
              className="w-[300px] translate-x-10"
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
            />
            <button
              className="bg-header p-2 rounded-md border-2 border-white my-3 active:scale-95 w-[150px]"
              onClick={handleUpload}
            >
              Upload Image(s)
            </button>
          </div>
        </div>
      )}
      {isPopupVisible && (
        <div
        
          className="fixed bottom-10 right-2 bg-green-500 text-white p-4 rounded shadow-lg transition duration-500" 
        >
          <p>You have uploaded {selectedImages.length} file(s).</p>
          <p>You have total {photos.length} photos.</p>
        </div>
      )}
    </div>
  );
};

export default Upload;
