import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.market',
  name: '小米应用商店',
  groups: [
    {
      key: 0,
      name: '全屏广告-弹窗广告',
      matchRoot: true,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          action: 'clickCenter', // clickNode 可能无效
          activityIds: ['.ui.FloatWebActivity', '.ui.HomeFloatWebActivity'],
          matches:
            '@Button[text="关闭" || desc="关闭"][clickable=true][visibleToUser=true] <<n [vid="webview"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16323123',
            'https://i.gkd.li/i/20946336',
            'https://i.gkd.li/i/23249365',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '局部广告-卡片广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.xiaomi.market.ui.UpdateListActivity',
          matches: '[id="com.xiaomi.market:id/iv_close_tip"]',
          snapshotUrls: 'https://i.gkd.li/i/13197334',
        },
      ],
    },
    {
      key: 10,
      name: '局部广告-个性化推荐卡片',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.xiaomi.market.business_ui.main.MarketTabActivity',
          matches: '[id="com.xiaomi.market:id/close_float_recommend"]',
          snapshotUrls: 'https://i.gkd.li/i/13624971',
        },
      ],
    },
  ],
});
