import { Mail, Phone, MapPin, Clock } from "lucide-react"
import "./ContactInfo.css"

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@themeapp.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
  { icon: MapPin, label: "Address", value: "123 Theme Street, Design City, DC 12345" },
]

const businessHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "Closed" },
]

export function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="contact-info-section">
        <h2 className="contact-info-title">Contact Information</h2>
        <div className="contact-info-list">
          {contactInfo.map((item, index) => (
            <div key={index} className="contact-info-item">
              <div className="contact-info-icon">
                <item.icon size={20} />
              </div>
              <div className="contact-info-content">
                <p className="contact-info-label">{item.label}</p>
                <p className="contact-info-value">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="contact-info-section">
        <h3 className="contact-info-subtitle">
          <Clock size={20} />
          Business Hours
        </h3>
        <div className="business-hours">
          {businessHours.map((item, index) => (
            <div key={index} className="business-hours-item">
              <span>{item.day}</span>
              <span>{item.hours}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
