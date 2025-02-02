import { useState } from "react";

export const useDivisions = () => {
  const [divisions, setDivisions] = useState([
    { id: 0, name: "Verde", bgColor:  "linear-gradient(to left, rgba(23, 126, 89, 0.20) 1%, #16AB76 100%)" },
    { id: 1, name: "Amarillo", bgColor: "linear-gradient(to left, rgba(204, 214, 61, 0.20) 1%, #E2EB41 100%)" },
    { id: 2, name: "Azul", bgColor: "linear-gradient(to left, rgba(113, 201, 199, 0.20) 1%, #25C8C4 100%)" },
    { id: 3, name: "Rojo", bgColor: "linear-gradient(to left, rgba(255, 87, 51, 0.20) 1%, #FF5733 100%)" },
    { id: 4, name: "Verde Claro", bgColor: "linear-gradient(to left, rgba(197, 240, 153, 0.20) 1%, #A0E060 100%)" },
  ]);
 
  const [isModal, setIsModal] = useState(false);
  const [newDivision, setNewDivision] = useState({
    name: "",
    type: "Verde",
    bgColor: "linear-gradient(to left, rgba(23, 126, 89, 0.20) 1%, #16AB76 100%)", 
  });

  const handleDivision = () => {
    setDivisions([
      ...divisions,
      { id: divisions.length, name: newDivision.name, bgColor: newDivision.bgColor },
    ]);
    setNewDivision({
      name: "",
      type: "Verde",
      bgColor: "linear-gradient(to left, rgba(23, 126, 89, 0.20) 1%, #16AB76 100%)", 
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewDivision({
      ...newDivision,
      [name]: value,
    });
  };

  const handleColorChange = (color) => {
    setNewDivision({
      ...newDivision,
      bgColor: color,
    });
  };

  return {
    divisions,
    isModal,
    setIsModal,
    newDivision,
    handleDivision,
    handleChange,
    handleColorChange,
  };
    };