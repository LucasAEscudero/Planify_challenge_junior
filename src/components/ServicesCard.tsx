interface ServicesCardsProps {
  id: number;
  name: string;
  description: string;
  category?: string;
  setService: (id: number) => void;
  serviceSelected: number;
}

function ServicesCard({
  id,
  name,
  description,
  setService,
  serviceSelected,
}: ServicesCardsProps) {
  return (
    <article className="border m-2 p-1">
      <div className="text-start">
        <h5>{name}</h5>
        <p>{description}</p>
      </div>
      <button
        className={`${
          id === serviceSelected ? "bg-[#495A69]" : "bg-[#778795]"
        } p-1 float-end text-white`}
        onClick={() => setService(id)}
      >
        {id === serviceSelected ? "Seleccionado" : "Seleccionar"}
      </button>
    </article>
  );
}

export default ServicesCard;
