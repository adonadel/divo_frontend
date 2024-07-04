import { Box, Typography } from "@mui/material"
import { tagTypes } from "./TagTypes"

export const Tag = (props: tagTypes) => {
    return (
        <Box sx={{
            display: 'flex',            
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem',
            borderRadius: '1rem',
            width: 'fit-content',
            backgroundColor: `${props.backgroundColor ? props.backgroundColor : 'grey.200'}`,
        }}>
            {props.icon}
            <Typography variant="body1" color={props.color ? props.icon : 'initial'} sx={{
                fontWeight: 'normal',
                fontSize: '0.8rem',                            
            }}>
                {props.text}
            </Typography>
        </Box>
    )
}