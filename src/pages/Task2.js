import GoodsCard from "../components/GoodsCard";

function Task2() {
    return (
        <div id={'task2'}>
            <p className={'title'}>Goods Gallery</p>
            <div id={'goods-gallery'}>
                <GoodsCard name={'Apple'}
                           imgSrc={'https://cdn.pixabay.com/photo/2013/07/12/19/17/apple-154492_960_720.png'}
                           price={20}/>
                <GoodsCard name={'Banana'}
                           imgSrc={'https://cdn.pixabay.com/photo/2012/04/26/18/41/banana-42793_960_720.png'}
                           price={50}/>
                <GoodsCard name={'Strawberry'}
                           imgSrc={'https://cdn.pixabay.com/photo/2012/04/18/20/21/strawberry-37781_960_720.png'}
                           price={80}/>
                <GoodsCard name={'Pineapple'}
                           imgSrc={'https://cdn.pixabay.com/photo/2012/04/03/15/11/pineapple-25251_960_720.png'}
                           price={120}/>
                <GoodsCard name={'Grape'}
                           imgSrc={'https://cdn.pixabay.com/photo/2015/05/19/11/28/grapes-773435_960_720.png'}
                           price={120}/>
                <GoodsCard name={'WaterMelon'}
                           imgSrc={'https://cdn.pixabay.com/photo/2013/07/12/19/18/watermelon-154510_960_720.png'}
                           price={50}/>
            </div>
        </div>
    )
}

export default Task2