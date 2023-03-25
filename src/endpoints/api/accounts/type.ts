export interface Account {
  stake_address: string;
  status: string;
  delegated_pool: string;
  total_balance: string;
  utxo: string;
  rewards: string;
  withdrawals: string;
  rewards_available: string;
  reserves: string;
  treasury: string;
}

export type AccountList = {
  id: string;
}[];

export interface UTXO {
  tx_hash: string;
  tx_index: number;
  address: string;
  value: string;
  block_height: number;
  block_time: number;
}

export interface AccountAddresses {
  stake_address: string;
  addresses: string[];
}

export interface AccountAsset {
  stake_address: string;
  asset_list: AssetList[];
}

export interface AssetList {
  decimals: number;
  quantity: string;
  policy_id: string;
  asset_name: string;
  fingerprint: string;
}

export interface AccountHistory {
  stake_address: string;
  history: StakeHistory[];
}

export interface StakeHistory {
  pool_id: string;
  epoch_no: number;
  active_stake: string;
}

export interface Transaction {
  tx_hash: string;
  epoch_no: number;
  block_time: number;
  epoch_slot: number;
  action_type: string;
  absolute_slot: number;
}

export interface Reward {
  type: string;
  amount: string;
  pool_id: string;
  earned_epoch: number;
  spendable_epoch: number;
}

export interface AccountRewards {
  stake_address: string;
  rewards: Reward[];
}
