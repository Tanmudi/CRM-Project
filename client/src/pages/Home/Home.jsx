import "./home.css";
import Featuredinfo from "../../components/Featuredinfo/Featuredinfo";
import Bargraph from "../../components/Bargraph/Bargraph";
import Linechart from "../../components/Linechart/Linechart";

export default function Home() {
    return (
        <div className="Home">
            <Featuredinfo/>
            <div className="charts">
                <Bargraph/>
                <Linechart/>
            </div>
        </div>
    )
}
