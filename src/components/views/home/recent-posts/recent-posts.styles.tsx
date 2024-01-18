import tw, { styled } from "twin.macro";

export const PostListContainer = tw.div`
  flex max-w-3xl w-[90%] flex-col h-full items-center content-center justify-center mx-auto p-4
`;

export const PostList = styled.ol`
  margin: 0 auto;
  list-style: none;
  counter-reset: post;
  width: 90%;
`;

export const PostItem = styled.li`
  padding: 1em 0;
  position: relative;
  width: 100%;

  &:hover {
    &::before {
      background: var(--color-tropical-orange);
    }
  }

  &::before {
    counter-increment: post;
    content: counter(post);
    background: var(--color-accent);
    color: var(--color-tropical-orange);
    font-weight: 600;
    width: 34px;
    height: 34px;
    line-height: 38px;
    border-radius: 100%;
    display: inline-block;
    text-align: center;
    position: absolute;
    top: 20px;
    left: -50px;
  }
`;
