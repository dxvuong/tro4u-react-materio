import React from 'react'
import WrappComponent from '../Wrapp/page'
import "./page.scss"
import CheckboxCustom from './CheckboxCustom'
import Stack  from '@mui/material/Stack'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
const CheckboxComponent = () => {
    return (
        <WrappComponent>
            <div className="checkbox-container">
                <div>

                    <h2 >Basics Checkbox</h2>
                    <Stack alignItems="center">
                        <Stack direction="row" alignItems="center" justifyContent="flex-end">
                            <CheckboxCustom />
                            <span>default checkbox</span>

                        </Stack>
                        <Stack direction="row" alignItems="center" justifyContent="flex-end">
                            <CheckboxCustom disabled />
                            <span>disable checkbox</span>

                        </Stack>
                        <Stack direction="row" alignItems="center" justifyContent="flex-end">
                            <CheckboxCustom disabled checked />
                            <span>disable checked</span>

                        </Stack>

                    </Stack>

                    <h2 style={{ marginTop: "20px", }}>Color</h2>
                    <Stack direction="row" alignItems="center" justifyContent="center">
                        <CheckboxCustom defaultChecked color='default' />
                        <CheckboxCustom defaultChecked color='primary' />
                        <CheckboxCustom defaultChecked color='secondary' />
                        <CheckboxCustom defaultChecked color='error' />
                        <CheckboxCustom defaultChecked color='info' />
                        <CheckboxCustom defaultChecked color='success' />
                        <CheckboxCustom defaultChecked color='warning' />
                    </Stack>

                    <h2 style={{ marginTop: "20px", }}>Icon checkbox</h2>
                    <Stack direction="row" alignItems="center" justifyContent="center">
                        <CheckboxCustom icon={<FavoriteBorder />} checkedIcon={<Favorite />} color="secondary" />
                        <CheckboxCustom icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} color="secondary" />
                    </Stack>

                    <h2>Label Placement</h2>
                    <Stack alignItems="center" justifyContent="center">
                        <FormGroup row>
                            <FormControlLabel value='top' label='Top' labelPlacement='top' control={<CheckboxCustom />} sx={{ mr: 9.2 }} />
                            <FormControlLabel value='bottom' label='Bottom' labelPlacement='bottom' control={<CheckboxCustom />} />
                        </FormGroup>
                        <FormGroup row sx={{ mt: 4 }}>
                            <FormControlLabel value='start' label='Start' control={<CheckboxCustom />} labelPlacement='start' sx={{ mr: 4 }} />
                            <FormControlLabel value='end' control={<CheckboxCustom />} label='End' labelPlacement='end' />
                        </FormGroup>
                    </Stack>
                </div>


            </div>
        </WrappComponent>
    )
}

export default CheckboxComponent