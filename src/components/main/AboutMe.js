import ItemTitle from "./ItemTitle";
import ItemPicture from "./ItemPicture";
import ItemDescription from "./ItemDescription";

const AboutMe = () => {
    return (
        <>
        <ItemTitle title={"ABOUT ME"} />
        <ItemPicture />
        <ItemDescription description={"Cras interdum pharetra felis eu faucibus"}/>
        </>

    )
}

export default AboutMe;