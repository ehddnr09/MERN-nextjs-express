import Link from "next/link";

import Avatar from "../../shared/components/UlElements/Avatar";
import Card from "../../shared/components/UlElements/Card";

import classes from "./UserItem.module.css";

const UserItem = (props) => {
  return (
    <li className={classes.userItem}>
      <Card className={classes.userItem__content}>
        <Link href={`/${props.id}/places`}>
          <a>
            <div className={classes.userItem__image}>
              <Avatar image={props.image} alt={props.name} />
            </div>
            <div className={classes.userItem__info}>
              <h2>{props.name}</h2>
              <h3>
                {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
              </h3>
            </div>
          </a>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
