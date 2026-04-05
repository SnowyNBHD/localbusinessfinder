'use client'

import { useState } from "react";
import styles from "./page.module.css";
import SurveyRadio from "@/app/components/SurveyRadio";


export default function Feedback() {
  const [isLost, setIsLost] = useState(false)
  const [problem, setProblem] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  if (!submitted) {
  return (
    <div id={styles.page}>
      <div id={styles.intro}>
        <h1>Help improve our site!</h1>
        <p>By answering this short user survey, you are directly helping us to improve our service. Thank you! </p>
      </div>
      <form id={styles.form} onSubmit={(e)=>{e.preventDefault(); setSubmitted(true)}}>
          <div className={styles.question}>
              Did you ever feel lost or confused? If so, where?
              <div className={styles.radio}>
                  <SurveyRadio name="lost" label="Yes" onChange={() => setIsLost(true)}/>
                  <SurveyRadio name="lost" label="No" onChange={() => setIsLost(false)}/>
              </div>

              {isLost ? <input className={styles.text} placeholder="What can we make more clear?" type="text"/>: null}
          </div>
          <div className={styles.question}>
              Overall, how would you rate our site?
              <div className={styles.radio}>
                <SurveyRadio name="overall" label="1"/>
                <SurveyRadio name="overall" label="2"/>
                <SurveyRadio name="overall" label="3"/>
                <SurveyRadio name="overall" label="4"/>
                <SurveyRadio name="overall" label="5"/>
              </div>
          </div>
          <div className={styles.question}>
              How likely are you to reccomend this website to others?
              <br/>
              (1 being not at all likely and 5 being extremely likely)
              <div className={styles.radio}>
                <SurveyRadio name="reccomend" label="1"/>
                <SurveyRadio name="reccomend" label="2"/>
                <SurveyRadio name="reccomend" label="3"/>
                <SurveyRadio name="reccomend" label="4"/>
                <SurveyRadio name="reccomend" label="5"/>
              </div>
          </div>
          <div className={styles.question}>
              Were there any problems we should know about?
              <div className={styles.radio}>
                <SurveyRadio name="problem" label="Yes" onChange={() => setProblem(true)}/>
                <SurveyRadio name="problem" label="No" onChange={() => setProblem(false)}/>
              </div>
              {problem ? <input className={styles.text} type="text" placeholder="What gave you trouble?"/>: null}
          </div>
          
          <input id={styles.submit} value="Submit" type="submit"/>
      </form>
    </div>
  );
  }
  return(
    <div id={styles.page}>
      <div id={styles.intro}>
        <h1>Thank you!</h1>
        <p>Your submission has been processed.</p>
      </div>
    </div>
  );
}
