import { ReactNode } from "react";
import Header from "./header";

type PropsType = {
  children: ReactNode;
};

const PageLayout = ({ children }: PropsType) => {
  return (
    <div className="flex-1 flex flex-col w-full h-full">
      <Header />
      <main className="p-5 flex-1">{children}</main>
    </div>
  );
};

export default PageLayout;
