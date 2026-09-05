import CardWithIcon from "./CardWithIcon";
import TitleLineModel from "./TitleLineModel";
export default function AddOnsCardSection(){
    const titleLine = {
        label:"Add Ons",
        rightText:"Attach to any pillar, quoted on top of core scope"
    }
    return(
        <div>
            <TitleLineModel label={titleLine.label} rightText={titleLine.rightText}/>
            <CardWithIcon/>
        </div>
    )
}