interface TitleLineModelProps {
    label: string;
    rightText?: string;
}

export default function TitleLineModel({ label, rightText }: TitleLineModelProps){

    return(
        <div className="flex w-full items-center gap-4 mb-4">
            <span className="shrink-0 whitespace-nowrap text-xs uppercase tracking-widest text-primary">
                {label}
            </span>

            <div className="h-px w-full flex-1 bg-primary" />

            {rightText && (
                <span className="shrink-0 whitespace-nowrap text-sm text-white/50">
                    {rightText}
                </span>
            )}
        </div>
    )
}