import type { Options } from 'p-retry'

export interface FetchOptions {
  fetch?: typeof globalThis.fetch
  redirect?: RequestRedirect
  body?: BodyInit | null
  method?: string
  headers?: HeadersInit
  signal?: AbortSignal
  keepalive?: boolean
  timeout?: number
  retry?: Options
}

/**
 * Generic result with error
 *
 * @example
 * if('error' in result) {
 *   console.error(result.error.message)
 * }
 */
export type MaybeResult<ResultType = unknown, ErrorType = Error> =
  | {
      error: ErrorType
      result?: undefined
    }
  | {
      result: ResultType
      error?: undefined
    }

export interface JSONError {
  name: string
  code?: number
  message: string
}

/**
 * Fetch result with JSON error
 *
 * @example
 * if('error' in result) {
 *  console.error(result.error.message)
 * }
 */
export type MaybeFetchResult<
  ResultType = unknown,
  ErrorType extends JSONError = JSONError,
> = MaybeResult<ResultType, ErrorType>