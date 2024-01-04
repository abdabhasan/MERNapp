import styled from "styled-components";
import aboutVedio from "../assets/aboutVideo.mp4";
import { Title } from "../Components";

const AboutPage = () => {
  return (
    <Wrapper className="page  section-center">
      <div className="video-container">
        <Title name="about us" />
        <video controls>
          <source src={aboutVedio} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="transcript-container">
        <q>
          Assalaamualaikum and welcome to Muslim Local, a platform developed to
          help our community support businesses which share our values. Muslim
          Local was created in response to the crimes being committed against
          the Palestinian people. As this injustice continues to be met with
          silence, or even brazen approval, from the world’s wealthiest
          corporations, many in our community have rightly decided to avoid
          those companies and their products.
          <br />
          <br /> But as that list continues to grow, it has become apparent that
          nearly every major corporation is in some way involved in wrongdoing.
          The question then becomes: why are we giving so much of our hard
          earned money to these billion dollar corporations, when we have
          everything we need in our own community? Why not do more to support
          our brothers and sisters in their business ventures? Why not keep our
          money right here at home?
          <br />
          <br /> At Muslim Local, we aim to realize this vision by providing a
          platform where Muslim businesses and professionals can better promote
          themselves in our community, while the rest of us can make sure our
          money contributes to growth and good, rather than greed and harm. At
          this stage in development, we are building our database of businesses,
          services, professionals, skilled workers, and entrepreneurs. So if
          you, a friend or family member have something to provide, please
          submit the form below. May Allah help us, forgive us, and Free
          Palestine.
        </q>
      </div>
    </Wrapper>
  );
};

export default AboutPage;

const Wrapper = styled.section`
  max-width: 800px;
  padding-bottom: 5rem;

  .video-container {
    video {
      width: 100%;
      height: auto;
    }
  }

  .transcript-container {
    margin-top: 20px;
    q {
      font-size: 16px;
      line-height: 1.5;
    }
  }
`;
