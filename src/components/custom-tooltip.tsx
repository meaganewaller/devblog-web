import type { ITooltip } from 'react-tooltip'
import { Tooltip } from 'react-tooltip'

import { tw } from '@/utils/tw'

type OmittedBaseProps = Omit<ITooltip, 'content'>

type CustomTooltipId = {
  id: string
  content: string
} & Omit<OmittedBaseProps, 'id'>

type CustomTooltipAnchorSelect = {
  anchorSelect: string
  content: string
} & Omit<OmittedBaseProps, 'anchorSelect'>

type CustomTooltipWithChildren = {
  content?: string
  children?: React.ReactNode
} & Omit<OmittedBaseProps, 'children'>

export type CustomTooltipProps = CustomTooltipId | CustomTooltipAnchorSelect | CustomTooltipWithChildren

export const CustomTooltip = (props: CustomTooltipProps) => {
  return (
    <Tooltip
      {...props}
      className={tw('bg-base-600 dark:bg-base-800 z-[9999999] max-w-xs !opacity-100', props.className)}
    />
  )
}
