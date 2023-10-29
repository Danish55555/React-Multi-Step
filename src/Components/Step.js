export default function Step(props)
{
    const message = props.message;
    const step = props.step;
    return (
        <p className="message">Step {step} {message}</p>
    )
}