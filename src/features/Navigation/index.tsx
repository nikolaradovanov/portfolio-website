import { IconButton, Link, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Styles from "./style.module.css";

export const NavigationBar = () => {
  const navigate = useNavigate();

  return (
    <div className={Styles.navContainer}>
      <Typography variant="h1" className={Styles.logoName}>
        Nikola Radovanovic
      </Typography>
      <div className={Styles.navActions}>
        <div className={Styles.navigationLinks}>
          <Link
            className={Styles.active}
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Link>
          <Typography style={{fontSize: "30px"}}>/</Typography>
          <Link
            onClick={() => {
              navigate("/");
            }}
          >
            Projects
          </Link>
          <Typography style={{fontSize: "30px"}}>/</Typography>
          <Link
            onClick={() => {
              navigate("/");
            }}
          >
            Blog
          </Link>
          <Typography style={{fontSize: "30px"}}>/</Typography>
          <Link
            onClick={() => {
              navigate("/");
            }}
          >
            About
          </Link>
        </div>
        <div>
          <IconButton>
            <GitHubIcon fontSize="large" color="primary" />
          </IconButton>
          <IconButton>
            <LinkedInIcon fontSize="large" color="primary" />
          </IconButton>
          <IconButton>
            <EmailIcon fontSize="large" color="primary" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
