import "./Input.css"
function Input(props) {

    const { userInput, handleChangeInput, handleClick } = props

 return (
        <div className="container">
            <input type="text" placeholder="Search for location" value={userInput} onChange={handleChangeInput}/>
            <button onClick={handleClick}>Search</button>
        </div>
    )   
}
export default Input