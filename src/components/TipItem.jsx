const TipItem = ({gift, price, tip, setTip}) => {
    
    return (
        <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 bg-blue-300 flex items-center justify-center rounded-full text-white">A</div>
            <p>{gift}</p>
            <p>${price}</p>
            <button onClick={() => setTip(Number(tip) + Number(price))} className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white hover:border-white px-2 py-1 rounded-md">Send</button>
        </div>
    )
}

export default TipItem
