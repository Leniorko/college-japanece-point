import "./SecondHeading.css";

interface SecondHeadingProps {
  headingText: string;
}

export default function SecondHeadingComponent(props: SecondHeadingProps) {
  return <h2>{props.headingText}</h2>;
}
