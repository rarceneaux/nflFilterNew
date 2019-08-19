import {printToDom} from '../helpers/util.js';


let teams = [
  {
    name:"Titans",
    img:"https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/63/2c/34/632c34a2-8e7d-dd78-f55c-6ed5abdee6d0/source/256x256bb.jpg",
    conference:"AFC",
    division:"South",
    madePlayoffsLastSeason:false,
  },
  {
    name:"Texans",
    img:"https://pbs.twimg.com/profile_images/664402312996200448/5W2Lusba_400x400.jpg",
    conference:"AFC",
    division:"South",
    madePlayoffsLastSeason:true,
  },
  {
    name:"Jaguars",
    img:"https://pbs.twimg.com/profile_images/664403706822197248/upeZoABV_400x400.png",
    conference:"AFC",
    division:"South",
    madePlayoffsLastSeason:false,
  },
  {
    name:"Colts",
    img:"https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/bb/69/98/bb69980d-5056-db6a-8b2b-9288c6e68a5c/source/256x256bb.jpg",
    conference:"AFC",
    division:"South",
    madePlayoffsLastSeason:true,
  },
  {
    name:"Chiefs",
    img:"https://pbs.twimg.com/profile_images/686564181294866432/rVDkZsSS_400x400.jpg",
    conference:"AFC",
    division:"West",
    madePlayoffsLastSeason:true,
  },
  {
    name:"Chargers",
    img:"https://styles.redditmedia.com/t5_2rzkb/styles/communityIcon_yt3jycgvxti01.png",
    conference:"AFC",
    division:"West",
    madePlayoffsLastSeason:true,
  },
  {
    name:"Raiders",
    img:"https://res-4.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/kxnsdxxdhtwtpxvlcewy",
    conference:"AFC",
    division:"West",
    madePlayoffsLastSeason:false,
  },
  {
    name:"Broncos",
    img:"https://pbs.twimg.com/profile_images/736779046785290240/xhsCcyA-_400x400.jpg",
    conference:"AFC",
    division:"West",
    madePlayoffsLastSeason:false,
  },
  {
    name:"Rams",
    img:"https://i.pinimg.com/originals/88/79/a4/8879a4f189033c8f6615d10b895b0046.jpg",
    conference:"NFC",
    division:"West",
    madePlayoffsLastSeason:true,
  },
  {
    name:"Cardinals",
    img:"https://pbs.twimg.com/profile_images/796560374254288896/mtgjLctY_400x400.jpg",
    conference:"NFC",
    division:"West",
    madePlayoffsLastSeason:false,
  },
  {
    name:"49ers",
    img:"https://d1si3tbndbzwz9.cloudfront.net/football/team/23/logo.png",
    conference:"NFC",
    division:"West",
    madePlayoffsLastSeason:false,
  },
  {
    name:"Seahawks",
    img:"https://static.clubs.nfl.com/seahawks/zadj3ehrnxwhvl6swapk",
    conference:"NFC",
    division:"West",
    madePlayoffsLastSeason:false,
  },
  {
    name:"Panthers",
    img:"https://apprecs.org/ios/images/app-icons/256/3b/462021947.jpg",
    conference:"NFC",
    division:"South",
    madePlayoffsLastSeason:false,
  },
  {
    name:"Falcons",
    img:"https://b3h2.scene7.com/is/image/BedBathandBeyond/147165763339468p?$imagePLP$&wid=256&hei=256",
    conference:"NFC",
    division:"South",
    madePlayoffsLastSeason:false,
  },
  {
    name:"Saints",
    img:"https://d1si3tbndbzwz9.cloudfront.net/football/team/30/logo.png",
    conference:"NFC",
    division:"South",
    madePlayoffsLastSeason:true,
  },
  {
    name:"Bucs",
    img:"https://pbs.twimg.com/profile_images/678197372829106176/TsegQdsp_400x400.jpg",
    conference:"NFC",
    division:"South",
    madePlayoffsLastSeason:false,
  }
];

const makeJumbo = () => {
  const jumboString = `<div class="jumbotron">
  <h1 class="display-4">Game 🏈 Time</h1>
  <p class="lead">What Time Is It?</p>
  <hr class="my-4">
  <p>The Road to the SUPER BOWL</p>
  <button class="btn btn-primary btn-lg">Coin Flip</button>
</div>`;
printToDom(jumboString,'div1');
};

const makeBtns = () => {
  const btnString = `<button id="afc" type="button" class="btn btn-primary">AFC</button>
  <button id="nfc" type="button" class="btn btn-secondary">NFC</button>
  <button id="playoffs" type="button" class="btn btn-success">Playoffs</button>
  <button id="all" type="button" class="btn btn-danger">All</button>`;
  printToDom(btnString,'div2');
};
















export {makeJumbo,makeBtns};