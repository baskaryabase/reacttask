import React, { Component } from "react";
import "./App.css";
export default class MultipleItems extends Component {
  state = { part1: true };
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };

    return (
      <div style={{ position: "relative", margin: 50 }}>
        <h1 style={{ position: "absolute", top: -240, left: 15 }}>
          <span style={{ color: "red" }}>Who</span>{" "}
          <span style={{ color: "blue" }}>We Are?</span>
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            transform: "rotate(45deg)",
            marginTop: 260
          }}
          onClick={() => {
            this.setState({ part1: !this.state.part1 });
            let part1 = document.getElementsByClassName("part1");
            let part2 = document.getElementsByClassName("part2");
            if (this.state.part1) {
              part2[0].style.display = "block";
              part2[1].style.display = "block";
              part2[2].style.display = "block";
              part1[0].style.display = "none";
              part1[1].style.display = "none";
              part1[2].style.display = "none";
            } else {
              part1[0].style.display = "block";
              part1[1].style.display = "block";
              part1[2].style.display = "block";
              part2[0].style.display = "none";
              part2[1].style.display = "none";
              part2[2].style.display = "none";
            }
          }}
        >
          <div className="part1">
            <div
              style={{
                margin: 10,
                paddingTop: 120,
                position: "relative"
              }}
            >
              <div style={{ position: "absolute", left: -460, top: 40 }}>
                <svg width="680" height="300" version="1.1">
                  <polyline
                    points="200 280 440 40 2000 60"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap=""
                    fill="none"
                    stroke-linejoin="miter"
                  />
                </svg>
              </div>
              <img
                style={{ height: 200, width: 200 }}
                src={require("./assets/img/Image1.jpg")}
              />
            </div>
          </div>
          <div>
            <div className="part1" style={{ margin: 10 }}>
              <center style={{ paddingBottom: 15 }}>
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </center>
              <img
                style={{ height: 300, width: 300 }}
                src={require("./assets/img/Image1.jpg")}
              />
            </div>
          </div>
          <div>
            <div
              className="part1"
              style={{
                margin: 10,
                paddingTop: 120,
                position: "relative"
              }}
            >
              <div style={{ position: "absolute", top: 62, right: -90 }}>
                <svg width="500px" height="200px" viewBox="0 0 200 200">
                  <line
                    x1="40"
                    y1="20"
                    x2="1000"
                    y2="20"
                    style={{ stroke: "black", strokeWidth: 2 }}
                  />
                </svg>
              </div>
              <img
                style={{
                  height: 200,
                  width: 200
                }}
                src={require("./assets/img/Image1.jpg")}
              />
            </div>
          </div>

          {/* PART 2 */}
          <div>
            <div
              className="part2"
              style={{
                margin: 10,
                paddingTop: 120,
                position: "relative",
                display: "none"
              }}
            >
              <div style={{ position: "absolute", left: -460, top: 40 }}>
                <svg width="680" height="300" version="1.1">
                  <polyline
                    points="200 280 440 40 2000 60"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap=""
                    fill="none"
                    stroke-linejoin="miter"
                  />
                </svg>
              </div>
              <img
                style={{ height: 200, width: 200 }}
                src={require("./assets/img/Image2.jpg")}
              />
            </div>
          </div>
          <div>
            <div className="part2" style={{ margin: 10, display: "none" }}>
              <center style={{ paddingBottom: 15 }}>
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </center>
              <img
                style={{ height: 300, width: 300 }}
                src={require("./assets/img/Image2.jpg")}
              />
            </div>
          </div>
          <div>
            <div
              className="part2"
              style={{
                margin: 10,
                paddingTop: 120,
                position: "relative",
                display: "none"
              }}
            >
              <div style={{ position: "absolute", top: 62, right: -90 }}>
                <svg width="500px" height="200px" viewBox="0 0 200 200">
                  <line
                    x1="40"
                    y1="20"
                    x2="1000"
                    y2="20"
                    style={{ stroke: "black", strokeWidth: 2 }}
                  />
                </svg>
              </div>
              <img
                style={{
                  height: 200,
                  width: 200
                }}
                src={require("./assets/img/Image2.jpg")}
              />
            </div>
          </div>
        </div>
        {/* PARAGRAPH */}
        <div style={{ width: 500, position: "absolute", left: 0, top: 270 }}>
          <h3 style={{ color: "red" }}>Lorem Ipsum</h3>
          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      </div>
    );
  }
}
