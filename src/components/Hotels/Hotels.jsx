import { Link, useSearchParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

export default function Hotels() {
  const [searchParams, setSearchParams] = useSearchParams();
  const room = JSON.parse(searchParams.get("options")).room;
  const destination = searchParams.get("destination");
  //   console.log(destination, room);

  const { isLoading, data } = useFetch(
    "http://localhost:5000/hotels",
    `q=${destination || ""}&accommodates_gte=${room || 1}`
  );
  console.log(data);
  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="searchList">
      <h1>Search Result {data.length}</h1>
      {data.map((item) => {
        return (
          <Link
            key={item.id}
            to={`/hotels/${item.id}?lat=${item.latitude}&lng=${item.longitude}`}
          >
            <div className="searchItem">
              <img src={item.picture_url.url} alt={item.name} />
              <div className="searchItemDesc">
                <p className="location">{item.smart_location}</p>
                <p className="name">{item.name}</p>
                {`€ ${item.price}`}
                <span>&nbsp;night</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
