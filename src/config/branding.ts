export interface BrandingConfig {
  appName: string;
  appDescription: string;
  showDiscord: boolean;
  showGitHub: boolean;
  showHireMe: boolean;
  showVersionHash: boolean;
  defaultOutputPrefix: string;
}

export const BRANDING: BrandingConfig = {
  appName: import.meta.env.VITE_APP_NAME || 'Tools',
  appDescription:
    import.meta.env.VITE_APP_DESCRIPTION ||
    'An all-in-one online toolkit for everyday productivity tasks.',
  showDiscord: import.meta.env.VITE_SHOW_DISCORD === 'true',
  showGitHub: import.meta.env.VITE_SHOW_GITHUB === 'true',
  showHireMe: import.meta.env.VITE_SHOW_HIRE_ME === 'true',
  showVersionHash: import.meta.env.VITE_SHOW_VERSION_HASH === 'true',
  defaultOutputPrefix: import.meta.env.VITE_DEFAULT_OUTPUT_PREFIX || 'output'
};
