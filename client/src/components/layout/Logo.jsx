import { useNavigate } from "react-router";


function Logo() {

    const navigate = useNavigate();

    return (
        <div 
        id="logo"
        onClick={() => navigate("/")}
        >
            <figure>
                <img src="/images/MGC-logo.png" alt="Misan Gold Collection Logo" />
            </figure>

            <h2><span>Misan</span> Gold Collection</h2>
        </div>
    )
}

export default Logo;