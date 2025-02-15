import { ReactNode } from "react";

interface NotFoundDataProps {
    children: ReactNode
}

const NotFoundData = ({children}: NotFoundDataProps) => {
    return (
        <div>{children}</div>
    )
};

export default NotFoundData
