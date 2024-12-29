'use client';

import { useEffect, useState } from 'react';

export default function SingleProductPage({ params }) {
    const { id } = params;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:80/products/${id}`);
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const data = await response.json();
                setProduct(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

    return (
        <div style={{ padding: '20px' }}>
            <h1>{product?.productName}</h1>
            <p>Price: ${product?.price}</p>
            <p>Description: {product?.description || 'No description available'}</p>
            <p>Stock: {product?.stock}</p>
            <p>Category: {product?.category?.name || 'Uncategorized'}</p>
            <p>Sold Out: {product?.soldOut ? 'Yes' : 'No'}</p>

            {/* Render Image */}
            <div>
                {product?.image ? (
                    <img
                        src={product.image}
                        alt={product.productName}
                        style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
                    />
                ) : (
                    <p>No image available</p>
                )}
            </div>
        </div>
    );
}
