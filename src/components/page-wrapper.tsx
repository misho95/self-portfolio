import { FC } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { cn } from "../utils/cn";
import clsx from "clsx";
import PageLayout from "./page-layout";

interface PageWrapperProps extends React.HTMLAttributes<HTMLElement> {
  value: string;
  title: string;
  mobile?: boolean;
}

const PageWrapper: FC<PageWrapperProps> = ({
  className,
  title,
  value,
  mobile = false,
  ...props
}) => {
  const { pathname } = useLocation();

  return (
    <main
      className={cn(
        clsx("flex duration-500", {
          "h-full overflow-auto": pathname === value && mobile,
          "h-[80px]": pathname !== value && mobile,
          "w-full": pathname === value && !mobile,
          "w-[100px] sticky top-0 h-screen": pathname !== value && !mobile,
        }),
        className
      )}
      {...props}
    >
      {pathname === value ? (
        <PageLayout>
          <Outlet />
        </PageLayout>
      ) : (
        <Link
          to={value}
          className="w-full h-full text-lg sm:text-2xl font-semibold uppercase flex justify-center items-center custom-title"
        >
          {title}
        </Link>
      )}
    </main>
  );
};

export default PageWrapper;
