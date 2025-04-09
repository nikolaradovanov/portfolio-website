import Styles from "./style.module.css";

export const SkillCard = () => {
    return (
        <div className={Styles.card}>
            <div className={Styles.image}>
                <img
                    src="http://1.bp.blogspot.com/-EhPr4LXcywE/Udr594sPHTI/AAAAAAAAAJ4/Tv4y4CBLTPM/s400/Cristina-Otero-2.jpg"
                    alt="Profile"
                />
            </div>
            <div className={Styles.details}>
                <div className={Styles.center}>
                    <h1>
                        Someone famous<br />
                        <span>team leader</span>
                    </h1>
                    <p>Lorem ipsum is simple dummy text on the printing and typesetting industry.</p>
                </div>
            </div>
        </div>
    );
};
