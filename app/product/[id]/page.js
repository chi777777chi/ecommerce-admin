'use client';
import { useState } from 'react';

import Comments from '../../../components/Comments';
import SingleProductPage from '@/components/SingleProductPage';

export default function ProductPage({ params }) {
    const { id } = params;

    return (
        <div style={{ padding: '20px' }}>
            <SingleProductPage params={params} />
            {/* Add the Comments & Ratings Section */}
            <Comments productId={id} />
        </div>
    );
}
