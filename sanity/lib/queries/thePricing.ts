export const thePricingQuery = `
    *[_type == "thePricingSection"][0]{
        _id,
        tag,
        heading,
        headingHighlightText,
        glassCardItem[]{
            "icon":icon.asset->url,
            title,
            description,
            buttons
        },
        listItems[]{
            title,
            description
        }
    }
`