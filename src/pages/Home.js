import React, { useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../theme';
import StatBox from '../components/StatBox';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import EventIcon from '@mui/icons-material/Event';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ProgressCircle from '../components/ProgressCircle';

const Home = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [memberStats] = useState({
    total: 542,
    male: 210,
    female: 280,
    children: 52,
    totalGrowth: "+12%",
    maleGrowth: "+8%",
    femaleGrowth: "+15%",
    childrenGrowth: "+5%"
  });

  const [upcomingEvents] = useState([
    { id: 1, title: "Sunday Service", date: "2023-06-25", time: "10:00 AM" },
    { id: 2, title: "Bible Study", date: "2023-06-28", time: "7:00 PM" },
    { id: 3, title: "Youth Fellowship", date: "2023-07-01", time: "4:00 PM" }
  ]);

  const calculateProgress = (value, total) => {
    if (total === 0) return 0;
    return Math.min(Math.max(value / total, 0), 1);
  };

  return (
    <Box m="20px">
      {/* GRID SECTION */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1: MEMBER STATISTICS */}
        {[
          { value: memberStats.total, label: "Total Members", icon: <FamilyRestroomIcon />, growth: memberStats.totalGrowth },
          { value: memberStats.male, label: "Male Members", icon: <ManIcon />, growth: memberStats.maleGrowth },
          { value: memberStats.female, label: "Female Members", icon: <WomanIcon />, growth: memberStats.femaleGrowth },
          { value: memberStats.children, label: "Children", icon: <ChildCareIcon />, growth: memberStats.childrenGrowth },
        ].map((stat, index) => (
          <Box
            key={index}
            gridColumn="span 3"
            backgroundColor={colors.primary[700]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title={stat.value.toLocaleString()}
              subtitle={stat.label}
              progress={calculateProgress(stat.value, memberStats.total)}
              increase={stat.growth}
              icon={
                React.cloneElement(stat.icon, {
                  sx: { color: colors.blueAccent[600], fontSize: "26px" }
                })
              }
            />
          </Box>
        ))}

        {/* ROW 2: UPCOMING EVENTS */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[700]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600" mb="20px" color={colors.grey[100]}>
            Church Announcements
          </Typography>
          <Box display="flex" flexDirection="column" gap="15px">
            {[
              { icon: <EventIcon />, text: "Next baptism ceremony - July 15th" },
              { icon: <VolumeUpIcon />, text: "Guest speaker this Sunday - Pastor John" },
              { icon: <AttachMoneyIcon />, text: "Building fund collection ongoing" },
            ].map((item, index) => (
              <Box key={index} display="flex" alignItems="center" gap="10px">
                {React.cloneElement(item.icon, { sx: { color: colors.blueAccent[700] } })}
                <Typography color={colors.grey[100]}>{item.text}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Upcoming Events List */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[700]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Upcoming Events
            </Typography>
            <EventIcon sx={{ color: colors.grey[100] }} />
          </Box>
          
          {upcomingEvents.map((event) => (
            <Box
              key={event.id}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography color={colors.blueAccent[500]} fontWeight="600">
                  {event.title}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {new Date(event.date).toLocaleDateString()}
                </Typography>
              </Box>
              <Typography color={colors.grey[100]}>{event.time}</Typography>
            </Box>
          ))}
        </Box>

        {/* ROW 3: PROGRESS CIRCLES */}
        {[
          { title: "Attendance Progress", progress: 0.82, description: "82% Weekly Average", subtext: "Current month attendance" },
          { title: "Giving Summary", progress: 0.65, description: "65% Monthly Target", subtext: "Current giving progress" },
          { title: "Volunteer Participation", progress: 0.45, description: "45% Participation", subtext: "Members actively volunteering" },
        ].map((item, index) => (
          <Box
            key={index}
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={colors.primary[700]}
            p="30px"
          >
            <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
              {item.title}
            </Typography>
            <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
              <ProgressCircle size="125" progress={item.progress} />
              <Typography variant="h5" color={colors.blueAccent[500]} sx={{ mt: "15px" }}>
                {item.description}
              </Typography>
              <Typography color={colors.grey[100]}>{item.subtext}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Home;