import {
  Audio,
  BallTriangle,
  Bars,
  Blocks,
  InfinitySpin,
  Radio,
  Comment,
  ColorRing,
} from "react-loader-spinner";
// אם נותנים ערכי ברירת מחדל - אין צורך להגדיר טיפוסים
// הטיפוסים inffered
const LoaderSpinners = ({ width = "200", color = "#00BFFF" }) => {
  return (
    <div className="d-flex justify-content-center align-items-center my-5">
      <InfinitySpin width={width} color={color} />
      <Radio width={width} colors={["#51E5FF", "#7DE2D1", "#FF7E6B"]} />
      <Audio width={width} color={color} wrapperStyle={{ display: "flex" }} />
      <BallTriangle width={width} color={color} />
      <Bars width={width} color={color} />
      <Blocks width={width} color={color} />
      <Comment width={width} color="#fff" backgroundColor="#00bf00" />
      <ColorRing width={width} colors={[color, '#0f0', color, '#fff', color]}/>
    </div>
  );
};

export default LoaderSpinners;
