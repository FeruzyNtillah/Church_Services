import React, { useState } from 'react';
import { 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  useTheme,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  useMediaQuery
} from '@mui/material';
import { 
  People as FamilyIcon,
  Man as MaleIcon,
  Woman as FemaleIcon,
  ChildCare as ChildIcon,
  // eslint-disable-next-line no-unused-vars
  Event as EventIcon,
  VolumeUp as AnnouncementIcon,
  // eslint-disable-next-line no-unused-vars
  AttachMoney as DonationIcon,
  CalendarToday as CalendarIcon,
  TrendingUp as GrowthIcon,
  Church,
  KeyboardArrowDown
} from '@mui/icons-material';
// eslint-disable-next-line no-unused-vars
import StatBox from '../components/StatBox';
import ProgressCircle from '../components/ProgressCircle';

// Sample data
const parishes = [
  { id: 1, name: "Parokia ya Bikira Maria Mama wa Rozari Takatifu - Makongo Juu" },
  { id: 2, name: "Parokia ya Mt. Petro - Oysterbay" },
  { id: 3, name: "Parokia ya Mt. Martin wa Porres - Mwananyamala" },
  { id: 4, name: "Parokia ya Mt. Anna - Hananasif" },
  { id: 5, name: "Parokia ya Mt. Kolbe - Kijitonyama" },
  { id: 6, name: "Parokia ya Mt. Martha - Mikocheni" },
  { id: 7, name: "Parokia ya Bikira Maria Mama wa Huruma - Mbezi Beach (Mt. Gaspar)" },
  { id: 8, name: "Parokia ya Mt. Michael - Kawe" },
  { id: 9, name: "Parokia ya Bikira Maria Mama wa Mwokozi - Sinza" },
  { id: 10, name: "Parokia ya Mt. Petro - Chuo Kikuu (St. Augustine)" }
];


const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [selectedParish, setSelectedParish] = useState(parishes[0].id);

  const handleParishChange = (event) => {
    setSelectedParish(event.target.value);
  };

  // Stats data
  const stats = [
    { title: 'Total Members', value: '1,250', icon: <FamilyIcon />, color: 'primary' },
    { title: 'Male Members', value: '210', icon: <MaleIcon />, color: 'secondary' },
    { title: 'Female Members', value: '280', icon: <FemaleIcon />, color: 'info' },
    { title: 'Children', value: '52', icon: <ChildIcon />, color: 'success' },
  ];

  const activities = {
    announcements: [
      "Next baptism ceremony - July 15th",
      "Guest speaker this Sunday - Pastor John",
      "Building fund collection ongoing"
    ],
    events: [
      { id: 1, title: "Sunday Service", date: "2023-06-25", time: "10:00 AM" },
      { id: 2, title: "Bible Study", date: "2023-06-28", time: "7:00 PM" },
      { id: 3, title: "Youth Fellowship", date: "2023-07-01", time: "4:00 PM" }
    ],
    metrics: [
      { title: "Attendance", value: 82, description: "Weekly Average" },
      { title: "Giving", value: 65, description: "Monthly Target" },
      { title: "Volunteering", value: 45, description: "Participation" }
    ]
  };

  // Format date utility
  const formatDate = (dateString) => {
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <Box sx={{ 
      flexGrow: 1, 
      p: isMobile ? 2 : 3, 
      backgroundColor: theme.palette.background.default 
    }}>
      {/* Header with Parish Selector */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between', 
        alignItems: isMobile ? 'flex-start' : 'center',
        gap: isMobile ? 2 : 0,
        mb: 4
      }}>
        <Typography 
          variant="h4" 
          sx={{ 
            fontWeight: 700,
            color: theme.palette.primary.dark
          }}
        >
          Parish Dashboard
        </Typography>
        
        <FormControl sx={{ minWidth: 220 }}>
          <InputLabel id="parish-select-label">Select Parish</InputLabel>
          <Select
            labelId="parish-select-label"
            value={selectedParish}
            onChange={handleParishChange}
            label="Select Parish"
            IconComponent={KeyboardArrowDown}
            sx={{
              borderRadius: 2,
              bgcolor: 'background.paper',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.primary.light
              }
            }}
          >
            {parishes.map((parish) => (
              <MenuItem key={parish.id} value={parish.id}>
                {parish.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ 
              borderLeft: `4px solid ${theme.palette[stat.color].main}`,
              boxShadow: theme.shadows[2],
              transition: 'transform 0.2s',
              '&:hover': { transform: 'scale(1.02)' }
            }}>
              <CardContent>
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <Typography 
                      variant="subtitle2" 
                      color="text.secondary"
                      sx={{ textTransform: 'uppercase' }}
                    >
                      {stat.title}
                    </Typography>
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        fontWeight: 700,
                        color: theme.palette[stat.color].dark
                      }}
                    >
                      {stat.value}
                    </Typography>
                  </div>
                  <Box sx={{
                    p: 1.5,
                    borderRadius: '50%',
                    bgcolor: `${theme.palette[stat.color].light}20`,
                    color: theme.palette[stat.color].main
                  }}>
                    {stat.icon}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Parish-Specific Content */}
      <Typography variant="h6" sx={{ 
        mb: 2,
        color: theme.palette.primary.main,
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}>
        <Church fontSize="small" />
        {parishes.find(p => p.id === selectedParish)?.name} Activities
      </Typography>

      {/* Main Content Grid */}
      <Grid container spacing={3}>
        {/* Announcements Section */}
        <Grid item xs={12} md={8}>
          <Card sx={{ 
            height: '100%',
            boxShadow: theme.shadows[2],
            borderRadius: '8px'
          }}>
            <CardContent>
              <Typography variant="h5" fontWeight="600" mb="20px" color="text.primary">
                <AnnouncementIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                Church Announcements
              </Typography>
              
              <Box display="flex" flexDirection="column" gap="15px">
                {activities.announcements.map((text, index) => (
                  <Box key={index} display="flex" alignItems="center" gap="10px">
                    <AnnouncementIcon sx={{ color: 'secondary.main' }} />
                    <Typography>{text}</Typography>
                  </Box>
                ))}
              </Box>

              <Box mt="30px">
                <Typography variant="h5" fontWeight="600" mb="20px" color="text.primary">
                  <GrowthIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                  Monthly Growth
                </Typography>
                <Box display="flex" justifyContent="space-around" flexWrap="wrap" gap={2}>
                  {activities.metrics.map((metric, index) => (
                    <Card key={index} sx={{ 
                      minWidth: 120, 
                      p: 2,
                      textAlign: 'center',
                      boxShadow: theme.shadows[1]
                    }}>
                      <Typography variant="body2" color="text.secondary">
                        {metric.title}
                      </Typography>
                      <Typography variant="h6">
                        {metric.value}%
                      </Typography>
                    </Card>
                  ))}
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Events Section */}
        <Grid item xs={12} md={4}>
          <Card sx={{ 
            boxShadow: theme.shadows[2],
            borderRadius: '8px'
          }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              bgcolor="primary.light"
              p="15px"
              borderBottom={`2px solid ${theme.palette.primary.main}`}
            >
              <Typography variant="h5" fontWeight="600">
                <CalendarIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                Upcoming Events
              </Typography>
            </Box>
            
            <Box>
              {activities.events.map((event) => (
                <Box
                  key={event.id}
                  p="15px"
                  borderBottom={`1px solid ${theme.palette.divider}`}
                  sx={{
                    '&:hover': {
                      backgroundColor: 'action.hover',
                      cursor: 'pointer'
                    }
                  }}
                >
                  <Typography color="primary.main" fontWeight="600">
                    {event.title}
                  </Typography>
                  <Box display="flex" justifyContent="space-between" mt="5px">
                    <Typography variant="body2" color="text.secondary">
                      {formatDate(event.date)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {event.time}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Card>
        </Grid>

        {/* Progress Metrics */}
        {activities.metrics.map((metric, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card sx={{ 
              p: 3,
              boxShadow: theme.shadows[1],
              borderRadius: '8px'
            }}>
              <Typography variant="h5" fontWeight="600" mb={2}>
                {metric.title} Progress
              </Typography>
              <Box display="flex" flexDirection="column" alignItems="center">
                <ProgressCircle size={100} progress={metric.value / 100} />
                <Typography variant="h6" color="primary" mt={2}>
                  {metric.value}% {metric.description}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;