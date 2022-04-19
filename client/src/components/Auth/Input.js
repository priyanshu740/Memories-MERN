import { IconButton, InputAdornment, TextField } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import React from 'react'

function Input({half,label,showPass,handleChng,type,name,handleshowpassword}) {
    return (
        <div className='input'>
           <Grid item xs={12} sm={half ? 6 :12}>
               <TextField  
                variant='standard'
                fullWidth
                required
                name={name}
                label={label}
                type={type}
                onChange={handleChng}
                handleshowpassword={handleshowpassword}
                InputProps={name === 'password' ? {
                    endAdornment:(
                        <InputAdornment position='end'>
                            <IconButton onClick={showPass}>
                                {type === 'password' ? <Visibility/> : <VisibilityOff/>}
                            </IconButton>
                        </InputAdornment>
                    ),
                }:null}
               />
           </Grid>
        </div>
    )
}

export default Input
 