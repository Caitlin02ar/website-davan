export const confidentialityQuery = `
  *[_type == "confidentialitySection"][0] {
    _id,
    tag,
    heading,
    headingHighlightText,
    description,

    receipt {
      leftTopText,
      rightTopText,
      receiptItems[] {
        label,
        value
      },
      note {
        title,
        description
      }
    },

    dropdownItems[] {
      "icon": icon.asset->url,
      title,
      description
    }
  }
`;