import CardWithPicture from "./CardWithPicture";
import TitleLineModel from "./TitleLineModel";

export default function CardWithPictureSection(){
    const titleLine = {
        label:"Core Delivery",
        rightText:"Priced per project on the wholesale card"
    }
    return(
        <div>
            <TitleLineModel label={titleLine.label} rightText={titleLine.rightText}/>
            <CardWithPicture/>
        </div>
    )
}