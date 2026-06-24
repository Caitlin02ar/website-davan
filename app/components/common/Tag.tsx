
export default function Tag({ text } : {text:string}){
    return(
        <div>
            <h5 className="font-body flex flex-col items-center justify-center uppercase font-light tracking-wide">{text}</h5>
        </div>
    )
}