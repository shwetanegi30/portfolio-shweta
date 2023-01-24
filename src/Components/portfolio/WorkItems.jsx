import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work-card" key={item.id}>
      <img src={item.image} alt="" className="work-img" />
      <h3 className="work-title">{item.title}</h3>
      <a href="https://vercel.com/shwetanegi30" className="work-btn">
        Live <i className="bx bx-right-arrow-alt work-btn-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
