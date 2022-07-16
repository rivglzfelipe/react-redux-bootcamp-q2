import React from 'react';
import {
    ProductName,
    Categories, 
    Price, 
    Button, 
    InfoContainer, 
    CardContainer, 
    ImgContainer
} from './CardStyles';
import {useDispatch} from 'react-redux';
import { add } from './../../app/cart.ts';


const Imagen = ({srcImg, name}) => (
    <ImgContainer>
      <img src={srcImg} alt={name}/>
    </ImgContainer>

)

const Info = (props) => {
    const dispatch = useDispatch();
    const {name, categories, price } = props;
    return (
        <InfoContainer>
            <ProductName>{name}</ProductName>
            <Categories>{categories[0]}</Categories>
            <Price>{`$${price}`}</Price>
            <Button onClick={() => dispatch(add(props))}>
                Add to cart
            </Button>
        </InfoContainer> 
    );
}
export const Card = (props) => {
    const {name, images} = props.data;
    return (
        <CardContainer>
            <Imagen srcImg={images[0]} name={name} />
            <Info {...props.data} />     
        </CardContainer>
    )
};

export default Card;