import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 190456937,
  name: 'GDK Rules',
  version: 2,
  author: 'yzl3014',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/yzl3014/gkd/',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
