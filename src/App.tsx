/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {ContactAndFooter} from './components/ContactAndFooter';
import {ExperienceSection} from './components/ExperienceSection';
import {Hero} from './components/Hero';
import {Navbar} from './components/Navbar';
import {SocialMediaSection} from './components/SocialMediaSection';
import {WebsitesSection} from './components/WebsitesSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFBFB] text-[#0F172A]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-[#0F766E] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <WebsitesSection />
        <SocialMediaSection />
        <ExperienceSection />
        <ContactAndFooter />
      </main>
    </div>
  );
}
