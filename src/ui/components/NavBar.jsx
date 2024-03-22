import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    const navigate = useNavigate();

    const hanldeLogout = () => {
        navigate('/',{
            replace : true
        })
    }


    return (
       <div className="col-12 bg-dark navbar-dark">
            <nav className="container navbar navbar-expand-sm navbar-dark bg-dark px-3 py-3">
                <Link 
                    className="navbar-brand" 
                    to="/marvel"
                >
                    Associations
                </Link>

                    <div className="navbar-collapse">
                        <div className="navbar-nav">

                            <NavLink 
                                className="nav-item nav-link" 
                                to="/marvel"
                            >
                                Marvel
                            </NavLink>

                            <NavLink 
                                className="nav-item nav-link" 
                                to="/dc"
                            >
                                DC
                            </NavLink>


                            <NavLink 
                                className="nav-item nav-link" 
                                to="/search"
                            >
                                Search
                            </NavLink>


                        </div>
                    </div>

                    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 ">
                        <ul className="navbar-nav ms-auto">
                            <NavLink 
                                className="nav-item nav-link" 
                                to="/login"
                                onClick={ hanldeLogout }
                            >
                                Logout
                            </NavLink>
                        </ul>
                    </div>
                </nav>


       </div>
    )
}