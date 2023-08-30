import React from 'react'

const ShoeCard = ({ imgUrl, changeBigShoeImage, bigShoeImage }) => {
    const handleClick = () => {
        if (bigShoeImage !== imgUrl.bigShoe) {
            changeBigShoeImage(imgUrl.bigShoe)
        }
    }
    return (
        <div className={`border-2 rounded-xl ${bigShoeImage === imgUrl.bigShoe ? "border-coral-red" : "border-transparent"} cursor-pointer max-sm:flex-1`}
            onClick={handleClick}>
            <div className='flex justify-center align-center'>
                <img src={imgUrl.thumbnail} alt="Shoe Collection" width={127} height={103} className='object-contain' />
            </div>
        </div >

    )
}

export default ShoeCard