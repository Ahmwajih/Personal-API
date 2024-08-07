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

    let page = Number(req.query?.page)
    page = (page > 0 ? page : 1) - 1
    //why we use parsInt here?
    // because the query is a string and we need to convert it to a number
 // SKIP:
 let skip = Number(req.query?.skip)
 skip = skip > 0 ? skip : (page * limit)

    // we use the skip variable to skip the number of documents that we want to skip

        // Details:
        res.getModelListDetails = async function (Model) {
            const data = await Model.find(search)
            let details = {
                search,
                sort,
                skip,
                limit,
                page,
                pages: {
                    previous: (page > 0 ? page : false),
                    current: page + 1,
                    next: page + 2,
                    total: Math.ceil(data.length / limit)
                },
                totalRecords: data.length,
            }
            details.pages.next = (details.pages.next > details.pages.total ? false : details.pages.next)
            if (details.totalRecords <= limit) details.pages = false
            return details
        }
    
        next()

    // we use the next() function to pass the request to the next middleware function in the stack
}
