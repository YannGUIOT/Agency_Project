import { Link } from "react-router-dom";
import ConverterMarkdown from "../../components/ConverterMarkdown/ConverterMarkdown";
import project from "../../data/project";

const Projets = () => {

return (
  <div className="info">
    <ConverterMarkdown text={project.title} />
    <ConverterMarkdown text={project.description} />
    <ul>
        <li><Link to="/works/platon-study-case"> Platon </Link></li>
        <li><Link to="/works/solane-study-case"> Solane </Link></li>
        <li><Link to="/works/sedal-study-case"> Sedal </Link></li>
    </ul>
  </div>
)

}
export default Projets;