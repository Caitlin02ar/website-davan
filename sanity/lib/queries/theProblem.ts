export const problemQuery = `
    *[_type == "theProblemSection"][0] {
        _id,
        tag,
        titleSection,
        titleHighlight,
        subtitle,
        subtitleHighlight,
        cardSection[]{
        "icon": icon.asset->url,
        title,
        heading,
        headingHighlightText,
        description,
    }
}
`;