import React from "react";
import img from './images/img.jpg';
function NavBar() {
  return (
    <>
      <section>
     
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="container">
            <div > <img src={img} alt="" ></img></div>
              <h1 className="navbar-brand text-success" >
                TV Maze Search App
              </h1>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default NavBar;