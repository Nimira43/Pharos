export const getAllTasks = async (req, res) => {
  const tasks = []

  return res
    .status(200)
    .json({
      message: 'Temporary controller confirmation',
      data: tasks
    })
}