import React from "react"
function Links(props){

    return (
    <div>
        
            <h3>Links</h3>
            <a href={props.github}>Gitub</a>
           <a href= {props.linkedin}>linkedin</a>
        
    </div>
    )
}
export default Links