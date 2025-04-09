import { SkillCard } from "./SkillCard";
import Styles from "./style.module.css";
import { motion } from "framer-motion";
import { SpringSvg } from "./Icons/spring";
import { SpringBootSvg } from "./Icons/spring-boot";
import { JSX } from "react";

export type Skill = {
  name: string;
  icon: JSX.Element;
  knowledgeList: string[];
};

const skillList: Skill[] = [
  {
    name: "JavaScript",
    icon: <SpringSvg />,
    knowledgeList: [
      "Vite",
      "Jest",
      "Cypress",
      "Firebase",
      "Azure",
      "AWS",
      "Kubernetes",
      "Terraform",
      "RabbitMQ",
      "Elasticsearch",
      "Redis",
      "Socket.IO",
      "Deno",
      "Three.js",
      "Electron",
      "Figma",
      "Storybook",
      "Jira",
    ],
  },
  { name: "HTML", icon: <SpringSvg />, knowledgeList: ["CSS", "JavaScript"] },
  { name: "CSS", icon: <SpringSvg />, knowledgeList: ["HTML", "JavaScript"] },
  { name: "TypeScript", icon: <SpringSvg />, knowledgeList: ["JavaScript"] },
  { name: "React", icon: <SpringSvg />, knowledgeList: ["JavaScript"] },
  { name: "Node.js", icon: <SpringSvg />, knowledgeList: ["JavaScript"] },
  { name: "Python", icon: <SpringSvg />, knowledgeList: ["JavaScript"] },
  { name: "Java", icon: <SpringBootSvg />, knowledgeList: ["JavaScript"] },
  { name: "Linux", icon: <SpringBootSvg />, knowledgeList: ["JavaScript"] },
  { name: "Git", icon: <SpringBootSvg />, knowledgeList: ["JavaScript"] },
  { name: "Docker", icon: <SpringBootSvg />, knowledgeList: ["JavaScript"] },
];

export const Skills = () => {
  return (
    <>
      <h2 className={Styles.skillsSectionTitle}>Skills</h2>
      <div className={Styles.grid}>
        {skillList.map((skill, rowIndex) => (
          <motion.div
            key={rowIndex}
            className={Styles.row}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 1 }}
          >
            <SkillCard skill={skill} />
          </motion.div>
        ))}
      </div>
    </>
  );
};
