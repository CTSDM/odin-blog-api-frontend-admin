import { Form } from "react-router-dom";
import InputComp from "./InputComp.jsx";
import ButtonSubmit from "./ButtonSubmit.jsx";
import PropTypes from "prop-types";
import styles from "./FormCredentials.module.css";

export default function FormCredentials({ inputs, action, buttonText }) {
    return (
        <Form className={styles.form} inputs={inputs} method="post" action={action} name="form">
            <div className={styles["container-inputs"]}>
                {inputs.map((input) => {
                    return (
                        <InputComp
                            key={input[1]}
                            type={input[0]}
                            name={input[1]}
                            placeholder={input[2]}
                        />
                    );
                })}
                <ButtonSubmit text={buttonText} />
            </div>
        </Form>
    );
}

FormCredentials.propTypes = {
    inputs: PropTypes.array.isRequired,
    action: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
};
