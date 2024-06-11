import { List, ListSubheader, Typography } from "@mui/material";
import { FC } from "react";

export const CalcHistory: FC = () => {
    return (
        <div className="flex-linitial w-56 mx-5">
            <List
                className="grid justify-center"
                subheader={
                    <ListSubheader>
                        <Typography className='text-3xl text-black'>歴史</Typography>
                    </ListSubheader>
                }>
            </List>
        </div>
    )
}