import { Box, useTheme } from '@mui/material';
import Hero from 'components/Hero';
import Categories from './Categories';
import { Helmet } from 'react-helmet';
import { useUserTypeFilter } from 'providers/UserTypeFilterProvider';
import UserTypeFilter from '@components/UserTypeFilter';
import { BRANDING } from 'config/branding';

export default function Home() {
  const theme = useTheme();
  const { selectedUserTypes, setSelectedUserTypes } = useUserTypeFilter();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      padding={{
        xs: 2,
        md: 4,
        lg: 6
      }}
      sx={{
        minHeight: 'calc(100vh - 100px)',
        backgroundColor: 'background.default',
        backgroundImage: isDark
          ? 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 102, 241, 0.15), transparent 70%), radial-gradient(circle at 90% 80%, rgba(6, 182, 212, 0.08), transparent 50%)'
          : 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 102, 241, 0.1), transparent 70%), radial-gradient(circle at 90% 80%, rgba(6, 182, 212, 0.06), transparent 50%)',
        backgroundAttachment: 'fixed'
      }}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'flex-start'}
      width={'100%'}
    >
      <Helmet title={BRANDING.appName} />
      <Hero />
      <Box my={4}>
        <UserTypeFilter
          selectedUserTypes={selectedUserTypes}
          onUserTypesChange={setSelectedUserTypes}
        />
      </Box>
      <Categories />
    </Box>
  );
}
