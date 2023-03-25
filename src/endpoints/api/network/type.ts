export type TipResponse = {
  hash: string;
  epoch_no: number;
  abs_slot: bigint;
  epoch_slot: number;
  block_no: number;
  block_time: number;
};

export interface Genesis {
  networkmagic: string;
  networkid: string;
  activeslotcoeff: string;
  updatequorum: string;
  maxlovelacesupply: string;
  epochlength: string;
  systemstart: number;
  slotsperkesperiod: string;
  slotlength: string;
  maxkesrevolutions: string;
  securityparam: string;
  alonzogenesis: string;
}

export interface Tokenomic {
  epoch_no: number;
  circulation: string;
  treasury: string;
  reward: string;
  supply: string;
  reserves: string;
}

export interface Parameters {
  tx_hash: string;
  block_height: number;
  block_time: number;
  epoch_no: number;
  data: {
    [key in string]: string;
  };
}
