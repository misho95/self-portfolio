import { useLocation } from "react-router-dom";
import PageWraper from "./page-wraper";
import { createContext } from "react";
import { NAV_LINKS } from "../utils/nav-links";

export const PathNameContext = createContext<any>(null);

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <PathNameContext.Provider value={{ pathname }}>
      <div className="flex w-full min-h-screen">
        {NAV_LINKS.map((v, i) => {
          return (
            <PageWraper
              key={i}
              value={v.path}
              title={v.title}
              style={{ background: v.color }}
            />
          );
        })}
      </div>
    </PathNameContext.Provider>
  );
};

export default Layout;
