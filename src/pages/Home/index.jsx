import home from "../../data/home";
import ConverterMarkdown from "../../components/ConverterMarkdown/ConverterMarkdown";


const Home = () => {

  return (
    <div className="info">
      <ConverterMarkdown text={home.title}/>
      <ConverterMarkdown text={home.description}/>
    </div>
  );
}

export default Home;