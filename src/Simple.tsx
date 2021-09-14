export default function Expressions() {
    const subtext = 'This is subtext as variable.';
const duplicate = (value: number ) => value *2;

    return(
        <>
        <h1>Expressions Example</h1>
        <h2>{subtext}</h2>
        <h3>The double of 3 is equal to {duplicate(3)}</h3>
        </>
    )
}