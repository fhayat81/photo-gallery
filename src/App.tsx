import { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Photos from "./components/Photos";
import Upload from "./components/Upload";
import Show from "./components/Show";
import Delete from "./components/Delete";
import AOS from "aos";
import "aos/dist/aos.css";

interface ph {
  id: number;
  img: string;
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,
    });
  }, []);

  const [photos, setPhotos] = useState<ph[]>(() => {
    const savedPhotos = localStorage.getItem("pictures");
    return savedPhotos ? JSON.parse(savedPhotos) : [];
  });
  const [photoBoard, setPhotoBoard] = useState<number>(1);
  const [upload, setUpload] = useState<number>(0);
  const [show, setShow] = useState<number>(0);
  const [id, setId] = useState<number>(1);
  const [remove, setRemove] = useState<number>(0);

  const deletePicture = (id: number) => {
    const newList = photos.filter((data) => data.id !== id);

    const newList2 = newList.map((data, index) => ({
      ...data,
      id: index + 1,
    }));

    setPhotos(newList2);
    setShow(0);
    localStorage.setItem("pictures", JSON.stringify(photos));
  };

  return (
    <div className="bg-background h-screen w-screen overflow-y-scroll scrollbar-hide">
      <Photos
        photos={photos}
        photoBoard={photoBoard}
        id={id}
        setId={setId}
        setShow={setShow}
      />
      <Dashboard setPhotoBoard={setPhotoBoard} setUpload={setUpload} />
      
      <Upload photos={photos} setPhotos={setPhotos} upload={upload} />
      <Show
        photos={photos}
        show={show}
        setShow={setShow}
        id={id}
        setId={setId}
        setRemove={setRemove}
      />
      <Delete
        remove={remove}
        id={id}
        setRemove={setRemove}
        deletePicture={deletePicture}
      />
    </div>
  );
}

export default App;
