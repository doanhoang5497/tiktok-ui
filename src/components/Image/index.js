function Image({ src, className, alt, ...props }) {
    console.log(alt);
    return (
        <img {...props} />
    );
}

export default Image;