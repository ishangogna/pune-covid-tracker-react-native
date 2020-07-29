const ThemeReducer = (state, action) => {
    switch(action.type){
        case 'DARK_MODE':
            return(
                {
                    bg : 'black', syntax : 'white'
                }
            )
        case 'LIGHT_MODE':
            return ({
                bg : 'white', syntax : 'black'
            }
            )
        default : 
            return state;
    }
}
 
export default ThemeReducer;