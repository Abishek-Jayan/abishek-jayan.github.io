import EducationCard from "../EducationCard";
import education from "../data/education.json";
import "./index.css";
const data:{"name":string,"degree":string,"timeline":string,"location":string,"description":string}[] = education; 
const Education = () => {
    return (<>
    <h1>Education</h1>
    <div className="education-container">
    {data.map((element) => (
        <EducationCard {...element}/>
    ))}
    </div>
    </>)
};
export default Education;