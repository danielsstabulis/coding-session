import "./Footer.css";

export const Footer = () => {
    const date = new Date().getFullYear();

    return (
        <p className="Footer">© My Website { date }</p>
    );
}

export default Footer;
