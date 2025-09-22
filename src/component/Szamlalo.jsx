import { useState } from "react"
function Szamlalo(){

    const[db, setDb] = useState(1);
    return(
        <>
            <button>+1</button>
            <br />
            <p>
                Számláló: {db}
            </p>
        </>
    )
}
export default Szamlalo