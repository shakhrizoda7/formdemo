import { Box, Button, Checkbox, FormControl, FormControlLabel, FormHelperText, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'

export default function FormTwo() {
  const {control, handleSubmit, reset, watch, formState: {errors}} = useForm();

  const alertValue = (data) => {
    alert(JSON.stringify(data, null, 2));
    reset();
  }

  const name = watch('firstname');

  useEffect(() => {
    console.log('ism ozgardi');
    
  }, [name])

  return (
    <Box sx={{width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 4}}>
        <Typography variant='h5'>Form</Typography>

        <Box component={'form'} sx={{width: '80%', display: 'flex', flexDirection: 'column', alignItems: 'start', gap: 3}} onSubmit={handleSubmit(alertValue)}>

            {/* first name */}
            <Box width={'100%'}>
                <Controller name='firstname' control={control} defaultValue='' rules={{required: 'Please enter your First name', minLength: {value: 4, message: 'First Name must be at least 4 characters long'}}}
                    render={({field}) => (
                        <TextField {...field} error={errors.firstname} label="First Name" variant="standard" fullWidth/>
                    )}
                />
                {errors.firstname && <FormHelperText sx={{color: 'error.main'}}>{errors.firstname.message}</FormHelperText>}
            </Box>

            {/* last name */}
            <Box width={'100%'}>
                <Controller name='lastname' control={control} defaultValue=''  rules={{required: 'Please enter your Last name', minLength: {value: 5, message: 'Last Name must be at least 4 characters long'}}}
                    render={({field}) => (
                        <TextField {...field} error={errors.lastname} label="Last Name" variant="standard" fullWidth/>
                    )}
                />
                {errors.lastname && <FormHelperText sx={{color: 'error.main'}}>{errors.lastname.message}</FormHelperText>}
            </Box>

            {/* email */}
            <Box width={'100%'}>
                <Controller name='email' control={control} defaultValue='' rules={{required: 'Please enter your Email'}}
                    render={({field}) => (
                        <TextField {...field} error={errors.email} label="Email" type='email' variant="standard" fullWidth/>
                    )}
                />
                {errors.email && <FormHelperText sx={{color: 'error.main'}}>{errors.email.message}</FormHelperText>}
            </Box>

            {/* gender */}
            <Box>
                <Controller name='gender' control={control} defaultValue='' rules={{required: 'Please choose one'}}
                    render={({field}) => (
                        <RadioGroup {...field}  onChange={(e) => field.onChange(e.target.value)}>
                            <FormControlLabel value="male" control={<Radio />} label="Male"/>
                            <FormControlLabel value="female" control={<Radio />} label="Female"/>
                        </RadioGroup>
                    )}
                />
                {errors.gender && <FormHelperText sx={{color: 'error.main'}}>{errors.gender.message}</FormHelperText>}
            </Box>

            {/* colors */}
            <Box width={'100%'}>
                <Controller name='favoriteColor' control={control} defaultValue='' rules={{required: 'Please choose one'}}
                    render={({field}) => (
                        <FormControl variant="standard" sx={{ width: '100%' }}>
                            <InputLabel id="demo-simple-select-standard-label">Favourite Color</InputLabel>

                            <Select {...field} onChange={(e) => field.onChange(e.target.value)} id="demo-simple-select-standard">
                                <MenuItem value='Red'>Red</MenuItem>
                                <MenuItem value='Green'>Green</MenuItem>
                                <MenuItem value='Blue'>Blue</MenuItem>
                            </Select>
                        </FormControl>
                    )}
                />
                {errors.favoriteColor && <FormHelperText sx={{color: 'error.main'}}>{errors.favoriteColor.message}</FormHelperText>}
            </Box>

            {/* employed */}
            <Box>
                <Controller name='employed' control={control} defaultValue={false} rules={{required: 'Please choose'}}
                    render={({field}) => (
                        <FormControlLabel control={<Checkbox {...field} checked={field.value}/>} label="Employed" />
                    )}
                />
                {errors.employed && <FormHelperText sx={{color: 'error.main'}}>{errors.employed.message}</FormHelperText>}
            </Box>

            {/* note */}
            <Box width={'100%'}>
                <Controller name='notes' control={control} defaultValue='' rules={{required: 'Please enter Note'}}
                    render={({field}) => (
                        <TextField {...field} id="standard-basic" label="Notes" variant="standard" fullWidth />
                    )}
                />
                {errors.notes && <FormHelperText sx={{color: 'error.main'}}>{errors.notes.message}</FormHelperText>}
            </Box>

            {/* buttons */}
            <Box sx={{width: '100%', display: 'flex', gap: 2, justifyContent: 'center', mt: 2}}>
                <Button variant='contained' sx={{textTransform: 'none'}} type='submit'>Submit</Button>
                <Button variant='contained' disabled sx={{textTransform: 'none'}}>Clear Values</Button>
            </Box>
        </Box>

    </Box>
  )
}
