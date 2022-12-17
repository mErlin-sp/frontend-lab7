function GoodsCard(props) {
    return (
        <div className={'goods-card'}>
            <p>{props.name}</p>
            <div className={'img-container'}>
                <img src={props.imgSrc} alt={props.name}/>
            </div>
            <p>Price: UAH{props.price}</p>
        </div>
    )
}

export default GoodsCard