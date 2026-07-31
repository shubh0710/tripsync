const kyotoTrip = {
    destination: "Kyoto, Japan",
    dates: "April 12 -15",
    travelers: 3,
    days: [
        {
            label: "Day 1 · Apr 12",
            activities: ["9:00 am — Fushimi Inari shrine", "1:00 pm — Nishiki market"]
        },
        {
            label: "Day 2 · Apr 13",
            activities: ["8:30 am — Arashiyama bamboo grove", "11:00 am — Kinkaku-ji temple", "4:00 pm — Gion district walk"]
        },
        {
            label: "Day 3 · Apr 14",
            activities: ["9:00 am — Kiyomizu-dera temple", "1:00 pm — Philosopher's path"]
        }
    ]
};

const lisbonTrip = {
    destination: "Lisbon, Portugal",
    dates: "May 2 - 4",
    travelers: 1,
    days: [
        {
            label: "Day 1 · May 2",
            activities: ["10:00 am — Belém Tower", "3:00 pm — Pastéis de Belém tasting"]
        },
        {
            label: "Day 2 · May 3",
            activities: ["9:00 am — Alfama district walk", "1:00 pm — Tram 28 ride"]
        }
    ]
};

console.log(kyotoTrip);
console.log(lisbonTrip);