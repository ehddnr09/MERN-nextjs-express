import Card from "../../shared/components/UlElements/Card";
import PlaceItem from "./PlaceItem";
import Button from "../../shared/components/FormElements/Button";
import classes from "./PlaceList.module.css";

const PlaceList = ({ ...props }) => {
  const { places } = props;
  if (places.length === 0) {
    return (
      <div className={`${classes.placeList} ${classes.center}`}>
        <Card>
          <h2>No places found. Maybe create one?</h2>
          <Button herf="/places/new">Share Place</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className={classes.placeList}>
      {places.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creatorId}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
