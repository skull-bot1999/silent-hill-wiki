import { ReactNode } from "react";
import { SilentHillPage } from "./SilentHillPage";
import { SubscribeForm } from "./SubscribeForm";

export const BasePage = ({
    title,
    subtitle,
    children,
}: {
    title: string | JSX.Element;
    subtitle?: string | JSX.Element;
    children: ReactNode;
}) => {
    return (
        <div className="body">
            <h1>{title}</h1>
            <hr />

            {subtitle && subtitle}
            <div className="lg:grid grid-cols-4 mt-5 gap-5 sm:flex sm:flex-col">
                <div className="lg:col-span-3 card">{children}</div>
                <div className="col-span-1 flex flex-col items-center">
                    <SilentHillPage />
                    <SubscribeForm />
                </div>
            </div>
        </div>
    );
};
