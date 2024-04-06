import { useMyTurnsStore } from "../store/myTurnsStore";

import TurnsCards from "../components/TurnsCards";

function MyTurns() {
  const { myTurns } = useMyTurnsStore((state) => state);

  return (
    <>
      <section>
        <h2 className="text-xl text-start">Mis turnos</h2>
        <TurnsCards turns={myTurns} />
      </section>
    </>
  );
}

export default MyTurns;
