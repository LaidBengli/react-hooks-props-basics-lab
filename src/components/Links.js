import React from "react";
export default function LinkStyle(props) {
    return (
        <div>
            <a href={props.github}>{props.github}</a>
      <a href={props.linkedin}>{props.linkedin}</a>
        
        <h3>Links</h3>
 </div>
    )
}