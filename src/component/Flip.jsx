import styles from '../css/flip.module.css'
function Flip(){
    var hit = Math.random() < 0.5

    return(
        <>
            { hit ? <piros/> : <fekete/> }
        </>
    )
}
function piros()
{
    return <div className={styles.piros}></div>
}

function fekete()
{
    return <div className={styles.feke}></div>
}

function Flip2(){
    var hit = Math.random() < 0.5;
    if(hit){
        return<piros/>
    }
    else{
        return <fekete/>
    }
}

export {Flip, Flip2}