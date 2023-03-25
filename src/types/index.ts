import { RateLimiterConfig } from '../utils/limiter';
import {
  CacheError,
  CancelError,
  TimeoutError,
  RequestError,
  ReadError,
  ParseError,
  UploadError,
  HTTPError,
  MaxRedirectsError,
  UnsupportedProtocolError,
  RequiredRetryOptions,
} from 'got';

export type CardanoNetwork = 'mainnet' | 'guild' | 'preview' | 'preprod';

export type KoiosNetwork = CardanoNetwork;

export interface ValidatedOptions {
  customBackend?: string;
  version: number;
  requestTimeout: number;
  rateLimiter?: false | RateLimiterConfig;
  http2?: boolean;
  debug: boolean;
  projectId?: string;
  network?: KoiosNetwork;
  retrySettings?: RequiredRetryOptions;
}

type OptionCombination1 = {
  projectId: string;
  customBackend?: string;
};

type OptionCombination2 = {
  projectId?: string;
  customBackend: string;
};

type AdditionalOptions = {
  network?: CardanoNetwork;
  version?: number;
  rateLimiter?: boolean | RateLimiterConfig;
  http2?: boolean;
  debug?: boolean;
  userAgent?: string;
  requestTimeout?: number;
  retrySettings?: RequiredRetryOptions;
};

export type Options = (OptionCombination1 | OptionCombination2) &
  AdditionalOptions;

export type PaginationOptions = {
  count?: number;
  page?: number;
  order?: 'asc' | 'desc';
};

export type AdditionalEndpointOptions = {
  from?: string | undefined;
  to?: string | undefined;
};

export type AllMethodOptions = {
  batchSize?: number | undefined;
  order?: 'asc' | 'desc';
};

export type ErrorType =
  | // Server error
  {
      status_code: number;
      message: string;
      error: string;
      url: string;
      body?: unknown;
    }
  // Client Error
  | {
      message: string;
      code: string;
      url: string | undefined;
    };

export type GotError =
  | CacheError
  | CancelError
  | TimeoutError
  | RequestError
  | ReadError
  | ParseError
  | UploadError
  | HTTPError
  | MaxRedirectsError
  | UnsupportedProtocolError;
