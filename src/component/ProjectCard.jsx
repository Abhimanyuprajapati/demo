import React from 'react';
import { Card, CardContent, Typography, LinearProgress, Box } from '@mui/material';

const ProjectCard = ({ id, name, progress, files, members, date, viewMode }) => {
  return (
    <Card sx={{ width: viewMode === 'grid' ? '300px' : '100%' }}>
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2" color="textSecondary">ID: {id}</Typography>
        <LinearProgress variant="determinate" value={progress} sx={{ my: 2 }} />
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body2">{date}</Typography>
          <Typography variant="body2">{members}+ Members</Typography>
          <Typography variant="body2">{files} Files</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
