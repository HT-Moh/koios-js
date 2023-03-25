import { API_URLS } from './config';
import { Got } from 'got';
import Bottleneck from 'bottleneck';
import { getInstance } from './utils/Got';
import { getLimiter } from './utils/limiter';
import { Options, ValidatedOptions } from './types';
import { validateOptions } from './utils';
import {
  genesisInfo,
  paramUpdates,
  tip,
  totals,
} from './endpoints/api/network';
import { accountInfo, accountInfoCached } from './endpoints/api/accounts';

class KoiosAPI {
  apiUrl: string;
  /** @ignore */
  projectId?: string;
  /** @ignore */
  userAgent?: string;
  /** @ignore */
  options: ValidatedOptions;
  /** @ignore */
  instance: Got;
  /** @ignore */
  rateLimiter: Bottleneck | undefined;

  constructor(options?: Options) {
    this.options = validateOptions(options);

    let apiBase = API_URLS.mainnet;

    if (this.options.network) {
      if (this.options.network in API_URLS) {
        apiBase = API_URLS[this.options.network];
      } else {
        throw Error(
          'Invalid network option. Valid options: mainnet, guild, preview, preprod.',
        );
      }
    }

    this.apiUrl =
      this.options?.customBackend || `${apiBase}/v${this.options.version}`;

    this.projectId = this.options.projectId;

    // this.userAgent =
    //   options?.userAgent ?? `${packageJson.name}@${packageJson.version}`;

    this.rateLimiter = this.options.rateLimiter
      ? getLimiter(this.options.rateLimiter)
      : undefined;

    this.instance = getInstance(
      this.apiUrl,
      this.options,
      this.userAgent,
      this.rateLimiter,
    );
  }

  tip = tip;
  genesisInfo = genesisInfo;
  totals = totals;
  paramUpdates = paramUpdates;

  // Account
  accountInfo = accountInfo;
  accountInfoCached = accountInfoCached;
}

export { KoiosAPI };
