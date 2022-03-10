import {App} from '../App.js'

function  Header({firstHamster, hamham}){
    return (
        <header className="top-header">
            <h1 className="hidden" onClick={firstHamster}>hiddenTitle</h1>
            <div style={{background : "red"}} className="logo" onClick={hamham}><img src='http://placehold.it/80x80' /></div>
            <div className='hamberger'></div>
        </header>
    )
}

export default Header