import { useState } from "react";

const Expandable = ({ children }) => {
  const [expanded, setExpanded] = useState(false);

  function toggleExpanded() {
    setExpanded((currentState) => setExpanded(!currentState));
  }

  return (
    <div>
      {expanded ? children : null}
      <button onClick={toggleExpanded}>
        {expanded ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default Expandable;
