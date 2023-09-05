import Marquee from "react-fast-marquee";
import "./ContAnima.css";

function ContAnima() {
  return (
    <div className="anannouncement">
      <Marquee>
        <div className="announ-text text1">
          <span>Tel: +99362300402 </span>
          <span>Tel: +99362300402</span>
        </div>
        <div className="announ-text text2">
          <span>Tel: +99362300402 </span>

          <span>Tel: +99362300402</span>
        </div>
        <div className="announ-text text2">
          <span>Tel: +99362300402 </span>

          <span>Tel: +99362300402</span>
        </div>
      </Marquee>
    </div>
  );
}

export default ContAnima;
