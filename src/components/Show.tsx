import { MdDelete } from "react-icons/md";

interface ph {
  id: number;
  img: string;
}

interface showPicture {
  photos: ph[];
  show: number;
  id: number;
  setShow: (show: number) => void;
  setRemove: (remove: number) => void;
}

const Show = ({ photos, show, id, setShow, setRemove }: showPicture) => {
  return (
    <div className="mt-[55px]">
      {show !== 0 && (
        <div className="fixed flex justify-center items-center top-0 left-0 h-screen w-screen z-10 text-white backdrop-blur-sm p-2">
          <div
            data-aos="fade-left"
            className="absolute top-0 right-0 text-4xl p-1 bg-red-800 hover:bg-red-600 active:scale-95 cursor-pointer"
            onClick={() => {
              setRemove(1);
            }}
          >
            <MdDelete />
          </div>
          {photos.length !== 0 && (
            <img
              data-aos="fade-up"
              src={photos[id - 1].img}
              alt=""
              className="h-[400px]"
              onClick={() => {
                setShow(0);
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Show;
