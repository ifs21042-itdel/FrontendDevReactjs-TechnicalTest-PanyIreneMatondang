import React, { useContext } from 'react'
import StarRatings from 'react-star-ratings'
import { useNavigate } from 'react-router-dom'
import { RestoDetailContext } from '../App'

const CardResto = ({ resto }) => {
    const { setResto } = useContext(RestoDetailContext)
    const navigate = useNavigate()

    const detailResto = () => {
        setResto(resto)
        navigate("/detail-resto")
    }

    return (
        <div className='flex justify-between flex-col w-1/5 h-96 m-3 border'>
            <img className='bg-slate-500 w-full h-2/4' src={resto.heroImgUrl} />

            <div className='mx-2'>
                <h3 className='text-lg'>{resto.name}</h3>
                <div className='flex'>
                    <div className="flex items-center">
                        <StarRatings
                            rating={resto.averageRating}
                            starRatedColor="#ffd700"
                            numberOfStars={5}
                            name='rating'
                            starDimension="20px"
                            starSpacing='0px'
                        />
                    </div>
                </div>
                <br/>
                <div className='flex justify-between'>
                    <span className='text-sm'>{resto.parentGeoName} - {resto.priceTag}</span>
                    {
                        resto.currentOpenStatusCategory === "OPEN" ?
                            (<div className='flex items-center'>
                                <div className='w-2 h-2 bg-green-500 rounded'></div>
                                <span className='text-sm ml-1'>Open Now</span>
                            </div>)
                            : (
                                <div className='flex items-center'>
                                    <div className='w-2 h-2 bg-red-500 rounded'></div>
                                    <span className='text-sm ml-1'>Closed</span>
                                </div>
                            )
                    }
                </div>
            </div>

            <button className="bg-slate-800 text-white text-sm py-2 mt-3 text-center hover:bg-gray-600 hover:border-gray-400" onClick={() => detailResto()}>LEARN MORE</button>
        </div>
    )
}

export default CardResto