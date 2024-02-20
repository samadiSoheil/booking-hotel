import { useParams, useSearchParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

export default function SIngleHotel() {
  const { id } = useParams();
  const { isLoading, data } = useFetch(`http://localhost:5000/hotels/${id}`);
  if (isLoading) return <p>Loading...</p>;
  console.log(data.xl_picture_url);
  console.log(data);

  //   let a = data.xl_picture_url;
  return (
    <div className="room">
      <div className="roomDetail">
        <h2>{data.name}</h2>
        <div>
          {data.number_of_reviews} reviews &bull;
          {data.smart_location}
        </div>
        <img src={data.xl_picture_url} alt={data.name} />
      </div>
    </div>
  );
}
