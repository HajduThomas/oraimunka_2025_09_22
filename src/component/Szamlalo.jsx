import { useState } from "react"
function Szamlalo(){

    const[db, setDb] = useState(1);
    const novel = () => setDb(db+1);
    return(
        <>
            <button onClick={novel}>+1</button>
            <br />
            <p>
                Számláló: {db}
            </p>
        </>
    )
}
export default Szamlalo