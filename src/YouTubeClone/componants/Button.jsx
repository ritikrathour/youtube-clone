const Button = ({ text, icon, className }) => {
    return <button className={`px-3 ${className} py-2 bg-slate-700 text-white ${className} hover:bg-slate-600 transition-all text-[12px] rounded-xl`}>
        <i className={`${icon[0]} mr-2 text-[12px]`} />
        {text}
        <i className={`${icon[1]} ml-2 text-[10px]`}></i>
    </button>
}
export default Button;
