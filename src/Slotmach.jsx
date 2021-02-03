import React from "react";

const SlotM = (props) =>{
    //let x='$';
    //let y='$';
    //let z='$';
    let x=props.x;
    let y=props.y;
    let z=props.z;
    if((x===y) && (y===z)){
        return(
        <>
          <div className="slot_inner">
            <h1>
                {x} {y} {z}
            </h1>
            <h1 className="matching">This is Matching</h1>
                <br/><br/>
          </div>
        </>
        );
    }else{
        return(
        <>
          <div className="slot_inner">
            <h1>
                {x} {y} {z}
            </h1>
            <h1 className="notmatching">This is Not Matching</h1>
                <br/><br/>
          </div>
        </>
        );
    }
}

export default SlotM;