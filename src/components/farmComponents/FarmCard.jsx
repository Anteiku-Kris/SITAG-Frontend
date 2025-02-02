import { useNavigate } from "react-router";
import {routes} from "../../routesConfig"

export const FarmCard = ({ finca, image }) => {
  const navigate = useNavigate();

  return (
    <section
      className="bg-gradient-to-r p-4 rounded-lg shadow-md drop-shadow-lg flex flex-col items-start justify-start cursor-pointer transition-transform duration-200 hover:scale-103 relative overflow-hidden"
      style={{
        background: "linear-gradient(to left,  #6BBF59 1% , #0B6E4F 50%, #0B6E4F 60%)"
      }}
      onClick={() => navigate(routes.division(finca.id))} 
    >
      <img
        src={image}
        alt={finca.name}
        className="absolute bottom-0 right-0 w-20 h-20 object-contain rounded-md"
        style={{right:"-5px"}}
      />
   
      <article className="mt-2 text-left  font-semibold text-white">
        <div className="text-lg font-semibold mb-2"> {`${finca.name}`}</div>
        <div className="text-sm"> {`${finca.description}`}</div>
      </article>
    </section>
  );
};
