import "./Footer.css";
const Footer = () => {
    const backToTop = () => {
        console.log("Back to top");
    };
    return (
        <footer>
            <div className="divider"></div>
            <button onClick={backToTop} className="button__back__to__top">Back to top</button>
            <div className="footer__table">
                <div className="footer__table__row">
                    <div className="footer__table__col">
                        <div className="footer__table__header">Get to Know Us</div>
                        <ul>
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>About Amazon</li>
                            <li>Investor Relations</li>
                            <li>Amazon Devices</li>
                            <li>Amazon Science</li>
                        </ul>
                    </div>
                    <div className="footer__table__spacer"></div>
                    <div className="footer__table__col">
                        <div className="footer__table__header">Get to Know Us</div>
                        <ul>
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>About Amazon</li>
                            <li>Investor Relations</li>
                            <li>Amazon Devices</li>
                            <li>Amazon Science</li>
                        </ul>
                    </div>
                    <div className="footer__table__spacer"></div>
                    <div className="footer__table__col">
                        <div className="footer__table__header">Get to Know Us</div>
                        <ul>
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>About Amazon</li>
                            <li>Investor Relations</li>
                            <li>Amazon Devices</li>
                            <li>Amazon Science</li>
                        </ul>
                    </div>
                    <div className="footer__table__spacer"></div>
                    <div className="footer__table__col">
                        <div className="footer__table__header">Get to Know Us</div>
                        <ul>
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>About Amazon</li>
                            <li>Investor Relations</li>
                            <li>Amazon Devices</li>
                            <li>Amazon Science</li>
                        </ul>
                    </div>
                    <div className="footer__table__spacer"></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
