import styles from './Card.module.css';
function Card() {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardTop}>
                <img className = {styles.cardImage} src="src/assets/Queen.jpg" alt="Album cover A Night at the Opera" />
           
                <div className={styles.cardText}>
                       <h3>Queen</h3>
            <p>A Night at the Opera<br/>(1975)</p>
        </div>
              
            </div>
            <div className={styles.cardBottom}>
                <span>Rate this album</span>
                <span className={styles.stars}>☆ ☆ ☆ ☆ ☆</span>
            </div>
          
        </div>
  
     
    );
}
export default Card;


