import { useEffect, useState } from "react";
export default function ClassIntros(){


useEffect(() => {
    // Set document title as a fallback
    document.title = "Josiah Blanding's Jagged Bat | ITIS3135 | Introduction";
  }, []); // empty dependency → runs once on mount
    const [introductionData, setIntroductionData] = useState([]);
    const [error, setError] = useState(null);
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
            {error == null ? "" : <p>Error Code: {error}</p>}
            {
            introductionData.map((student, index) => (
                <article key={index}>
                    <h3>
                        {student.name.first} {""}
                        {student.name.middleInitial ? student.name.middleInitial + " " : ""} {" "}
                        {student.name.preferred ? '"' + student.name.preferred + '" ' : ""} {" "}
                        {student.name.last} {" "}
                        {student.divider} {" "}
                        {student.mascot}
                    </h3>
                    <figure>
                        <img src={"https://dvonb.xyz" + student.media.src} width={300}/>
                        <figcaption>{student.media.caption}</figcaption>
                    </figure>
                    <p>{student.personalStatement}</p>
                    <ul>
                        <li><strong>Personal Background: </strong>{student.backgrounds.personal}</li>
                        <li><strong>Professional Background: </strong>{student.backgrounds.professional}</li>
                        <li><strong>Academic Background: </strong>{student.backgrounds.academic}</li>
                        <li><strong>Subject Background: </strong>{student.backgrounds.subject}</li>
                        <li>
                            <strong>Courses:</strong>
                            <ol>
                                {
                                    student.courses.map((course, index) => (
                                        <li>
                                        <strong>{course.dept} {course.num} - {course.name}</strong> : {course.reason}
                                        </li>
                                    ))}
                            </ol>
                        </li>
                        <li>
                            <strong>Fun Fact: </strong> {student.funFact}
                        </li>
                        <li>
                            <strong>Additional Information: </strong> {student.additional}
                        </li>
                    </ul>
                    <p>
                        <em>{student.quote.text}</em>
                        <hr />
                        - {student.quote.author}
                    </p>
                    <a href={student.links.charlotte}>CLT Web</a> <a href={student.links.github}>GitHub</a> <a href={student.links.freecodecamp}>freeCodeCamp</a> <a href={student.links.codecademy}>Codecademy</a> <a href={student.links.linkedin}>LinkedIn</a>
                    <hr />
                    </article>

            ))
            }
            </main>
        </>
    )
}