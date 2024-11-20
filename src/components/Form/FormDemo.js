import React, { useState } from 'react';
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormHelperText, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Slider, TextField, Typography } from '@mui/material';

export default function FormDemo() {
  const [ text, setText ] = useState('');
  const [ radio, setRadio ] = useState('');
  const [ select, setSelect ] = useState('');
  const [ check1, setCheck1 ] = useState(false);
  const [ check2, setCheck2 ] = useState(false);
  const [ date, setDate ] = useState('');
  const [ slider, setSLider ] = useState(0);

  const [ textError, setTextError] = useState(false);
  const [ radioError, setRadioError] = useState(false);
  const [ selectError, setSelectError] = useState(false);
  const [ checkError, setCheckError] = useState(false);
  const [ dateError, setDateError] = useState(false);
  const [ sliderError, setSLiderError] = useState(false);

  const logValue = (e) => {
    e.preventDefault();

    setTextError(!text);
    setRadioError(!radio);
    setSelectError(!select);
    setCheckError(!check1 && !check2);
    setDateError(!date);
    setSLiderError(slider === 0);

    if(text && radio && select && (check1 || check2) && slider !== 0){
      console.log(`${text}, ${radio}, ${select}, checkbox: ${check1}, ${check2}, ${slider}`);
  
      setText('');
      setRadio('');
      setSelect('');
      setCheck1(false);
      setCheck2(false);
      setSLider(0);
    }
  };

  return (
    <Box sx={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', py: 1, gap: 4}}>
        <Typography variant='h5'>Form Demo</Typography>

        <Box component={'form'} sx={{width: '80%', display: 'flex', flexDirection: 'column', alignItems: 'start', gap: 3}} onSubmit={logValue}>
          {/* input */}
          <FormControl sx={{width: '100%'}}>
            <TextField label="Text input" value={text} onChange={(e) => setText(e.target.value)} variant="outlined" size='small' error={textError} sx={{width: '100%'}}/>

            {textError && <FormHelperText sx={{color: 'error.main'}}>Please select</FormHelperText>}
          </FormControl>

          {/* radio form */}
          <FormControl error={radioError}>
            <FormLabel id="demo-controlled-radio-buttons-group">Radio Input</FormLabel>

            <RadioGroup value={radio} onChange={(e) => setRadio(e.target.value)}>
              <FormControlLabel value="Radio Option 1" control={<Radio />} label="Radio Option 1"/>
              <FormControlLabel value="Radio Option 2" control={<Radio />} label="Radio Option 2" />
            </RadioGroup>

            {radioError && <FormHelperText>Please select</FormHelperText>}
          </FormControl>

          {/* dropdown input */}
          <FormControl variant="standard" fullWidth error={selectError}>
            <InputLabel id="dropdown-label" style={{ color: "#ccc" }}> Dropdown Input </InputLabel>

            <Select labelId="dropdown-label" value={select} onChange={(e) => setSelect(e.target.value)} inputProps={{ style: { borderBottom: "1px solid #ccc" }}}>
              <MenuItem value='Select option 1'>Option 1</MenuItem>
              <MenuItem value='Select option 2'>Option 2</MenuItem>
              <MenuItem value='Select option 3'>Option 3</MenuItem>
            </Select>

            {selectError && <FormHelperText>Please select</FormHelperText>}
          </FormControl>

          {/* date input */}
          <Box width={'100%'}>
            <InputLabel htmlFor="dateInput" sx={{mb: 1}}>Date Input</InputLabel>

            <TextField id='dateInput' type='date' size='small' value={date} onChange={(e) => setDate(e.target.value)} error={dateError}
              sx={{ width: '100%', "& .MuiOutlinedInput-notchedOutline": { border: "none" }, "&:focus-within .MuiOutlinedInput-notchedOutline": { border: "none" }, borderBottom: '1px solid gray' }}
            />

            {dateError && <FormHelperText sx={{color: 'error.main'}}>Please select a valid date.</FormHelperText> }
          </Box>

          {/* checkbox */}
          <FormControl error={checkError}>
            <FormLabel component="legend">Checkbox Input</FormLabel>

            <FormControlLabel control={<Checkbox checked={check1} onChange={(e) => setCheck1(e.target.checked)}/>} label="Checkbox Option 1" />
            <FormControlLabel control={<Checkbox checked={check2} onChange={(e) => setCheck2(e.target.checked)}/>} label="Checkbox Option 2" />

            {checkError && <FormHelperText>Please select</FormHelperText>}
          </FormControl>

          {/* slider input */}
          <FormControl sx={{width: '100%'}} error={sliderError}>
            <Typography id="input-slider" gutterBottom> Slider input </Typography>

            <Slider size="small" defaultValue={0} value={slider} onChange={(event, newvalue) => setSLider(newvalue)} />
            {sliderError && <FormHelperText>Please select</FormHelperText>}
          </FormControl>

          <Button variant="contained" sx={{bgcolor: 'lightgray', color: 'black', width: '100%', mt: 5, ":hover": {bgcolor: 'gray'}}} type='submit'>submit</Button>
          <Button variant="outlined" sx={{border: '2px solid lightgray', color: 'black', width: '100%'}}>reset</Button>
        </Box>
    </Box>
  )
}