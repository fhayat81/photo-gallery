import { useEffect, useState } from "react";
import { FaFileUpload } from "react-icons/fa";

interface ph {
  id: number;
  img: string;
}

interface photoGalleryProps {
  photos: ph[];
  setPhotos: (photos: ph[]) => void;
  upload: number;
}

const Upload = ({ photos, setPhotos, upload }: photoGalleryProps) => {
  const addPhoto = (photo: string) => {
    const newItem: ph = {
      id: photos.length + 1,
      img: photo,
    };
    setPhotos([...photos, newItem]);
    try{
      localStorage.setItem("pictures", JSON.stringify(photos));
    } catch {
      alert("Local Storage Limit exceeded");
    }
  };

  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleUpload = () => {
    if (selectedImage) {
      const reader = new FileReader();
      reader.readAsDataURL(selectedImage);
      reader.onloadend = () => {
        addPhoto(reader.result as string); // Convert the result to string
      };
    }
  };


  return (
    <div>
      {upload !== 0 && (
        <div className="flex flex-col items-center p-4 gap-4 text-white">
          <FaFileUpload className="text-9xl" data-aos="fade-up"/>
          <div data-aos="fade-in" className="flex flex-col gap-4 items-center">
          <input
            className="w-[300px]  translate-x-10"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          <button
            className="bg-header p-2 rounded-md border-2 border-white my-3 active:scale-95 w-[150px]"
            onClick={handleUpload}
          >
            Upload Image
          </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Upload;
