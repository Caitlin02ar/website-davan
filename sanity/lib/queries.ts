export const bannerQuery = `
    *[_type == "banner"][0]{
        runningText,
        title,
        description,
        backgroundImage{
            asset->{
            url
            }
        },
        altText,
    }
`;