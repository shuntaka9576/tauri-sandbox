import { invoke } from "@tauri-apps/api";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const executeCommands = () => {
    invoke("simple_commnad");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>exec rust code</div>
        <button onClick={executeCommands}>Clickt execute command</button>
      </main>
    </div>
  );
};

export default Home;
