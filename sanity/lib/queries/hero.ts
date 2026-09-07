export const heroQuery = `
  *[_type == "heroSection"][0] {
    _id,
    "backgroundImage": backgroundImage.asset->url,
    tag,
    heading,
    description,
    buttons,
    countdownItems,
    runningTextItems
  }
`;