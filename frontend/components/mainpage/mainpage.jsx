import React from "react";
import {Link} from "react-router-dom";

class mainPage extends React.Component{
    constructor(props){
        super(props);
    } 

    render(){
        return(
            <div className="mainpage">
                <header className="mainpageHeader">
                    <section className="mainpageHeaderLeft">
                        Logo
                    </section>
                    <section className="mainpageHeaderRight">
                        <Link to="/api/login/" className="loginButton">Login</Link>
                    </section>
                </header>

                <section className="mainpageBody">
                    <section className="mainpageBodyText">
                        <span className="mainpageBodyMaintext">It's time to only use Kaos</span>
                    <span className="mainpageBodySubtext">We just happen to be the best on the market.</span>
                    </section>
                </section>

                <section className="mainpageDemo">
                    <Link to="/" className="demoButton">Open Kaos in Browser</Link>
                </section>

                <section className="mainpageImages">
                    <img src={window.mainpageImage} />
                </section>

                <footer className="mainpageFooter">
                    <section className="mainpageFooterLeft">
                        <span className="footerMain">Ready to try Kaos? It's free!</span>
                        <span className="footerSub">Join over 0 users today</span>
                    </section>

                    <section className="mainpageFooterRight">
                        <Link to="/api/register/" className="signupButton">Sign Up Now</Link>
                    </section>
                </footer>
            </div>
        )
    }
}

export default mainPage;