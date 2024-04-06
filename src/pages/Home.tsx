import { useState } from "react";
import { services } from "../api/services.json";
import { useMyTurnsStore } from "../store/myTurnsStore";
import { turnsType } from "../lib/types";
import { useNavigate } from "react-router";

import ProgressBar from "../components/ProgressBar";
import AvailableServices from "../components/AvailableServices";
import DatesServices from "../components/DatesServices";
import TurnsCard from "../components/TurnsCard";

function Home() {
  const [progress, setProgress] = useState<number>(25);
  const [item, setItem] = useState<string>("");
  const [serviceSelected, setServiceSelected] = useState<number>(0);
  const [dateSelected, setDateSelected] = useState<string>("");
  const { myTurns, getMyTurns } = useMyTurnsStore((state) => state);
  const navigate = useNavigate();

  const handleItems = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value =
      event.currentTarget.value !== item ? event.currentTarget.value : "";

    setItem(value);
  };

  // set selected service id
  const handleServiceSelected = (id: number) => {
    const value = serviceSelected === id ? 0 : id;

    setServiceSelected(value);
  };

  // handler progress
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

  // push new turn
  const addMyTurns = () => {
    const { name, description, category } = services[serviceSelected - 1];

    localStorage.setItem(
      "confirm-turns",
      JSON.stringify([
        ...myTurns,
        {
          id: serviceSelected,
          name,
          description,
          category,
          date: dateSelected,
        },
      ])
    );

    const jsonTurns: turnsType[] = JSON.parse(
      String(localStorage.getItem("confirm-turns"))
    );

    getMyTurns(jsonTurns);

    navigate("/my-turns");
  };

  return (
    <div className="flex flex-col justify-between min-h-full">
      <div>
        <ProgressBar percentage={progress} barTitle="Seleccionar servicio" />

        {/* select an available service */}
        {progress === 25 && (
          <AvailableServices
            item={item}
            handleItems={handleItems}
            serviceSelected={serviceSelected}
            handleServiceSelected={handleServiceSelected}
          />
        )}

        {/* select an available date */}
        {progress === 75 && (
          <DatesServices
            dateSelected={dateSelected}
            serviceSelected={serviceSelected}
            setDateSelected={setDateSelected}
          />
        )}

        {/* service to confirm */}
        {progress === 90 && (
          <section>
            <TurnsCard
              name={services[serviceSelected - 1].name}
              date={dateSelected}
            />
          </section>
        )}
      </div>

      {serviceSelected !== 0 && (
        <section className="border-t mt-10 sticky z-[1000] bottom-[3.15em] sm:bottom-0 bg-white">
          {progress > 25 && (
            <button
              className="bg-[#495A69] p-1 text-white mx-5 mt-3 float-start"
              value="prev"
              onClick={handleProgress}
            >
              Anterior
            </button>
          )}
          {progress !== 90 ? (
            <button
              className={`${
                progress === 75 && !dateSelected
                  ? "bg-[#778795]"
                  : "bg-[#495A69]"
              } p-1 text-white mx-5 my-3 float-end`}
              value="next"
              onClick={handleProgress}
              disabled={progress === 75 && !dateSelected}
            >
              Siguiente
            </button>
          ) : (
            <button
              className={`${"bg-[#495A69]"} p-1 text-white mx-5 my-3 float-end`}
              value="next"
              onClick={addMyTurns}
            >
              Confirmar
            </button>
          )}
        </section>
      )}
    </div>
  );
}

export default Home;
