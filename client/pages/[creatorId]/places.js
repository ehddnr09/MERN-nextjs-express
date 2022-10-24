import PlaceList from "../../src/places/components/PlaceList";
import { useRouter } from "next/router";

// const DUMMY =

const UserPlaces = ({ ...props }) => {
  const { loadedPlaces } = props;

  return <PlaceList places={loadedPlaces} />;
};

export default UserPlaces;

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          creatorId: "u1",
        },
      },
      {
        params: {
          creatorId: "u2",
        },
      },
      {
        params: {
          creatorId: "u3",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const creatorId = context.params.creatorId;

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
  const loadedPlaces = DUMMY.filter((place) => place.creatorId === creatorId);

  return { props: { loadedPlaces } };
}
