import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import Navigation from "./navigation";

const MobileNav = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="lg:hidden">
      <button onClick={() => setModal(!modal)}>
        {!modal ? (
          <HiMenuAlt2 className="size-5" />
        ) : (
          <IoCloseOutline className="size-5" />
        )}
      </button>
      <Navigation modal={modal} />
    </div>
  );
};

export default MobileNav;
