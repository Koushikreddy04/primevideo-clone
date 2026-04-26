// This file contains the movie data for the Prime Video clone app
// It includes imports for posters and backdrops, and an array of movie objects
// Movies are categorized by language: Telugu, Hindi, Tamil, Malayalam, Kannada

// TELUGU IMPORTS
import maharshiPoster from "../assets/poster/maharshi.jpg"
import murariPoster from "../assets/poster/murari.jpg"
import rrrPoster from "../assets/poster/rrr.jpg"
import bahubali1Poster from "../assets/poster/bahubali1.jpg"
import bahubali2Poster from "../assets/poster/bahubali2.jpg"
import pushpaPoster from "../assets/poster/pushpa.jpg"
import arjunreddyPoster from "../assets/poster/arjunreddy.jpg"
import sitaramamPoster from "../assets/poster/sitaramam.jpg"
import eegaPoster from "../assets/poster/eega.jpg"
import alaPoster from "../assets/poster/ala.jpg"
import rangasthalamPoster from "../assets/poster/rangasthalam.jpg"
import magadheeraPoster from "../assets/poster/magadheera.jpg"

import maharshiBackdrop from "../assets/backdrop/maharshi-bg.jpg"
import murariBackdrop from "../assets/backdrop/murari-bg.jpg"
import rrrBackdrop from "../assets/backdrop/rrr-bg.jpg"
import bahubali1Backdrop from "../assets/backdrop/bahubali1-bg.jpg"
import bahubali2Backdrop from "../assets/backdrop/bahubali2-bg.jpg"
import pushpaBackdrop from "../assets/backdrop/pushpa-bg.jpg"
import arjunreddyBackdrop from "../assets/backdrop/arjunreddy-bg.jpg"
import sitaramamBackdrop from "../assets/backdrop/sitaramam-bg.jpg"
import eegaBackdrop from "../assets/backdrop/eega-bg.jpg"
import alaBackdrop from "../assets/backdrop/ala-bg.jpg"
import rangasthalamBackdrop from "../assets/backdrop/rangasthalam-bg.jpg"
import magadheeraBackdrop from "../assets/backdrop/magadheera-bg.jpg"

// HINDI IMPORTS
import dangalPoster from "../assets/poster/dangal.jpg"
import threeIdiotsPoster from "../assets/poster/3idiots.jpg"
import pathaanPoster from "../assets/poster/pathaan.jpg"
import jawanPoster from "../assets/poster/jawan.jpg"
import shershaahPoster from "../assets/poster/shershaah.jpg"
import pkPoster from "../assets/poster/pk.jpg"
import bajrangiPoster from "../assets/poster/bajrangi.jpg"

import dangalBackdrop from "../assets/backdrop/dangal-bg.jpg"
import threeIdiotsBackdrop from "../assets/backdrop/3idiots-bg.jpg"
import pathaanBackdrop from "../assets/backdrop/pathaan-bg.jpg"
import jawanBackdrop from "../assets/backdrop/jawan-bg.jpg"
import shershaahBackdrop from "../assets/backdrop/shershaah-bg.jpg"
import pkBackdrop from "../assets/backdrop/pk-bg.jpg"
import bajrangiBackdrop from "../assets/backdrop/bajrangi-bg.jpg"

// TAMIL IMPORTS
import vikramPoster from "../assets/poster/vikram.jpg"
import leoPoster from "../assets/poster/leo.jpg"
import masterPoster from "../assets/poster/master.jpg"
import jaibhimPoster from "../assets/poster/jaibhim.jpg"
import kaithiPoster from "../assets/poster/kaithi.jpg"
import ps1Poster from "../assets/poster/ps1.jpg"

import vikramBackdrop from "../assets/backdrop/vikram-bg.jpg"
import leoBackdrop from "../assets/backdrop/leo-bg.jpg"
import masterBackdrop from "../assets/backdrop/master-bg.jpg"
import jaibhimBackdrop from "../assets/backdrop/jaibhim-bg.jpg"
import kaithiBackdrop from "../assets/backdrop/kaithi-bg.jpg"
import ps1Backdrop from "../assets/backdrop/ps1-bg.jpg"

// MALAYALAM IMPORTS
import drishyamPoster from "../assets/poster/drishyam.jpg"
import drishyam2Poster from "../assets/poster/drishyam2.jpg"
import minnalPoster from "../assets/poster/minnal.jpg"
import kumbalangiPoster from "../assets/poster/kumbalangi.jpg"

import drishyamBackdrop from "../assets/backdrop/drishyam-bg.jpg"
import drishyam2Backdrop from "../assets/backdrop/drishyam2-bg.jpg"
import minnalBackdrop from "../assets/backdrop/minnal-bg.jpg"
import kumbalangiBackdrop from "../assets/backdrop/kumbalangi-bg.jpg"

// KANNADA IMPORTS
import kgf1Poster from "../assets/poster/kgf1.jpg"
import kgf2Poster from "../assets/poster/kgf2.jpg"
import kantaraPoster from "../assets/poster/kantara.jpg"

import kgf1Backdrop from "../assets/backdrop/kgf1-bg.jpg"
import kgf2Backdrop from "../assets/backdrop/kgf2-bg.jpg"
import kantaraBackdrop from "../assets/backdrop/kantara-bg.jpg"

// Export the movies array with all movie data
export const movies = [

  // TELUGU movies
  { id: 1, title: "Maharshi", language: "Telugu", genre: "Drama", rating: 7.2, year: 2019, duration: "176 min", description: "A successful businessman returns to his village to help farmers.", posterUrl: maharshiPoster, backdropUrl: maharshiBackdrop },
  { id: 2, title: "Murari", language: "Telugu", genre: "Drama", rating: 7.8, year: 2001, duration: "179 min", description: "A man tries to break a family curse to save his loved ones.", posterUrl: murariPoster, backdropUrl: murariBackdrop },
  { id: 3, title: "RRR", language: "Telugu", genre: "Action", rating: 8.0, year: 2022, duration: "182 min", description: "Two revolutionaries fight British rule.", posterUrl: rrrPoster, backdropUrl: rrrBackdrop },
  { id: 4, title: "Baahubali The Beginning", language: "Telugu", genre: "Epic", rating: 8.0, year: 2015, duration: "159 min", description: "A man learns his royal destiny.", posterUrl: bahubali1Poster, backdropUrl: bahubali1Backdrop },
  { id: 5, title: "Baahubali 2", language: "Telugu", genre: "Epic", rating: 8.2, year: 2017, duration: "167 min", description: "Conclusion of Baahubali saga.", posterUrl: bahubali2Poster, backdropUrl: bahubali2Backdrop },
  { id: 6, title: "Pushpa", language: "Telugu", genre: "Action", rating: 7.6, year: 2021, duration: "179 min", description: "Rise of a sandalwood smuggler.", posterUrl: pushpaPoster, backdropUrl: pushpaBackdrop },
  { id: 7, title: "Arjun Reddy", language: "Telugu", genre: "Drama", rating: 8.1, year: 2017, duration: "182 min", description: "A troubled surgeon's love story.", posterUrl: arjunreddyPoster, backdropUrl: arjunreddyBackdrop },
  { id: 8, title: "Sita Ramam", language: "Telugu", genre: "Romance", rating: 8.3, year: 2022, duration: "163 min", description: "A beautiful love story.", posterUrl: sitaramamPoster, backdropUrl: sitaramamBackdrop },
  { id: 9, title: "Eega", language: "Telugu", genre: "Fantasy", rating: 7.8, year: 2012, duration: "145 min", description: "Revenge of a reincarnated fly.", posterUrl: eegaPoster, backdropUrl: eegaBackdrop },
  { id: 10, title: "Ala Vaikunthapurramuloo", language: "Telugu", genre: "Drama", rating: 7.3, year: 2020, duration: "165 min", description: "Family entertainer.", posterUrl: alaPoster, backdropUrl: alaBackdrop },
  { id: 11, title: "Rangasthalam", language: "Telugu", genre: "Action", rating: 8.2, year: 2018, duration: "170 min", description: "Village action drama.", posterUrl: rangasthalamPoster, backdropUrl: rangasthalamBackdrop },
  { id: 12, title: "Magadheera", language: "Telugu", genre: "Fantasy", rating: 7.7, year: 2009, duration: "166 min", description: "Reincarnation epic.", posterUrl: magadheeraPoster, backdropUrl: magadheeraBackdrop },

  // HINDI movies
  { id: 13, title: "Dangal", language: "Hindi", genre: "Sports", rating: 8.4, year: 2016, duration: "161 min", description: "Wrestling story.", posterUrl: dangalPoster, backdropUrl: dangalBackdrop },
  { id: 14, title: "3 Idiots", language: "Hindi", genre: "Drama", rating: 8.4, year: 2009, duration: "170 min", description: "Engineering college life.", posterUrl: threeIdiotsPoster, backdropUrl: threeIdiotsBackdrop },
  { id: 15, title: "Pathaan", language: "Hindi", genre: "Action", rating: 7.0, year: 2023, duration: "146 min", description: "Spy action thriller.", posterUrl: pathaanPoster, backdropUrl: pathaanBackdrop },
  { id: 16, title: "Jawan", language: "Hindi", genre: "Action", rating: 7.5, year: 2023, duration: "169 min", description: "Mass entertainer.", posterUrl: jawanPoster, backdropUrl: jawanBackdrop },
  { id: 17, title: "Shershaah", language: "Hindi", genre: "War", rating: 8.3, year: 2021, duration: "135 min", description: "Life of Captain Vikram Batra.", posterUrl: shershaahPoster, backdropUrl: shershaahBackdrop },
  { id: 18, title: "PK", language: "Hindi", genre: "Comedy", rating: 8.1, year: 2014, duration: "153 min", description: "A man questions society.", posterUrl: pkPoster, backdropUrl: pkBackdrop },
  { id: 19, title: "Bajrangi Bhaijaan", language: "Hindi", genre: "Drama", rating: 8.1, year: 2015, duration: "163 min", description: "Man helps lost girl return home.", posterUrl: bajrangiPoster, backdropUrl: bajrangiBackdrop },

  // TAMIL movies
  { id: 20, title: "Vikram", language: "Tamil", genre: "Action", rating: 8.3, year: 2022, duration: "174 min", description: "Agent vs drug syndicate.", posterUrl: vikramPoster, backdropUrl: vikramBackdrop },
  { id: 21, title: "Leo", language: "Tamil", genre: "Action", rating: 7.8, year: 2023, duration: "163 min", description: "Man with violent past.", posterUrl: leoPoster, backdropUrl: leoBackdrop },
  { id: 22, title: "Master", language: "Tamil", genre: "Action", rating: 7.4, year: 2021, duration: "179 min", description: "Professor vs gangster.", posterUrl: masterPoster, backdropUrl: masterBackdrop },
  { id: 23, title: "Jai Bhim", language: "Tamil", genre: "Drama", rating: 8.8, year: 2021, duration: "164 min", description: "Justice drama.", posterUrl: jaibhimPoster, backdropUrl: jaibhimBackdrop },
  { id: 24, title: "Kaithi", language: "Tamil", genre: "Action", rating: 8.5, year: 2019, duration: "145 min", description: "Prison escape thriller.", posterUrl: kaithiPoster, backdropUrl: kaithiBackdrop },
  { id: 25, title: "Ponniyin Selvan 1", language: "Tamil", genre: "Historical", rating: 7.6, year: 2022, duration: "167 min", description: "Chola dynasty epic.", posterUrl: ps1Poster, backdropUrl: ps1Backdrop },

  // MALAYALAM movies
  { id: 26, title: "Drishyam", language: "Malayalam", genre: "Thriller", rating: 8.3, year: 2013, duration: "160 min", description: "Family thriller.", posterUrl: drishyamPoster, backdropUrl: drishyamBackdrop },
  { id: 27, title: "Drishyam 2", language: "Malayalam", genre: "Thriller", rating: 8.4, year: 2021, duration: "152 min", description: "Sequel thriller.", posterUrl: drishyam2Poster, backdropUrl: drishyam2Backdrop },
  { id: 28, title: "Minnal Murali", language: "Malayalam", genre: "Superhero", rating: 7.8, year: 2021, duration: "158 min", description: "Indian superhero movie.", posterUrl: minnalPoster, backdropUrl: minnalBackdrop },
  { id: 29, title: "Kumbalangi Nights", language: "Malayalam", genre: "Drama", rating: 8.6, year: 2019, duration: "135 min", description: "Family drama.", posterUrl: kumbalangiPoster, backdropUrl: kumbalangiBackdrop },

  // KANNADA movies
  { id: 30, title: "KGF Chapter 1", language: "Kannada", genre: "Action", rating: 8.2, year: 2018, duration: "155 min", description: "Gangster rise.", posterUrl: kgf1Poster, backdropUrl: kgf1Backdrop },
  { id: 31, title: "KGF Chapter 2", language: "Kannada", genre: "Action", rating: 8.4, year: 2022, duration: "168 min", description: "Rocky becomes king.", posterUrl: kgf2Poster, backdropUrl: kgf2Backdrop },
  { id: 32, title: "Kantara", language: "Kannada", genre: "Thriller", rating: 8.4, year: 2022, duration: "150 min", description: "Village myth story.", posterUrl: kantaraPoster, backdropUrl: kantaraBackdrop }
]