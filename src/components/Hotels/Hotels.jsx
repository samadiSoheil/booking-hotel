import { Link } from "react-router-dom";
import { useHotels } from "../contexts/HotelsProvider";

export default function Hotels() {
  const { isLoading, hotels } = useHotels();
  console.log(isLoading, hotels);

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="searchList">
      <h1>Search Result {hotels.length}</h1>
      {hotels.map((item) => {
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
