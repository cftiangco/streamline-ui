
interface IFullButton {
    label: string;
    className?: string;
    onClick:(e:any) => void;
}

export const FullButton = ({ label, className,onClick }: IFullButton) => {
    return (
        <button
            className={`px-3 bg-blue-500 w-full py-2 text-white rounded font-bold hover:bg-blue-400 ${className}`}
            onClick={(e) => onClick(e)}
        >
            {label}
        </button>
    )
}