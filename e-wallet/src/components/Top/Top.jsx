import './Top.css';
import { useNavigate, useLocation } from 'react-router-dom';

function Top() {
    const navigate = useNavigate();
    const location = useLocation();

    const isHome = location.pathname === "/hem";
    const heading = isHome ? "E-WALLET" : "ADD A NEW BANK CARD";
    const subHeading = isHome ? 'ACTIVE CARD' : 'NEW CARD'
    

    function goToHomePage() {
        navigate('/hem');
    }

    return (
        <div className='top'>
            { !isHome && (
                <span onClick={goToHomePage}>BACK</span>
            )}
            <h1 className='heading'>
                {heading}
            </h1>
            <h3 className='subHeading'>{subHeading}</h3>
        </div>
    );
}

export default Top;
