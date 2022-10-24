import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import UsersList from "../src/user/components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max",
      image:
        "https://images.unsplash.com/photo-1661961111247-e218f67d1cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
