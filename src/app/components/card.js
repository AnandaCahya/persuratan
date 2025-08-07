const Card = ({title, subtitle, author, time}) => {
    return (
        <div className="w-full p-6 grid grid-cols-2 bg-[#055772] rounded-lg justify-between">
            <div className="grid grid-rows-2">
                <a>{title}</a>
                <a>{subtitle}</a>
            </div>
            <div className="grid grid-rows-2 text-end">
                <a>{time}</a>
                <a>{author}</a>
            </div>
        </div>
    )
}

export default Card