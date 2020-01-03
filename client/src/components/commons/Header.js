import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from "../GoogleAuth";

const Header = () => {
  return (
    <div className="ui container">
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">Streams</Link>
        <div className="right menu">
          <Link to="/" className="item">All Streams</Link>

          {/*<a className="item">________</a>*/}
          {/*<Link to="/" className="item">Sign-in</Link>*/}
          <div className="item"><GoogleAuth/></div>


        </div>
      </div>


    </div>
  );
};

export default Header;
