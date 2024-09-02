const SimpleComponent=()=>{
    const handleClick=()=>{
        const messageElement=document.getElementById('message');
        messageElement.textContent="You clicked the button";
    };

return(
    <div>
        <h1 id="message">

        </h1>
        <button onClick={handleClick}>Click Me</button>
    </div>
);
};

export default SimpleComponent;