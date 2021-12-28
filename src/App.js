import React, { memo, Suspense } from 'react';

import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';

import store from '@/store';
import routers from '@/router';

import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import AppPlayBar from '@/pages/player/app-play-bar';

export default memo(() => (
  <Provider store={store}>
    <HashRouter>
      <AppHeader />
      <Suspense fallback={<div>loading...</div>}>{renderRoutes(routers)}</Suspense>
      <AppFooter />

      {/* 播放器 */}
      <AppPlayBar />
    </HashRouter>
  </Provider>
));
