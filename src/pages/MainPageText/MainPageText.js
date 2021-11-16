import React from 'react'
import {  Grid,  Image } from 'semantic-ui-react'
import './MainPageText.css'

const MainPageText = () =>(
    <Grid>
    <Grid.Row columns={2}>
      <Grid.Column>
        <h1 className="title-style">NASIL HAZIRLIYORUZ?</h1>
        <p className="font-style">Amerika'nın uçsuz bucaksız bir köşesinden özel topladığımız kahveleri kavurduktan sonra bir kavanoza koyup, Türkiye'den alınan lezziz şekeri ve bir miktar suyu alıp mikser ile 6-7 dk boyunca çırpılarak iyice köpürtüyoruz.
                        Hazırlanan lezziz karışımı fincanlara ekledikten sonra müşterilerimizin arzu ettiği malzemeleri kahveye ekliyoruz.
                        Melo'nun özel süt karışımını kahveye ekliyoruz.
                        Afiyet olsun!</p>
      </Grid.Column>
      <Grid.Column>
      <img className="img-style" src={'https://images.unsplash.com/photo-1611689245341-399d7c35e401?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80'} ></img>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)
export default MainPageText