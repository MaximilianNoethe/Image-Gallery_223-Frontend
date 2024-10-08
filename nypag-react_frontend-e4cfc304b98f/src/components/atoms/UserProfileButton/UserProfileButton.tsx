import {Button} from "@mui/material";
import {styled} from "@mui/joy";
import React from "react";
import {useNavigate} from "react-router-dom";
import logo from "../../../logo1.png";





type UserProfileButtonProps = {
    Userid: string | undefined
    size: string
}

const UserProfileButton: React.FC<UserProfileButtonProps> = ({Userid, size}) => {
    const navigate = useNavigate();

    const StyledButton = styled(Button)(({}) => ({
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 20,
        padding: '0px',
        lineHeight: 1.5,
        maxWidth: size,
        minWidth: size,
        maxHeight: size,
        minHeight: size,
        backgroundColor: '#ffffff',
        color: '#f',
        borderRadius: '50%',
        '&:hover': {
            backgroundColor: '#ffffff',
            boxShadow: 'none',
        }
    }));

    const handleClick = (event: { stopPropagation: () => void; }) => {
        event.stopPropagation();
        console.log("clicked")
        navigate(`/usergallery/${Userid}`)
    }

    return (
        <StyledButton variant="contained" onClick={handleClick}>
            <img
                src={logo}
                style={{filter: 'invert(100%)'}}
                width={"100%"}
                height={"100%"}
                alt="logo"
            />
        </StyledButton>
    )
}

export default UserProfileButton;