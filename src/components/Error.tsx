const Error = (props: { text: string }) => (
    <div className='alert alert-danger text-center p-2'>{props.text}</div>
)

export default Error
