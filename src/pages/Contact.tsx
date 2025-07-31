import { useAppSelector } from "../hooks/redux-hooks"
import { ContactForm } from "../components/ContactForm"
import { ContactInfo } from "../components/ContactInfo"
import { SidebarNav } from "../components/SidebarNav"
import "./Contact.css"

export function Contact() {
  const currentTheme = useAppSelector((state) => state.theme.currentTheme)

  return (
    <div className={`contact-container ${currentTheme}`}>
      <SidebarNav />

      <div className="contact-content">
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Get In Touch</h1>
            <p className="hero-subtitle">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </section>

        <section className="contact-section">
          <div className="container">
            <div className="contact-grid">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
