import { useState } from "react";
export const useFarms = () => {
  const [fincas, setFincas] = useState([
    {
      id: 0,
      name: "Rocio",
      location: "Rocio",
      description: "Finca encontrada en un lugar remoto",
    },
  ]);
  const [isModal, setIsModal] = useState(false);
  const [newFarm, setNewFarm] = useState({
    name: "",
    location: "",
    description: "",
  });

  const handleFarm = () => {
    setFincas([...fincas, { id: fincas.length, ...newFarm }]);

    setNewFarm({name:"", location:"", description:""});
  };

  const handleChange = e => {
    const{name, value} = e.target;
    setNewFarm({...newFarm, [name]:value});
  }
  return {fincas, isModal, setIsModal, newFarm, handleFarm, handleChange}
};
