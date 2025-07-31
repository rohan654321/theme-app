"use client"

import { Star, ShoppingCart } from "lucide-react"
import { useToast } from "../hooks/use-toast"
import "./ProductCard.css"

interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { toast } = useToast()

  const handleAddToCart = () => {
    toast({
      title: "Added to cart!",
      description: `${product.title} has been added to your cart.`,
    })
  }

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image || "/placeholder.svg"} alt={product.title} className="product-image" loading="lazy" />
      </div>
      <div className="product-content">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-description">
          {product.description.length > 100 ? `${product.description.substring(0, 100)}...` : product.description}
        </p>
        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <div className="product-rating">
            <Star className="rating-star" size={16} />
            <span>
              {product.rating.rate} ({product.rating.count})
            </span>
          </div>
        </div>
        <button onClick={handleAddToCart} className="product-button">
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </div>
  )
}
