import { useState } from "react";
import SelvaImage from "../assets/images/Selva.png";
import MontanaImage from "../assets/images/Montaña.png";
import ArroyoImage from "../assets/images/Arroyo.png";
import PraderaImage from "../assets/images/Pradera.png";

export const useDivisions = () => {
    const [divisions, setDivisions] = useState([
        { id: 0, name: "Selva",   image: SelvaImage,  bgColor: "linear-gradient(to left, rgba(23, 126, 89, 0.35) 1%, #16AB76 100%)" },
        { id: 1, name: "Arroyo",  image: ArroyoImage, bgColor: "linear-gradient(to right, rgba(113, 201, 199, 0.35) 1%, #25C8C4 100%)" },
        { id: 2, name: "Montaña", image: MontanaImage, bgColor: "linear-gradient(to left, rgba(197, 240, 153, 0.35) 1%, #A0E060 100%)" },
        { id: 3, name: "Pradera", image: PraderaImage, bgColor: "linear-gradient(to right, rgba(204, 214, 61, 0.35) 10%, #CCD615 100%)" },
      ]);
    
      const [isModal, setIsModal] = useState(false);
      const [newDivision, setNewDivision] = useState({
        name: "",
        type: "Selva", 
        image: SelvaImage,  
        
      });
      const handleDivision = () => {
        const image = getImageByType(newDivision.type);  
        const bgColor = getColorByType(newDivision.type); 
        setDivisions([
          ...divisions,
          { id: divisions.length, name: newDivision.name, image, bgColor },
        ]);
        setNewDivision({
          name: "",
          type: "Selva",
          image: SelvaImage,
          bgColor: "bg-green-600",
        });
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setNewDivision({
          ...newDivision,
          [name]: value,
          image: getImageByType(value),
          bgColor: getColorByType(value),  
        });
      };
    
      const getImageByType = (type) => {
        switch (type) {
          case "Selva":
            return SelvaImage;
          case "Montaña":
            return MontanaImage;
          case "Arroyo":
            return ArroyoImage;
          case "Pradera":
            return PraderaImage;
          default:
            return "/images/default.png";
        }
      };

      const getColorByType = (type) => {
        switch (type) {
          case "Selva":
            return "linear-gradient(to left, rgba(23, 126, 89, 0.20) 1%, #16AB76 100%)";
          case "Montaña":
            return "linear-gradient(to left, rgba(197, 240, 153, 0.35) 1%, #A0E060 100%)";
          case "Arroyo":
            return "linear-gradient(to right, rgba(113, 201, 199, 0.35) 1%, #25C8C4 100%)";
          case "Pradera":
            return "linear-gradient(to right, rgba(204, 214, 61, 0.35) 10%, #CCD615 100%)";
          default:
            return "linear-gradient(to right, rgba(23, 126, 89, 0.35) 1%, #6BBF59 90%)";
        }
      };
    
      return { divisions, isModal, setIsModal, newDivision, handleDivision, handleChange };
    };
  
  