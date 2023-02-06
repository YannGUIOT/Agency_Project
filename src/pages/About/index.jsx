import about from "../../data/about";
import ConverterMarkdown from "../../components/ConverterMarkdown/ConverterMarkdown";

const About = () => {

  return (
    <div className="info">
      <ConverterMarkdown text={about.title}/>
      <ConverterMarkdown text={about.description}/>
    </div>
  );
}

export default About;