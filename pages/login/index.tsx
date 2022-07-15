import { NextPage } from "next";
import Head from "next/head";
import Button from "../../src/components/Button/Button";
import FormInput from "../../src/components/FormInput/FormInput";
import Title from "../../src/components/Layout/Title/Title";

const Login: NextPage = () => {
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <main className="container mx-auto flex flex-col justify-start items-center h-screen">
                <Title>Login</Title>
                <FormInput label="email" placeholder="Correo" />
                <FormInput
                    label="contraseña"
                    placeholder="Contraseña"
                    type="password"
                />
                <Button boxLayout="mt-4" label="Iniciar Sesión" />
            </main>
        </>
    );
};

export default Login;
