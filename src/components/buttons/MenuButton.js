import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const MenuButton = (props) => {
    const { item } = props;
    
    return(
        <>
            <Link to={item.link} key={item.title}>
                <MenuItem>
                    <img src={item.icon} alt={item.title} /> {item.title}
                </MenuItem>
            </Link>
        </>
    );
}

export default MenuButton;


const MenuItem = styled.div`
    display: grid;
    grid-template-columns: 24px auto;
    gap: 10px;
    align-items: center;

    padding: 10px;
    border-radius: 10px;

    transition: 0.5s ease-out;//la durée de la transition

    :hover {
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
                    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    }
`;
