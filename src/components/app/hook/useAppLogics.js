import {useEffect,useState} from "react";
import {Observable} from 'rxjs';
import {timer} from './../../../common/timer'
import {timerStates} from './../../../common/timerStates';

function useAppLogics() {

    const [count, setCount] = useState(0);

    const [status, setStatus] = useState(timerStates.STOP);

    const [isWaitClicked, setIsWaitClicked] = useState(false);


    useEffect(() => {
        const observable = new Observable(observer => {
            observer.next();

        }, []);

        observable.subscribe({
            timerId: null,
            next() {
                if (status === timerStates.START) {
                    timer.start(() => setCount(count + 1), 1000);

                } else if (status === timerStates.RESET) {
                    setCount(0);
                    timer.stop();
                    setStatus(timerStates.START);

                } else if (status === timerStates.STOP) {
                    timer.stop();
                    setCount(0);
                } else if (status === timerStates.WAIT) {
                    // skip
                }
            }
        }, []);


    });

    const onStartStop = () => {
        if (status === timerStates.STOP || status === timerStates.WAIT) {
            setStatus(timerStates.START);
        } else {
            setStatus(timerStates.STOP);
        }

    }

    const onReset = () => {
        setStatus(timerStates.RESET);
    }

    const onWait = () => {
        if (isWaitClicked === false) {
            setIsWaitClicked(true);
            setTimeout(() => setIsWaitClicked(false), 300);
        } else {
            setStatus(timerStates.WAIT);
        }
    }


    return {
        count,
        status,
        onStartStop,
        onWait,
        onReset
    }
}

export default useAppLogics;