import tw, { styled } from 'twin.macro'

interface ButtonProps {
  outlined?: boolean
}

export const StyledButton = styled.div<ButtonProps>(({ outlined }) => [
  tw`shadow inline-flex items-center justify-center self-start min-h-[2.625rem] rounded-6 py-6 px-12 gap-6 font-bold font-retro tracking-wide transition truncate`,
  outlined
    ? tw`bg-transparent border border-divider text-secondary-txt shadow-sm`
    : tw`bg-accent text-on-accent shadow-md`,
  tw`hocus:transform hocus:-translate-y-1 hocus:no-underline`,
  outlined
    ? tw`hocus:shadow hocus:bg-accent-dark/[0.12] hocus:border-accent-dark hocus:text-primary-txt`
    : tw`hocus:shadow-md hocus:bg-accent-dark hocus:text-on-accent`,
  tw`disabled:opacity-50 disabled:cursor-not-allowed`,
  tw`[&>svg:only-child]:mx-auto [&>svg:only-child]:my-0`,
])
