import React from 'react';
import Tooltip from '@codesandbox/common/lib/components/Tooltip';
import { sandboxUrl } from '@codesandbox/common/lib/utils/url-generator';

import {
  Container,
  Button,
  HeartIcon,
  ReloadIcon,
  NewWindowIcon,
} from './elements';

export function GlobalActions({
  sandbox,
  toggleLike,
  previewVisible,
  isDragging,
}) {
  return (
    <Container
      align="right"
      previewVisible={previewVisible}
      isDragging={isDragging}
    >
      {toggleLike ? (
        <Tooltip
          content={sandbox.userLiked ? 'Dislike sandbox' : 'Like sandbox'}
        >
          <Button
            onClick={toggleLike}
            aria-label={sandbox.userLiked ? 'Dislike sandbox' : 'Like sandbox'}
          >
            <HeartIcon liked={sandbox.userLiked} />
          </Button>
        </Tooltip>
      ) : null}
      <Button
        as="a"
        target="_blank"
        rel="noopener noreferrer"
        href={`${sandboxUrl(sandbox)}?from-embed`}
      >
        Open Sandbox
      </Button>
    </Container>
  );
}

export function NavigationActions({ refresh, openInNewWindow, isDragging }) {
  return (
    <Container align="left" previewVisible isDragging={isDragging}>
      <Tooltip content="Refresh preview">
        <Button onClick={refresh} aria-label="Refresh preview">
          <ReloadIcon />
        </Button>
      </Tooltip>
      <Tooltip content="Open preview in new window">
        <Button
          onClick={openInNewWindow}
          aria-label="Open preview in new window"
        >
          <NewWindowIcon />
        </Button>
      </Tooltip>
    </Container>
  );
}
