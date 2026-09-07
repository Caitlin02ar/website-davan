export const opportunityQuery = `
    *[_type == "theOpportunitySection"][0] {
        _id,
        "backgroundImage":backgroundImage.asset->url,
        tag,
        heading,
        headingHighlight,
        description,
        cardItems[]{
            "icon": icon.asset->url,
            title,
            description
        },
        externalCard,
        bannerTitle,
        bannerHightlightText,
        bannerSubheading
        }
`;