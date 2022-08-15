import React from "react";

import "../styles/RaiseFlag.css";

const RaiseFlag = () => {
  return (
    <>
      <div className="raise-flag">
        <h2 className="i">
          20 <br />
          22
        </h2>
        <svg
          className="flag"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 900 600"
          width="900"
          height="600"
        >
          <path className="orange" fill="#f93" d="M0 0H900V600H0z" />
          <path className="white" fill="#fff" d="M0 200H900V600H0z" />
          <path className="green" fill="#128807" d="M0 400H900V600H0z" />
          <g className="ashok-chakra" transform="matrix(4,0,0,4,450,300)">
            <circle r="20" fill="#008" />
            <circle r="17.5" fill="#fff" />
            <circle r="3.5" fill="#008" />
            <g id="d">
              <g id="c">
                <g id="b">
                  <g id="a" fill="#008">
                    <circle transform="rotate(7.5,-8.75,133.4992)" r=".875" />
                    <path d="M 0,17.5 0.6,7 C 0.6,7 0,2 0,2 0,2 -0.6,7 -0.6,7 Z" />
                  </g>
                  <use
                    height="100%"
                    width="100%"
                    transform="rotate(15)"
                    xlinkHref="#a"
                  />
                </g>
                <use
                  height="100%"
                  width="100%"
                  transform="rotate(30)"
                  xlinkHref="#b"
                />
              </g>
              <use
                height="100%"
                width="100%"
                transform="rotate(60)"
                xlinkHref="#c"
              />
            </g>
            <use
              height="100%"
              width="100%"
              transform="rotate(120)"
              xlinkHref="#d"
            />
            <use
              height="100%"
              width="100%"
              transform="rotate(-120)"
              xlinkHref="#d"
            />
          </g>
        </svg>

        {/* raise the flag from stick  */}
        <div className="stick"></div>
        <div className="rope"></div>
        <h1>
          15<sup>th</sup>
        </h1>
        <p className="august">AUGUST</p>
        <p className="independence">HAPPY INDEPENDENCE DAY</p>
      </div>
      <h3>
        PROUDLY MADE BY
        <a href="https:\\youtube.com/fullyworldwebtutorials">
          FULLYWORLD WEB TUTORIALS
        </a>
      </h3>
    </>
  );
};

export default RaiseFlag;
