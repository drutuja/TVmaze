import React from "react";
import img from './images/img.jpg';
function NavBar() {
  return (
    <>
      <section>
      <div > <img src={img} alt="" ></img></div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="container">
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