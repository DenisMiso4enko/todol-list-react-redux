import React from "react";
import { Link, useParams } from "react-router-dom";

const Filter = () => {
  const { filter: activeFilter = "all" } = useParams();
  return (
    <div className="filter">
      <Link to="/all">
        <button
          className="btn btn-filter"
          style={{
            color:
              activeFilter === "all"
                ? "var(--bright-blue"
                : "var(--dark-grayish-blue)",
            cursor: "pointer",
          }}
        >
          All
        </button>
      </Link>
      <Link to="/active">
        <button
          className="btn btn-filter"
          style={{
            color:
              activeFilter === "active"
                ? "var(--bright-blue"
                : "var(--dark-grayish-blue)",
            cursor: "pointer",
          }}
        >
          Active
        </button>
      </Link>
      <Link to="/completed">
        <button
          className="btn btn-filter"
          style={{
            color:
              activeFilter === "completed"
                ? "var(--bright-blue"
                : "var(--dark-grayish-blue)",
            cursor: "pointer",
          }}
        >
          Completed
        </button>
      </Link>
    </div>
  );
};

export default Filter;
