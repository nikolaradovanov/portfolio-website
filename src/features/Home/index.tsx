import { Avatar, Button } from "@mui/material";
import AvatarImg from "../../Resources/avatar.png";
import Styles from "./style.module.css";
import {
  Code,
  EmailOutlined,
  FileDownloadOutlined,
  LocationOnOutlined,
  WorkOutline,
} from "@mui/icons-material";

export const Home = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.leftSide}>
        <Avatar
          alt="MyPhoto"
          src={AvatarImg}
          className={Styles.avatar}
          sx={{ width: 80, height: 80 }}
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
        <Button className={Styles.downloadBtn} variant="contained" endIcon={<FileDownloadOutlined />}>
          Download CV
        </Button>
      </div>
      <div className={Styles.centralContent}>
        <h1>Software developer</h1>
        <h2>Hi</h2>
        <h2>I'm Nikola</h2>
        <h2>People call me Beli</h2>
      </div>
      <div className={Styles.rightSide}>
        <div>3 Years Of Working Experince</div>
        <div>6 Projects</div>
        <div>9 Years Of Programming</div>
      </div>
    </div>
  );
};
