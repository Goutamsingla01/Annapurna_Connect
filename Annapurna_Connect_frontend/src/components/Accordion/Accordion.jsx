import styles from "./accordion.module.css";
import React,{useState} from "react";

function Accordion(props) {
    const [setActive, setActiveState] = useState("");

    function toggleAccordion() {
      setActiveState(setActive === "" ? "active" : "");

    }

 return (
    <>
   <div className={styles.accordion__section}>
     <button className={`${styles.accordion} ${setActive}`} onClick={toggleAccordion}>
       <p className={styles.accordion__title}>{props.title}</p>
       <p>{setActive === "active" ?'-':'+'}</p>
     </button>
     <div className={styles.accordion__content}>
       {setActive === "active" && <div
         className={styles.accordion__text}
         dangerouslySetInnerHTML={{ __html: props.content }}
       />}
     </div>
   </div>
   </>
 );
}

export default Accordion;