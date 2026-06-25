import { useEffect,useState } from "react";
const Navbar=()=>{
   const [active, setActive] = useState("home");

    useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return(
    <nav className="vertical-navbar">
      <div className="logo">
        <a href="#home"> 
          <span className="tag">&lt;</span>
          S'BAI
         <span className="tag">/&gt;</span>
        </a>
      </div>
      <div className="links">
        <a
        href="#home"
        className={`icon-home ${active === "home" ? "active" : ""}`}
        onClick={() => setActive("home")}
      ></a>

      <a
        href="#about"
        className={`icon-user-following ${active === "about" ? "active" : ""}`}
        onClick={() => setActive("about")}
      ></a>

      <a
        href="#services"
        className={`icon-briefcase ${active === "services" ? "active" : ""}`}
        onClick={() => setActive("services")}
      ></a>

      <a
        href="#formation"
        className={`icon-graduation ${active === "formation" ? "active" : ""}`}
        onClick={() => setActive("formation")}
      ></a>

      <a
        href="#projects"
        className={`icon-layers ${active === "projects" ? "active" : ""}`}
        onClick={() => setActive("projects")}
      ></a>

      <a
        href="#contact"
        className={`icon-note ${active === "contact" ? "active" : ""}`}
        onClick={() => setActive("contact")}
      ></a>
      </div>
      <div className="fin">
        <a href=""> <p>© 2026 S'BAI.</p></a>
      </div>
      
    </nav>
  );
};
export default Navbar;