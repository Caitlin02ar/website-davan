export const commonQuestionsQuery = `
    *[_type == "commonQuestionSection"][0]{
        _id,
        tag,
        heading,
        dropdownItems[]{
            question,
            answer
        }
    }
`