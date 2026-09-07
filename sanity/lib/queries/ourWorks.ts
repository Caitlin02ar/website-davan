export const ourWorksQuery = `
    *[_type == "ourWorksSection"][0]{
        _id,
        tag,
        heading,
        headingHighlightText,
        description,
        "logoCredentials":logoCredentials.asset->url,
        "portfolioItems": portfolioItems[]{
        "image": asset->url
        },        
        chatBox{
            heading,
            subheading,
            title,
            description
        }
    }
`