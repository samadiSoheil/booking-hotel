import { useHotels } from "../contexts/HotelsProvider";

export default function Map() {
  const { isLoading, hotels } = useHotels();

  if (isLoading) return <p>data is Loading...</p>;

  return (
    <div className="mapContainer">
      <div>hi</div>
    </div>
  );
}
