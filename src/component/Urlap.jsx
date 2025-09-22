import { useState } from "react"
function Urlap(){
    const [szoveg, Setszoveg] = useState('');
    return(
        <>
            <input type="text" value={szoveg} onChange={event => Setszoveg(event.target.value)}/>
            <p>{szoveg}</p>
        </>
    )
}
export default Urlap