'use client'

import { useCart } from '@/context/cart-context'

export default function AddToCart({ product }) {
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem(product)
    alert(`已將 1件 ${product.productName} 加入購物車`);
    // setModalMessage(`已將 1件  加入購物車`);
    console.log('Added to cart:', product) // 添加調試日誌
  }

  return (
    <button 
      onClick={handleAddToCart}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      加入購物車
    </button>
  )
}