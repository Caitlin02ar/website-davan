export const ourWorksQuery = `
    *[_type == "ourWorksSection"][0]{
        _id,
        tag,
        heading,
        headingHighlightText,
        description,
        "logoCredentials":logoCredentials.asset->url,
        "portfolioImage":portfolioImage.asset->url,
        chatBox[]{
            heading,
            subHeading,
            title,
            description
        }
    }
`