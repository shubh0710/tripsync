const kyotoTrip = {
    id: 1,
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

// Closure-based ID generator — keeps `nextId` private, nothing outside
// this function can read or corrupt it directly.
function createIdGenerator() {
    let nextId = 100;
    return function () {
        const id = nextId;
        nextId = nextId + 1;
        return id;
    };
}

const generateActivityId = createIdGenerator();

function getActivitiesForDay(trip, label) {
    for (let i = 0; i < trip.days.length; i++) {
        if (trip.days[i].label === label) {
            return trip.days[i].activities;
        }
    }
    return "No activities found for that day.";
}

function addActivity(day, desc, time) {
    const newActivity = {
        id: generateActivityId(),
        time: time,
        desc: desc
    };
    day.activities.push(newActivity);
    return day.activities;
}

function removeActivity(day, activityId) {
    let index = -1;
    for (let i = 0; i < day.activities.length; i++) {
        if (day.activities[i].id === activityId) {
            index = i;
            break;
        }
    }
    if (index !== -1) {
        day.activities.splice(index, 1);
    }
    return day.activities;
}

// --- Sanity checks ---

console.log(getActivitiesForDay(kyotoTrip, "Day 2 · Apr 13"));

const updatedActivities = addActivity(kyotoTrip.days[0], "Ramen dinner", "7:00 pm");
console.log([...kyotoTrip.days[0].activities]);

const newActivityId = updatedActivities[updatedActivities.length - 1].id;
removeActivity(kyotoTrip.days[0], newActivityId);
console.log([...kyotoTrip.days[0].activities]);