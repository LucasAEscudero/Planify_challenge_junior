import { services } from "../api/services.json";

import ServicesCards from "./ServicesCards";

const categories = [
  "Hands and Feet",
  "Hair",
  "Massage and Spa",
  "Facial Care",
  "Hair Removal",
  "Makeup",
  "Facial Care",
];

interface AvailableServicesProps {
  item: string;
  handleItems: (event: React.MouseEvent<HTMLButtonElement>) => void;
  serviceSelected: number;
  handleServiceSelected: (id: number) => void;
}

function AvailableServices({
  item,
  handleItems,
  serviceSelected,
  handleServiceSelected,
}: AvailableServicesProps) {
  return (
    <section className="border mt-3 pb-3">
      <h3 className="text-start p-2 text-lg">Categorias</h3>
      <div className="flex flex-col">
        {categories.map((category: string, i: number) => (
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
  );
}

export default AvailableServices;
