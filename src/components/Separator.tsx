import { Divider, useTheme } from '@mui/material';
import React from 'react';

type SeparatorProps = {
  backgroundColor?: string;
  margin?: string;
};

export default function Separator({ margin = '40px' }: SeparatorProps) {
  const theme = useTheme();
  return (
    <Divider
      orientation="horizontal"
      variant="fullWidth"
      sx={{
        borderColor: theme.palette.divider,
        marginTop: margin,
        marginBottom: margin
      }}
    />
  );
}
