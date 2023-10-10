import React from "react";
import { Input } from "../Input";
import { Button, ButtonLink } from "../Button";

interface Props {
    handleClick: (e: React.FormEvent<HTMLFormElement>) => void;
    setShowModal: (value: boolean) => void;
    setTitle: (title: string) => void;
    setDescription: (value: string | null) => void;
    title: string;
    description: string | null;
}
export const FormGeneral = ({ handleClick, setShowModal, setTitle, setDescription, title, description }: Props) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleClick(e);
    }

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    };

    return <form onSubmit={handleSubmit} className="space-y-8">
        <div>
            <Input
                htmlForInput="title"
                inputType="text"
                labelTitle="Titulo"
                placeholder="Titulo"
                onChange={(value: string) => setTitle(value)}
                required={true}
                value={title} />
        </div>
        <div className="sm:col-span-2">
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Descrição</label>
            <textarea
                className="block focus:outline-none resize-none p-2.5 w-full  text-sm text-gray-900 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-50"
                placeholder="Descrição da tarefa..."
                id="description"
                rows={6}
                onChange={handleDescriptionChange}
                value={description ?? ''} />

        </div>
        <div className="flex items-center justify-center md:justify-between p-6">
            <ButtonLink text="Fechar" handleClick={() => setShowModal(false)} />
            <Button text="Entrar" type="submit" />

        </div>
    </form>
}