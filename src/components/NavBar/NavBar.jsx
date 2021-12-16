import './NavBar.css'

function NavBar() {
    return (
        <div id='navbar' className='navbar'>
            <a href='/' id='logo'>Algo</a>
            <div className='navbarRight'>
                <a href='/'>Home</a>
                <a href='/#sorting'>Sorting</a>
                <a href='/#finding'>Path Finding</a>
            </div>
        </div>
    )
}

export default NavBar