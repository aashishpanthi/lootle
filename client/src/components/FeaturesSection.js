import FeatureTile from "../components/FeatureTile";
import TimelineIcon from "@mui/icons-material/Timeline";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";

const features = [
  {
    title: "Track",
    Image: ScreenSearchDesktopIcon,
    description: "You can track the price of your favourite product or stock.",
  },
  {
    title: "Inform",
    Image: MarkEmailUnreadIcon,
    description:
      "We inform you via email when you get a good deal on your item.",
  },
  {
    title: "History",
    Image: TimelineIcon,
    description:
      "We store price fluctuation for you and show with the help of charts.",
  },
];

function FeaturesSection() {
  return (
    <section>
      <h1
        style={{
          fontSize: "48px",
          textAlign: "center",
          margin: "75px auto 10px auto",
        }}
      >
        Our <span style={{ color: "royalblue" }}>services</span>
      </h1>

      <div
        style={{
          margin: "50px auto 100px auto",
          maxWidth: "1000px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {features.map((f, i) => (
          <FeatureTile key={i} {...f} />
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
