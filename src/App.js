// import logo from "./logo.svg";
import logo from "./assets/Ethereum-Logo-PNG.png";
import "./App.css";
import { useAnimate } from "react-simple-animate";
import { useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

function App() {
    const { style, play } = useAnimate({ start: { opacity: 0 }, end: { opacity: 1 } });
    useEffect(() => play(true), []);

    return (
        <div className="App">
            <header className="App-header">
                <Container>
                    <p className="mb-4" style={{ fontWeight: 100, fontSize: "80px", paddingBottom: "10px" }}>
                        Welcome Etherean!{" "}
                        <span className="mb-4">
                            <Button variant="outline-light" className="mb-2" style={{ fontWeight: 90, fontSize: "4vw", paddingLeft: "20px", paddingRight: "20px", borderRadius: "30px" }}>
                                {" "}
                                Connect your wallet
                            </Button>
                        </span>
                    </p>
                    <div>
                        <img style={style} src={logo} className="App-logo" alt="logo" />
                    </div>
                </Container>
            </header>
        </div>
    );
}

export default App;
