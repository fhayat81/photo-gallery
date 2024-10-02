interface ph {
  id: number;
  img: string;
}

interface photoGalleryProps {
  photos: ph[];
  photoBoard: number;
  id: number;
  setShow: (show: number) => void;
  setId: (id: number) => void;
}

const Photos = ({ photos, photoBoard, setShow, setId }: photoGalleryProps) => {
  return (
    <div className="mt-[55px]">
      {photoBoard !== 0 && (
        <div className="columns-5 gap-3 p-2">
          {[...photos].reverse().map((data) => (
            <div key={data.id} data-aos="fade-up">
              <img
                src={data.img}
                alt={`Photo ${data.id}`}
                className="picture break-inside-avoid my-2"
                onClick={() => {
                  setId(data.id);
                  setShow(1);
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Photos;
