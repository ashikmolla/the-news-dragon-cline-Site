import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ActivLink from '../../../ActivLink/ActivLink';

const LeftNav = () => {
    const [categories, setCategories]=useState([]);
    useEffect(() => {
        fetch('https://the-news-dragon-server-site-ashikmolla.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])
    // console.log(categories)
    return (
        <div>
             <div>
                <h4>All Categories</h4>
                {
                    categories.map(category => <p key={category.id}
                    >
                        <ActivLink to={`/category/${category.id}`} className="text-decoration-none text-black">{category.name}</ActivLink>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;