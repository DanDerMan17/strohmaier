import owner from "../assets/res/kurt.jpg";

export const About = () => {
    return (
        <>
            <div className={"background"}>
                <h1>Über uns</h1>

                <div className={"centerDiv"}>
                    <img loading="lazy" src={owner} height={"400px"}></img>
                    <p>Kurt Strohmaier</p>
                </div>

            </div>
        </>
    );
};