import { KoiosAPI } from '../../../KoiosAPI';
import { handleError } from '../../../utils/error';
import {
  Account,
  AccountAddresses,
  AccountAsset,
  AccountHistory,
  AccountList,
  AccountRewards,
  Transaction,
  UTXO,
} from './type';

/**
 * Account Information
 * @see {@link https://api.koios.rest/#post-/account_info | Get the account information for given stake addresses}
 *
 * @returns account
 *
 */
export async function accountInfo(
  this: KoiosAPI,
  stakeAddresses: string[],
): Promise<Account[]> {
  return new Promise((resolve, reject) => {
    this.instance
      .post<Account[]>(`account_info`, {
        json: { _stake_addresses: stakeAddresses },
      })
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

/**
 * Account Information (Cached)
 * @see {@link https://api.koios.rest/#post-/account_info_cached | Get the cached account information for given stake addresses, effective for registered accounts}
 *
 * @returns account
 *
 */
export async function accountInfoCached(
  this: KoiosAPI,
  stakeAddresses: string[],
): Promise<Account[]> {
  return new Promise((resolve, reject) => {
    this.instance
      .post<Account[]>(`account_info_cached`, {
        json: { _stake_addresses: stakeAddresses },
      })
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

/**
 * Account List
 * @see {@link https://api.koios.rest/#get-/account_list | Get a list of all stake addresses that have atleast 1 transaction}
 *
 * @returns Account list
 *
 */
export async function accountList(this: KoiosAPI): Promise<AccountList> {
  return new Promise((resolve, reject) => {
    this.instance<AccountList>(`account_list`)
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

/**
 * Account UTxOs
 * @see {@link https://api.koios.rest/#get-/account_utxos | Get a list of all UTxOs for a given stake address (account)}
 *
 * @returns Account list
 *
 */
export async function accountUTXOs(this: KoiosAPI): Promise<UTXO[]> {
  return new Promise((resolve, reject) => {
    this.instance<UTXO[]>(`account_utxos`)
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

/**
 * Account Addresses
 * @see {@link https://api.koios.rest/#post-/account_addresses | Get all addresses associated with given staking accounts}
 *
 * @returns Account addresses
 *
 */
export async function accountAddresses(
  this: KoiosAPI,
  stakeAddresses: string[],
): Promise<AccountAddresses[]> {
  return new Promise((resolve, reject) => {
    this.instance
      .post<AccountAddresses[]>(`account_addresses`, {
        json: { _stake_addresses: stakeAddresses },
      })
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

/**
 * Account Assets
 * @see {@link https://api.koios.rest/#post-/account_assets | Get the native asset balance for a given stake address}
 *
 * @returns Account addresses
 *
 */
export async function accountAssets(
  this: KoiosAPI,
  stakeAddresses: string[],
): Promise<AccountAsset[]> {
  return new Promise((resolve, reject) => {
    this.instance
      .post<AccountAsset[]>(`account_assets`, {
        json: { _stake_addresses: stakeAddresses },
      })
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

/**
 * Account History
 * @see {@link https://api.koios.rest/#post-/account_history | Get the staking history of given stake addresses (accounts)}
 *
 * @returns Account stake history
 *
 */
export async function accountHistory(
  this: KoiosAPI,
  stakeAddresses: string[],
  epochNO: number,
): Promise<AccountHistory[]> {
  return new Promise((resolve, reject) => {
    this.instance
      .post<AccountHistory[]>(`account_history`, {
        json: { _stake_addresses: stakeAddresses, _epoch_no: epochNO },
      })
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

/**
 * Account Updates
 * @see {@link https://api.koios.rest/#post-/account_updates | Get the account updates (registration, deregistration, delegation and withdrawals) for given stake addresses}
 *
 * @returns Account updates
 *
 */
export async function accountUpdates(
  this: KoiosAPI,
  stakeAddresses: string[],
): Promise<Transaction[]> {
  return new Promise((resolve, reject) => {
    this.instance
      .post<Transaction[]>(`account_updates`, {
        json: { _stake_addresses: stakeAddresses },
      })
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

/**
 * Account Rewards
 * @see {@link https://api.koios.rest/#post-/account_rewards | Get the full rewards history (including MIR) for given stake addresses}
 *
 * @returns Account rewards
 *
 */
export async function accountRewards(
  this: KoiosAPI,
  stakeAddresses: string[],
  epochNO: number,
): Promise<AccountRewards[]> {
  return new Promise((resolve, reject) => {
    this.instance
      .post<AccountRewards[]>(`account_rewards`, {
        json: { _stake_addresses: stakeAddresses, _epoch_no: epochNO },
      })
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}
