import React from "react";
import { Input } from "../Input";
import { Button, ButtonLink } from "../Button";

interface Props {
    handleClick: (e: React.FormEvent<HTMLFormElement>) => void;
    setShowModal: (value: boolean) => void;
}
export const FormGeneral = ({ handleClick, setShowModal }: Props) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleClick(e);
    }

    return <form onSubmit={handleSubmit} className="space-y-8">
        <div>
            <Input htmlForInput="title" inputType="text" labelTitle="Titulo" placeholder="Titulo" />
        </div>
        <div className="sm:col-span-2">
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Descrição</label>
            <textarea id="description" rows={6} className="block focus:outline-none resize-none p-2.5 w-full  text-sm text-gray-900 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-50" placeholder="Leave a comment..."></textarea>
        </div>
        <div className="flex items-center justify-center md:justify-between p-6">
            <ButtonLink text="Fechar" handleClick={() => setShowModal(false)} />
            <Button text="Entrar" type="submit" />

        </div>
    </form>
}