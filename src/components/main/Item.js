import ItemTitle from "./ItemTitle"
import ItemSubtitle from "./ItemSubtitle"
import ItemPicture from "./ItemPicture"
import ItemDescription from "./ItemDescription"



const Item = () => {
    return (
        <>
        <div className="item">
            <ItemTitle title={"FIRST TITLE HEADING"}/>
            <ItemSubtitle subtitle={"Title description"} />
            <ItemPicture />
            <ItemDescription description={"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}/>
        </div>
        <div className="item">
            <ItemTitle title={"SECOND TITLE HEADING"}/>
            <ItemSubtitle subtitle={"Title description"} />
            <ItemPicture />
            <ItemDescription description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}/>
        </div>
        </>


    )
}

export default Item;