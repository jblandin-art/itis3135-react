import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
export default function Introduction(){
    useEffect(() => {
        // Set document title as a fallback
        document.title = "Josiah Blanding's Jagged Bat | ITIS 3135 | Contract";
      }, []); // empty dependency → runs once on mount


    return(
        <>

        <Helmet>
            <title>Josiah Blanding's Jagged Bat | ITIS 3135 | Contract</title> 
            </Helmet>


        <main>
            <h2>Contract</h2>
            <p>I, Josiah Q. Blanding agree to abide by the terms in my Fall 2025 3135 053 Front-End Web Application Development with my instructor, D.I. von Briesen.
            I understand that all work that I do on my school and personal websites will be publicly available to the world. I will not put information there that is inappropriate for schoolwork, or that I wish to keep private.
        </p>
        <p>Signed: Josiah Q. Blanding – August 29, 2025</p>
        <p>I also understand that it is my work that counts for attendance, not logins or showing up
             for class. As such, failure to turn in assignments may show as absences. I also understand
              that given the structure and content of this class it’s possible to find many examples
               online or even view my classmates’ code directly. I swear that I will only use these
                resources to learn, and will not cut and paste code except where I have properly given
                 credit (i.e. external libraries) and never from my classmates. </p>
                 <p>Signed: Josiah Q. Blanding – August 29, 2025</p>
        </main>
        </>
    )
}