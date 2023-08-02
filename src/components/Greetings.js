import {useState} from "react"

const Greetings = () => {
const [changedText, setChangedText]=useState(false);

const changeTextHandler = () => {
    setChangedText(!changedText);
}

return <div>
    <h2>Hello World</h2>
    {!changedText ? <p>Good to see u</p> : <p>Changed!</p>}
    <button onClick={changeTextHandler}>Change text</button>
</div>

}

export default Greetings;