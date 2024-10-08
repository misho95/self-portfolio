import { Link } from "react-router-dom";
import { NAV_LINKS } from "../utils/data";

const DesktopNav = () => {
  return (
    <div className="hidden lg:flex gap-5">
      {NAV_LINKS.map((link) => {
        return (
          <Link className="capitalize" key={link.id} to={link.url}>
            {link.title}
          </Link>
        );
      })}
    </div>
  );
};

export default DesktopNav;
