import { useState } from "react";
import '../css/Menu.css'
function Cartcounter() {
    const [counter, setCounter] = useState(0)
    return (
        <>
          <div>
                {counter <= 0 ? <button className="button" disabled onClick={() => { setCounter(counter - 1) }}>-</button> : <button className="button" onClick={() => { setCounter(counter - 1) }}>-</button>}

                <input type="text" disabled style={{ width: "30px", height:"30px",cursor: "pointer",borderRadius:"10px",fontStyle:"bold",fontWeight:"500" }} value={counter}></input>

                <button className="button" onClick={() => { setCounter(counter + 1) }}>+</button>
            </div>

        </>
    );
}

export default Cartcounter