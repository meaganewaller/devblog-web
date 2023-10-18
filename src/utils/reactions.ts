import { ReactionResponse } from "@/types"

export const convertReactions = (tableData: ReactionResponse[]) => {
  const reactions = tableData.map((reaction: ReactionResponse) => {
    return {
    }

  })

  return { reactions }
}

export const convertReaction = (reaction: ReactionResponse) => {
  return {

  }
}
