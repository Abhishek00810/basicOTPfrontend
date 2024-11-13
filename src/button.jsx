function Button({disabled, children})
{
    console.log(disabled)
    return(
        <button className={`w-80 p-1 pt-2 pb-2 rounded-lg text-white ${disabled ? `bg-[#758A9F] cursor-default` : `bg-[#36c6c8]`}`}>
            {children}
        </button>
    );
}
export default Button;