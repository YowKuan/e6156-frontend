module.exports = {
  PLAYERS: {
    FIELDS:{
      PLAYER_ID: 'id',
      NAME: 'fullName',
      POSITION: 'primaryPosition_abbreviation',
      WINS: 'wins',
      SAVES: 'saves',
      ERA: 'era',
      STRIKEOUTS: 'strikeOuts',
      WHIP: 'whip'
    },
    NAME: {
      PLAYER_ID: 'ID',
      NAME: 'Full Name',
      POSITION: 'Primary Position',
      WINS: 'Wins',
      SAVES: 'Saves',
      ERA: 'Era',
      STRIKEOUTS: 'Strike Outs',
      WHIP: 'Whip'
    }
  },
  HITTERS:{
    FIELDS:{
      PLAYER_ID: 'id',
      NAME: 'fullName',
      POSITION: 'primaryPosition_abbreviation',
      RUNS: 'runs',
      HOME_RUNS: 'homeRuns',
      OPS: 'ops',
      AVG: 'avg',
      HITS: 'hits'
    },
    NAME:{
      PLAYER_ID: 'ID',
      NAME: 'Full Name',
      POSITION: 'Primary Position',
      RUNS: 'Runs',
      HOME_RUNS: 'Home Runs',
      OPS: 'Ops',
      AVG: 'Avg',
      HITS: 'Hits'
    }
  },
  TYPES0: ['1B', '2B', '3B', 'SS', 'C', 'OF', 'RF', 'P', 'DH'],
  // TYPES: ['P', '1B', '2B', '3B', 'SS', 'C', 'OF', 'CF', 'LF', 'RF', 'DH'],
  TYPES: ['P', '1B', '2B', '3B', 'SS', 'C', 'OF', 'CF', 'LF', 'RF'],
  ROSTER_MAP:{
    'C': 'c',
    // 'DH': 'dh',
    'OF': 'of',
    'CF': 'of',
    'LF': 'of',
    'RF': 'of',
    '1B': 'oneB',
    'P': 'p',
    'SS': 'ss',
    '3B': 'threeB',
    '2B': 'twoB',
  }

}
