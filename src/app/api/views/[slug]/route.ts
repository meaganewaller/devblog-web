import type { NextRequest } from 'next/server'
import { MAX_VIEWS_PER_SESSION } from '@/app/(content)/_constants/reactions'
import {
countContentViews,
countUserViews,
createView
} from '@/app/(content)/_lib/views'

import { getErrorMessage, response } from '@/lib/api'
import { getSessionId } from '@/lib/server'
