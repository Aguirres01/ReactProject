import styles from "./Footer.module.css"
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul>

            <div className={styles.social}>
                <img src="./fb.png" alt="logo facebook" />
                <img src="./tw.png" alt="logo twiter" />
                <img src="./ig.png" alt="logo insta" />
            </div>

            <div>
                <img src="./logo.png" alt="logo Organo" />
            </div>
            <div>
                <h5>
                    Desenvolvido por Aguirres01
                </h5>
            </div>

            </ul>
        </footer>
    );
}
export default Footer;