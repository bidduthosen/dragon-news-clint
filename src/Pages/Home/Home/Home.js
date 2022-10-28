import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Home = () => {
    const allNews = useLoaderData();
    useTitle('home')
    return (
        <div>
            {
                allNews.map(news=> <NewsSummaryCard
                    key={news._id}
                    news ={news}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Home;