import React, { useState, useEffect } from "react";
import "../styles/Home.css"; // Import your CSS file for styling
function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const events = [
    {
      id: 1,
      name: "Tech Innovators Meetup",
      dateTime: "2025-06-10T15:00",
      location: "National Incubation Center, Islamabad",
      description:
        "A gathering of tech enthusiasts to discuss AI, IoT, and the future of software.",
      category: "Tech",
      attendees: 120,
    },
    {
      id: 2,
      name: "Startup Pitch Day",
      dateTime: "2025-06-12T10:30",
      location: "FAST NUCES Auditorium",
      description:
        "Local startups present their ideas to investors and mentors.",
      category: "Business",
      attendees: 85,
    },
    {
      id: 3,
      name: "UI/UX Design Bootcamp",
      dateTime: "2025-06-15T13:00",
      location: "Arfa Software Technology Park, Lahore",
      description:
        "Hands-on workshop on modern design tools and UX principles.",
      category: "Design",
      attendees: 60,
    },
    {
      id: 4,
      name: "Hackathon 360",
      dateTime: "2025-06-18T09:00",
      location: "Air University, Islamabad",
      description:
        "24-hour coding challenge focused on building real-world solutions.",
      category: "Coding",
      attendees: 200,
    },
    {
      id: 5,
      name: "Women in Tech Conference",
      dateTime: "2025-06-22T11:00",
      location: "COMSATS, Islamabad",
      description: "Celebrating and empowering women in the tech industry.",
      category: "Conference",
      attendees: 150,
    },
  ];

  const getCategoryClass = (category) => {
    const classes = {
      Tech: "category-tech",
      Business: "category-business",
      Design: "category-design",
      Coding: "category-coding",
      Conference: "category-conference",
    };

    return classes[category] || "category-default";
  };

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="animated-bg">
        <div className="floating-particle particle-1"></div>
        <div className="floating-particle particle-2"></div>
        <div className="floating-particle particle-3"></div>
        <div className="floating-particle particle-4"></div>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="container-xl">
          <a
            className="navbar-brand navbar-brand-custom"
            href="#home"
            style={{ fontSize: "1.5rem", fontWeight: "bold" }}
          >
            Dynamic360
          </a>
          <div className="navbar-nav">
            <a className="nav-link" href="#home">
              Home
            </a>

            <a className="nav-link" href="#events">
              Events
            </a>

            <a className="nav-link" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div>
          <div className="container-xl">
            <div className="row justify-content-center">
              <div className="col-lg-10 text-center">
                <h1 className="hero-title">
                  <span className="gradient-text">Discover Events.</span>
                  <br />
                  <span>Connect with People.</span>
                  <br />
                  <span className="gradient-text">Make It Count.</span>
                </h1>
                <p className="hero-subtitle">
                  From meetups to hackathons — we bring innovation to life
                  through unforgettable experiences that shape the future.
                </p>
                <button
                  className="btn btn-hero"
                  onClick={() => (window.location.href = "#events")}
                >
                  Explore Events
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="events-section py-5">
        <div className="container-xl py-5">
          <div className="fade-in">
            <h2 className="section-title gradient-text">Featured Events</h2>
            <p className="section-subtitle">
              Discover amazing events happening in your area...
            </p>
          </div>

          {/*  Search Bar */}
          <div className="mb-4 text-center custom-search-bar">
            <input
              type="text"
              className="form-control w-50 mx-auto"
              placeholder="Search events by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="row g-4">
            {filteredEvents.map((event, index) => (
              <div key={event.id} className="col-lg-4 col-md-6">
                <div
                  className="event-card fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setHoveredCard(event.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    className={`category-badge ${getCategoryClass(
                      event.category
                    )}`}
                  >
                    {event.category}
                  </div>
                  <div className="event-details">
                    <h3 className="event-title">{event.name}</h3>

                    <div className="event-meta">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span>
                        {new Date(event.dateTime).toLocaleDateString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>

                    <div className="event-meta">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>{event.location}</span>
                    </div>

                    <div className="event-meta">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span>{event.attendees} attending</span>
                    </div>

                    <p className="event-description">{event.description}</p>

                    <button className="btn btn-event">Register Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section py-5">
        <div className="container-xl">
          <h2 className="section-title gradient-text text-center mb-4">
            Get in Touch
          </h2>
          <p className="section-subtitle text-center mb-5">
            Have a question or want to collaborate? We'd love to hear from you!
          </p>

          <form className="row g-4 justify-content-center">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="col-12">
              <textarea
                className="form-control"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div className="col-12 text-center">
              <button type="submit" className="send-btn btn btn-event px-5">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section py-5">
        <div className="container-xl text-center">
          <h4 className="footer-title mb-3">Dynamic360</h4>
          <p className="text-muted mb-4">
            Connecting innovators, creators, and dreamers through exceptional
            events that inspire and transform.
          </p>
          <div className="social-links">
            <a href="#" className="text-decoration-none">
              Twitter
            </a>
            <a href="#" className="text-decoration-none">
              LinkedIn
            </a>
            <a href="#" className="text-decoration-none">
              Instagram
            </a>
            <a href="#" className="text-decoration-none">
              Facebook
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
