import ServicesCard from "./ServicesCard";

import { serviceType } from "../lib/types";

interface ServicesCardsProps {
  services: serviceType[];
  setService: (id: number) => void;
  serviceSelected: number;
}

function ServicesCards({
  services,
  setService,
  serviceSelected,
}: ServicesCardsProps) {
  return (
    <section className="flex flex-col">
      {services.map(({ id, name, description }) => (
        <ServicesCard
          key={id}
          id={id}
          name={name}
          description={description}
          setService={setService}
          serviceSelected={serviceSelected}
        />
      ))}
    </section>
  );
}

export default ServicesCards;
