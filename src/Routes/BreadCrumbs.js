import React, { useMemo } from "react";
import { Breadcrumb } from "antd";
import { useLocation } from "react-router-dom";

export const BreadCrumb = () => {
    const location = useLocation();

    function toTitleCase(str) {
        return str.toLowerCase().split(' ').map(function(word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
    };

    const breadcrumbData = useMemo(() => {
        return location.pathname
            .replace(new RegExp("_", "g"), " ")
            .split("/")
            .filter((data) => data)
            .map((data) => toTitleCase(data))
    }, [location]);

    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            {
                breadcrumbData.map((data, index) => 
                    <Breadcrumb.Item key={index}>
                        {data}
                    </Breadcrumb.Item>
                )
            }
        </Breadcrumb>
    );
};