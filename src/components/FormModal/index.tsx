import React, { useState } from "react";
import { FormGeneral } from "../FormGeneral";

interface TaskSave {
    title: string;
    description?: string | null;
    categoryId?: number | null
}
interface Props {
    showModal: boolean;
    setShowModal: (value: boolean) => void;
    modalTitle?: string;
    handleSave: (e: TaskSave) => void;
}
export function FormModal({ showModal, setShowModal, handleSave, modalTitle }: Props) {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string | null>("");

    const handleClick = (): void => {
        const payload: TaskSave = {
            title,
            description,
            categoryId: null
        }

        setShowModal(false)
        handleSave(payload);

    }

    if (!showModal) return null;
    return (
        <React.Fragment><div className="border-0 rounded shadow flex overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-10/12 md:w-2/6 h-1/2 my-6 mx-auto max-w-3xl">
                <div className="relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <section className="bg-white">
                        <div className="px-4 mx-auto max-w-screen-md">
                            <h2 className="mt-8  mb-8 text-4xl tracking-tight font-extrabold text-center text-gray-900">{modalTitle ?? ''}</h2>
                            <FormGeneral
                                handleClick={handleClick}
                                setShowModal={setShowModal}
                                setTitle={setTitle}
                                setDescription={(value: string | null) => setDescription(value)}
                                title={title} description={description}
                            />

                        </div>
                    </section>
                </div>
            </div>
        </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </React.Fragment>


    );
}