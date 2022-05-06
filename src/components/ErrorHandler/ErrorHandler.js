import { INVALID_VALUE } from "../../constants/Errors";
import './ErrorHandler.css';

export const ErrorHandler = (props) => {
    const { type } = props;

    const renderMap = {
        [INVALID_VALUE]: 'Error: Invalid value provided'
    }


    return (
        type && <p className="ErrorHandler">{ renderMap[type] }</p>
    );
}

export default ErrorHandler;