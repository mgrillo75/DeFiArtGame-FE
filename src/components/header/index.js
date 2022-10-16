import { ethers } from "ethers";
import { useHistory } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";
// import style
import "./style.scss";

// import images
import MetaMask from "../../assets/header_btn.svg";
import logo from '../../assets/logo.png';
let home = "/";
let about = "mynfts";
const Header = () => {
    const history = useHistory();
    const setCurrentAccount = useStoreActions((actions) => actions.wallet.update);
    const clearAccount = useStoreActions((actions) => actions.wallet.clear);
    const currentAccount = useStoreState((state) => state.wallet.account);
    const handleClick = async() => {
        if (!window.ethereum) return window.open("https://metamask.io/download");

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const account = await provider.send("eth_requestAccounts", []);
        setCurrentAccount(account.toString());
    };
    return ( <
        nav className = "navbar navbar-expand-sm navbar-dark" >
        <
        div className = "container" >
        <
        a className = "navbar-brand"
        href = { home } >
        <
        img src = { logo }
        / > < /
        a >
        <
        button className = "navbar-toggler"
        type = "button" >
        Menu <
        /button> <
        div className = "collapse navbar-collapse"
        id = "navbarNav" >
        <
        ul className = "navbar-nav me-auto mb-2 mb-lg-0" >
        <
        li className = "nav-item" >
        <
        a className = "nav-link active"
        href = { home } > Home < /a> < /
        li > <
        li className = "nav-item" >
        <
        a a href = { about }
        className = "nav-link nav_link" > About < /a> < /li > < /
        ul > <
        a href = "https://codereconomy.io/"
        className = "last_svg d-flex" >
        <
        img src = { MetaMask }
        / > <
        span > Download MetaMask < /span> < /
        a > <
        /div>

        <
        /div> < /
        nav >
    );
};

export default Header;