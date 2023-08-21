import {Container} from "@/components/ListItem/styles";
import {HTMLAttributes} from "react";

type ListItemProps = HTMLAttributes<HTMLLIElement> &  {
    children: React.ReactNode
}
export const ListItem = ({ children , ...rest }: ListItemProps) => (<Container {...rest}>{children}</Container>)
