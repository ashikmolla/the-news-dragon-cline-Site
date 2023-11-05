import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
import useTitle from '../../../Hooks/useTitle';

const Home = () => {

    const { id } = useParams();
    const categoryNews = useLoaderData();
    // console.log(categoryNews)

    useTitle('Home')
    return (
        <div>
            {/* <h1>Show all Category{categoryNews.length}</h1> */}

            {
                categoryNews.map(news => <NewsCard
                    key={news._id}
                    news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Home;