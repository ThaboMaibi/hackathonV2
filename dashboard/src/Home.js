import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ProcessImage from './ProcessImage';
import Dashboard from './Dashboard';
import DriversAlert from './DriversAlert';

export default function Home() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider',mt:7 }}>
          <TabList 
            onChange={handleChange} 
            aria-label="lab API tabs example" 
            sx={{ justifyContent: 'center', display: 'flex' }}
          >
            <Tab label="Process Image" value="1" sx={{ flexGrow: 1,alignSelf:'center' }} />
            <Tab label="Dashboard" value="2" sx={{ flexGrow: 1,alignSelf:'center' }} />
            <Tab label="Drivers Alert" value="3" sx={{ flexGrow: 1,alignSelf:'center' }} />
          </TabList>
        </Box>
        <TabPanel value="1"><ProcessImage/></TabPanel>
        <TabPanel value="2"><Dashboard/></TabPanel>
        <TabPanel value="3"><DriversAlert/></TabPanel>
      </TabContext>
    </Box>
  );
}
