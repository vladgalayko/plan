export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore()    
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Vlad',
            authorLastName: 'Smith',
            authorId: 666,
            createdAt: new Date()
        }).then(() => {
            dispatch({
                type: 'CREATE_PROJECT',
                project
            });
        }).catch((err) => {
            dispatch({
                type: 'CREATE_PROJECT_ERROR',
                err
            });
        })
        
    }
}