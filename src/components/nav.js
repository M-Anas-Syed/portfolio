import React from 'react';
import Scrollspy from 'react-scrollspy';

function Nav() {
    const navButton = (elem) => {
        if(elem.target.tagName === 'A'){
            elem.target.classList.add('selected');
        } 
        for(let x of elem.target.parentElement.children){
            if (x !== elem.target){
                x.classList.remove('selected');
            }
        }
    }

    return(
        <nav onClick={navButton} className='nav_container flex'>
            <Scrollspy items={ ['about', 'easybank', 'rango', 'todo', 'iptracker', 'countdown'] } currentClassName="is-current selected" className="desktop">
                <a className="nav_element" href='#about'>ABOUT</a>
                <a className="nav_element" href='#easybank'>EASYBANK</a>
                <a className="nav_element" href='#rango'>RANGO</a>
                <a className="nav_element" href='#todo'>TODO</a>
                <a className="nav_element" href='#iptracker'>IP TRACKER</a>
                <a className="nav_element" href='#countdown'>COUNTDOWN</a>
            </Scrollspy>

            <Scrollspy items={ ['about', 'easybank', 'rango', 'todo', 'iptracker', 'countdown'] } currentClassName="is-current selected show" className="mobile">
                <a className="hide nav_element" href='#about'>ABOUT</a>
                <a className="hide nav_element" href='#easybank'>EASYBANK</a>
                <a className="hide nav_element" href='#rango'>RANGO</a>
                <a className="hide nav_element" href='#todo'>TODO</a>
                <a className="hide nav_element" href='#iptracker'>IP TRACKER</a>
                <a className="hide nav_element" href='#countdown'>COUNTDOWN</a>
            </Scrollspy>
        </nav>
    );
}

export default Nav;