const EducationCard = (data:{"name":string,"degree":string,"timeline":string,"location":string,"description":string}) => {
    return(<div>
    <p>{data.degree}</p>
    <p>{data.name}</p>
    <p>{data.timeline}</p>
    <p>{data.location}</p>
    <p>{data.description}</p>
    </div>)
};

export default EducationCard;