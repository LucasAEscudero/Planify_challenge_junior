import slots from "../api/slots.json";

interface DatesServicesProps {
  serviceSelected: number;
  dateSelected: string;
  setDateSelected: React.Dispatch<React.SetStateAction<string>>;
}

function DatesServices({
  serviceSelected,
  dateSelected,
  setDateSelected,
}: DatesServicesProps) {
  return (
    <section className="border mt-3 pb-3">
      <h3 className="text-start p-2 text-lg">Proximos turnos disponibles</h3>
      <div className="mx-3">
        {serviceSelected === 3 ? (
          <article>
            <h6 className="text-start">{slots.date}</h6>
            <div className="flex flex-wrap justify-center">
              {slots.availableTimeslots.map((date) => (
                <button
                  key={`${slots.date} ${date}`}
                  value={`${slots.date} ${date}`}
                  className={`${
                    date === dateSelected.split(" ").pop()
                      ? "bg-[#4B5C6B] text-white"
                      : "bg-[#C3CFD9]"
                  } m-3 py-2 px-10 rounded-sm`}
                  onClick={() => setDateSelected(`${slots.date} ${date}`)}
                >
                  {date}
                </button>
              ))}
            </div>
          </article>
        ) : (
          <h5 className="text-center">
            Lo sentimos, no hay turnos disponibles para esta categoria
          </h5>
        )}
      </div>
    </section>
  );
}

export default DatesServices;
