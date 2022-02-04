export const getUserData = (state) => {
    return state.userData.userData.main;
}

export const getTestimonials = (state) => {
    return state.userData.userData.testimonials
}

export const getNetworks = (state) => {
    return state.userData.userData.social
}

export const getOccupation = (state) => {
    return state.userData.userData.occupation
}

export const getEducation = (state) => {
    return state.userData.userData.resume.education
}

export const getWork = (state) => {
    return state.userData.userData.resume.work
}

export const getSkills = (state) => {
    return state.userData.userData.resume.skills
}

export const getSkillsMessage = (state) => {
    return state.userData.userData.resume.skillmessage
}

