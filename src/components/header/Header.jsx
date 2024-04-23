// import './contenedor.css';
import '../header/header.css'
import reactLogo from '../../assets/react.svg';
function HeaderComponent() {
    return (
        <>
            <div className="header_container" id="header_container">
                <div>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>
                <div className="nav_container" id="nav_container">
                    <ul>
                        <li>Inicio</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default HeaderComponent;