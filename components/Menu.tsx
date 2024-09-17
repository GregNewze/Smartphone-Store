import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PrimaryButton from './Buttons/PrimaryButton';
import Logo from "@/app/assets/Hardy.png"
import SecondButton from './Buttons/SecondButton';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import ThirdButton from './Buttons/ThirdButton';
import { Button } from '@mui/material';
import { useState } from 'react';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import BarrsButton from './Buttons/BarrsButton';

//lg:px-40 adicionar dentro da className 2

export default function Menu() {
   const [exibirMenu,setExibirMenu] = useState<boolean>(false);
   
   function verificarMenu(){
    if(exibirMenu){
        setExibirMenu(false);
    }else{
        setExibirMenu(true);
    }
   }

    return (
        <div className="w-full h-20 bg-white shadow-md">                        
            <div className="px-10 w-full m-auto flex justify-between items-center ">
                <img className="w-40" src={Logo.src} alt="" />
                <div className="hidden lg:flex items-center gap-4">
                    <ThirdButton
                      text="Sobre"
                    />
                    
                    <ThirdButton
                       text="Carrinho"

                    />
                    

                    <SecondButton
                      text="Smartphones"
                      icon= {<SmartphoneOutlinedIcon/>}
                      

                    />

                    <PrimaryButton
                        icon={<AccountCircleIcon />}
                        text="Já sou Cliente"
                        type="button"
                        onclick={() => alert("Clicou na conta")}

                    />
                </div>
                <div className="flex lg:hidden ">
                    <Button 
                        onClick={verificarMenu}
                    >

                     {exibirMenu ? (
                        <HighlightOffRoundedIcon/>
                     ):(
                        <BarrsButton/>
                     )

                     }   
                     
                    </Button>
                </div>
            </div>
        </div>
    );
}