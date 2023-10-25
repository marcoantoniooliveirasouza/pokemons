import { styled } from "styled-components";

export const StyledNavBar = styled.section`
*{
  
}
width: 100%;
height: 80px;
div{
    background-color:#ef5350;
    display:flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    height: 80px;
    img{
    width: 150px;
    height: 90px;
}
    form{
        
        input{
            width: 140px;
            padding: 5px;
            border: 1px solid;
            border-radius:3px;
            background-color: #fff
            border: none;
            
        }
        ::placeholder{
            color: red;
        }
       
    }

}
    @media(min-width:768px){

                div{
                    padding: 10px 50px;
                    img{
                        width: 270px;
                        height: 150px;
                    }
                    form{
    
                        input{
                            width: 180px;
                            
        
                        }
                    }
                }
            }
           

`