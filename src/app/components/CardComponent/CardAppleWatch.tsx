// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import ButtonCustom from '../ButtonComponent/ButtonCustom'

const CardAppleWatch = () => {
  return (
    <Card>
      <CardMedia sx={{ height: '7.675rem' }} image='/assets/img/watch-on-hand.jpg' />
      <CardContent sx={{textAlign: "left"}} >
        <Typography variant='h6'>
          Apple Watch
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>$249.40</Typography>
        <Typography variant='body2'>
          3.1GHz 6-core 10th-generation Intel Core i5 processor, Turbo Boost up to 4.5GHz
        </Typography>
      </CardContent>
      <ButtonCustom variants='contained' sx={{ py: 1.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0}}>
        Add To Cart
      </ButtonCustom>
    </Card>
  )
}

export default CardAppleWatch
