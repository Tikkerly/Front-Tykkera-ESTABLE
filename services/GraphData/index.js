import axios from "axios"

const GraphData = async (route, token, setDataGraph, setOptions, setLoadingDataGraph) => {
    try {
        const { data } = await axios.get(route, {
            headers: {
                'x-token': token
            }
        })
        setDataGraph(data.dataGraph)
        setOptions(data.options)
        setLoadingDataGraph(false)
        return
    } catch (error) {
        setLoadingDataGraph(false)
        return
    }
}

export default GraphData