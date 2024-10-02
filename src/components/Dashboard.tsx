import { useState } from "react";
import { LuMenuSquare } from "react-icons/lu";
import logo from "../assets/logo.png";

interface board {
  setPhotoBoard: (photoBoard: number) => void;
  setUpload: (upload: number) => void;
}

const Dashboard = ({ setPhotoBoard, setUpload }: board) => {
  const [menu, setMenu] = useState(0);

  return (
    <div data-aos="fade-in" className="w-screen fixed top-0">
      <div className="bg-header text-white p-2 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="LOGO" className="w-[25px] md:w-[40px] border-2 border-white rounded-full"/>
          <p className="text-md md:text-xl font-bold mx-2">Photo Gallery</p>
        </div>
        <div>
          <LuMenuSquare
            data-aos="fade-left"
            onClick={() => setMenu(1 - menu)}
            className="text-2xl md:text-4xl mx-2 hover:scale-105 active:scale-95"
          />
          {menu !== 0 && (
            <div className="absolute text-black bg-white p-1 w-[150px] right-2 rounded-md cursor-pointer">
              <p
                onClick={() => {
                  setMenu(0);
                  setPhotoBoard(1);
                  setUpload(0);
                }}
                className="hover:bg-header hover:text-white p-1 rounded-md active:scale-95"
              >
                Photos
              </p>
              <p
                onClick={() => {
                  setMenu(0);
                  setUpload(1);
                  setPhotoBoard(0);
                }}
                className="hover:bg-header hover:text-white p-1 rounded-md active:scale-95"
              >
                Upload
              </p>
            </div>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Dashboard;
