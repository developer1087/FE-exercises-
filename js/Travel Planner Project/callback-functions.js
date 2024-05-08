// 1

const travelPlanObjArr = [
  {
    id: 1,
    city: "Karmiel",
    activities: [
    { name: "Mom", duration: 2 }, { name: "Dad", duration: 3 }
    ]
   },
  {
    id: 2,
    city: "Ashdod",
    activities: [
    { name: "Mimo", duration: 1.5 }, { name: "Yossi", duration: 0.5 }
    ]
   },

]

function processTravelPlan(objArr, cbfunc) {
  // 1. check if array
  if (!Array.isArray(objArr)) {
    console.log("Err: Expected array of travel plans.");
  }
  // 2. check if properties
  let isAllProps = true;
  for (obj of objArr) {
    if (!obj.id === "id" || !obj.activities === "activities" || !obj.city === "city") {
      console.log(`Object with ID ${obj.id} is not in the right structure.`);
      isAllProps = false;
    }
  }
  // 3. if all objects correct - clone array
  let newTravelPlans = [];
  if (isAllProps) {
    newTravelPlans = JSON.parse(JSON.stringify(objArr)); 
  };
  // 4. loop over cloned array and apply cb function to each obj
  for (obj of newTravelPlans) {
    cbfunc(obj);
  };
  return newTravelPlans;
}

function addMeditationActivity(obj) {
  obj.activities.push({ name: "Meditate", duration: 0.1 });
};

console.log(processTravelPlan(travelPlanObjArr, addMeditationActivity));

// 2

const activityObjectsArr = [
  {
    id: 1,
    name: "Hiking",
    type: "Active",
    duration: 2
   },
  {
    id: 2,
    name: "Dinner",
    type: "Food",
    duration: 1.5
   }
]

function processActivities(arr, cbfunc) {
   // 1. check if array
   if (!Array.isArray(arr)) {
    console.log("Err: Expected array of activities.");
  }
  // 2. check if properties
  let isAllProps = true;
  for (object of arr) {
    if (!object.id === "id" || !object.name === "name" || !object.type === "type" || !object.duration === "duration") {
      console.log(`Object with ID ${object.id} is not in the right structure.`);
      isAllProps = false;
    }
  }
  // 3. if all objects correct - clone array
  let newActivitiesArr = [];
  if (isAllProps) {
    newActivitiesArr = JSON.parse(JSON.stringify(arr)); 
  }
  // 4. loop over cloned array and apply cb function to each obj
  for (object of newActivitiesArr) {
    cbfunc(object, 1);
  }
  return newActivitiesArr;
};

function delay(object, delayLen) {
  object.duration = object.duration + delayLen;
};

console.log(processActivities(activityObjectsArr, delay));

// 3

const planObj = {
  id: 1,
  city: "Ashkelon",
  activities: [
  { name: "Nunu", duration: 2 }, { name: "Tayelet", duration: 1 }
  ]
 }

 function processPlan(singleObj, cbfunc) {
   // 1. check if object
   if (!typeof(singleObj) === 'object') {
    console.log("Err: Expected an object.");
  }
  // 2. check if properties
  let isAllProps = true;
  for (property in singleObj) {
    if (!property.id === "id" || !property.city === "city" || !property.activities === "activities") {
      console.log(`Object is not in the right structure.`);
      isAllProps = false;
    }
  }
  // 3. if object correct - clone object
  let newObject = [];
  if (isAllProps) {
    newObject = JSON.parse(JSON.stringify(singleObj)); 
  }
  // 4.apply cb function to object
  cbfunc(newObject, { gift: "Flowers" });

  return newObject;
};

function whatToBring(obj, gift) {
  obj[Object.keys(gift)] = Object.values(gift)
}

console.log(processPlan(planObj, whatToBring));