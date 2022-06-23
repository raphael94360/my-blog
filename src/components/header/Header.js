import Title from "./Title"
import Baseline from "./Baseline"

const Header = () => {
    return (
        <>
            <div className="header">
                <Title title={"My Blog"}/>
                <Baseline baseline={"An awesome baseline"}/>
            </div>

        </>
    )
}

export default Header;