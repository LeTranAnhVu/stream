import React from 'react';

const Header = () => {
  return (
    <div className="ui stackable menu">
        <div className="item">
          {/*<img src="/images/logo.png">*/}
          Streams
        </div>
        <a className="item">Features</a>
        <a className="item">Testimonials</a>
        <a className="item">Sign-in</a>
    </div>
  );
};

export default Header;
