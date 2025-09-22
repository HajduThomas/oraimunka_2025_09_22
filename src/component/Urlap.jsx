import { useState } from "react"
function Urlap(){
    const [szoveg, setSzoveg] = useState('');
    const [user, setUser] = useState({nev: ''});
    return(
        <>
            <input type="text" 
            value={szoveg} 
            onChange={event => 
            Setszoveg(event.target.value)}/>
            <p>{szoveg}</p>
            <form>
                <fieldset>
                    <legend>Adatok</legend>
                    <label htmlFor="nev">Név</label>
                    <input type="text" 
                    name="nev"
                    value={user.nev} 
                    onChange={e => setUser({...user, nev: e.target.value})}
                    id="nev" />
                </fieldset>
            </form>
            <p>Helló {user.nev}</p>
        </>
    )
}
export default Urlap