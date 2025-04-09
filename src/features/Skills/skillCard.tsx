import Styles from "./style.module.css";
import { Skill as SkillType } from "./index";

export const SkillCard = ({ skill }: { skill: SkillType }) => {
  return (
    <div className={Styles.card}>
      <div className={Styles.cover}>
        <div className={Styles.coverTitle}>
          <h3>{skill.name}</h3>
        </div>
        {skill.icon}
      </div>
      <div className={Styles.details}>
        <div className={Styles.detailsTitle}>
          <h3>Technical Areas</h3>
        </div>
        <div className={Styles.knowledgeList}>
          {skill.knowledgeList.map((knowledge, index) => (
            <div key={index} className={Styles.knowledge}>
              {`• ${knowledge}`}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
