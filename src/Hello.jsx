function Hello()
{
    const sayhello = () => {
        window.alert('Helló világ');
    }
    return(
        <>
        <button onClick={sayhello}>Helló</button>
        </>
    )
}
export default Hello