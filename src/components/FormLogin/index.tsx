import React from "react";
import { Input } from "../Input";
import { Button } from "../Button";

interface Props {
    handleClick: () => any;
}
export const FormLogin = ({ handleClick }: Props) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleClick();
    }

    return <form onSubmit={handleSubmit} className="space-y-8">
        <div>
            <Input htmlForInput="username" inputType="email" labelTitle="Login" placeholder="login" />
        </div>
        <div>
            <Input htmlForInput="password" inputType="password" labelTitle="Senha" placeholder="Senha" />
        </div>
        <div className="flex items-center justify-center  p-6">
            <Button text="Entrar" type="submit" />
        </div>
    </form>
}