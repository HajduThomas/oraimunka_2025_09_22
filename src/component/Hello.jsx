function Hello()
{
    const sayhello = () => {
        window.alert('Helló világ');
    }
    const sayHellovki = (nev) => {
        window.alert('Helló' +nev)    
    }
    var vki = 'Mekk Elek';
    return(
        <>
            <button onClick={sayhello}>Helló</button>
            <button onClick={()=>{sayHellovki(' Mekk Elek ')}}>Helló ismeretlen</button>
        </>
        
    )
}
export default Hello