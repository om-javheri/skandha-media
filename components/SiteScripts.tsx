'use client';

import { useEffect } from 'react';
import { startForms, startMenus, startMotion } from '@/lib/site-scripts';

const started = new Set<string>();

/**
 * Starts the site's page behaviour (entrance animations, folding menus, forms that send) once the
 * page is on screen. Each starts once per page load, also when React runs effects twice in development.
 */
export default function SiteScripts({ motion = false, menu = false, forms = false }: { motion?: boolean; menu?: boolean; forms?: boolean }) {
  useEffect(() => {
    const start = (name: string, on: boolean, run: () => void) => {
      if (!on || started.has(name)) return;
      started.add(name);
      run();
    };
    start('motion', motion, startMotion);
    start('menu', menu, startMenus);
    start('forms', forms, startForms);
  }, [motion, menu, forms]);
  return null;
}
