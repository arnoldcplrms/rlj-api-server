module.exports = (error, res) => {
    console.log(error);
    res.status(500).json({
        err: error
    })
}