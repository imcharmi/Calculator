import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export default function Calculater() {
  const [currrval, setCurrrval] = useState("");
  const [prevval, setPrevval] = useState("");
  const [operations, setOperations] = useState("");

  const clickbtn = (e) => {
    if (e.target.id == "." && currrval.includes(".")) return;
    setCurrrval(currrval + e.target.id);
  };

  const clickoperator = (e) => {
    setOperations(e.target.id);

    if (currrval === "") return;
    if (prevval !== "") {
      let value = compute();
      setPrevval(value);
    } else {
      setPrevval(currrval + e.target.id );
    }
    setCurrrval("");
  };

  const equal = (e) => {
    let value = compute();
    setCurrrval(value);
    setPrevval("");
    setOperations("");
  };
  const compute = () => {
    let result;
    let previousNumber = parseFloat(prevval);
    let currentNumber = parseFloat(currrval);
    if (isNaN(previousNumber) || isNaN(currentNumber)) return;
    switch (operations) {
      case "/":
        result = previousNumber / currentNumber;
        break;
      case "X":
        result = previousNumber * currentNumber;
        break;
      case "+":
        result = previousNumber + currentNumber;
        break;
      case "-":
        result = previousNumber - currentNumber;
        break;
      default:
        return;
    }
    return result;
  };

  const clearval = () => {
    setCurrrval("");
    setOperations("");
    setPrevval("");
  };

  const delval = () => {
    setCurrrval(currrval.slice(0, -1));
  };

  return (
    <div className="container">
      <div className="box mt-5">
        <div className="box1">
          <div className="prev">{prevval}</div>
          <div className="current">{currrval}</div>
        </div>
        <div className="box2 mt-2 m-2">
          <Row>
            <Col>
              <Button onClick={clearval} className="btn btn-secondary ex">
                Clear
              </Button>
              <Button id="del" onClick={delval} className="btn btn-secondary">
                Del
              </Button>
              <Button
                id="X"
                onClick={clickoperator}
                className="btn btn-secondary"
              >
                X
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button id="7" onClick={clickbtn} className="btn btn-secondary">
                7
              </Button>
              <Button id="8" onClick={clickbtn} className="btn btn-secondary">
                8
              </Button>
              <Button id="9" onClick={clickbtn} className="btn btn-secondary">
                9
              </Button>
              <Button
                id="/"
                onClick={clickoperator}
                className="btn btn-secondary"
              >
                /
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button id="4" onClick={clickbtn} className="btn btn-secondary">
                4
              </Button>
              <Button id="5" onClick={clickbtn} className="btn btn-secondary">
                5
              </Button>
              <Button id="6" onClick={clickbtn} className="btn btn-secondary">
                6
              </Button>
              <Button
                id="+"
                onClick={clickoperator}
                className="btn btn-secondary"
              >
                +
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button id="1" onClick={clickbtn} className="btn btn-secondary">
                1
              </Button>
              <Button id="2" onClick={clickbtn} className="btn btn-secondary">
                2
              </Button>
              <Button id="3" onClick={clickbtn} className="btn btn-secondary">
                3
              </Button>
              <Button
                id="-"
                onClick={clickoperator}
                className="btn btn-secondary"
              >
                -
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button id="0" onClick={clickbtn} className="btn btn-secondary">
                0
              </Button>
              <Button id="." onClick={clickbtn} className="btn btn-secondary">
                .
              </Button>
              <Button id="00" onClick={clickbtn} className="btn btn-secondary">
                00
              </Button>
              <Button id="=" onClick={equal} className="btn btn-secondary">
                =
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
