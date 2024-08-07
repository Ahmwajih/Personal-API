module.exports = (req, res, next) => {
    // for searching in the database

    const search = req.query.search || '';

    for (let key in search) search[key] = new RegExp(search[key], 'i');

    // we use for  key in search to loop through the search object and apply the regular expression to each key
    // the 'i' flag is used to perform case-insensitive matching

    // for sorting the data
    const sort = req.query.sort || '';

    // for filtering the data
    const filter = req.query.filter || '';

    // for limiting the data
    // const limit = parseInt(req.query.limit) || 10;
    let limit = Number(req.query?.limit)
    limit = limit > 0 ? limit : Number(process.env?.PAGE_SIZE || 20)
    // for pagination
    const page = parseInt(req.query.page) || 1;

    //why we use parsInt here?
    // because the query is a string and we need to convert it to a number

