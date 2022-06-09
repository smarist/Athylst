import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function NativePickers(props) {
  return (
      <TextField
        id="datetime-local"
        label={props.placeholder}
        type="datetime-local"
        defaultValue={""}
        name={props.name}
        sx={{ width: 250 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
  );
}
