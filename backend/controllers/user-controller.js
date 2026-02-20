export const createUser = async (req, res) => {
  console.log('Body of the request handled in the Controller', req.body)

  return res.json({
    message: 'Temporary response from Controller',
    data: req.body,
  })
}