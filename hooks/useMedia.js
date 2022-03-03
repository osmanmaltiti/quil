import { useEffect, useState } from "react"

const useMedia = (query) => {
    const [init, setInit] = useState();
    useEffect(() => {
        let defaultMedia = window.matchMedia(query);
        setInit(defaultMedia)
    }, [query])
    
    const [state, setState] = useState(init);
    useEffect(() => {
        const media = window.matchMedia(query);
        if(state !== media.matches) setState(media.matches)
        else setState(media.matches)
        const resize = (e) => setState(media.matches);

        media.addEventListener('change', resize);

        return () => removeEventListener("change",resize)
    }, [query, state])
  return state;
}

export default useMedia;