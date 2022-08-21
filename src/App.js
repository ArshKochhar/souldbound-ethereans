// import logo from "./logo.svg";
import logo from "./assets/eth.png";
import { IoWalletOutline } from "react-icons/io5";
import "./App.css";
import "animate.css";
import Gradient from "rgt";
import { useEffect, useState } from "react";
import useMetaMask from "./hooks/connectMetaMask";
import { Button, Container, Row, Col } from "react-bootstrap";
import moment from "moment";

function App() {
    const [wallet, setWallet] = useState(false);

    const then = moment(timeTillDate, timeFormat);
    const now = moment();
    const countdown = moment(then - now);
    const days = countdown.format("D");
    const hours = countdown.format("HH");
    const minutes = countdown.format("mm");
    const seconds = countdown.format("ss");

    console.log(isActive, "ACTIVE");

    function handleClick() {
        setWallet(true);
    }
    const Completionist = () => <span>You are good to go!</span>;

    return (
        <div className="App">
            <header className="App-header">
                <Container>
                    <Row>
                        <Col>
                            {" "}
                            <div>
                                <img src={logo} className="App-logo" alt="logo" />
                            </div>
                        </Col>
                        <Col>
                            {" "}
                            <h1 style={{ fontSize: "70px", fontWeight: "600", paddingTop: "80px" }} class="animate__animated animate__fadeIn">
                                <Gradient dir="left-to-right" from="#e0d1e6" to="#d2badb">
                                    Mint a{" "}
                                    <span>
                                        <Gradient dir="left-to-right" from="#f5f0c1" to="#faeb64">
                                            SoulBound
                                        </Gradient>
                                    </span>{" "}
                                    Token on Ethereum PoS Using ETHW
                                </Gradient>
                            </h1>
                            <h1 className="mt-4" style={{ fontWeight: "200", color: "red" }}>
                                Coming Soon
                            </h1>
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>
    );
}

export default App;

{
    /* <Row>
    <Col>
        <div>
            <img style={style} src={logo} className="App-logo" alt="logo" />
        </div>
    </Col>
    <Col>
        <p className="mb-4" style={{ fontWeight: 100, fontSize: "60px", paddingBottom: "10px" }}>
            Mint a Soul Bound Token on Ethereum PoS Using ETHW
            <span className="mb-4">
                <Button onClick={connect} variant="outline-light" className="mb-2" style={{ fontWeight: 90, fontSize: "4vw", paddingLeft: "20px", paddingRight: "20px", borderRadius: "30px" }}>
                    {" "}
                    Connect your wallet
                </Button>
            </span>
        </p>
        <div>Connected Account {isActive ? account : ""}</div>
    </Col>
</Row>

<div>
    <Button onClick={disconnect} variant="outline-light" className="mb-2" style={{ fontWeight: 90, fontSize: "4vw", paddingLeft: "20px", paddingRight: "20px", borderRadius: "30px" }}>
        {" "}
        DISCONNECT
    </Button>
</div> */
}
