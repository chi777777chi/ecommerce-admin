'use client';
import { useState } from 'react';
// import Rating from '../../../components/Rating';
import Comments from '../../../components/Comments';
import SingleProductPage from '@/components/SingleProductPage';

export default function ProductPage({ params }) {
    const { id } = params;
    // const [rating, setRating] = useState(0);

    const handleRating = (value) => {
        setRating(value);
    };
    return (
        <div style={{ padding: '20px' }}>
            <h1>Product Details</h1>
            <p>Product ID: {id}</p>
            <SingleProductPage params={params} />;
            {/* Add the Comments & Ratings Section */}
            <Comments productId={id} />
        </div>

    );
}
