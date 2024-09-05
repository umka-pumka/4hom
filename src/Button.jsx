import {  decrementNum, incrementNum, setText, incrementByFive, decrementByFive } from "./redux/reducer";
import { useDispatch } from "react-redux";

const Button = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={()=>{
                dispatch(incrementNum())
            }}>+1</button>
            <button onClick={()=>{
                dispatch(decrementNum())
            }}>-1</button>
            <button onClick={()=>{
                dispatch(incrementByFive())
            }}>+5</button>
            <button onClick={()=>{
                dispatch(decrementByFive())
            }}>-5</button>
            <button onClick={()=>{
                dispatch(setText(prompt('ведите новый текст')))
            }}>change</button>  
        </div>
    );
}

export default Button;
