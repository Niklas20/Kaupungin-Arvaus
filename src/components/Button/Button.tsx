interface ButtonProps {
    className?: string;
    image?: string;
    text?: string;
    onClick?: () => void;
    width?: number;
    height?: number;
}

const Button = (props: ButtonProps) => {
    const styles = {
        backgroundImage: `url(${props.image})`,
        width: props.width,
        height: props.height
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