export const categoryTabs = [
    { 
        name: 'Casino',
        sections: ['Popular', 'New', 'Slots', 'Jackpots', 'Buy Feature', 'Hot Slots', 'Table Games', 'Drops & Wins', 'Cash Drop', 'Arcade', 'Cluster Games', 'Latest Provider', 'Exclusives'],
        urlMap: {
            'Popular': '/popular-games',
            'New': '/new-games',
            'Slots': '/slots',
            'Jackpots': '/jackpot-games',
            'Buy Feature': '/buy-feature',
            'Hot Slots': '/hot-slots',
            'Table Games': '/casino-games',
            'Drops & Wins': '/drops-and-wins',
            'Cash Drop': '/cash-drop',
            'Arcade': '/arcade-games',
            'Cluster Games': '/cluster-games',
            'Latest Provider': '/latest-provider',
            'Exclusives': '/exclusives'
        },
        verifyMethod: 'verifyCasinoSubCategories'
    },
    { 
        name: 'Live Casino',
        sections: ['Popular', 'Game Shows', 'Roulette', 'Blackjack', 'Baccarat', 'Poker'],
        urlMap: {
            'Popular': '/live-casino',
            'Game Shows': '/live-casino/game-shows',
            'Roulette': '/live-casino/roulette',
            'Blackjack': '/live-casino/blackjack',
            'Baccarat': '/live-casino/baccarat',
            'Poker': '/live-casino/poker'
        },
        verifyMethod: 'verifyLiveCasinoSubCategories'
    },
    { 
        name: 'Promotions',
        sections: ['Welcome Bonus', 'Boost XP', 'Casino Promotions', 'Live Casino Promotions', 'All Promotions'],
        urlMap: {
            'Welcome Bonus': '/bonus',
            'Boost XP': '/boostxp',
            'Casino Promotions': '/promotions/casino',
            'Live Casino Promotions': '/promotions/live-casino',
            'All Promotions': '/promotions'
        },
        verifyMethod: 'verifyPromotionsSubCategories'
    },
    {
        name: 'Customer Support',
        sections: ['Customer Support'],
        urlMap: {
            'main': '/customer-support'
        },
        headerMessage: {
            text: 'Hello. What can we help you with?'
        }
    }
];