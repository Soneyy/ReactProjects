import styles from "./Contact.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import "/images/person.png"
import { useState } from "react";




const ContactForm=()=>{
const[name,setName]=useState("ansu")
const[email,setEmail]=useState("ansu@gmail.com")
const[text,setText]=useState("bcjjsjsksk")

const onSubmit=(event)=> {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

}
  return (
    
    <section className={`${styles.container}`}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
        <Button  text="via support chat" icon={<MdMessage fontSize="24px"  />} />
        <Button text="via call" icon={<FaPhone fontSize="24px" />} />
        </div>
        <Button 
        isOutline= {true}
        text="via email form" icon={<MdMessage fontSize="24px" />} />
        <form onSubmit={onSubmit}>
            <div className={styles.form_control}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name"/>
            </div>
            <div className={styles.form_control}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email"/>
            </div>
            <div className={styles.form_control}>
                <label htmlFor="text">Text</label>
                <textarea type="text" rows="8"/>
            </div>
            <div style={{display:"flex",
            justifyContent:"end",}}>
            <Button 
        
        text="Submit button"/>
        </div>
            <div>
              {name+" "+email+ " "+text}
            </div>
        </form>
      </div>
      <div className={styles.contact_imgs}>
      <img src='/images/person.png' alt="contact image"/>
      </div>
    </section>
  );
};

export default ContactForm;
