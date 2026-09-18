import EducationCard from "../EducationCard";
import education from "../data/education.json";
const data:{"name":string,"timeline":string,"location":string,"description":string}[] = education; 
const Education = () => {
    return (<>
    {data.map((element) => (
        <EducationCard {...element}/>
    ))}
    </>)
};
export default Education;