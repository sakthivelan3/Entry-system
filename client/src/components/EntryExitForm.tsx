import React, { useState } from 'react';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl, Box, Typography } from '@mui/material';
import { registerEntry, registerExit } from '../services/api';

const EntryExitForm: React.FC = () => {
  const [personId, setPersonId] = useState('');
  const [gate, setGate] = useState('');
  const [type, setType] = useState<'entry' | 'exit'>('entry');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (type === 'entry') {
      await registerEntry(personId, gate);
    } else {
      await registerExit(personId, gate);
    }
    setPersonId('');
    setGate('');
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Entry/Exit Form
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Person ID"
          value={personId}
          onChange={(e) => setPersonId(e.target.value)}
          required
        />
        <TextField
          label="Gate"
          value={gate}
          onChange={(e) => setGate(e.target.value)}
          required
        />
        <FormControl>
          <InputLabel></InputLabel>
          <Select value={type} onChange={(e) => setType(e.target.value as 'entry' | 'exit')}>
            <MenuItem value="entry">Entry</MenuItem>
            <MenuItem value="exit">Exit</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default EntryExitForm;
