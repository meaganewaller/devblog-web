export type avatarVariant = "primary" | "secondary";
export type avatarSize = "regular" | "small";

export interface AvatarProps {
  size?: avatarSize;
  variant?: avatarVariant;
  className?: string;
  name: string;
}
