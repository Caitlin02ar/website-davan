export const howItWorksQuery = `
    *[_type == "howItWorksSection"][0]{
        _id,
        tag,
        heading,
        headingHighlightText,
        stepsItems[]{
            number,
            tag,
            title,
            description
        }
    }
`