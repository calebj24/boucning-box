import React from "react";

const navItems = ({ Icon, title }) => {
    return (
      <>
        <div className="icon-container group">
          <Icon className="icon" />
          <p className="icon-title">{title}</p>
        </div>
      </>
    );
  };
  
  export default navItems;
  