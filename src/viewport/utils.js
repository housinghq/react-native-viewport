'use strict'

export const isInViewport = (
  viewportOffset,
  viewportHeight,
  elementOffset,
  elementHeight,
  preTriggerRatio,
  triggerAtEnd
) => {
  let preTriggerAreaSize = 0
  if (triggerAtEnd) {
    preTriggerAreaSize = -elementHeight
  } else if (preTriggerRatio) {
    preTriggerAreaSize = preTriggerRatio * viewportHeight
  }
  const elementEnd = elementOffset + elementHeight
  const viewportEnd = viewportOffset + viewportHeight
  if (elementEnd - preTriggerAreaSize < viewportOffset) {
    return false
  } else if (elementOffset - preTriggerAreaSize > viewportEnd) {
    return false
  }
  return true
}
