export default function StudentIntroduction({student, displayName, displayPersonalStatement, displayExtra, displayMascot, displayBackgrounds, displayQuote, displayImage, displayClasses, displayLinks}){
    return(
        <article>
                    <h3>
                        { displayName &&
                        `${student.name.first} ${""}
                        ${student.name.middleInitial ? student.name.middleInitial + " " : ""} ${" "}
                        ${student.name.preferred ? '"' + student.name.preferred + '" ' : ""} ${" "}
                        ${student.name.last} ${" "}`
                        }
                        { displayName && displayMascot &&
                        `${student.divider} ${" "}`
                        }

                        { displayMascot &&
                        student.mascot
                        }
                    </h3>
                    { displayImage &&
                    <figure>
                        <img src={"https://dvonb.xyz" + student.media.src} width={300}/>
                        <figcaption>{student.media.caption}</figcaption>
                    </figure>
                    }
                    { displayPersonalStatement &&
                    <p>{student.personalStatement}</p>
                    }
                    
                    <ul>
                        { displayBackgrounds && <>
                        <li><strong>Personal Background: </strong>{student.backgrounds.personal}</li>
                        <li><strong>Professional Background: </strong>{student.backgrounds.professional}</li>
                        <li><strong>Academic Background: </strong>{student.backgrounds.academic}</li>
                        <li><strong>Subject Background: </strong>{student.backgrounds.subject}</li>
                        </>
                    }
                        { displayClasses &&
                        <li>
                            <strong>Courses:</strong>
                            <ol>
                                {
                                    student.courses.map((course, index) => (
                                        <li key={index}>
                                        <strong>{course.dept} {course.num} - {course.name}</strong> : {course.reason}
                                        </li>
                                    ))}
                            </ol>
                        </li>
                        }
                        { displayExtra &&
                        <>
                        <li>
                            <strong>Fun Fact: </strong> {student.funFact}
                        </li>
                        <li>
                            <strong>Additional Information: </strong> {student.additional}
                        </li>
                        </>
                        }
                    </ul>
                    { displayQuote &&
                    <p>
                        <em>{student.quote.text}</em>
                        <hr />
                        - {student.quote.author}
                    </p>
                    }
                    { displayLinks &&
                    <>
                    <a href={student.links.charlotte}>CLT Web</a> <a href={student.links.github}>GitHub</a> <a href={student.links.freecodecamp}>freeCodeCamp</a> <a href={student.links.codecademy}>Codecademy</a> <a href={student.links.linkedin}>LinkedIn</a>
                    <hr />
                    </>
                    }
                    </article>
    )
}