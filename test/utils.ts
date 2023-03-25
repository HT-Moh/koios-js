import { join } from 'path';
import { KoiosAPI } from '../src';
import { Options } from '../src/types';

export const mainentUrl = (path: string) => {
  return new URL(join('/api/v0/', path), 'https://api.koios.rest').toString();
};

export const SDK = (options?: Partial<Options>): KoiosAPI =>
  new KoiosAPI({
    projectId: `${process.env.PROJECT_ID}`,
    ...options,
  });
