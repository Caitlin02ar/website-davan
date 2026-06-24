
export default function BubbleTag({text}: {text:string}){
    return(
        <div className="p-2 px-4 border border-white rounded-full bg-white/20">
            <h5 className="text-[0.875rem]">{text}</h5>
        </div>
    )
}