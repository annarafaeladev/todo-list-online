interface PropsCard {
    title: string;
    description?: string;
    id: number
}
export const TaskCard = ({ id, title, description }: PropsCard) => {
    return <a href="#"
        className="bg-gray-100 flex-grow mt-6 mb-6 text-black border-l-8 border-green-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12">
        {title}

        <div className="text-gray-500 font-thin text-sm pt-1">
            <span>Número: {id}</span>
            <span>Desc: </span>
        </div>
    </a>
}