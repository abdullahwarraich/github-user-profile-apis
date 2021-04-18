const requestHandler = async (req, res, functionName) => {
  try {
    const result = await functionName(req)
    res.status(200).send(result)
  } catch (error) {
    console.error(error.response.data)
    res.status(400).send(error.response.data)
  }
}

export default requestHandler
