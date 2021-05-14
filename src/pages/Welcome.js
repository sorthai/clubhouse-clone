import React from "react";
import style from "../style/welcome.module.css"

export default function Welcome () {
    return <div className={style.WelcomeContainer}>
        <h1>Welcome!</h1>
        <div className = {style.WelcomeInfo}>
            <p>
                This is a clubhouse onboarding page. I am making this page just for learning react. This text is dummy and I just don't know why am I writing it. Still I am writing it. Mickey Mouse Clubhouse. This is a clubhouse onboarding page. I am making this page just for learning react. This text is dummy and I just don't know why am I writing it. Still I am writing it. Mickey Mouse Clubhouse.
            </p>
            <p>
                This is a clubhouse onboarding page. I am making this page just for learning react. This text is dummy and I just don't know why am I writing it. Still I am writing it. Mickey Mouse Clubhouse.
            </p>
            <p>
                From Team Sort Hai
            </p>
        </div>
    </div>
}