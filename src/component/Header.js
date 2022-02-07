import {App} from '../App.js'

function  Header(){
    return (
        <header className="top-header">
            <h1 className="hidden">hiddenTitle</h1>
            <div className="logo"><img src='http://placehold.it/80x80' /></div>
            <div className='hamberger'></div>
        </header>
    )
}

export default Header