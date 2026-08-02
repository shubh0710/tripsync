const kyotoTrip = {
    destination: "Kyoto, Japan",
    dates: "April 12 -15",
    travelers: 3,
    days: [
        {
            id: 1,
            label: "Day 1 · Apr 12",
            activities: [
                { id: 1, time: "9:00 am", desc: "Fushimi Inari shrine" },
                { id: 2, time: "1:00 pm", desc: "Nishiki market" }
            ]
        },
        {
            id: 2,
            label: "Day 2 · Apr 13",
            activities: [
                { id: 1, time: "8:30 am", desc: "Arashiyama bamboo grove" },
                { id: 2, time: "11:00 am", desc: "Kinkaku-ji temple" },
                { id: 3, time: "4:00 pm", desc: "Gion district walk" }
            ]
        },
        {
            id: 3,
            label: "Day 3 · Apr 14",
            activities: [
                { id: 1, time: "9:00 am", desc: "Kiyomizu-dera temple" },
                { id: 2, time: "1:00 pm", desc: "Philosopher's path" }
            ]
        }
    ]
};

const lisbonTrip = {
    id: 2,
    destination: "Lisbon, Portugal",
    dates: "May 2 - 4",
    travelers: 1,
    days: [
        {
            id: 1,
            label: "Day 1 · May 2",
            activities: [
                { id: 1, time: "10:00 am", desc: "Belém Tower" },
                { id: 2, time: "3:00 pm", desc: "Pastéis de Belém tasting" }
            ]
        },
        {
            id: 2,
            label: "Day 2 · May 3",
            activities: [
                { id: 1, time: "9:00 am", desc: "Alfama district walk" },
                { id: 2, time: "1:00 pm", desc: "Tram 28 ride" }
            ]
        }
    ]
};

function getActivitiesForDay(trip, label) {
    for (let i = 0; i < trip.days.length; i++) {
        if (trip.days[i].label === label) {
            return trip.days[i].activities;
        }
    }
    return "No activities found for that day.";
}

function addActivity(day, activity) {
    day.activities.push(activity);
    return day.activities;
}

function removeActivity(day, activityId) {
    let index = -1;
    for (let i = 0; i < day.activities.length; i++) {
        if (day.activities[i].id === activityId) {
            index = i;
            break; // stop searching the moment we've found it
        }
    }
    if (index !== -1) {
        day.activities.splice(index, 1);
    }
    return day.activities;
}

console.log(getActivitiesForDay(kyotoTrip, "Day 2 · Apr 13"));
addActivity(kyotoTrip.days[0], { id: 3, time: "7:00 pm", desc: "Ramen dinner" });
console.log([...kyotoTrip.days[0].activities]);
removeActivity(kyotoTrip.days[0], 3);
console.log([...kyotoTrip.days[0].activities]);