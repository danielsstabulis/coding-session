import "./Input.css";

export const Input = (props) => {
    const {
        labelValue,
        onChange = null,
        disabled,
        value
    } = props;

    return (
        <div className="Input">
            <label className="Input-Label">{ labelValue }</label>
            <br />
            <input className="Input-Input"
                type="text"
                onChange={ onChange }
                disabled={ disabled }
                value={ value }
            />
        </div>
    );
}

export default Input;