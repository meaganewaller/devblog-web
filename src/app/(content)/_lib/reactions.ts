import type { ReactionType } from '@/types'
import axios from 'axios'

interface CreateReactionParams {
  slug: string
  sessionId: string
  type: ReactionType
  count: number
}

interface GetReactionsParams {
  slug: string
  sessionId?: string
}

const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL + '/api/v1'
const mapReactions = (reactionData: any[]): Record<ReactionType, number> => {
const records: Record<ReactionType, number> = {
    LIKED: 0,
    LOVED: 0,
    LEARNED: 0,
    LAUGHED: 0,
    SPARKLED: 0,
    WOWED: 0,
  }

  reactionsData.forEach((reaction) => {
    const { type, count } = reaction
    if (type) {
      records[type as ReactionType] = count ?? 0
    }
  })

  return records
}

export const createReaction = async ({
  slug,
  sessionId,
  type,
  count
}: CreateReactionParams): Promise<void> => {
  try {
    await axios.post(`${API_BASE_URL}/reactions`, {
      sessionId,
      type,
      count,
      slug,
    });
  } catch (error) {
    console.error('Error creating reaction:', error)
    throw error
  }
}

export const getReactions = async ({
  slug, sessionId,
}: GetReactionsParams): Promise<Record<ReactionType, number>> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/reactions`, {
      params: { slug, sessionId },
    })

    const reactionsData = response.data
    return mapReactions(reactionsData)
  } catch (error) {
    console.error('Error fetching reactions:', error)
    throw error
  }
}

export const countAllReactions = async (): Promise<number> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/reactions/count`);
    return response.data.count ?? 0;
  } catch (error) {
    // Handle error
    console.error('Error counting reactions:', error);
    throw error;
  }
}
