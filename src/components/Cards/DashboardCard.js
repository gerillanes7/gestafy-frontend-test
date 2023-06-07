import React from 'react';
import { Typography, Card, CardHeader, CardContent } from '@mui/material';

const DashboardCard = ({
  custompadding,
  customheaderpadding,
  customdisplay,
  custommargin,
  title,
  subtitle,
  action,
  children,
}) => (
  <Card
    sx={{
      p: custompadding,
      '& .MuiCardContent-root:last-child': {
        pb: custompadding,
      },
    }}
  >
    <CardHeader
      sx={{
        p: customheaderpadding,
        display: {
          xs: customdisplay,
          lg: 'flex',
          sm: 'flex',
        },
      }}
      title={
        <Typography
          variant="h3"
          sx={{
            mb: {
              xs: custommargin,
            },
          }}
        >
          {title}
        </Typography>
      }
      subtitle={subtitle}
      action={action || ''}
    />
    {/* content area */}
    <CardContent
      sx={{
        p: custompadding,
      }}
    >
      {children}
    </CardContent>
  </Card>
);

export default DashboardCard;
