import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.scss";
import Header from "../components/header";
import Footer from "../components/footer";
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ country }) {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div>
      <Header country={country} />
      {session ? "you are logged in" : "You are not logged in"}
      <Footer country={country} />
    </div>
  );
}

// api key 7ua9ae3qjdsglbuu
export async function getServerSideProps() {
  let data = await axios
    .get("https://api.ipregistry.co/?key=7ua9ae3qjdsglbuu")
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => {
      console.log("Error message", err);
    });
  return {
    props: {
      country: {
        name: "Uzbekistan",
        flag: "https://cdn.ipregistry.co/flags/emojitwo/uz.svg",
      },
    },
  };
}
