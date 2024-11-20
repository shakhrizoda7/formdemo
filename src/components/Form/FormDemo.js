import React from 'react';
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormHelperText, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Slider, TextField, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

export default function FormDemo() {
  const {register, formState: {errors}, handleSubmit, control, reset} = useForm();

  const logValue = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Box sx={{width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 4}}>
        <Typography variant='h5'>Form Demo</Typography>

        <Box component={'form'} sx={{width: '80%', display: 'flex', flexDirection: 'column', alignItems: 'start', gap: 3}} onSubmit={handleSubmit(logValue)}>
          {/* input */}
          <FormControl sx={{width: '100%'}}>
            <TextField label="Text input" variant="outlined" size='small' sx={{width: '100%'}} error={!!errors.text} {...register('text', {required: 'Text required', minLength: {value: 5, message: 'Text must be at least 5 characters long'}})}/>
            {errors.text && <Typography color={'error.main'} fontSize={'12px'}>{errors.text.message}</Typography>}
          </FormControl>


          {/* radio form */}
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group" >Radio Input</FormLabel>

            <RadioGroup>
              <FormControlLabel value="Radio Option 1" control={<Radio />} label="Radio Option 1" {...register("radio", { required: "Please select an option" })}/>
              <FormControlLabel value="Radio Option 2" control={<Radio />} label="Radio Option 2" {...register("radio", { required: "Please select an option" })}/>
            </RadioGroup>

            {errors.radio && (
              <FormHelperText sx={{ color: "error.main" }}>
                {errors.radio.message}
              </FormHelperText>
            )}
          </FormControl>


          {/* dropdown input */}
          <FormControl variant="standard" fullWidth>
            <InputLabel id="dropdown-label" style={{ color: "#ccc" }}> Dropdown Input </InputLabel>

            <Controller name='dropdown' defaultValue="Select option 1" control={control} rules={{ required: 'Please select an option'}} 
              render={({field}) => (
                <Select {...field} error={!!errors.dropdown} labelId="dropdown-label" inputProps={{ style: { borderBottom: "1px solid #ccc" }}}>
                  <MenuItem value='Select option 1'>Select option 1</MenuItem>
                  <MenuItem value='Select option 2'>Select option 2</MenuItem>
                  <MenuItem value='Select option 3'>Select option 3</MenuItem>
                </Select>
            )} />

            {errors.dropdown && <FormHelperText sx={{color: 'error.main'}}>{errors.dropdown.message}</FormHelperText>}
          </FormControl>


          {/* date input */}
          <Box width={'100%'}>
            <InputLabel htmlFor="dateInput" sx={{mb: 1}}>Date Input</InputLabel>

            <TextField id='dateInput' type='date' size='small' {...register('date', {required: 'Please select a date'})}
              sx={{ width: '100%', "& .MuiOutlinedInput-notchedOutline": { border: "none" }, "&:focus-within .MuiOutlinedInput-notchedOutline": { border: "none" }, borderBottom: '1px solid gray' }}
            />

            {errors.date && <FormHelperText sx={{color: 'error.main'}}>{errors.date.message}</FormHelperText>}
          </Box>


          {/* checkbox */}
          <FormControl>
            <FormLabel component="legend">Checkbox Input</FormLabel>

            <FormControlLabel control={<Checkbox/>} label="Checkbox Option 1" {...register('checkbox', {required: 'At least one checkbox must be selected'})}/>
            <FormControlLabel control={<Checkbox/>} label="Checkbox Option 2" {...register('checkbox', {required: 'At least one checkbox must be selected'})}/>

            {errors.checkbox && (
              <FormHelperText sx={{ color: 'error.main' }}>
                {errors.checkbox.message}
              </FormHelperText>
            )}          
          </FormControl>


          {/* slider input */}
          <FormControl sx={{width: '100%'}}>
            <Typography id="input-slider" gutterBottom> Slider input </Typography>

            <Controller
              name="slider"
              control={control}
              defaultValue={0}
              rules={{ validate: (value) => value > 0 || "Please select a value" }}
              render={({ field }) => (
                <Slider {...field} size="small" value={field.value} onChange={(_, value) => field.onChange(value)}/>
              )}
            />

            {errors.slider && <FormHelperText sx={{color: 'error.main'}}>{errors.slider.message}</FormHelperText>}
          </FormControl>

          <Button variant="contained" sx={{bgcolor: 'lightgray', color: 'black', width: '100%', mt: 5, ":hover": {bgcolor: 'gray'}}} type='submit'>submit</Button>
        </Box>
    </Box>
  )
}