import { useEffect , useRef} from "react";

//Goal: check the database resource singleUserMatches for
//1) objects with the same eateryOutingId AND
//2) restaurantId
//place this restaurant id and name into variables in this component
//push RestaurantId: value and RestaurantName: value into the 
//eateryOuting object that has the same Id as above
//in another component create function to display match card
//in this component route to this display of the match card 

// if delay is null stop interval, use found match has been found
export const useInterval = (callback, delay) => {

    const savedCallback = useRef()

    //gather the latest callback
    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    //set up the interval 
    useEffect(()=>{
        function tick(){
            savedCallback.current()
        }
        if (delay !== null){
            const id = setInterval(tick, delay)
            return ()=> {
                clearInterval(id)
            }
        }
    },[callback, delay])
}