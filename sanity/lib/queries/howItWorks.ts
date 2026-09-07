export const howItWorksQuery = `
    *[_type == "howItWorksSection"][0]{
        _id,
        tag,
        heading,
        headingHighlightText,
        stepItems[]{
            number,
            tag,
            title,
            description
        }
    }
`