const faqData = [
  {
    faq: 1,
    title: 'Is Crystal Temple completely free to play?',
    text: 'Yes, Crystal Temple is free to download and play. The core gameplay, including access to all main levels and boosters, does not require any payment. Players can enjoy over 2000 levels without spending money. However, there are optional in-app purchases such as extra boosters, additional lives, and coin packs for those who want to progress faster or enhance their experience. These purchases are entirely voluntary and never mandatory to complete the game. We’ve designed the game to be fair for both free and paying users. All levels are beatable without spending money.',
  },
  {
    faq: 2,
    title: 'Can I play Crystal Temple without an internet connection?',
    text: 'Absolutely. Crystal Temple was developed with offline functionality in mind. Once the game is downloaded, players can enjoy the full gameplay experience without requiring a constant internet connection. This includes access to all levels, boosters you’ve already collected, and progression through temple zones. The only features that require internet are related to cloud saving, syncing across devices, or participating in leaderboard-based events. For travelers, commuters, and offline players, the game is fully accessible on-the-go. Just make sure to reconnect occasionally if you want to back up your progress online.',
  },
  {
    faq: 3,
    title: 'How often are new levels or content added to the game?',
    text: 'We are committed to keeping Crystal Temple fresh and exciting. New levels, temple zones, and seasonal events are typically added every 3 to 4 weeks. Each update includes new crystal mechanics, themed puzzles, and occasional secret chamber unlocks. We also use player feedback and completion data to guide our level design, ensuring that updates are both fun and challenging. Players can enable push notifications to be alerted when new content is live. You can always find update logs and previews in our blog or app store listing.',
  },
  {
    faq: 4,
    title: 'I’m stuck on a level. What should I do?',
    text: "Certain levels in Crystal Temple are designed to be more challenging than others, especially in advanced zones. If you're stuck, consider replaying a previous level to earn more boosters or use the daily reward system to your advantage. Combining multiple booster types is often key to solving difficult puzzles. Also, review the level objective carefully—some levels require collection, others target block destruction or score goals. If you feel something isn’t working as intended, reach out via our support email for help or a bug report. We’re happy to assist players who hit unexpected issues.",
  },
  {
    faq: 5,
    title: 'How does the daily reward system work?',
    text: "Each day you open the game, you're eligible for a reward. These can include free boosters, crystal coins, or even special keys for unlocking secret chambers. The rewards increase in value the more consecutive days you log in, encouraging consistent play. If you miss a day, the reward track resets, but you can resume earning the next time you return. Occasionally, there are seasonal or event-based calendars that replace or enhance the daily rewards. Always check the home screen for new bonus opportunities—it’s a great way to get ahead without spending money.",
  },
  {
    faq: 6,
    title: 'What are secret chambers, and how can I access them?',
    text: 'Secret chambers are special hidden rooms scattered across the Crystal Temple map. They often contain bonus levels, rare artifact pieces, or unique visual rewards. To unlock them, you usually need to collect specific keys or reach certain progression milestones. Some are revealed automatically as you clear normal levels, while others appear only during events. Chambers typically feature unique challenges that differ from regular levels, such as timed puzzles or multi-board scenarios. Exploring them is optional but offers additional lore, coins, and a deeper connection to the game’s narrative.',
  },
  {
    faq: 7,
    title: 'Will I lose my progress if I switch to a new device?',
    text: 'Your progress can be saved and transferred if you link your game to a cloud service such as Google Play or Facebook. Once your account is connected, your game data—including completed levels, unlocked boosters, and coin balance—will be stored securely. When switching devices, simply log in with the same linked account to restore your progress. If you play entirely offline without linking, your progress is stored locally and may be lost if you uninstall or reset your phone. For the best long-term experience, we strongly recommend enabling cloud sync. You’ll find the option in the settings menu of the game.',
  },
  {
    faq: 8,
    title: 'Are there any advertisements in Crystal Temple?',
    text: 'Yes, there are ads, but they are completely optional. Watching short video ads can earn you extra boosters, additional moves, or revive opportunities without spending in-game currency. We believe in rewarding players who choose to engage with ads while never forcing them. There are no interruptions between levels or during gameplay unless you choose to watch an ad for a bonus. We’ve kept ads minimal and focused on providing value. This approach allows players who don’t wish to spend money to still earn meaningful advantages.',
  },
  {
    faq: 9,
    title: 'Can I play Crystal Temple with friends or compare scores?',
    text: 'Currently, Crystal Temple focuses on solo exploration, but there are social elements in development. Our leaderboard system allows you to see how your score or progress compares to other global players. In future updates, we plan to roll out friend challenges and score races that let you compete directly with others. You’ll be able to share scores and invite friends to explore the temple together in asynchronous events. For now, you can connect your account to view global rankings and track your percentile as new levels are added.',
  },
  {
    faq: 10,
    title: 'What makes Crystal Temple different from other match-3 games?',
    text: 'Crystal Temple combines classic match-3 gameplay with a strong sense of exploration and progression. Instead of being a purely level-by-level puzzle game, it features unlockable zones, hidden paths, lore, and strategic elements through boosters and relics. The design is immersive, with hand-crafted visuals and soundscapes that make each region feel unique. We also prioritize fair mechanics over pay-to-win strategies. Our team continuously analyzes player feedback to improve puzzles, balance difficulty, and enhance the narrative-driven experience. In short, it’s a puzzle game built for thinkers, explorers, and treasure hunters alike.',
  },
  {
    faq: 11,
    title: 'How do I report a bug or give feedback?',
    text: "We welcome all feedback and actively respond to bug reports and suggestions. If something isn't working properly or you want to request a new feature, simply send an email to info@crystaltemple.space with as much detail as possible. Include your device type, game version, and a screenshot if available. Our support team typically replies within 24 to 48 hours on weekdays. Player feedback has led to some of our best updates, so your voice truly matters. Whether it’s a gameplay glitch or a creative idea, we want to hear from you.",
  },
];

const btnOpenAllEl = document.querySelector('[data-faq="open-all-faq"]');
const btnCloseAllEl = document.querySelector('[data-faq="close-all-faq"]');
const modalOverlayEl = document.querySelector('.modal-overlay-faq');
const modalListEl = document.querySelector('.modal-list');
const listFaqEl = document.querySelector('[data-list="list"]');
const listMainFaqEl = document.querySelector('.faq-list');
const textFaqEl = document.querySelector('[data-action=""]');


renderMainFaq(faqData);

listFaqEl.addEventListener('click', event => {
  const moreBtn = event.target.closest('[data-faq][data-action-btn-more]');
  const closeBtn = event.target.closest('.faq-btn-close')
  if (moreBtn) {

    const faqItem = moreBtn.closest('.faq-item');
    if (!faqItem) return;

  const faqText = faqItem.querySelector('.faq-text');
  const closeBtnEl = faqItem.querySelector('[data-faq-close]')

  faqText.dataset.action = 'open';
  moreBtn.dataset.actionBtnMore ='close';
  closeBtnEl.setAttribute('data-faq-close', 'open');

  return;
  }

  if(closeBtn){
    const faqItem = closeBtn.closest('.faq-item')
    if (!faqItem) return;

    const faqText = faqItem.querySelector('.faq-text');
    const closeBtnEl = faqItem.querySelector('[data-faq-close]')
    const moreBtnEl = faqItem.querySelector('[data-action-btn-more]')

    faqText.dataset.action = 'close';
    moreBtnEl.dataset.actionBtnMore ='open';
    closeBtnEl.setAttribute('data-faq-close', 'close');
  }

});

btnOpenAllEl.addEventListener('click', event => {
  renderModalFaq(faqData);
  openModalFaq();
});

btnCloseAllEl.addEventListener('click', event => {
  closeModalFaq();
});

function openModalFaq() {
  modalOverlayEl.classList.add('is-open-modal-faq');
  document.documentElement.style.overflow = 'hidden';
  document.addEventListener('keydown', handleEscKey);
}

function closeModalFaq() {
  modalOverlayEl.classList.remove('is-open-modal-faq');
  modalListEl.innerHTML = '';
  document.documentElement.style.overflow = '';
  document.removeEventListener('keydown', handleEscKey);
  modalListEl.innerHTML = '';
}

function handleEscKey(e) {
  if (e.key === 'Escape') {
    closeModalFaq();
  }
}

function renderModalFaq(Data) {
  const markup = Data.map(({ title, text }) => {
    return `<li class="modal-item">
            <p class="modal-faq-title">${title}</p>
            <p class="modal-faq-text">${text}</p>
          </li>`;
  }).join('');
  modalListEl.innerHTML = markup;
}

function renderMainFaq(faqData) {
  const markup = faqData.map(({ faq, title, text }, index) => {
    if (index >= 7) return '';

    const addclass = index >= 5 ? 'faq-item-desktop' : '';
    return `<li class="faq-item ${addclass}">
          <button class="faq-btn-close" data-faq-close="close">
          <svg class="faq-btn-close-icon" width="20" height="20">
          <use href="/img/sprite.svg#icon_close_btn"></use>
          </svg>
        </button>
        <p class="faq-title">${title}</p>
        <p class="faq-text" data-action="close">${text}</p>
        <button class="faq-button" type="button" data-faq="${faq}" data-action-btn-more="open">More</button>
      </li>`;
  }).join('');
  listMainFaqEl.innerHTML = markup;
}
