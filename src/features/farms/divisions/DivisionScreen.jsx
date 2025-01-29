import { useParams, useNavigate } from "react-router";
import { routes } from "../../../routesConfig";

export const DivisionScreen = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const divisions = [{ id: 0, name: "Selva" }];

  return (
    <>
      <h2 className="text-2xl font-bold text-center my-4">
        {`Divisiones de la finca con ID: ${id}`}
      </h2>
      <section className="px-4">
        <article className="flex flex-wrap justify-center gap-4 mt-6">
          {divisions.map((division) => (
            <button
              key={division.id}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => navigate(routes.divisionOptions(division.id))}
            >
              {division.name}
            </button>
          ))}
        </article>
      </section>
    </>
  );
};
