"use client"

import { useEffect, useState, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../hooks/redux-hooks"
import { CheckCircle, ArrowLeft } from "lucide-react"
import { SidebarNav } from "../components/SidebarNav"
import "./ThankYou.css"

export function ThankYou() {
  const navigate = useNavigate()
  const currentTheme = useAppSelector((state) => state.theme.currentTheme)
  const [countdown, setCountdown] = useState(15)

  // Memoize navigation functions to prevent unnecessary re-renders
  const handleGoHome = useCallback(() => {
    navigate("/")
  }, [navigate])

  const handleGoBack = useCallback(() => {
    navigate(-1)
  }, [navigate])

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          // Use setTimeout to avoid state update during render
          setTimeout(() => {
            navigate("/")
          }, 0)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    // Auto redirect after 15 seconds
    const redirectTimer = setTimeout(() => {
      navigate("/")
    }, 15000)

    // Cleanup timers on component unmount
    return () => {
      clearInterval(timer)
      clearTimeout(redirectTimer)
    }
  }, [navigate])

  return (
    <div className={`thankyou-container ${currentTheme}`}>
      <SidebarNav />
      <div className="thankyou-content">
        <div className="thankyou-card">
          <div className="thankyou-icon">
            <CheckCircle size={80} />
          </div>

          <h1 className="thankyou-title">Thank You!</h1>

          <p className="thankyou-message">
            Your message has been sent successfully. We appreciate you taking the time to contact us and will get back
            to you as soon as possible.
          </p>

          <div className="thankyou-info">
            <p className="response-time">
              <strong>Expected Response Time:</strong> Within 24 hours
            </p>
            <p className="contact-info">
              For urgent matters, please call us at <strong>+1 (555) 123-4567</strong>
            </p>
          </div>

          <div className="countdown-section">
            <p className="countdown-text">
              Redirecting to home page in <span className="countdown-number">{countdown}</span> seconds
            </p>
            <div className="countdown-bar">
              <div className="countdown-progress" style={{ width: `${((15 - countdown) / 15) * 100}%` }} />
            </div>
          </div>

          <div className="thankyou-actions">
            <button onClick={handleGoHome} className="primary-button">
              Go to Home
            </button>
            <button onClick={handleGoBack} className="secondary-button">
              <ArrowLeft size={16} />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
