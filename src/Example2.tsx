import "./styles.css";
import ImageMarker, { Marker } from "react-image-marker";
import { useState } from "react";

export const Example2 = () => {
  const [markers, setMarkers] = useState<Marker[]>([
    {
      top: 50, //10% of the image relative size from top
      left: 50 //50% of the image relative size from left
    }
  ]);

  return (
    <div>
      <ImageMarker
        src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"
        markers={markers}
        onAddMarker={(marker: Marker) => setMarkers([...markers, marker])}
      />
    </div>
  );
};
