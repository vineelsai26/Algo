import './NavBar.css'

function NavBar() {
    return (
        <div id='navbar' className='navbar'>
            <a href='/' id='logo'>Algo</a>
            <div className='navbarRight'>
                <a href='/'>Home</a>
                <a href='/#sorting'>Sorting</a>
                <a href='/#searching'>Searching</a>
            </div>
        </div>
    )
}

export default NavBar