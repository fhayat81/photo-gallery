import { MdDelete } from "react-icons/md";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

interface ph {
  id: number;
  img: string;
}

interface showPicture {
  photos: ph[];
  show: number;
  id: number;
  setId: (id: number) => void;
  setShow: (show: number) => void;
  setRemove: (remove: number) => void;
}

const Show = ({ photos, show, id, setId, setShow, setRemove }: showPicture) => {
  const shiftRight = () => {
    if (id === 1) {
      setId(photos.length);
    } else {
      setId(id - 1);
    }
  };

  const shiftLeft = () => {
    if (id === photos.length) {
      setId(1);
    } else {
      setId(id + 1);
    }
  };

  return (
    <div className="mt-[55px]">
      {show !== 0 && (
        <div className="fixed flex justify-center gap-5 items-center top-0 left-0 h-screen w-screen z-10 text-white backdrop-blur-sm p-2">
          <div
            data-aos="fade-left"
            className="absolute top-0 right-0 text-4xl p-1 bg-red-800 hover:bg-red-600 active:scale-95 cursor-pointer"
            onClick={() => {
              setRemove(1);
            }}
          >
            <MdDelete />
          </div>
          <button
            className="text-3xl sm:text-5xl text-gray-400 active:scale-95 cursor-pointer"
            onClick={() => {
              shiftLeft();
            }}
          >
            <FaArrowCircleLeft />
          </button>
          {photos.length !== 0 && (
            <img
              data-aos="fade-up"
              src={photos[id - 1].img}
              alt=""
              className="w-[280px] sm:w-[450px] md:w-[650px] mt-2"
              onClick={() => {
                setShow(0);
              }}
            />
          )}
          <button
            className="text-3xl sm:text-5xl text-gray-400 active:scale-95 cursor-pointer"
            onClick={() => {
              shiftRight();
            }}
          >
            <FaArrowCircleRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Show;
