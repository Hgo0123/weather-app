import Input from "./Input"
import "./AsideInput.css"

function AsideInput(props) {

    const { userInput, handleChangeInput, handleClick } = props

    return (
        <div className="wrapper">
            <Input userInput={userInput} handleChangeInput={handleChangeInput} handleClick={handleClick} />
        </div>
    )
}

export default AsideInput