import { useCities } from "../contexts/CityContext";
import CityItem from "./CityItem";
import Message from "./Message";
import Spinner from "./Spinner";
import styles from "./CityList.module.css";

function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length) return <Message message="Select your city on map" />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
