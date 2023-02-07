import { Link } from "react-router-dom";
import ConverterMarkdown from "../../components/ConverterMarkdown/ConverterMarkdown";
import project from "../../data/project";

const Projets = () => {

return (
  <div className="info">
    <div className="content">
      <ConverterMarkdown text={project.title} />
      <ConverterMarkdown text={project.description} />
      <ul>
          <li className="card"><Link to="/works/platon-study-case"> Platon </Link></li>
          <li className="card"><Link to="/works/solane-study-case"> Solane </Link></li>
          <li className="card"><Link to="/works/sedal-study-case"> Sedal </Link></li>
      </ul>
    </div>
  </div>
)

}
export default Projets;