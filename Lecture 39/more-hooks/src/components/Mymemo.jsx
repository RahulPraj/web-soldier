import React, {memo, useState } from 'react'

function Mymemo() {
    let [inp, setInp] = useState("html");
    function handleProp(){
        setInp(Math.floor(Math.random()*10));
    }
  return (
    <div>
        <MeraMemo titl ={inp}/>
        <button onClick={handleProp}>Badal do duniya</button>
        <MeraMemo titl="react"/>
        <MeraMemo titl="backend"/>

    </div>
  )
}

// memoization -> change in props hoga to rerendering hogi
let MeraMemo = memo (function MeraMemo({titl}){
    return(
        <div>
            <h1>Title:{titl}</h1>
        </div>
    )
});




export default Mymemo;