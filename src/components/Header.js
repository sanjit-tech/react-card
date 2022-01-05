 export function Header() {
    return(
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container">
                <a className="navbar-brand" href="#">Card Ui</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sign up</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}