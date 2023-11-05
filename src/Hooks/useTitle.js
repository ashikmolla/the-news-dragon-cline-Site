import { useEffect } from "react";


const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-The News D`
    }, [title])
}
export default useTitle;