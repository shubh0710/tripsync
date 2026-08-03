const kyotoTrip = {
    id: 1,
    destination: "Kyoto, Japan",
    dates: "April 12 - 15",
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

const createIdGenerator = () => {
    let nextId = 100;
    return () => {
        const id = nextId;
        nextId = nextId + 1;
        return id;
    };
};

const generateActivityId = createIdGenerator();

// Refactored: manual for-loop-with-break → find
const getActivitiesForDay = (trip, label) => {
    const day = trip.days.find((d) => d.label === label);
    return day ? day.activities : "No activities found for that day.";
};

// Unchanged — no manual loop existed here to refactor
const addActivity = (day, desc, time = "TBD") => {
    const newActivity = {
        id: generateActivityId(),
        time: time,
        desc: desc
    };
    day.activities.push(newActivity);
    return day.activities;
};

// Refactored: manual for-loop + splice → filter (non-mutating rebuild)
const removeActivity = (day, activityId) => {
    day.activities = day.activities.filter((activity) => activity.id !== activityId);
    return day.activities;
};

// New — reduce genuinely earns its keep here; .length alone can't total nested days
const getTotalActivityCount = (trip) => {
    return trip.days.reduce((total, day) => total + day.activities.length, 0);
};

// Refactored: manual for-loop → forEach
const logActivities = (...activities) => {
    activities.forEach((activity) => console.log(activity));
};

// --- Sanity checks ---

console.log(getActivitiesForDay(kyotoTrip, "Day 2 · Apr 13"));

const updatedActivities = addActivity(kyotoTrip.days[0], "Ramen dinner", "7:00 pm");
console.log([...kyotoTrip.days[0].activities]);

const newActivityId = updatedActivities[updatedActivities.length - 1].id;
removeActivity(kyotoTrip.days[0], newActivityId);
console.log([...kyotoTrip.days[0].activities]);

const addedWithDefaultTime = addActivity(kyotoTrip.days[1], "Spontaneous coffee stop");
console.log(addedWithDefaultTime[addedWithDefaultTime.length - 1]); // time: "TBD"

console.log(getTotalActivityCount(kyotoTrip)); // total activities across all 3 days

logActivities("Ramen dinner", "Temple visit", "Market walk");

// --- Bonus: some / every / sort demos (not part of today's core build) ---

const day2Activities = kyotoTrip.days[1].activities;

console.log(day2Activities.some((a) => a.time === "TBD"));
console.log(day2Activities.every((a) => a.time !== "TBD"));

const sortedByDesc = [...day2Activities].sort((a, b) => a.desc.localeCompare(b.desc));
console.log(sortedByDesc);