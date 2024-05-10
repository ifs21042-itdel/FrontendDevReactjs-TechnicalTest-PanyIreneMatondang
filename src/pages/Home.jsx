import React, { useState, useEffect } from 'react';
import CardResto from '../components/CardResto';
import Header from '../components/Header';
import { getRestaurants } from '../constants/restaurants';

const Home = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState({
        openNow: false,
        priceLevel: "",
        cuisineData: [],
        cuisineFilter: ""
    });
    const [displayedRestaurants, setDisplayedRestaurants] = useState([]);
    const [displayLimit, setDisplayLimit] = useState(8);

    useEffect(() => {
        const fetchData = () => {
            const storedData = localStorage.getItem("restaurants");
            if (storedData) {
                setRestaurants(JSON.parse(storedData));
                setLoading(false);
            } else {
                getRestaurants()
                    .then(response => {
                        setRestaurants(response.data.data.data);
                        localStorage.setItem("restaurants", JSON.stringify(response.data.data.data));
                        setLoading(false);
                    })
                    .catch(() => setLoading(false));
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        setDisplayedRestaurants(filteredData.slice(0, displayLimit));
    }, [restaurants, filter, displayLimit]);

    const handleOpenNow = () => {
        setFilter({ ...filter, openNow: !filter.openNow });
    };

    const handlePriceLevel = event => {
        setFilter({ ...filter, priceLevel: event.target.value });
    };

    const handleCuisine = event => {
        setFilter({ ...filter, cuisineFilter: event.target.value });
    };

    const handleClear = () => {
        setFilter({
            openNow: false,
            priceLevel: "",
            cuisineFilter: ""
        });
    };

    const filteredData = restaurants.filter(resto => {
        if (filter.openNow && !(resto.currentOpenStatusCategory === "OPEN")) {
            return false;
        }

        if (filter.priceLevel && resto.priceTag !== filter.priceLevel) {
            return false;
        }

        if (filter.cuisineFilter && !resto.establishmentTypeAndCuisineTags.includes(filter.cuisineFilter)) {
            return false;
        }

        return true;
    });

    const getCuisine = Array.from(
        new Set(restaurants.reduce((acc, curr) => acc.concat(curr.establishmentTypeAndCuisineTags), []))
    );

    const handleLoadMore = () => {
        setDisplayLimit(prevLimit => prevLimit + 8);
    };

    return (
        <div className='py-5 mt-5 mb-5'>
            <Header />
            <hr />

            <div className='flex container mx-auto w-3/4 py-6'>
                <span className='text-gray-500'>Filter by : </span>

                <div className='border-b-2 mx-4'>
                    <label className='text-blue-900'>
                        <input
                            type="checkbox"
                            checked={filter.openNow}
                            onChange={handleOpenNow}
                            className="mr-2 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-900/20 before:absolute checked:border-gray-400 checked:bg-gray-400"
                        />
                        Open Now
                    </label>
                </div>

                <div className='bg-white border-b-2 mx-3 text-blue-900'>
                    <select value={filter.priceLevel} onChange={handlePriceLevel}>
                        <option value="">Price</option>
                        <option value="$$ - $$$">$$ - $$$</option>
                        <option value="$$$$">$$$$</option>
                    </select>
                </div>

                <div className='bg-white border-b-2 mx-3 text-blue-900'>
                    <select value={filter.cuisineFilter} onChange={handleCuisine}>
                        <option value="">Categories</option>
                        {
                            getCuisine.map(cuisine => (
                                <option value={cuisine} key={cuisine}>{cuisine}</option>
                            ))
                        }
                    </select>
                </div>


                <div className="ml-auto">
                    <button
                        className="border border-gray-300 text-gray-500 hover:bg-gray-100 px-4 py-2"
                        onClick={handleClear}
                    >
                        CLEAR ALL
                    </button>
                </div>

            </div>

            <hr />
            <div className='container mx-auto w-3/4 py-5'>
                <h2 className='text-2xl mt-10 mb-10'>All Restaurants</h2>
                <div className='flex justify-between flex-wrap'>
                    {loading ? (
                        <span className='text-3xl font-semibold'>Loading ...</span>
                    ) : filteredData.length === 0 ? (
                        <span className='text-xl font-semibold'>No Data Found</span>
                    ) : (
                        displayedRestaurants.map((resto, index) => <CardResto resto={resto} key={index} />)
                    )}
                </div>
                {displayedRestaurants.length < filteredData.length && (
                    <div className='text-center mt-10'>
                        <button className='border border-gray-300 bg-white text-slate-800 font-bold hover:bg-gray-200 hover:border-gray-400 text-sm py-5 px-10' onClick={handleLoadMore}>
                            LOAD MORE
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;