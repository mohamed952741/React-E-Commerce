export default function Pagination({skip,setSkip,limit}){
    const handlePrev = () => {
        if (skip >= limit) setSkip(skip - limit);
      };
    
      const handleNext = () => {
        setSkip(skip + limit);
      };
    return(
        <>
        <div>
            <button onClick={handlePrev} disabled={skip === 0}>Previous</button>
            <button onClick={handleNext}>Next</button>
        </div>
        </>
    );
};