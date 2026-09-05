interface TitleLineModelProps {
    label: string;
    rightText?: string;
}

export default function TitleLineModel({ label, rightText }: TitleLineModelProps){

    return(
        <div className="mb-4 flex w-full flex-wrap items-center gap-x-4 gap-y-2">
            <span className="shrink-0 text-xs uppercase tracking-widest text-primary">
                {label}
            </span>

            <div className="hidden h-px flex-1 bg-primary md:block" />

            {rightText && (
                <span className="text-xs text-white/50 sm:text-sm">
                    {rightText}
                </span>
            )}
        </div>
    )
}
