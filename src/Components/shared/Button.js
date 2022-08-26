const Button = ({children, color, type, work}) => {
    return (  
        <button className = "btn" style = {{backgroundColor : color}} type = {type}  onClick = {work}>
            {children}
        </button>
    );
}

Button.defaultProps = {
    color : "rgb(67, 121,157)",
    type : "button",
    
}
 
export default Button;