import React from "react";
import { FormGeneral } from "../FormGeneral";

interface Props {
    showModal: boolean;
    setShowModal: (value: boolean) => void;
    modalTitle?: string;
    handleSave: (e?: any) => any;
}
export function FormModal({ showModal, setShowModal, handleSave, modalTitle }: Props) {

    const handleClick = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setShowModal(false)
        handleSave();

    }

    if (!showModal) return null;
    return (
        <React.Fragment><div className="border-0 rounded shadow flex overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-10/12 md:w-2/6 h-1/2 my-6 mx-auto max-w-3xl">
                <div className="relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <section className="bg-white">
                        <div className="px-4 mx-auto max-w-screen-md">
                            <h2 className="mt-8  mb-8 text-4xl tracking-tight font-extrabold text-center text-gray-900">{modalTitle ?? ''}</h2>
                            <FormGeneral handleClick={handleClick} setShowModal={setShowModal} />

                        </div>
                    </section>
                </div>
            </div>
        </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </React.Fragment>


    );
}