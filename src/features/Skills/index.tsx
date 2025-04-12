import { SkillCard } from "./skillCard";
import Styles from "./style.module.css";
import { motion } from "framer-motion";
import { SpringSvg } from "./Icons/spring";
import { SpringBootSvg } from "./Icons/spring-boot";
import { JSX } from "react";
import { CPlusPlusSvg } from "./Icons/cplusplus";
import { AwsSvg } from "./Icons/aws";
import { TuxSvg } from "./Icons/tux";
import { JavaSvg } from "./Icons/java";
import { GitSvg } from "./Icons/git";
import { DockerSvg } from "./Icons/docker";
import { HtmlSvg } from "./Icons/html";
import { OopSvg } from "./Icons/oop.";
import { PostgreSqlSvg } from "./Icons/postgresql";
import { CSvg } from "./Icons/c";
import { CssSvg } from "./Icons/css";

export type Skill = {
  name: string;
  icon: JSX.Element;
  knowledgeList: string[];
};

const skillList: Skill[] = [
  {
    name: "Spring",
    icon: <SpringSvg />,
    knowledgeList: [
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Spring MVC",
      "Spring Cloud",
      "Spring AOP",
      "Spring Batch",
      "Spring WebFlux",
      "Actuator",
      "Thymeleaf",
    ],
  },
  {
    name: "Java",
    icon: <JavaSvg />,
    knowledgeList: [
      "Streams API",
      "Collections Framework",
      "Multithreading",
      "JVM Internals",
      "Garbage Collection",
      "Lambdas",
      "Java 8+ Features",
      "JUnit",
      "Maven",
      "Gradle",
    ],
  },
  {
    name: "OOP",
    icon: <OopSvg />,
    knowledgeList: [
      "Encapsulation",
      "Abstraction",
      "Inheritance",
      "Polymorphism",
      "Composition",
      "Interfaces",
      "SOLID Principles",
      "Design Patterns",
      "Coupling & Cohesion",
      "UML Diagrams",
    ],
  },
  {
    name: "Docker",
    icon: <DockerSvg />,
    knowledgeList: [
      "Dockerfile",
      "Images & Containers",
      "Volumes",
      "Docker Compose",
      "Networking",
      "Docker Swarm",
      "Multi-stage Builds",
      "Container Logs",
      "Healthchecks",
      "Docker Hub",
    ],
  },
  {
    name: "Git",
    icon: <GitSvg />,
    knowledgeList: [
      "Branching",
      "Merging",
      "Rebase",
      "Stashing",
      "Cherry-pick",
      "Git Hooks",
      "Git Flow",
      "Submodules",
      "Reverting",
      "Conflict Resolution",
    ],
  },
  {
    name: "Linux",
    icon: <TuxSvg />,
    knowledgeList: [
      "File System",
      "Permissions",
      "Bash Scripting",
      "Systemd",
      "Networking",
      "Cron Jobs",
      "Package Managers",
      "SSH",
      "Logs & Journald",
      "Process Management",
    ],
  },
  {
    name: "PostgreSQL",
    icon: <PostgreSqlSvg />,
    knowledgeList: [
      "SQL Queries",
      "Indexes",
      "Joins",
      "Transactions",
      "Views",
      "Stored Procedures",
      "Triggers",
      "Extensions (e.g. PostGIS)",
      "Backup & Restore",
      "Query Optimization",
    ],
  },
  {
    name: "AWS",
    icon: <AwsSvg />,
    knowledgeList: [
      "EC2",
      "S3",
      "RDS",
      "Lambda",
      "VPC",
      "IAM",
      "CloudWatch",
      "Elastic Beanstalk",
      "Route 53",
      "CloudFormation",
    ],
  },
  {
    name: "HTML",
    icon: <HtmlSvg />,
    knowledgeList: [
      "Semantic HTML",
      "Forms",
      "Media Elements",
      "Canvas & SVG",
      "Accessibility (ARIA)",
      "Meta Tags",
      "HTML5 APIs",
      "Tables",
      "Iframes",
      "DOCTYPE",
    ],
  },
  {
    name: "CSS",
    icon: <CssSvg />,
    knowledgeList: [
      "Flexbox",
      "Grid",
      "Animations",
      "Responsive Design",
      "Variables",
      "Selectors",
      "Pseudo-classes",
      "Media Queries",
      "Preprocessors (Sass)",
      "BEM Naming",
    ],
  },
  {
    name: "C",
    icon: <CSvg />,
    knowledgeList: [
      "Pointers",
      "Memory Management",
      "Structs",
      "File I/O",
      "Preprocessors",
      "Bitwise Operations",
      "Dynamic Allocation",
      "Compiling & Linking",
      "Header Files",
      "C Standard Library",
    ],
  },
  {
    name: "C++",
    icon: <CPlusPlusSvg/>,
    knowledgeList: [
      "OOP",
      "STL",
      "Templates",
      "Smart Pointers",
      "Exception Handling",
      "Operator Overloading",
      "Inheritance",
      "Polymorphism",
      "RAII",
      "C++11/14/17 Features",
    ],
  }
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
            viewport={{ once: true, amount: 0.8 }}
          >
            <SkillCard skill={skill} />
          </motion.div>
        ))}
      </div>
    </>
  );
};
