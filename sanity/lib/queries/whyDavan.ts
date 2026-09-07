export const whyDavanQuery = `
    *[_type == "whyDavanSection"][0]{
        _id,
        tag,
        "backgroundImage":backgroundImage.asset->url,
        heading,
        headingHighlightText,
        subheading,
        buttons,
        cardItems[]{
            numberCard,
            titleCard,
            descriptionCard
        }
    }
`