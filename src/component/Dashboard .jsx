import React, { useState } from 'react';
import { Box, Button, Menu, MenuItem, Grid } from '@mui/material';
import ProjectCard from '../component/ProjectCard';
import grid from "../assets/image/grid.svg";
import view from "../assets/image/view.svg";
import dot from "../assets/image/dot.svg";

const mockData = [
  { id: 'P-11', name: 'Project Name 1', progress: 50, files: 12, members: 10, date: '01/01/2024 - 31/01/2024', status: 'Not Started' },
  { id: 'P-12', name: 'Project Name 2', progress: 50, files: 12, members: 10, date: '01/01/2024 - 31/01/2024', status: 'Not Started' },
  { id: 'P-13', name: 'Project Name 3', progress: 50, files: 12, members: 10, date: '01/01/2024 - 31/01/2024', status: 'Not Started' },
  { id: 'P-14', name: 'Project Name 4', progress: 50, files: 12, members: 10, date: '01/01/2024 - 31/01/2024', status: 'Not Started' },
];

export const Dashboard = () => {
  const [tabValue, setTabValue] = useState(0);
  const [viewMode, setViewMode] = useState('grid');
  const [anchorEl, setAnchorEl] = useState(null);

  const handleViewToggle = (mode) => setViewMode(mode);

  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const filteredData = mockData.filter(
    (project) =>
      (tabValue === 0 && project.status === 'Not Started') ||
      (tabValue === 1 && project.status === 'In Progress') ||
      (tabValue === 2 && project.status === 'Archived') ||
      (tabValue === 3 && project.status === 'Completed')
  );

  return (
    <Box p={3}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" gap="2rem">
          <h1>Projects</h1>
          <Button variant="contained" color="primary">+ Projects</Button>
        </Box>
        <Box display="flex" gap="2rem">
          <p>Dashboard / Project Overview</p>
        </Box>
      </Box>
      <br />
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Box>
          <Button onClick={handleMenuClick}>All Projects ▼</Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose}>All Projects</MenuItem>
            <MenuItem onClick={handleMenuClose}>My Projects</MenuItem>
          </Menu>
        </Box>
        <Box>
          <Button onClick={() => handleViewToggle('list')}><img src={view} alt="view" /></Button>
          <Button onClick={() => handleViewToggle('grid')}><img src={grid} alt="grid" /></Button>
          <Button><img src={dot} alt="dot" /></Button>
        </Box>
      </Box>
      <Box mt={3}>
        <Grid container spacing={2}>
          {filteredData.map((project, index) => (
            <Grid item xs={viewMode === 'grid' ? 4 : 12} key={index}>
              <ProjectCard {...project} viewMode={viewMode} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

