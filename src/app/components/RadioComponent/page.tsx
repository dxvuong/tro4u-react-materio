import React from 'react'
import "./page.scss"
import WrappComponent from '../Wrapp/page'
import RadioCustom from './RadioCustom'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

const RadioComponent = () => {
    return (
        <WrappComponent>
            <div className='radio-container'>
                <h2>Basic radio</h2>
                <div className="radio-item" >

                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Column</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<RadioCustom sx={{ '&.Mui-checked': { color: "#9155fd" } }} />} label="Female" />
                            <FormControlLabel value="male" control={<RadioCustom sx={{ '&.Mui-checked': { color: "#9155fd" } }} />} label="Male" />
                            <FormControlLabel value="other" control={<RadioCustom sx={{ '&.Mui-checked': { color: "#9155fd" } }} />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="radio-item" >

                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Row</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                            row
                        >
                            <FormControlLabel value="female" control={<RadioCustom sx={{ '&.Mui-checked': { color: "#9155fd" } }} />} label="Female" />
                            <FormControlLabel value="male" control={<RadioCustom sx={{ '&.Mui-checked': { color: "#9155fd" } }} />} label="Male" />
                            <FormControlLabel value="other" control={<RadioCustom sx={{ '&.Mui-checked': { color: "#9155fd" } }} />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <h2>Size</h2>
                <div className="radio-item" >
                    <FormControl>

                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                            row
                        >
                            <FormControlLabel value="female" control={<RadioCustom sx={{ '&.Mui-checked': { color: "#9155fd" } }} size="small" />} label />
                            <FormControlLabel value="male" control={<RadioCustom sx={{ '&.Mui-checked': { color: "#9155fd" } }} size="medium" />} label />

                        </RadioGroup>
                    </FormControl>

                </div>
                <h2>Color</h2>
                <div className="radio-item">


                    <RadioGroup row aria-label='colored' name='colored' defaultValue='primary'>
                        <FormControlLabel value='primary' control={<RadioCustom sx={{ '&.Mui-checked': { color: "#9155fd" } }} />} label='Primary' />
                        <FormControlLabel value='secondary' control={<RadioCustom color='secondary' />} label='Secondary' />
                        <FormControlLabel value='success' label='Success' control={<RadioCustom color='success' />} />
                        <FormControlLabel value='error' label='Error' control={<RadioCustom color='error' />} />
                        <FormControlLabel value='warning' label='Warning' control={<RadioCustom color='warning' />} />
                        <FormControlLabel value='info' label='Info' control={<RadioCustom color='info' />} />
                    </RadioGroup>


                </div>
                <h2>Label Placement</h2>
                <div className="radio-item">
                    <FormControl>
                        <RadioGroup row aria-label='position' name='vertical' defaultValue='top'>
                            <FormControlLabel value='top' label='Top' labelPlacement='top' sx={{ mr: 8.8 }} control={<RadioCustom sx={{ '&.Mui-checked': { color: "#9155fd" } }} />} />
                            <FormControlLabel value='bottom' control={<RadioCustom sx={{ '&.Mui-checked': { color: "#9155fd" } }} />} label='Bottom' labelPlacement='bottom' />
                        </RadioGroup>
                        <RadioGroup row aria-label='position' name='horizontal' defaultValue='start' sx={{ mt: 4 }}>
                            <FormControlLabel value='start' label='Start' labelPlacement='start' sx={{ mr: 4 }} control={<RadioCustom sx={{ '&.Mui-checked': { color: "#9155fd" } }} />} />
                            <FormControlLabel value='end' control={<RadioCustom sx={{ '&.Mui-checked': { color: "#9155fd" } }} />} label='End' />
                        </RadioGroup>
                    </FormControl>

                </div>
            </div>
        </WrappComponent>

    )
}

export default RadioComponent