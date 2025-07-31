"use client"

import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks"
import { fetchProducts } from "../store/productsSlice"
import { ProductCard } from "../components/ProductCard"
import { SidebarNav } from "../components/SidebarNav"
import "./Home.css"

export function Home() {
  const dispatch = useAppDispatch()
  const { products, loading, error } = useAppSelector((state) => state.products)
  const currentTheme = useAppSelector((state) => state.theme.currentTheme)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const features = [
    "Multi-theme support with persistent storage",
    "Responsive design for all devices",
    "Real-time API data integration",
    "Smooth theme transitions",
    "TypeScript for type safety",
    "Modern React architecture",
    "Optimized performance",
    "Accessibility focused",
  ]

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className={`home-container ${currentTheme}`}>
      <SidebarNav />

      <div className="home-content">
        <section id="hero" className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Multi-Theme Switcher App</h1>
            <p className="hero-subtitle">
              Experience three completely different themes with unique layouts, fonts, and styling approaches. Switch
              between minimalist, dark sidebar, and colorful card designs.
            </p>
            <button className="cta-button" onClick={() => scrollToSection("features")}>
              Get Started
            </button>
          </div>
        </section>

        <section id="features" className="features">
          <div className="container">
            <h2 className="section-title">Features</h2>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="products">
          <div className="container">
            <h2 className="section-title">Featured Products</h2>
            {loading && <div className="loading">Loading products...</div>}
            {error && <div className="error">Error: {error}</div>}
            {!loading && !error && (
              <div className="products-grid">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
