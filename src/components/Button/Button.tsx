interface ButtonProps {
    className?: string;
    image?: string;
    text?: string;
    onClick?: () => void;
}

const Button = (props: ButtonProps) => {
    const styles = {
        backgroundImage: `url(${props.image})`
    }

    return (
        <div className={props.className}>
            <button
                className={props.className}
                style={styles}
                onClick={props.onClick}>
                {props.text}
            </button>
        </div>
    )
}

export default Button;