import Icon from "@ant-design/icons";
import React from "react";

export type AntIconProps = React.HTMLProps<HTMLSpanElement> &
    React.RefAttributes<HTMLSpanElement>;

export const toAntIcon = (
    component: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & {
            title?: string | undefined;
        }
    >,
    props: AntIconProps
) => <Icon component={component} {...props} />;
