import { useAppSelector } from "../hooks/redux-hooks"
import { SidebarNav } from "../components/SidebarNav"
import "./About.css"

export function About() {
  const currentTheme = useAppSelector((state) => state.theme.currentTheme)

  const teamMembers = [
    { name: "John Doe", role: "Frontend Developer", experience: "5 years" },
    { name: "Jane Smith", role: "UI/UX Designer", experience: "4 years" },
    { name: "Mike Johnson", role: "Backend Developer", experience: "6 years" },
  ]

  const values = [
    {
      title: "Innovation",
      description: "We constantly push boundaries to create cutting-edge solutions.",
    },
    {
      title: "Quality",
      description: "We maintain the highest standards in everything we deliver.",
    },
    {
      title: "User-Centric",
      description: "Every decision we make is focused on improving user experience.",
    },
  ]

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className={`about-container ${currentTheme}`}>
      <SidebarNav />

      <div className="about-content">
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">About Our Company</h1>
            <p className="hero-subtitle">
              We are passionate about creating innovative web applications that provide exceptional user experiences
              across different themes and layouts.
            </p>
          </div>
        </section>

        <section id="team" className="team">
          <div className="container">
            <h2 className="section-title">Our Team</h2>
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <div key={index} className="team-card">
                  <div className="avatar">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-experience">{member.experience} experience</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="values" className="values">
          <div className="container">
            <h2 className="section-title">Our Values</h2>
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-item">
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
