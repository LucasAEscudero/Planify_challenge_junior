import { useLocation, useNavigate } from "react-router";

function NavBar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <nav className="flex justify-center">
        <button
          className={`${
            pathname === "/"
              ? "text-[#766CF2] border-b-2 border-b-[#766CF2]"
              : " text-[#4B5C6B]"
          } p-3 font-bold`}
          onClick={() => navigate("/")}
        >
          Reservar
        </button>
        <button
          className={`${
            pathname === "/my-turns"
              ? "text-[#766CF2] border-b-2 border-b-[#766CF2]"
              : " text-[#4B5C6B]"
          } p-3 font-bold`}
          onClick={() => navigate("/my-turns")}
        >
          Mis turnos
        </button>
      </nav>
    </>
  );
}

export default NavBar;
