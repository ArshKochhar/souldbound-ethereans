// import logo from "./logo.svg";
import logo from "./assets/Ethereum-Logo-PNG.png";
import "./App.css";
import { useAnimate } from "react-simple-animate";
import { useEffect } from "react";
import useMetaMask from "./hooks/connectMetaMask";
import { Button, Container, Row, Col } from "react-bootstrap";

function App() {
    const { connect, disconnect, isActive, account } = useMetaMask();

    const { style, play } = useAnimate({ start: { opacity: 0 }, end: { opacity: 1 } });
    useEffect(() => play(true), []);

    return (
        <div className="App">
            <header className="App-header">
                <Container>
                    <p className="mb-4" style={{ fontWeight: 100, fontSize: "80px", paddingBottom: "10px" }}>
                        Welcome Etherean!{" "}
                        <span className="mb-4">
                            <Button onClick={connect} variant="outline-light" className="mb-2" style={{ fontWeight: 90, fontSize: "4vw", paddingLeft: "20px", paddingRight: "20px", borderRadius: "30px" }}>
                                {" "}
                                Connect your wallet
                            </Button>
                        </span>
                    </p>
                    <div>Connected Account {isActive ? account : ""}</div>
                    <div>
                        <img style={style} src={logo} className="App-logo" alt="logo" />
                    </div>
                    <div>
                        <Button onClick={disconnect} variant="outline-light" className="mb-2" style={{ fontWeight: 90, fontSize: "4vw", paddingLeft: "20px", paddingRight: "20px", borderRadius: "30px" }}>
                            {" "}
                            DISCONNECT
                        </Button>
                    </div>
                </Container>
            </header>
        </div>
    );
}

export default App;
