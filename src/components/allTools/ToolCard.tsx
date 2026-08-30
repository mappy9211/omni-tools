import {
  Box,
  Card,
  CardContent,
  Link,
  Stack,
  Typography,
  useTheme
} from '@mui/material';
import { ToolCardProps } from './AllTools';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

export default function ToolCard({
  title,
  description,
  link,
  icon
}: ToolCardProps) {
  const theme = useTheme();
  const navigate = useNavigate();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Card
      onClick={() => navigate(link)}
      sx={{
        borderRadius: 3,
        bgcolor: isDark ? 'background.paper' : '#ffffff',
        border: '1px solid',
        borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(226, 232, 240, 0.9)',
        color: 'text.primary',
        boxShadow: isDark
          ? '0 4px 20px rgba(0, 0, 0, 0.3)'
          : '0 4px 16px -2px rgba(15, 23, 42, 0.05)',
        cursor: 'pointer',
        height: '100%',
        transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: isDark
            ? '0 12px 28px -4px rgba(129, 140, 248, 0.25)'
            : '0 12px 28px -4px rgba(99, 102, 241, 0.15)',
          borderColor: 'primary.main',
          '& .chevron-icon': {
            transform: 'translateX(4px)',
            color: 'primary.main'
          }
        }
      }}
    >
      <CardContent sx={{ p: 2.5 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            paddingBottom: 1.5,
            borderBottom: '1px solid',
            borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(226, 232, 240, 0.8)'
          }}
        >
          <Stack direction={'row'} spacing={1.5} alignItems={'center'}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 38,
                height: 38,
                borderRadius: 2,
                backgroundColor: isDark ? 'rgba(129, 140, 248, 0.15)' : 'rgba(99, 102, 241, 0.1)',
                color: 'primary.main'
              }}
            >
              <Icon icon={icon} fontSize={22} />
            </Box>
            <Typography variant="subtitle1" fontWeight={700}>
              {title}
            </Typography>
          </Stack>
          <Link
            href={link}
            underline="none"
            sx={{
              color: 'text.secondary',
              display: 'flex',
              alignItems: 'center',
              transition: 'all 0.2s ease'
            }}
            className="chevron-icon"
          >
            <ChevronRightIcon />
          </Link>
        </Box>
        <Typography variant="body2" mt={1.5} color="text.secondary" sx={{ lineHeight: 1.6 }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
