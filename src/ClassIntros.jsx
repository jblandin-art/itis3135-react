import { useEffect, useState } from "react";
import StudentIntroduction from "./StudentIntroduction.jsx";
export default function ClassIntros(){


useEffect(() => {
    // Set document title as a fallback
    document.title = "Josiah Blanding's Jagged Bat | ITIS3135 | Everybody's Introduction";
  }, []); // empty dependency → runs once on mount
    const [introductionData, setIntroductionData] = useState([]);
    const [error, setError] = useState(null);
    const [nameSearch, setNameSearch] = useState("");
    const [displayName, setDisplayName] = useState(true);
    const [displayPersonalStatement, setDisplayPersonalStatement] = useState(true);
    const [displayExtra, setDisplayExtra] = useState(true);
    const [displayMascot, setDisplayMascot] = useState(true);
    const [displayBackgrounds, setDisplayBackgrounds] = useState(true);
    const [displayQuote, setDisplayQuote] = useState(true);
    const [displayImage, setDisplayImage] = useState(true);
    const [displayClasses, setDisplayClasses] = useState(true);
    const [displayLinks, setDisplayLinks] = useState(true);
    const [showSlideshow, setShowSlideshow] = useState(false);
    const [indexOfSlideshow, setIndexOfSlideshow] = useState(0);

    const filteredIntroductionData = introductionData.filter((data) => {
        const fullName = `${data.name.first} ${data.name.middleInitial ? data.name.middleInitial + " " : ""}${data.name.preferred ? '"' + data.name.preferred + '" ' : ""}${data.name.last}`.toLowerCase();
        return fullName.includes(nameSearch.toLowerCase());
    });
    
    useEffect(() => {
    fetch("https://dvonb.xyz/api/2025-fall/itis-3135/students?full=1")
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {    
            throw new Error(response.status);
        }
    })
    .then((data) => setIntroductionData(data))
    .catch((error) => setError(error.message));
  }, []); // empty dependency → runs once on mount
    

    return(
        <>
        <main>
            <h2>Everybody's Introduction</h2>
            <input type="text" id="name-search" name="name-search" placeholder="Search by name" value={nameSearch} onChange={(e) => setNameSearch(e.target.value)}/>
            <section className="filter-section">
                <h3>Uncheck to Hide Items</h3>
                <label for="name-filter">Name
                    <input type="checkbox" id="name-filter" name="name-filter" checked={displayName} onChange={() => setDisplayName(!displayName)}/>
                </label>
                <label for="name-filter">Personal Statement
                    <input type="checkbox" id="name-filter" name="name-filter" checked={displayPersonalStatement} onChange={() => setDisplayPersonalStatement(!displayPersonalStatement)}/>
                </label>
                <label for="name-filter">Extra
                    <input type="checkbox" id="name-filter" name="name-filter" checked={displayExtra} onChange={() => setDisplayExtra(!displayExtra)}/>
                </label>
                <label for="name-filter">Mascot
                    <input type="checkbox" id="name-filter" name="name-filter" checked={displayMascot} onChange={() => setDisplayMascot(!displayMascot)}/>
                </label>
                <label for="name-filter">Backgrounds
                    <input type="checkbox" id="name-filter" name="name-filter" checked={displayBackgrounds} onChange={() => setDisplayBackgrounds(!displayBackgrounds)}/>
                </label>
                <label for="name-filter">Quote
                    <input type="checkbox" id="name-filter" name="name-filter" checked={displayQuote} onChange={() => setDisplayQuote(!displayQuote)}/>
                </label>
                <label for="name-filter">Image
                    <input type="checkbox" id="name-filter" name="name-filter" checked={displayImage} onChange={() => setDisplayImage(!displayImage)}/>
                </label>
                <label for="name-filter">Classes
                    <input type="checkbox" id="name-filter" name="name-filter" checked={displayClasses} onChange={() => setDisplayClasses(!displayClasses)}/>
                </label>
                <label for="name-filter">Links
                    <input type="checkbox" id="name-filter" name="name-filter" checked={displayLinks} onChange={() => setDisplayLinks(!displayLinks)}/>
                </label>

                <button id="show-slideshow" onClick={() => setShowSlideshow(!showSlideshow)}>
                { showSlideshow ? 'View All' : 'View Slideshow '}
                </button>
            </section>
            {error == null ? "" : <p>Error Code: {error}</p>}
            {
            showSlideshow ?
            <>
            <button onClick={() => indexOfSlideshow - 1 <= 0 ? setIndexOfSlideshow(filteredIntroductionData.length - 1) : setIndexOfSlideshow(indexOfSlideshow - 1)}>
                Previous
            </button>
            <button onClick={() => indexOfSlideshow + 1 >= filteredIntroductionData.length ? setIndexOfSlideshow(0) : setIndexOfSlideshow(indexOfSlideshow + 1)}>
                Next
            </button>

                <input 
                id="slider"
                type="range"
                min="0"
                max={filteredIntroductionData.length - 1}
                step="1"
                onChange={(e) => setIndexOfSlideshow(Number(e.target.value))}
                value={indexOfSlideshow}/>

            <StudentIntroduction student={filteredIntroductionData[indexOfSlideshow >= filteredIntroductionData.length ? 0 : indexOfSlideshow]} displayName={displayName} displayPersonalStatement={displayPersonalStatement} displayExtra={displayExtra} displayMascot={displayMascot} displayBackgrounds={displayBackgrounds} displayQuote={displayQuote} displayImage={displayImage} displayClasses={displayClasses} displayLinks={displayLinks}/>
                </>
            :
            
            filteredIntroductionData.map((student, index) => (
                <>
                <StudentIntroduction key={index} student={student} displayName={displayName} displayPersonalStatement={displayPersonalStatement} displayExtra={displayExtra} displayMascot={displayMascot} displayBackgrounds={displayBackgrounds} displayQuote={displayQuote} displayImage={displayImage} displayClasses={displayClasses} displayLinks={displayLinks}/>
                </>
            ))
            }
            </main>
        </>
    )
}