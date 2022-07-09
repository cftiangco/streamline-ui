

interface ITextBox {
    label:string;
    className?:string;
    onChange:(event:any) => void;
    type:string;
    error:boolean;
}

export const TextBox = ({label,className,onChange,type,error}:ITextBox) => {
    return (
        <input
            type={type}
            placeholder={label}
            className={`border-2 px-3 py-2 w-full rounded-lg mb-3 ${className} ${error ? 'border-red-500':''}`}
            onChange={onChange}
        />
    )
}