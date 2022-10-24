import { useState, useContext } from "react";
import Image from "next/image";

import Card from "../../shared/components/UlElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UlElements/Modal";
import Map from "../../shared/components/UlElements/Map";

import { AuthContext } from "../../shared/context/auth-context";

import classes from "./PlaceItem.module.css";

const PlaceItem = (props) => {
  const auth = useContext(AuthContext);

  const [showMap, setShowMap] = useState(false);

  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  const showDeleteWarningHandler = () => setShowConfirmModal(true);

  const cancelDeleteHandler = () => setShowConfirmModal(false);

  const confirmDeleteHandler = () => {
    setShowConfirmModal(false);
    console.log("Deleted");
  };

  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass={classes.placeItem__modalContent}
        footerClass={classes.placeItem__modalActions}
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className={classes.mapContainer}>
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Are you sure?"
        footerClass={classes.placeItem__modalActions}
        footer={
          <>
            <Button inverse onClick={cancelDeleteHandler}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </>
        }
      >
        <p>
          Do you want to proceed and delete this place? Please note that it
          can`t be undone threafter.
        </p>
      </Modal>
      <li className={classes.placeItem}>
        <Card className={classes.placeItem__content}>
          <div className={classes.placeItem__image}>
            <Image
              priority={true}
              src={props.imageUrl}
              alt={props.title}
              width="fill"
              height={400}
            />
          </div>
          <div className={classes.placeItem__info}>
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className={classes.placeItem__actions}>
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            {auth.isLoggedIn && (
              <Button href={`/places/${props.id}`}>EDIT</Button>
            )}
            {auth.isLoggedIn && (
              <Button danger onClick={showDeleteWarningHandler}>
                DELETE
              </Button>
            )}
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
