import { useEffect, useState, useCallback, useContext } from "react";
import Input from "../../src/shared/components/FormElements/Input";
import Button from "../../src/shared/components/FormElements/Button";
import Card from "../../src/shared/components/UlElements/Card";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../src/shared/util/validators";
import { useForm } from "../../src/shared/hooks/form-hook";

import classes from "../../src/shared/components/FormElements/PlaceForm.module.css";
const UpdatePlace = ({ identifiedPlace }) => {
  const [isLoading, setIsLoading] = useState(true);

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    true
  );
  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find place!</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading..</h2>
      </div>
    );
  }

  return (
    <form className={classes.placeForm} onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.value}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min 5 characters)."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.value}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          placeId: "p1",
        },
      },
      {
        params: {
          placeId: "p2",
        },
      },
      {
        params: {
          placeId: "p3",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const placeId = context.params.placeId;

  const DUMMY = [
    {
      id: "p1",
      title: "Paris",
      description: "One of the most famous",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/536px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
      address: "Champ de Mars, 5 Av. Anatole France, 75007 Paris, 프랑스",
      location: {
        lat: 48.8588548,
        lng: 2.347035,
      },
      creatorId: "u1",
    },
    {
      id: "p2",
      title: "Paris",
      description: "One of the most famous",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/536px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
      address: "Champ de Mars, 5 Av. Anatole France, 75007 Paris, 프랑스",
      location: {
        lat: 48.8588548,
        lng: 2.347035,
      },
      creatorId: "u2",
    },
    {
      id: "p3",
      title: "Paris",
      description: "One of the most famous",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/536px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
      address: "Champ de Mars, 5 Av. Anatole France, 75007 Paris, 프랑스",
      location: {
        lat: 48.8588548,
        lng: 2.347035,
      },
      creatorId: "u3",
    },
  ];
  const identifiedPlace = DUMMY.find((p) => p.id === placeId);

  return { props: { identifiedPlace } };
}
