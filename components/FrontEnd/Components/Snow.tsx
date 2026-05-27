import React from "react";

const flower = (
  <img className="w-[25px]" alt="" src="https://placehold.co/25x25/facc15/ffffff.png?text=*" />
);
export default function Snow() {
  return (
    <div className="snowflakes" aria-hidden="true">
      <div className="snowflake">{flower}</div>
      <div className="snowflake">{flower}</div>
      <div className="snowflake">{flower}</div>
      <div className="snowflake">{flower}</div>
      <div className="snowflake">{flower}</div>
      <div className="snowflake">{flower}</div>
      <div className="snowflake">{flower}</div>
      <div className="snowflake">{flower}</div>
      <div className="snowflake">{flower}</div>
      <div className="snowflake">{flower}</div>
      <div className="snowflake">{flower}</div>
      <div className="snowflake">{flower}</div>
    </div>
    //   <div className="snowflakes" aria-hidden="true">
    //   <div className="snowflake">❅</div>
    //   <div className="snowflake">❆</div>
    //   <div className="snowflake">❅</div>
    //   <div className="snowflake">❆</div>
    //   <div className="snowflake">❅</div>
    //   <div className="snowflake">❆</div>
    //   <div className="snowflake">❅</div>
    //   <div className="snowflake">❆</div>
    //   <div className="snowflake">❅</div>
    //   <div className="snowflake">❆</div>
    //   <div className="snowflake">❅</div>
    //   <div className="snowflake">❆</div>
    // </div>
  );
}
