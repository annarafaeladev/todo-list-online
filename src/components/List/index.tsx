import { TaskCard } from "../TaskCard";

interface Item {
    id: number
    title: string;
    description?: string
    severity: number;
    done: boolean;
}
interface Tasks {
    items: Array<Item>;
}

export const List = ({ items }: Tasks) => {
    if (items.length == 0) {
        return null;
    }

    return <div className="flex flex-wrap gap-5 items-center justify-center text-gray-600 px-10">
        {items.map(item => <TaskCard id={item.id} title={item.title} key={item.id} />)}
    </div>
}