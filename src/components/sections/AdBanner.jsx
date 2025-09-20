import { Link } from "react-router-dom";
import adBanner from "../../../public/images/ad-banner.jpg";
import Container from "../ui/Container";

function AdBanner() {
  return (
    <>
      <Container>
        <Link>
          <img src={adBanner} alt="" />
        </Link>
      </Container>
    </>
  );
}

export default AdBanner;
