import React from "react";
import "./GitInfo.css";

export default function GitInfo(props) {
  return (
    <div>
      <div className="user_display">
        <img src={props.avatar_url} alt="abstract marker" />
        <div className="user_text_info">
          <h2>{props.login}</h2>
          {/* <p>Type: {props.type}</p> */}
          <h3>{props.bio}</h3>
          <p>
            URL: <a href={props.html_url}>{props.html_url}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
