import "./GlobalScrollDownNRJ.css";

export default function GlobalScrollDownNRJ({ targetId }) {

  const handleScroll = () => {
    if (targetId) {
      const section = document.getElementById(targetId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="nrj-scroll-indicator-wrapper" onClick={handleScroll}>
      <span className="nrj-scroll-indicator-text">scroll down</span>

      <div className="nrj-scroll-indicator-arrow">
        <span></span>
        <span></span>
      </div>
    </div>
  );
}