import { useLocation, useNavigate } from "react-router";

function NavBarContent() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <>
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
          pathname === "/my-books"
            ? "text-[#766CF2] border-b-2 border-b-[#766CF2]"
            : " text-[#4B5C6B]"
        } p-3 font-bold`}
        onClick={() => navigate("/my-books")}
      >
        Mis turnos
      </button>
    </>
  );
}

export default NavBarContent;
