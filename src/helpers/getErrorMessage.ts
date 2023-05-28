/**
 * In JavaScript, an error can be anything
 * so, by default TS infers as 'unknown'
 * https://kentcdodds.com/blog/get-a-catch-block-error-message-with-typescript
 * @param error
 * @returns error message
 */
export const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) return error.message
  return String(error)
}
