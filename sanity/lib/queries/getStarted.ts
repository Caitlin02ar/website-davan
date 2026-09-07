export const getStartedQuery = `
    *[_type == "getStartedSection"][0]{
        _id,
        tag,
        "backgroundImage":backgroundImage.asset->url,
        heading,
        headingHighlightText,
        description,
        buttons,
        titleContactInformation,
        contactInformation[]{
            "icon": icon.asset->url,
            informationText
        },
        additionalInformation
    }
`