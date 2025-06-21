import type { Activity } from "../types";

export type ActivityActions = 
	{ type: "save-activity", payload: { newActivity: Activity }} |
	{ type: "set-activeId", payload: { id: Activity['id'] }} |
	{ type: "delete-active", payload: { id: Activity['id'] }} |
	{ type: "restart-app"} 

export type ActivityState = {
	activities: Activity[],
	activeId: Activity['id']
};

const localStorageActivities = (): Activity[] => {
	const activities = localStorage.getItem('activities')
	return activities ? JSON.parse(activities) : [];
}

export const initialState: ActivityState= {
	activities: localStorageActivities(),
	activeId: ''
};

export const activityReducer = (
	state: ActivityState = initialState,
	action: ActivityActions
) => {
	if (action.type === "save-activity") {
		let updateActivity: Activity[] = [];
		if (state.activeId) {
			updateActivity = state.activities.map(act => act.id === state.activeId ? action.payload.newActivity : act);
		} else {
			updateActivity = [...state.activities, action.payload.newActivity]
		}
		return {
			...state,
			activities: updateActivity,
			activeId: ''
		};
	}

	if (action.type === "set-activeId") {
		return {
			...state,
			activeId: action.payload.id
		}
	}

	if (action.type === 'delete-active') {
		return {
			...state,
			activities: state.activities.filter(act => act.id !== action.payload.id)
		}
	}

	if (action.type === 'restart-app') {
		return {
			activities: [],
			activeId: ''
		}
	}

	return state;
};
