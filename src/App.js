// Features
// 1. You will be creating a static confetti celebration on a blank page. See the Mocks below to get an example of what you need to build. There are many creative bonus options you can work on if you are able to get the basic mock implemented quickly.
// 2. Create a circle component, that accepts the following props and renders a circle on the page using those props. Use normal HTML and CSS components and don’t use a canvas or graphics rendering library.
//   1. Color
//   2. Position
//   3. Radius
// 3. Create an algorithm to generate 100 random circles on the page, with random colors, positions, and sizes. Make sure that all circles are within the bounds of the visible page, but they can overlap each other, and go off the edges.
// 4. BONUS: make the random colors are themed. For example, pastel, dark colors, the same color but different transparencies.
// 5. BONUS: add animations. For example, make the circles move in random directions.
// 6. BONUS: create different shapes other than circles.
// 7. BONUS: add in random rotations along the Z axis to make the page look 3D.
// 8. BONUS: allow various parameters, like the number of circles, limits on sizes, colors, etc... to be passed through the URL, so you can dynamically change the pattern on the page.

import "./App.css";
import { useState, useEffect } from "react";

import Helpers from "./utils/helpers";

const Circle = ({ color, position, radius, zIndex, borderRadius }) => {
  const properties = {
    position: "absolute",
    borderRadius: `50%`,
    backgroundColor: `#${color}`,
    width: `${radius[0]}vh`,
    height: `${radius[1]}vh`,
    left: `${position[0]}%`,
    top: `${position[1]}%`,
    zIndex: `${zIndex}`,
  };

  return <div style={properties}></div>;
};

function App() {
  const [circleProperties, setCircleProperties] = useState([]);
  const [numOfCircles, setNumOfCircles] = useState(100);

  useEffect(() => {
    setCircleProperties(Helpers.generateNRandomCircleProperties(numOfCircles));
  }, []);

  return (
    <div className="App">
      {circleProperties.length
        ? circleProperties.map((p, i) => {
          return (
            <Circle
              key={i}
              position={p.position}
              color={p.color}
              radius={p.radius}
              zIndex={p.zIndex}
            />
          )})
        : null}
    </div>
  );
}

export default App;
