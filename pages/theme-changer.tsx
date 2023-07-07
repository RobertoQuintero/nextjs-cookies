import { ChangeEvent, FC, useEffect, useState } from "react"
import { GetServerSideProps } from 'next'
import { Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"
import Cookies from 'js-cookie'

import { Layout } from "@/components/layouts"
import axios from "axios"

interface Props{
  theme:string
}


const ThemeChanger = ({theme}:Props) => {
  

  const [currentTheme, setCurrentTheme] = useState(theme)

  const onThemeChange=(event:ChangeEvent<HTMLInputElement>)=>{
      const selectedTheme=event.target.value
      setCurrentTheme(selectedTheme)

      localStorage.setItem('theme',selectedTheme)
      Cookies.set('theme',selectedTheme)
  }

  useEffect(() => {
    console.log(localStorage.getItem('theme'))
    console.log(Cookies.get('theme'))
  }, [])

  const onClick =async()=>{
    const {data}=await axios.get('/api/hello')
    console.log({data})
  }

  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Tema</FormLabel>
            <RadioGroup
              value={currentTheme}
              onChange={onThemeChange}
            >
              <FormControlLabel value='light' control={<Radio/>} label='Light'/>
              <FormControlLabel value='dark' control={<Radio/>} label='Dark'/>
              <FormControlLabel value='custom' control={<Radio/>} label='custom'/>
            </RadioGroup>
          </FormControl>
          <Button
            onClick={onClick}
          >
            Solicitud
          </Button>
        </CardContent>
      </Card>
    </Layout>
  )
}


// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  
  const {theme='light',name='no name'}=ctx.req.cookies

  const validThemes=['light','dark','custom']
  
  return {
    props: {
      theme:validThemes.includes(theme)?theme:'dark',
      name
    }
  }
}

export default ThemeChanger