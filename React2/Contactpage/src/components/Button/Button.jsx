
import styles from "./Button.module.css";

const button = ({isOutline,icon,text, ...rest}) => {
  return (
    <div>
      <button
      {...rest} className={isOutline ? styles.outline_btn : styles.primary_btn}>
        {icon}
        {text} 
      </button>
    </div>
  );
};

export default button;
