import * as React from "react";
import { Map, Marker, Draggable } from "pigeon-maps";
import { useState } from "react";

export function App() {
  const [hue, setHue] = useState(0);
  const color = `hsl(${hue % 360}deg 39% 70%)`;
  const [anchor, setAnchor] = useState([36.9084558, -88.7794448]);

  return (
    <>
      <div>
        <h1>This is my test map</h1>
      </div>
      <Map height={1000} defaultCenter={[36.9084558, -88.7794448]} defaultZoom={11}>
        <Draggable offset={[60, 87]} anchor={anchor} onDragEnd={setAnchor}>
          <img
            src="https://toppng.com/uploads/preview/red-top-view-clip-art-at-clker-cartoon-car-birds-eye-view-11562918860dgdpz8rcug.png"
            width={100}
            height={95}
            alt="Car"
          />
        </Draggable>
        <Marker width={50} anchor={[37.0739075, -88.6981642]} color={color} onClick={() => setHue(hue + 20)}>
          <img
            src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/042013/chick-fil-a.png?itok=UvqtgDLP"
            width={100}
            height={95}
            alt="cfa"
          />
        </Marker>
        <Marker width={50} anchor={[37.29955, -89.5800276]} color={color} onClick={() => setHue(hue + 20)}>
          <img
            src="https://corporate.target.com/_media/TargetCorp/Press/B-roll%20and%20Press%20Materials/Logos/Target_Bullseye-Logo_Red.jpg?preset=640w"
            width={100}
            height={95}
            alt="closest Target"
          />
        </Marker>
      </Map>
    </>
  );
}

export default App;
