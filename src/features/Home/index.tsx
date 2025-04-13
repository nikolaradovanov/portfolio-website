import { Avatar, Button } from "@mui/material";
import AvatarImg from "../../Resources/avatar.png";
import Styles from "./style.module.css";
import {
  Code,
  EmailOutlined,
  FileDownloadOutlined,
  LocationOnOutlined,
  NearMe,
  WorkOutline,
} from "@mui/icons-material";

export const Home = () => {
  return (
    <>
      <div className={Styles.title}><h1>Software developer</h1></div>
      <div className={Styles.container}>
        <div className={Styles.leftSide}>
          <Avatar
            alt="MyPhoto"
            src={AvatarImg}
            className={Styles.avatar}
            sx={{ width: 130, height: 130 }}
          />
          <p className={Styles.cardName}>Nikola</p>
          <div className={Styles.cardItemsContainer}>
            <div className={Styles.cardItem}>
              <Code />
              <p className={Styles.cardItemText}>Full-Stack developer</p>
            </div>
            <div className={Styles.cardItem}>
              <EmailOutlined />
              <p className={Styles.cardItemText}>ovdebeli@gmail.com</p>
            </div>
            <div className={Styles.cardItem}>
              <LocationOnOutlined />
              <p className={Styles.cardItemText}>Čačak, Serbia</p>
            </div>
            <div className={Styles.cardItem}>
              <WorkOutline />
              <p className={Styles.cardItemText}>Open to work</p>
            </div>
          </div>
          <a href="/CV.pdf" download style={{ textDecoration: "none" }}>
            <Button className={Styles.downloadBtn} variant="contained" endIcon={<FileDownloadOutlined />}>
              Download CV
            </Button>
          </a>
        </div>
        <div className={Styles.centralContent}>
          <div className={Styles.mainText}>
            <h2>Hi</h2>
          </div>
          <div className={Styles.mainText}>
            <h2>I'm <span className={Styles.mainTextName}>Nikola</span></h2>
          </div>
          <div className={Styles.mainText}>
            <h2>Let's get to</h2>
          </div>
          <div className={Styles.mainText}>
            <h2>know each other</h2>
          </div>
          <div className={Styles.subText}>
            <p>
              I make awesome websites, check them out in  project section! Lorem ipsum, dolor sit amet consectetur
            </p>
          </div>
          <div className={Styles.contactText}>
            <p>
              Contact me
            </p>
            <NearMe fontSize="large"></NearMe>
          </div>

        </div>
        <div className={Styles.rightSide}>
          <div className={Styles.textItem}><div className={Styles.yearsTextNumber}>3</div><div className={Styles.yearsText}>Years Of Experince</div></div>
          <div className={Styles.textItem}><div className={Styles.yearsTextNumber}>6</div><div className={Styles.yearsText}>Projects created</div></div>
          <div className={Styles.textItem}><div className={Styles.yearsTextNumber}>9</div><div className={Styles.yearsText}>Years Of Programming</div></div>
        </div>
      </div>
    </>
  );
};
