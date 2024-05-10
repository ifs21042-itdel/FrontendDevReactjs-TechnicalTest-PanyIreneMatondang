import React, { useContext, useEffect } from 'react';
import StarRatings from 'react-star-ratings';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { RestoDetailContext } from '../App';

const DetailResto = () => {
    const { resto } = useContext(RestoDetailContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (Object.keys(resto).length === 0) {
            navigate('/');
        }
    }, []);

    return (
        <div className='py-5 my-5'>
            <Header />
            <hr />
            <div className='container mx-auto w-3/4 py-5'>
                <div className='flex'>
                    <div className='w-1/3'>
                        {/* Display map component */}
                    </div>
                    <div className='flex flex-col ml-5'>
                        <img src={resto.heroImgUrl} alt="resto-image" className='w-full' />
                        <br />
                        <div className='mx-0'>
                            <h3 className='text-4xl'>{resto.name} {'\u00A0'}
                                <StarRatings
                                    rating={resto.averageRating}
                                    starRatedColor="#ffd700"
                                    numberOfStars={5}
                                    name='rating'
                                    starDimension="20px"
                                    starSpacing='0px'
                                />
                            </h3>
                        </div>
                        <br />
                        <div>
                            <div>
                                <span className='text-lg'>Reviews:</span>
                            </div>
                            {resto.reviewSnippets.reviewSnippetsList.map((review, index) => (
                                <div key={index}>
                                    <p className='text-gray-700'>{review.reviewText}</p>
                                    <a href={review.reviewUrl} className='text-blue-500' target='_blank' rel='noopener noreferrer'>Read More</a>
                                </div>
                            ))}
                        </div>
                        <span> ... </span>
                        <button className='bg-slate-800 w-1/4 justify text-white text-sm py-2 mt-3 text-center hover:bg-gray-600 hover:border-gray-400' onClick={() => navigate('/')}>Back to Home</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailResto;