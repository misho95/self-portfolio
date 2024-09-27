import { NAV_LINKS } from "../utils/data";
import PageWrapper from "./page-wrapper";

const Layout = () => {
  return (
    <>
      {/* desktop */}
      <div className="hidden sm:flex min-h-screen">
        <RenderLinks />
      </div>
      {/* mobile */}
      <div className="flex flex-col sm:hidden h-screen">
        <RenderLinks mobile />
      </div>
    </>
  );
};

const RenderLinks = ({ mobile = false }: { mobile?: boolean }) => {
  return (
    <>
      {NAV_LINKS.map((nav) => {
        return (
          <PageWrapper
            key={nav.id}
            title={nav.title}
            value={nav.url}
            className={nav.className}
            mobile={mobile}
          />
        );
      })}
    </>
  );
};

export default Layout;
