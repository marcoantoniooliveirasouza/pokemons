import { styled } from "styled-components";

export const StyledListPokemon = styled.section`
*{
        width: 100%;
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        
}   
    ul{
        margin-top:20px;
    }
    li{
        margin-top:25px;
        background-color: 	#ffff;
        width: 280px;
        border-radius:5px;
        font-size:10px;
        padding: 10px;
        width: 300px;
        box-shadow: 0 0  10px 5px #888;
        
    }
    li:hover{
       
        img{
            width: 130px;
            height: 130px;
            transition: all 0.5s;
        }
        transition: all 0.5s;
    }

    img{
        width: 100px;
        height: 100px;
    }
    @media(min-width: 768px){
        ul{
            flex-direction:row;
            flex-wrap:wrap;
           

        }
        li{
            margin: 8px;
        }
        }
`