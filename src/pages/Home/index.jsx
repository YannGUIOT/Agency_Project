import home from "../../data/home";
import ConverterMarkdown from "../../components/ConverterMarkdown/ConverterMarkdown";


const Home = () => {

  return (
    <div className="info">
      <div className="content">
        <ConverterMarkdown text={home.title}/>
        <ConverterMarkdown text={home.description}/>
      </div>
    </div>
  );
}

export default Home;