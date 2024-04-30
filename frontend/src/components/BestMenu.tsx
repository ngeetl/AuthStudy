import styled from '@emotion/styled'
import { Button, ThemeProvider, Card, Menu, MenuItem, MenuList, Typography } from '@mui/material'
import React from 'react'
import theme from './theme'


const CustomButton = styled(Button)(() => ({
  margin: "20px",
  // '&:hover': {
  // backgroundColor: "green",
  // color: "red"
  // }
}))

const BestMenu: React.FC = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CustomButton variant="contained">
          Hello world
        </CustomButton>
        {/* <Menu> */}
        <Typography color='warning.main' variant='body2' >
          안녕 hello
        </Typography>
          <MenuList variant='selectedMenu'>
            <MenuItem selected>home</MenuItem>
            <MenuItem>home</MenuItem>
            <MenuItem>home</MenuItem>
          </MenuList>
        {/* </Menu> */}
        <Card raised={true} sx={{ height: '100px', mx: '30px' }}>dd</Card>
      </ThemeProvider>
    </div>
  )
}

export default BestMenu


