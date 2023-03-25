import { mainentUrl } from '../utils';
import mocks from './koios';
import { KoiosAPI } from '../../src';

export default [
  {
    command: (SDK: KoiosAPI) => SDK.tip(),
    path: mainentUrl('tip'),
    endpointMock: mocks.tip,
    response: mocks.tip,
  },
  {
    command: (SDK: KoiosAPI) => SDK.genesisInfo(),
    path: mainentUrl('genesisInfo'),
    endpointMock: mocks.genesisInfo,
    response: mocks.genesisInfo,
  },
  {
    command: (SDK: KoiosAPI) => SDK.totals(320),
    path: mainentUrl('totals?_epoch_no=320'),
    endpointMock: mocks.totals,
    response: mocks.totals,
  },
  {
    command: (SDK: KoiosAPI) => SDK.paramUpdates(),
    path: mainentUrl('param_updates'),
    endpointMock: mocks.paramUpdate,
    response: mocks.paramUpdate,
  },

  {
    command: (SDK: KoiosAPI) =>
      SDK.accountInfo([
        'stake1uyrx65wjqjgeeksd8hptmcgl5jfyrqkfq0xe8xlp367kphsckq250',
      ]),
    path: mainentUrl('account_info'),
    endpointMock: mocks.accountInfo,
    response: mocks.accountInfo,
  },
];
