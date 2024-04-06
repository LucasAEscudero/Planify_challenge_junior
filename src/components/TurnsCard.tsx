interface TurnsCardProps {
  name: string;
  date: string;
}

function TurnsCard({ name, date }: TurnsCardProps) {
  return (
    <article className="border p-3 mt-3">
      <h5 className="text-start">Servicio: {name}</h5>
      <h5 className="text-start">Fecha: {date}</h5>
    </article>
  );
}

export default TurnsCard;
