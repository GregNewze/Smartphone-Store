'use client'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
type Props = {
    onClick?: VoidFunction;
}



export default function BarrsButton({onClick}:Props){
    return(
     <span onClick={onClick} className='text-green-500 cursor-pointer lg:hidden'>
     <MenuRoundedIcon/>
     </span>
    );
}


