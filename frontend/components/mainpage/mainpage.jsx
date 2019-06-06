import React from "react";
import {Link} from "react-router-dom";

class mainPage extends React.Component{
    constructor(props){
        super(props);
        this.loginDemo = this.loginDemo.bind(this);
    } 

    loginDemo(){
        let demoUser = {
            email: "Test@test.test",
            password: "starwars",
        }
        this.props.logIn(demoUser);
    }

    render(){
        let loginButton = "";
        let signupButton = "";
        let demoButton = "";
        if(this.props.session === null){
            loginButton = <Link to="/login" className="loginButton">Login</Link>;
            signupButton = <Link to="/register" className="signupButton">Sign Up Now</Link>;
            demoButton = <Link to="/channels" onClick={this.loginDemo} className="demoLogin">Demo User</Link>;
        }else{
            loginButton = <Link to="/channels" className="loginButton">Open</Link>;
            signupButton = <Link to="/channels" className="signupButton">Open Discord</Link>;
            demoButton = <Link to="/channels" onClick={this.loginDemo} className="demoLogin">Open Discord</Link>;
        }
        return(
            <div className="mainpage">
                <header className="mainpageHeader">
                    <section className="mainpageHeaderLeft">
                        <img className="logo" src={window.discordLogo} height="50px"/>
                    </section>
                    <section className="mainpageHeaderRight">
                        {loginButton}
                    </section>
                </header>

                <section className="mainpageBody">
                    <section className="mainpageBodyText">
                        <span className="mainpageBodyMaintext">It's time to only use Kaos</span>
                    <span className="mainpageBodySubtext">We just happen to be the best on the market.</span>
                    </section>
                </section>

                <section className="mainpageDemo">
                    {demoButton}
                    <Link to="/channels" className="demoButton">Open Kaos in Browser</Link>
                </section>

                <section className="mainpageImages">
                    <img src={window.mainpageImage} />
                </section>

                <section className="spacer"/>
                    

                <footer className="mainpageFooter">
                    <section className="mainpageFooterLeft">
                        <span className="footerMain">Ready to try Kaos? It's free!</span>
                        <span className="footerSub">Join over 0 users today</span>
                    </section>
                    <section className="mainpageFooterRight">
                        {signupButton}
                    </section>
                </footer>
            </div>
        )
    }
}

export default mainPage;