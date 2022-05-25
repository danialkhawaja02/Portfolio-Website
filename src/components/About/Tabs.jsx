import { useState } from "react";
import "./Tabs.css";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          About
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Education
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Skills
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <p>
            I'm a passionate and young enthusiast who has jumped into web development, which is somewhat like diving into a deep ocean to discover its beauty. All of this started with setting up a small personal blog on WordPress. Then, as I got comfortable with WordPress customizations, I realized I should give myself a shot at front-end web development.
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <p>
          At present, I am pursuing a Bachelor's degree with a major in IT and a minor in Business. Moreover, I recently completed IEC's web development BootCamp, which enabled me to polish my web dev skills under the guidance of expert mentors.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <p>
          Over the last couple of months, I got expertise in HTML, CSS, and responsive web design with Bootstrap. Now, I'm looking forward to diving into web frameworks like React/Angular and Vanilla JS.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;