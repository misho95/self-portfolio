import { FC, useContext } from "react";
import clsx from "clsx";
import { cn } from "../utils/cn";
import { Link, Outlet } from "react-router-dom";
import { PathNameContext } from "./layout";

interface PageWrapperType extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  title: string;
}

const PageWraper: FC<PageWrapperType> = ({
  value,
  children,
  className,
  title,
  ...props
}) => {
  const { pathname } = useContext(PathNameContext);

  return (
    <div
      className={cn(
        clsx("duration-200 flex", {
          "w-full": pathname === value,
          "w-[50px] sm:w-[100px] h-screen sticky top-0": pathname !== value,
        }),
        className
      )}
      {...props}
    >
      {pathname === value ? (
        <Outlet />
      ) : (
        <Link
          className="text-lg sm:text-2xl font-semibold uppercase flex justify-center items-center w-full"
          style={{ writingMode: "vertical-rl" }}
          to={value}
        >
          {title}
        </Link>
      )}
    </div>
  );
};

export default PageWraper;
