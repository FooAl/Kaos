import React from "react";
import {Link} from "react-router-dom";

class mainPage extends React.Component{
    constructor(props){
        super(props);
    } 

    render(){
        return(
            <div className="mainpage">
                <head className="mainpageHeader">
                    <section className="mainpageHeaderLeft">
                        Logo
                    </section>
                    <section className="mainpageHeaderRight">
                        <Link to="/api/login/" className="loginButton">Login</Link>
                    </section>
                </head>

                <section className="mainpageBody">
                    <section className="mainpageBodyText">
                        <span className="mainpageBodyMaintext">It's time to only use Kaos, the one true discord clone.</span>
                    <span className="mainpageBodySubtext">subtext</span>
                    </section>
                    <section className="mainpageBodyImages">
                        images go here!
                    </section>
                </section>



                <footer className="mainpageFooter">
                    <section className="mainpageFooterLeft">
                        Ready to try Kaos? It's Free!
                        Join over 0 users today
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