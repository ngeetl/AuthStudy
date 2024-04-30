import { createTheme } from "@mui/material";

const color = {
    brandColors: {
        primary: '#FC9C14',
        secondary: '#4E531B',
    },
    stateColors: {
        info: '#0063F7',
        success: '#27AE60',
        warning: '#FFCC00',
        error: '#EB5757',
      },
      textColors: {
        text: '#454545',
        sub1: '#969696',
        sub2: '#828282',
        menusBg: '#FFF1B5',
        textBg: '#FFFDF6',
      },
      iconColors: {
        ic: '#FCC914',  
        icGray: '#666666', 
        icWhite: '#FFFFFF', 
      }, 
      greyColors: {
        line: '#E8E8E8',
        bg: '#FBFBFB',
      },
}

const theme = createTheme({
    palette: {
      primary: {
        main: color.brandColors.primary, 
        contrastText: '#FFFFFF', 
      },
      secondary: {
        main: color.brandColors.secondary,
        contrastText: '#FFFFFF', 
      },
      info: {
        main: color.stateColors.info,
      },
      success: {
        main: color.stateColors.success,
      },
      warning: {
        main: color.stateColors.warning,
      },
      error: {
        main: color.stateColors.error,
      },
      text: {
        primary: color.textColors.text,
        secondary: color.textColors.sub1,
        disabled: color.textColors.sub2,
      },
      background: {
        default: color.greyColors.bg,
        // paper: color.textColors.menusBg,
      },
      action: {
      },
    },
    typography: {
        fontFamily: 'Pretendard, sans-serif',
        h1: {
            fontSize: '32px',
            lineHeight: '35.2px',
            fontWeight: 'semibold', 
        },
        h2: {
            fontSize: '24px',
            lineHeight: '26.4px',
            fontWeight: 'semibold', 
        },
        h3: {
            fontSize: '20px',
            lineHeight: '22px',
            fontWeight: 'semibold', 
        },
        body1: {
            fontSize: '20px',
            lineHeight: '28px',
            fontWeight: 'normal', 
        },
        body2: {
            fontSize: '38px',
            lineHeight: '25.2px',
            fontWeight: '600', 
        },
        body3: {
            fontSize: '16px',
            color: 'red',
            lineHeight: '22.4px',
            fontWeight: 'normal', 
        },
        body4: {
            fontSize: '84px',
            lineHeight: '19.6px',
            fontWeight: 'normal', 
        },
    },
    components: {
        MuiMenuItem: {
          styleOverrides: {
            root: {
              '&.Mui-selected': {
                backgroundColor: color.textColors.menusBg, // 'active' 상태의 배경색
              },
              '&.Mui-selected:hover': {
                backgroundColor: color.textColors.menusBg, // 'hover' 상태의 배경색 유지
              }
            }
          }
        }
      },
  });
  

  export default theme;