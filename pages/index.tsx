import type { NextPage } from "next";
import Head from "next/head";
import Title from "../src/components/Layout/Title/Title";
import NavButton from "../src/components/NavButton/NavButton";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Menu App</title>
                <meta name="description" content="desc" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container mx-auto flex flex-col justify-center items-center h-screen">
                <Title>Bienvenido</Title>
                <NavButton label="Iniciar Sesión" navTo="/login" />
            </main>
        </div>
    );
};

export default Home;
