import EducationCard from "../EducationCard";
const data:string[] = [];
const Education = () => {
    return (<>
    {data.map((element) => {
        <EducationCard data={element}/>
    })}
    </>)
};
export default Education;