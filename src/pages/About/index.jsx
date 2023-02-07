import about from "../../data/about";
import ConverterMarkdown from "../../components/ConverterMarkdown/ConverterMarkdown";

const About = () => {

  return (
    <div className="info">
      <div className="content">
        <ConverterMarkdown text={about.title}/>
        <ConverterMarkdown text={about.description}/>
      </div>
    </div>
  );
}

export default About;