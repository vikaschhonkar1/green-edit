import React from "react";

const Home = () => {
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img className="homePageLogo" src="/logo.png" alt="logo" width={400} />
        <h4 className="mainLabel">Paste Invitation ROOM ID</h4>
        <div className="inputGroup">
          <input type="text" className="inputBox" placeholder="ROOM ID" />
          <input type="text" className="inputBox" placeholder="USERNAME" />
          <button className="btn joinBtn">Join</button>
          <span className="createInfo">
            If you don't have an invite then create &nbsp;
            <a href="" className="createNewBtn">
              New Room
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
