import styles from "./About.module.css"

import { Link } from "react-router-dom";
const About = () =>{
    return (
        <div className={styles.about}>
            <h2>
                Sobre o Mini <span>Blog</span>
            </h2>
            <p> Aqui falamos sobre varias coisas</p>
            <Link className="btn" to="/posts/create" >Criar post</Link>
        </div>
    );
};

export default About;