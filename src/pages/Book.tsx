import { useState, useEffect } from "react";

import { services } from "../api/services.json";
import slots from "../api/slots.json";

import ProgressBar from "../components/ProgressBar";
import ServicesCards from "../components/ServicesCards";

const categoriesArray = [
  "Hands and Feet",
  "Hair",
  "Massage and Spa",
  "Facial Care",
  "Hair Removal",
  "Makeup",
  "Facial Care",
];

function Home() {
  const [progress, setProgress] = useState<number>(25);
  const [item, setItem] = useState<string>("");
  const [serviceSelected, setServiceSelected] = useState<number>(0);
  const [dateSelected, setDateSelected] = useState<string>("");

  useEffect(() => {
    setProgress(25);
  }, []);

  const handleItems = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value =
      event.currentTarget.value !== item ? event.currentTarget.value : "";

    setItem(value);
  };

  const handleServiceSelected = (id: number) => {
    const value = serviceSelected === id ? 0 : id;

    setServiceSelected(value);
  };

  const handleProgress = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.value;

    if (value === "next") {
      if (progress < 50) setProgress(75);
      else if (progress === 75) setProgress(90);
      else if (progress === 90) setProgress(100);
    } else if (value === "prev") {
      if (progress === 75) setProgress(25);
      else if (progress === 90) setProgress(75);
    }
  };

  return (
    <>
      <ProgressBar percentage={progress} barTitle="Seleccionar servicio" />

      {progress === 25 && (
        <section className="border mt-3 pb-3">
          <h3 className="text-start p-2">Categorias</h3>
          <div className="flex flex-col">
            {categoriesArray.map((category: string, i: number) => (
              <button
                key={i}
                value={category}
                onClick={handleItems}
                className="bg-[#F2F5F7] m-2 p-1 flex justify-between"
              >
                {category}{" "}
                <span>
                  {category !== item ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14"
                      />
                    </svg>
                  )}
                </span>
              </button>
            ))}
          </div>
          {item && (
            <ServicesCards
              services={services.filter((service) => service.category === item)}
              setService={handleServiceSelected}
              serviceSelected={serviceSelected}
            />
          )}
        </section>
      )}

      {progress === 75 && (
        <section className="border mt-3 pb-3">
          <h3 className="text-start p-2">Proximos turnos disponibles</h3>
          <div className="mx-3">
            {serviceSelected === 3 ? (
              <article>
                <h6 className="text-start">{slots.date}</h6>
                <div className="flex flex-wrap justify-start">
                  {slots.availableTimeslots.map((date) => (
                    <button
                      key={`${slots.date} ${date}`}
                      value={`${slots.date} ${date}`}
                      className={`${
                        date === dateSelected.split(" ").pop()
                          ? "bg-[#4B5C6B] text-white"
                          : "bg-[#C3CFD9]"
                      } m-3 py-2 px-8 rounded-sm`}
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
      )}

      {progress === 90 && (
        <section className="border p-3 mt-3">
          <h5 className="text-start">
            Servicio: {services[serviceSelected - 1].name}
          </h5>
          <h5 className="text-start">Fecha: {dateSelected}</h5>
        </section>
      )}

      {serviceSelected !== 0 && (
        <section className="border-t mt-10">
          {progress > 25 && (
            <button
              className="bg-[#495A69] p-1 text-white mx-5 mt-3 float-start"
              value="prev"
              onClick={handleProgress}
            >
              Anterior
            </button>
          )}
          <button
            className={`${
              progress === 75 && !dateSelected ? "bg-[#778795]" : "bg-[#495A69]"
            } p-1 text-white mx-5 my-3 float-end`}
            value="next"
            onClick={handleProgress}
            disabled={progress === 75 && !dateSelected}
          >
            {progress === 90 ? "Confirmar" : "Siguiente"}
          </button>
        </section>
      )}
    </>
  );
}

export default Home;
