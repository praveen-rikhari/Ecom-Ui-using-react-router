import { Link , NavLink } from "react-router-dom";

export function Header(){
    return (
        <header>
            <div className="container">
                <div className="d-flex justify-content-between align-items">
                    <div className="logo">
                        <Link to="/" className="brand">
                            <img src="./images/shopkaroLogo.png" alt=" " style={{height : 35}} />
                        </Link>
                    </div>
                    <div className="nav nav-pills">
                        <NavLink to="/" className={navData => navData.isActive ? 'nav-link active' : 'nav-link'} >Home</NavLink>
                        <NavLink to="/about" className={navData => navData.isActive ? 'nav-link active' : 'nav-link'}  >About</NavLink>
                        <NavLink to="/products" className={navData => navData.isActive ? 'nav-link active' : 'nav-link'}  >Products</NavLink>
                        <NavLink to="/login" className={navData => navData.isActive ? 'nav-link active' : 'nav-link'}  >Login</NavLink>
                    </div>
                </div>
            </div>
        </header>
    )
}