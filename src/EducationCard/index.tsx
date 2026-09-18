const EducationCard = (data:{"name":string,"timeline":string,"location":string,"description":string}) => {
    return(<>
    <h1>{data.name}</h1>
    <p>{data.timeline}</p>
    <p>{data.location}</p>
    <p>{data.description}</p>
    </>)
};

export default EducationCard;