import { turnsType } from "../lib/types";

import TurnsCard from "./TurnsCard";

interface TurnsCardsProps {
  turns: turnsType[];
}

function TurnsCards({ turns }: TurnsCardsProps) {
  return (
    <>
      {turns.length ? (
        <div className="flex flex-col">
          {turns.map((turn) => (
            <TurnsCard name={turn.name} date={turn.date} />
          ))}
        </div>
      ) : (
        <h4 className="m-auto">No tienes turnos!</h4>
      )}
    </>
  );
}

export default TurnsCards;
