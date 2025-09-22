import { useState } from "react"
function Urlap(){
    const [szoveg, setSzoveg] = useState('');
    const [user, setUser] = useState({nev: '', evf: 13});
    const kuldes = (event) => {
        event.preventDefault();
    }
    return(
        <>
            <input type="text" 
            value={szoveg} 
            onChange={event => 
            Setszoveg(event.target.value)}/>
            <p>{szoveg}</p>
            <form onSubmit={kuldes}>
                <fieldset>
                    <legend>Adatok</legend>
                    <label htmlFor="nev">Név</label>
                    <input type="text" 
                    name="nev"
                    value={user.nev} 
                    onChange={e => setUser({...user, nev: e.target.value})}
                    id="nev" />

                    <br />
                    <label htmlFor="evf">Évfolyam</label>
                    <select name="evf" id="evf" value={user.evf} onChange={e => setUser({evf: e.target.value, ...user})}>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                    </select>
                </fieldset>
            </form>
            <p>Helló {user.nev}({user.evf}) évfolyam</p>
        </>
    )
}
export default Urlap