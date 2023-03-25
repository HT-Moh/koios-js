import { KoiosAPI } from '../../../KoiosAPI';
import { handleError } from '../../../utils/error';
import { Genesis, TipResponse, Tokenomic, Parameters } from './type';

/**
 * Query Chain Tip
 * @see {@link https://api.koios.rest/#get-/tip | Get the tip info about the latest block seen by chain}
 *
 * @returns Protocol parameters for the latest epoch
 *
 */
export async function tip(this: KoiosAPI): Promise<TipResponse> {
  return new Promise((resolve, reject) => {
    this.instance<TipResponse>(`tip`)
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

/**
 * Get Genesis info
 * @see {@link https://api.koios.rest/#get-/genesis | Get the Genesis parameters used to start specific era on chain}
 *
 * @returns Protocol genesis information
 *
 */

export async function genesisInfo(this: KoiosAPI): Promise<Genesis[]> {
  return new Promise((resolve, reject) => {
    this.instance<Genesis[]>(`genesis`)
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

/**
 * Get historical tokenomic stats
 * @see {@link https://api.koios.rest/#get-/totals | Get the circulating utxo, treasury, rewards, supply and reserves in lovelace for specified epoch, all epochs if empty}
 *
 * @returns Protocol tokenomic for the provided epoch
 *
 */

export async function totals(
  this: KoiosAPI,
  epoch_no: number,
): Promise<Tokenomic[]> {
  return new Promise((resolve, reject) => {
    this.instance<Tokenomic[]>(`totals?_epoch_no=${epoch_no}`)
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}

/**
 * Param Update Proposals
 * @see {@link https://api.koios.rest/#get-/param_updates | Get all parameter update proposals submitted to the chain starting Shelley era}
 *
 * @returns Protocol parameter update
 *
 */

export async function paramUpdates(this: KoiosAPI): Promise<Parameters[]> {
  return new Promise((resolve, reject) => {
    this.instance<Parameters[]>(`param_updates`)
      .then(resp => {
        resolve(resp.body);
      })
      .catch(err => {
        reject(handleError(err));
      });
  });
}
