import { createContext, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const HotelContext = createContext();

export default function HotelsProvider({ children }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const room = JSON.parse(searchParams.get("options"))?.room;
  const destination = searchParams.get("destination");
  //   console.log(destination, room);

  const { isLoading, data: hotels } = useFetch(
    "http://localhost:5000/hotels",
    `q=${destination || ""}&accommodates_gte=${room || 1}`
  );

  return (
    <HotelContext.Provider value={{ isLoading, hotels }}>
      {children}
    </HotelContext.Provider>
  );
}

export function useHotels() {
  return useContext(HotelContext);
}
