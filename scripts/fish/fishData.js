let fishCollection = [
   /*   {
        species:"Parrot Fish",
        length: 44,
        name: "Angus",
        picture:"https://i.ytimg.com/vi/y6tdGVTgmm4/maxresdefault.jpg",
        location: "Sea of Google",
        food: "Popcorn"
    },
    {
        species:"Blow-Up Tha' Club Spongeboi",
        length: 97,
        name: "Chance",
        picture:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.look4ward.co.uk%2Fwp-content%2Fuploads%2F2016%2F10%2Frsz_fish.jpg&f=1&nofb=1",
        location: "Where the party is at...",
        food: "Legos and Soy Sauce"
    },
    {
        species:"FancyFootBois",
        length: 55,
        name: "Danceswiththebestintentions",
        picture:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.divebuddy.com%2Fmembers%2Fphotos%2Fpic_1_66334.jpg&f=1&nofb=1",
        location: "Sea Floor For-Sure" ,
        food: "No food on the Weekendz"
    },
    {
        species:"ShybOi",
        length: 45,
        name: "Tater",
        picture:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fef%2F15%2F9c%2Fef159ceea66a36e3e34148b80f78e125.jpg&f=1&nofb=1",
        location: "Behind the Corral",
        food: "Skittles"
    },
    {
        species:"Water Pony",
        length:"Large",
        name: "Scooter",
        picture:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flist25.com%2Fwp-content%2Fuploads%2F2013%2F07%2Fseacreatures.png&f=1&nofb=1",
        location: "from A to B",
        food: "Kelpz"
    },
    {
        species:"In Charge",
        length:"big as hell boi",
        name: "Lancer",
        picture:"https://i.pinimg.com/originals/1f/2f/df/1f2fdf92b20a05901129591a70a82863.jpg",
        location: "In ya Subdivision",
        food: "tic tacs"
    },
    {
        species:"X-files Fish Boi Grown-Up",
        length: 3.14,
        name: "Kevin",
        picture:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F736x%2Fc1%2Fe2%2F42%2Fc1e24226efc2bfa1899ed66a3576cc6a.jpg&f=1&nofb=1",
        location: "Sewerz",
        food: "Yugioh Cards"
    },
    {
        species:"Water Possum",
        length:87,
        name: "Hard Bitez",
        picture:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%3Fid%3DOIP.sRfV6BfxPOpv23XvUPX2pAHaE7%26pid%3DApi&f=1",
        location: "Edge of the Water",
        food: "Finger Nails"
    }*/
]

const getFishData = () => {
    return fetch("http://localhost:8088/fish").then(
        (triggResponse) => {
            return triggResponse.json()
        }
    )
        .then(
            (arrayOfFish) => {
                // 100 percent sure the data is back
                fishCollection = arrayOfFish
            }
        )
}













// FILTERING EXERCISE DETERMINING HIERARCHY OF FISHES

// 3, 6, 9, 12, etc... fish
const mostHolyFish = () => {
    const holyFish = []

    for (const fish of fishCollection) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
    }
    }
    return holyFish
}

// 5, 10, 15, 20, 25, etc... fish
const soldierFish = () => {
    const soldierFish = []

    for (const fish of fishCollection) {
        if (fish.length % 5 === 0 && fish.length % 3 != 0) {
            soldierFish.push(fish)
    }
    }
    return soldierFish
}

// Any fish not a multiple of 3 or 5
const regularFish = () => {
    const regularFish = []

    for (const fish of fishCollection) {
        if (fish.length % 5 != 0 && fish.length % 3 != 0) {
            regularFish.push(fish)
    }
}
    return regularFish
}





/* FOMO: ALTERNATIVE FUNCTION TRAINING VIA STEVE
Methods can be applied to Data Functions as well
*/
