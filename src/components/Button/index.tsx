interface Props {
    text: string;
    handleClick?: () => any;
    icon?: HTMLOrSVGElement;
    bgColor?: string;
    type: "button" | "submit" | "reset";
}

interface PropsButtonLink {
    text: string;
    handleClick?: () => any;
}

export const Button = ({ text, handleClick, type }: Props) => {

    return <button
        className={`bg-green-600 text-white active:bg-green-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
        type={type ?? 'button'}
        onClick={() => handleClick ? handleClick() : null}
    >
        {text}
    </button >
}

export const ButtonLink = ({ text, handleClick }: PropsButtonLink) => {
    return <button
        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={handleClick}
    >
        {text}
    </button>
}