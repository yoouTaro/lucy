import { SiFacebook } from "react-icons/si";
import {
  Wrapper,
  Row,
  Col,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Container,
  Img,
  Button,
} from "./Elements";

interface Prop {
  topLine: string;
  headLine: string;
  description: string;
  buttonLabel: string;
  img: string;
  alt: string;
}

export default function Home({
  topLine,
  headLine,
  description,
  buttonLabel,
  img,
  alt,
}: Prop) {
  return (
    <Container>
      <Wrapper>
        <Row>
          <Col>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading>{headLine}</Heading>
              <Subtitle>{description}</Subtitle>
              <Button href="https://www.facebook.com/youtaroo" target="_blank">
                <SiFacebook size={24} />
                &nbsp; &nbsp;
                {buttonLabel}
              </Button>
            </TextWrapper>
          </Col>
          <Col>
            <ImgWrapper>
              <Img src={img} alt={alt} />
            </ImgWrapper>
          </Col>
        </Row>
      </Wrapper>
    </Container>
  );
}
