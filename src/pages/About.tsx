import owner from "../assets/res/kurt.webp";

export const About = () => {
    return (
        <>
            <div className={"background"}>
                <h1>Über uns</h1>

                <div className={"centerDiv"}>
                    <img src={owner} width={290} height={400} alt="Kurt Strohmaier" />                    <p>Kurt Strohmaier</p>
                </div>

            </div>
        </>
    );
};